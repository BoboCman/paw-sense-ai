"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Upload, X, Play, Pause, AlertCircle } from "lucide-react"

interface DirectVideoUploaderProps {
  email: string
  category: string
  subscribeToTips: boolean
}

export default function DirectVideoUploader({ email, category, subscribeToTips }: DirectVideoUploaderProps) {
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null

    if (!file) {
      setSelectedFile(null)
      setPreviewUrl(null)
      return
    }

    // Validate file type
    const validTypes = ["video/mp4", "video/quicktime", "video/x-msvideo"]
    if (!validTypes.includes(file.type)) {
      setError("Please select a valid video file (MP4, MOV, or AVI)")
      setSelectedFile(null)
      setPreviewUrl(null)
      return
    }

    // Validate file size (100MB max)
    if (file.size > 100 * 1024 * 1024) {
      setError("File size exceeds 100MB limit")
      setSelectedFile(null)
      setPreviewUrl(null)
      return
    }

    setError(null)
    setSelectedFile(file)
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a video file")
      return
    }

    setIsUploading(true)
    setUploadProgress(0)
    setError(null)

    // Create URL with query parameters
    const webhookUrl = new URL(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "")

    // Also add validation to ensure the URL is available
    if (!process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL) {
      console.error("NEXT_PUBLIC_N8N_WEBHOOK_URL environment variable is not set")
      setError("Upload configuration error. Please contact support.")
      return
    }

    webhookUrl.searchParams.append("email", email)
    webhookUrl.searchParams.append("category", category)
    webhookUrl.searchParams.append("subscribeToTips", subscribeToTips.toString())

    // Set up XMLHttpRequest for better control and progress tracking
    const xhr = new XMLHttpRequest()

    // Set up progress tracking
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded / event.total) * 100)
        setUploadProgress(percentComplete)
        console.log(`Upload progress: ${percentComplete}%`)
      }
    }

    // Set up completion handler
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("Upload successful:", xhr.responseText)
        setUploadProgress(100)
        setTimeout(() => {
          setIsUploading(false)
          router.push("/confirmation")
        }, 500)
      } else {
        console.error("Upload failed:", xhr.status, xhr.statusText, xhr.responseText)
        setError(`Upload failed: ${xhr.status} ${xhr.statusText}`)
        setIsUploading(false)
        setUploadProgress(0)
      }
    }

    // Set up error handler
    xhr.onerror = () => {
      console.error("Network error during upload")
      setError("Network error during upload. Please check your connection and try again.")
      setIsUploading(false)
      setUploadProgress(0)
    }

    // Open and send the request
    xhr.open("POST", webhookUrl.toString(), true)
    xhr.setRequestHeader("Content-Type", selectedFile.type)

    console.log("Starting upload to:", webhookUrl.toString())
    console.log("File type:", selectedFile.type)
    console.log("File size:", selectedFile.size, "bytes")

    try {
      xhr.send(selectedFile)
    } catch (err) {
      console.error("Error sending file:", err)
      setError(err instanceof Error ? err.message : "An unexpected error occurred during upload")
      setIsUploading(false)
      setUploadProgress(0)
    }
  }

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {!selectedFile ? (
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-500">MP4, MOV, or AVI (max. 100MB)</p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="video/mp4,video/quicktime,video/x-msvideo"
            className="hidden"
          />
        </div>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <div className="relative">
            <video
              ref={videoRef}
              src={previewUrl || undefined}
              className="w-full h-auto"
              onEnded={() => setIsPlaying(false)}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button variant="outline" size="icon" className="bg-white/80 hover:bg-white" onClick={togglePlayPause}>
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          <div className="p-3 bg-gray-50 flex items-center justify-between">
            <div className="truncate">
              <p className="font-medium truncate">{selectedFile.name}</p>
              <p className="text-xs text-gray-500">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRemoveFile}
              className="text-gray-500 hover:text-red-500"
              disabled={isUploading}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}

      {isUploading && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Uploading...</span>
            <span>{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="h-2" />
        </div>
      )}

      <div className="pt-2">
        <Button
          type="button"
          onClick={handleUpload}
          className="w-full bg-[#27ae60] hover:bg-[#219955]"
          disabled={!selectedFile || isUploading}
        >
          {isUploading ? (
            <span className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
              Uploading...
            </span>
          ) : (
            "Upload Video"
          )}
        </Button>
      </div>
    </div>
  )
}

