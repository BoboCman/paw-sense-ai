import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, PawPrint, FileText, Zap, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About PawSense AI</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Combining advanced AI technology with professional canine behavior science to decode your dog's natural
          communication, helping you become the confident pack leader your dog needs.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At PawSense AI, we believe that understanding your dog's energy and natural instincts is the foundation of
              a strong human-canine bond. Our mission is to make professional-level dog behavior analysis accessible to
              all dog owners, helping you establish calm leadership and clear boundaries.
            </p>
            <p className="text-gray-700 mb-4">
              By leveraging artificial intelligence, we provide insights that help you read your dog's energy state,
              body language, and pack instincts - leading to more balanced training and a harmonious relationship based
              on mutual respect and clear communication.
            </p>
            <p className="text-gray-700">
              We're committed to promoting balanced training methods that address your dog's primal needs for exercise,
              discipline, and affection—in that exact order—while respecting their unique personality and natural
              instincts.
            </p>
          </div>
          <div className="relative h-64 md:h-auto rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://phw1ruho25yy63z9.public.blob.vercel-storage.com/dog-couple-imJZk8WzhtMSF6aGgN4lbUOQasIl47.png"
              alt="Owner with dogs illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16 bg-[#f5f0e1] py-12 px-4 md:px-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-8 text-center">How PawSense AI Works</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#2980b9] rounded-full flex items-center justify-center flex-shrink-0">
                <PawPrint className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Video Capture</h3>
                <p className="text-gray-700">
                  You record and upload a video showing your dog's energy state and behavior patterns. Our system
                  analyzes everything from ear position to tail carriage, accepting videos up to 100MB in common
                  formats.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#2980b9] rounded-full flex items-center justify-center flex-shrink-0">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
                <p className="text-gray-700">
                  Our specialized AI analyzes your dog's energy states, body language, posture changes, and subtle
                  communication signals frame by frame, identifying patterns that reveal their mental state.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#2980b9] rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Report Generation</h3>
                <p className="text-gray-700">
                  The AI generates a comprehensive analysis with energy state assessment, relationship dynamics, key
                  behavioral indicators, and structured training exercises you can implement immediately.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#2980b9] rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-gray-700">
                  You receive authoritative, practical exercises that address your dog's specific needs, helping you
                  establish clear boundaries and project the calm-assertive energy your dog responds to.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Our Technology</h3>
            <p className="text-gray-700 mb-4">
              PawSense AI uses a combination of computer vision and machine learning models specifically trained on
              canine behavior patterns.
            </p>
            <p className="text-gray-700 mb-4">
              Our system can identify over 50 distinct canine behaviors and communication signals, from subtle calming
              signals to pack hierarchy indicators, ears positions to tail carriage patterns.
            </p>
            <p className="text-gray-700 mb-4">
              The AI has been trained on thousands of hours of dog video footage, reviewed and annotated by professional
              dog trainers and animal behaviorists.
            </p>
            <p className="text-gray-700">
              We continuously improve our models based on new research in canine cognition and behavior science.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Benefits of Using PawSense AI</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Deeper Understanding</h3>
              <p className="text-gray-700">
                Decode your dog's natural communication style, energy states, and instinctual behaviors that reveal
                exactly what they need from you as their pack leader.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Personalized Training</h3>
              <p className="text-gray-700">
                Receive customized training recommendations based on your dog's specific behavior, temperament, and
                learning style.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Problem Prevention</h3>
              <p className="text-gray-700">
                Identify early warning signs of potential behavioral issues before they develop into more serious
                problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-r from-[#2980b9] to-[#3498db] text-white py-12 px-4 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to better understand your dog?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Upload a video today and receive detailed insights that will strengthen your bond with your canine companion.
        </p>
        <Link href="/upload">
          <Button size="lg" className="bg-[#27ae60] hover:bg-[#219955] text-white">
            Upload Your Video <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>
    </div>
  )
}
