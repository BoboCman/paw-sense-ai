"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import VideoUploader from "@/components/video-uploader"
import { AlertCircle, CheckCircle, Info } from "lucide-react"

interface UploadStatus {
  state: "idle" | "uploading" | "success" | "error"
  message?: string
}

export default function UploadPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [category, setCategory] = useState("play")
  const [subscribeToTips, setSubscribeToTips] = useState(false)
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>({ state: "idle" })

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (uploadStatus.state === "error") setUploadStatus({ state: "idle" })
  }

  const handleVideoSelect = (file: File | null) => {
    setVideoFile(file)
    if (uploadStatus.state === "error") setUploadStatus({ state: "idle" })
  }

  const validateForm = () => {
    if (!email) {
      setUploadStatus({ state: "error", message: "Please enter your email address" })
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setUploadStatus({ state: "error", message: "Please enter a valid email address" })
      return false
    }

    if (!videoFile) {
      setUploadStatus({ state: "error", message: "Please select a video to upload" })
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    // Start upload process
    setUploadStatus({ state: "uploading" })
    setUploadProgress(0)

    // Set up progress simulation
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return 90
        }
        return prev + 5
      })
    }, 500)

    // Create form data
    const formData = new FormData()
    formData.append("email", email)
    formData.append("category", category)
    formData.append("subscribeToTips", subscribeToTips.toString())
    if (videoFile) {
      formData.append("file", videoFile) // Use 'file' as the key, matching what the API expects
    }

    // Set up timeout for the request
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 60000) // 60 second timeout

    try {
      // Send to our API route
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)
      clearInterval(progressInterval)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to upload video")
      }

      // Complete the progress bar
      setUploadProgress(100)
      setUploadStatus({ state: "success" })

      // Redirect to confirmation page
      setTimeout(() => {
        router.push("/confirmation")
      }, 500)
    } catch (err) {
      clearTimeout(timeoutId)
      clearInterval(progressInterval)

      console.error("Error uploading video:", err)

      if (err instanceof Error && err.name === "AbortError") {
        setUploadStatus({
          state: "error",
          message: "Upload timed out. The video may be too large or the connection is slow.",
        })
      } else {
        setUploadStatus({
          state: "error",
          message: err instanceof Error ? err.message : "An unexpected error occurred during upload",
        })
      }

      setUploadProgress(0)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-2">Upload Your Dog's Video</h1>
      <p className="text-center text-gray-600 mb-8">
        Our AI will analyze your dog's behavior and provide personalized insights
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Video Upload Form</CardTitle>
          <CardDescription>Please fill out the form below to submit your dog's video for analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {uploadStatus.state === "error" && uploadStatus.message && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{uploadStatus.message}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <p className="text-xs text-gray-500">We'll send your analysis report to this email address</p>
            </div>

            <div className="space-y-3">
              <Label>Behavior Category to Analyze</Label>
              <RadioGroup value={category} onValueChange={setCategory}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="play" id="play" />
                  <Label htmlFor="play">Play behavior</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dog-interaction" id="dog-interaction" />
                  <Label htmlFor="dog-interaction">Dog-to-dog interaction</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="commands" id="commands" />
                  <Label htmlFor="commands">Response to commands</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="home" id="home" />
                  <Label htmlFor="home">Home behavior</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="concerning" id="concerning" />
                  <Label htmlFor="concerning">Concerning behavior</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Upload Video</Label>
              <VideoUploader onFileSelect={handleVideoSelect} />
              <div className="flex items-start gap-2 mt-2 text-sm text-gray-600">
                <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>
                  For best results, ensure good lighting and that your dog is clearly visible in the frame. Maximum file
                  size: 100MB.
                </p>
              </div>
            </div>

            {uploadStatus.state === "uploading" && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}

            <div className="flex items-start space-x-2 pt-2">
              <Checkbox
                id="subscribe"
                checked={subscribeToTips}
                onCheckedChange={(checked) => setSubscribeToTips(checked as boolean)}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="subscribe" className="text-sm font-normal">
                  Send me weekly dog training tips and advice
                </Label>
                <p className="text-xs text-gray-500">You can unsubscribe at any time. We respect your privacy.</p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-[#27ae60] hover:bg-[#219955]"
                disabled={uploadStatus.state === "uploading"}
              >
                {uploadStatus.state === "uploading" ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    Uploading...
                  </span>
                ) : (
                  "Submit Video for Analysis"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex gap-3">
          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-blue-800">Recording Tips</h3>
            <ul className="mt-2 space-y-1 text-sm text-blue-700">
              <li>• Record in a well-lit area with minimal background noise</li>
              <li>• Capture 1-3 minutes of the specific behavior you want analyzed</li>
              <li>• Try to record at dog-level height when possible</li>
              <li>• Include context (toys, other dogs, environment) in the frame</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

