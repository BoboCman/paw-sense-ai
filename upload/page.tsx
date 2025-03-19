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

export default function UploadPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [category, setCategory] = useState("play")
  const [subscribeToTips, setSubscribeToTips] = useState(false)
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [apiError, setApiError] = useState<string | null>(null)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (error) setError(null)
  }

  const handleVideoSelect = (file: File | null) => {
    setVideoFile(file)
    if (error) setError(null)
  }

  const validateForm = () => {
    if (!email) {
      setError("Please enter your email address")
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return false
    }

    if (!videoFile) {
      setError("Please select a video to upload")
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    // Start upload process
    setIsUploading(true)
    setError(null)
    setApiError(null)

    // Create a progress simulation
    const uploadInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(uploadInterval)
          return 90
        }
        return prev + 10
      })
    }, 300)

    try {
      // Create form data to send to n8n
      const formData = new FormData()
      formData.append("email", email)
      formData.append("category", category)
      formData.append("subscribeToTips", subscribeToTips.toString())
      if (videoFile) {
        formData.append("video", videoFile)
      }

      // Use the specific n8n webhook URL
      const webhookUrl = "https://financialplanner-ai.app.n8n.cloud/webhook/upload-cfp"

      console.log("Submitting to webhook:", webhookUrl)

      // Send data to n8n webhook
      const response = await fetch(webhookUrl, {
        method: "POST",
        body: formData,
        // Don't set Content-Type header - it will be automatically set with the boundary for FormData
      })

      console.log("Response status:", response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("Error response:", errorText)
        throw new Error(`Failed to submit form: ${response.status} ${errorText}`)
      }

      // Complete the progress bar
      setUploadProgress(100)

      // Clear the interval and redirect to confirmation page
      clearInterval(uploadInterval)
      setTimeout(() => {
        setIsUploading(false)
        router.push("/confirmation")
      }, 500)
    } catch (err) {
      console.error("Error submitting form:", err)
      setApiError(err instanceof Error ? err.message : "An unexpected error occurred during upload")
      setIsUploading(false)
      setUploadProgress(0)
      clearInterval(uploadInterval)
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
            {(error || apiError) && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {error || apiError}
                  {apiError && (
                    <Button
                      variant="link"
                      className="p-0 h-auto text-xs text-white underline ml-2"
                      onClick={() => console.log("Check console for detailed error information")}
                    >
                      See console for details
                    </Button>
                  )}
                </AlertDescription>
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

            {isUploading && (
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
              <Button type="submit" className="w-full bg-[#27ae60] hover:bg-[#219955]" disabled={isUploading}>
                {isUploading ? "Uploading..." : "Submit Video for Analysis"}
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

