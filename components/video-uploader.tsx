"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X, Play, Pause } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface VideoUploaderProps {
  onFileSelect: (file: File | null) => void
}

export default function VideoUploader({ onFileSelect }: VideoUploaderProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null

    if (!file) {
      setSelectedFile(null)
      setPreviewUrl(null)
      onFileSelect(null)
      return
    }

    // Validate file type
    const validTypes = ["video/mp4", "video/quicktime", "video/x-msvideo"]
    if (!validTypes.includes(file.type)) {
      setError("Please select a valid video file (MP4, MOV, or AVI)")
      setSelectedFile(null)
      setPreviewUrl(null)
      onFileSelect(null)
      return
    }

    // Validate file size (100MB max)
    if (file.size > 100 * 1024 * 1024) {
      setError("File size exceeds 100MB limit")
      setSelectedFile(null)
      setPreviewUrl(null)
      onFileSelect(null)
      return
    }

    setError(null)
    setSelectedFile(file)
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
    onFileSelect(file)
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
    onFileSelect(null)
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

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
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
            <Button variant="ghost" size="icon" onClick={handleRemoveFile} className="text-gray-500 hover:text-red-500">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

