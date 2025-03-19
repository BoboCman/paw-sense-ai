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
import { CheckCircle, Info } from "lucide-react"
import DirectVideoUploader from "@/components/direct-video-uploader" // Import the new component

export default function UploadPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [category, setCategory] = useState("play")
  const [subscribeToTips, setSubscribeToTips] = useState(false)
  const [emailError, setEmailError] = useState<string | null>(null)
  const [showUploader, setShowUploader] = useState(false)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setEmailError(null)
  }

  const validateEmail = () => {
    if (!email) {
      setEmailError("Please enter your email address")
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address")
      return false
    }

    return true
  }

  const handleContinue = () => {
    if (validateEmail()) {
      setShowUploader(true)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-2">Upload Your Dog's Video</h1>
      <p className="text-center text-gray-600 mb-8">
        Our AI will analyze your dog's energy state, body language, and natural instincts to provide authoritative
        training guidance
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Video Upload Form</CardTitle>
          <CardDescription>
            Take the first step toward becoming your dog's confident pack leader by submitting your video below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {emailError && (
              <Alert variant="destructive">
                <AlertDescription>{emailError}</AlertDescription>
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
                  <Label htmlFor="play">Play behavior & energy states</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dog-interaction" id="dog-interaction" />
                  <Label htmlFor="dog-interaction">Dog-to-dog pack dynamics</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="commands" id="commands" />
                  <Label htmlFor="commands">Response to leadership & boundaries</Label>
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

            {!showUploader ? (
              <div className="pt-2">
                <Button type="button" onClick={handleContinue} className="w-full bg-[#27ae60] hover:bg-[#219955]">
                  Continue to Upload
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <Label>Upload Video</Label>
                <DirectVideoUploader email={email} category={category} subscribeToTips={subscribeToTips} />
                <div className="flex items-start gap-2 mt-2 text-sm text-gray-600">
                  <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <p>
                    For best results, ensure good lighting and capture your dog's full body language including ear
                    position, tail carriage, and posture changes. Maximum file size: 100MB.
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex gap-3">
          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-blue-800">Energy & Behavior Recording Tips</h3>
            <ul className="mt-2 space-y-1 text-sm text-blue-700">
              <li>• Record in a well-lit area where your dog's natural energy state is visible</li>
              <li>• Capture 1-3 minutes showing transitions between energy states and behaviors</li>
              <li>• Try to record at dog-level height when possible</li>
              <li>• Include environmental context that might influence your dog's energy and response</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

