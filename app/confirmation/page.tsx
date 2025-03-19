import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Mail, ArrowRight } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 bg-[#27ae60] rounded-full flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-2">Video Successfully Uploaded!</h1>
      <p className="text-xl text-gray-600 mb-8">
        Thank you for taking this important step toward understanding your dog's natural behavior
      </p>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-[#2980b9] mt-1" />
              <div className="text-left">
                <h3 className="font-semibold text-lg">Check Your Email</h3>
                <p className="text-gray-600">
                  We'll send your comprehensive behavior analysis with customized training exercises to the email
                  address you provided.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-[#2980b9] mt-1" />
              <div className="text-left">
                <h3 className="font-semibold text-lg">Processing Time</h3>
                <p className="text-gray-600">
                  Your analysis will be ready in approximately 15 minutes. Complex behaviors may take a bit longer.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Link href="/upload">
          <Button variant="outline" className="mr-4">
            Submit Another Video
          </Button>
        </Link>

        <Link href="/">
          <Button>Return to Homepage</Button>
        </Link>
      </div>

      <div className="mt-16 p-6 bg-gray-50 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">What Happens Next?</h2>
        <ol className="text-left space-y-4">
          <li className="flex gap-3">
            <div className="w-6 h-6 bg-[#3498db] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm font-bold">1</span>
            </div>
            <div>
              <p className="font-medium">Our AI analyzes your video</p>
              <p className="text-sm text-gray-600">
                PawSense AI examines your dog's energy states, body language signals, posture transitions, and pack
                communication patterns.
              </p>
            </div>
          </li>

          <li className="flex gap-3">
            <div className="w-6 h-6 bg-[#3498db] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <div>
              <p className="font-medium">We generate personalized insights</p>
              <p className="text-sm text-gray-600">
                Based on the analysis, we create a detailed report with energy state assessment, relationship dynamics,
                and specific training exercises tailored to your dog's needs.
              </p>
            </div>
          </li>

          <li className="flex gap-3">
            <div className="w-6 h-6 bg-[#3498db] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm font-bold">3</span>
            </div>
            <div>
              <p className="font-medium">You receive your report by email</p>
              <p className="text-sm text-gray-600">
                The complete analysis is delivered to your inbox, ready for you to review and implement.
              </p>
            </div>
          </li>
        </ol>

        <div className="mt-6 text-center">
          <Link href="/about">
            <Button variant="link" className="text-[#2980b9]">
              Learn more about our analysis process <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

