"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

// This component handles direct upload to n8n, bypassing the Next.js API
export default function DirectVideoUploader({ 
  email, 
  category, 
  subscribeToTips 
}: { 
  email: string; 
  category: string; 
  subscribeToTips: boolean;
}) {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setError(null)
    }
  }

  const uploadDirectly = async () => {
    if (!file) {
      setError("Please select a video file")
      return
    }

    setIsUploading(true)
    setUploadProgress(0)
    setError(null)
    setSuccess(false)

    // Create progress simulation
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return 90
        }
        return prev + 5
      })
    }, 500)

    try {
      // Build the URL with query parameters
      const url = new URL("https://financialplanner-ai.app.n8n.cloud/webhook/upload-cfp")
      url.searchParams.append("email", email)
      url.searchParams.append("category", category)
      url.searchParams.append("subscribeToTips", subscribeToTips.toString())

      // Read the file as an ArrayBuffer
      const arrayBuffer = await file.arrayBuffer()
      
      // Upload directly to n8n webhook
      const response = await fetch(url.toString(), {
        method: "POST",
        headers: {
          "Content-Type": file.type || "video/mp4",
        },
        body: new Uint8Array(arrayBuffer), // Send as Uint8Array
      })

      clearInterval(progressInterval)

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Upload failed: ${response.status} ${response.statusText} - ${errorText}`)
      }

      setUploadProgress(100)
      setSuccess(true)
      console.log("Upload successful")
    } catch (err) {
      clearInterval(progressInterval)
      console.error("Upload error:", err)
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
      setUploadProgress(0)
    } finally {
      setIsUploading(false)
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
      
      {success && (
        <Alert className="bg-green-50 border-green-200 text-green-800">
          <AlertDescription>Video uploaded successfully!</AlertDescription>
        </Alert>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="video-file">Select Video File</Label>
        <input
          id="video-file"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          disabled={isUploading}
          className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-gray-100 file:text-gray-700
                    hover:file:bg-gray-200"
        />
        {file && <p className="text-sm text-gray-500">Selected: {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)</p>}
      </div>
      
      {isUploading && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Uploading...</span>
            <span>{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="h-2" />
        </div>
      )}
      
      <Button
        type="button"
        onClick={uploadDirectly}
        disabled={!file || isUploading}
        className="w-full bg-[#27ae60] hover:bg-[#219955]"
      >
        {isUploading ? (
          <span className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            Uploading...
          </span>
        ) : (
          "Upload Video Directly"
        )}
      </Button>
    </div>
  )
}
