"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function DirectVideoUploader({ 
  email, 
  category
}: { 
  email: string; 
  category: string;
}) {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Function to get category description and explanatory text
  const getCategoryInfo = (categoryValue: string): { title: string; description: string } => {
    const categoryMap: Record<string, { title: string; description: string }> = {
      "play": {
        title: "Play behavior & energy states",
        description: "Videos showing how your dog's energy changes during play with toys, people, or other dogs."
      },
      "dog-interaction": {
        title: "Dog-to-dog pack dynamics",
        description: "Interactions between your dog and other dogs showing communication patterns and social relationships."
      },
      "commands": {
        title: "Response to leadership & boundaries",
        description: "How your dog responds to commands, training, or when you establish rules and boundaries."
      },
      "home": {
        title: "Home behavior",
        description: "Everyday behaviors around the house including relaxation patterns and routines."
      },
      "concerning": {
        title: "Concerning behavior",
        description: "Behaviors that worry you, such as excessive barking, anxiety, or negative reactions to specific triggers."
      }
    };
    
    return categoryMap[categoryValue] || { 
      title: categoryValue, 
      description: "No description available" 
    };
  }

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

    if (!process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL) {
      setError("Configuration error: Webhook URL not defined")
      return
    }

    setIsUploading(true)
    setUploadProgress(0)
    setError(null)

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
      const url = new URL(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL)
      const categoryInfo = getCategoryInfo(category);
      
      url.searchParams.append("email", email)
      url.searchParams.append("category", category)
      url.searchParams.append("categoryTitle", categoryInfo.title)
      url.searchParams.append("categoryDescription", categoryInfo.description)

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

  const resetUploader = () => {
    setFile(null)
    setSuccess(false)
    setError(null)
    setUploadProgress(0)
  }

  // If upload was successful, show success message and option to upload another
  if (success) {
    return (
      <div className="space-y-4">
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <AlertDescription className="text-green-800 font-medium">
            Video uploaded successfully!
          </AlertDescription>
        </Alert>
        <p className="text-sm text-gray-600">
          Your video is now being processed. We'll send the analysis report to your email once it's ready.
        </p>
        <Button
          type="button"
          onClick={resetUploader}
          className="w-full bg-blue-500 hover:bg-blue-600"
        >
          Upload Another Video
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
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
