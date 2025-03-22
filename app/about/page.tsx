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
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://phw1ruho25yy63z9.public.blob.vercel-storage.com/dog-couple-imJZk8WzhtMSF6aGgN4lbUOQasIl47.png"
              alt="Owner with dogs illustration"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              unoptimized={true}
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
                  You record and upload a video showing your dog's natural behaviors - whether relaxing, playing, or
                  interacting with you. Our system captures subtle details from ear positions and facial expressions to
                  posture changes, accepting videos up to 100MB in common formats.
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
                  Our specialized AI analyzes energy states, relationship dynamics, and key behavioral indicators. It
                  detects subtle signals like ear positions and body language to create a complete profile of your dog's
                  emotional state.
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
                  The AI generates a structured report covering energy patterns, relationship dynamics, and behavioral
                  indicators. Each report includes training exercises with implementation steps, timeframes, and success
                  indicators.
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
                  You receive step-by-step training exercises with clear success metrics and common challenges to avoid.
                  Each report includes progress indicators, 'if/then' scenarios, and potential warning signs to monitor.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Our Technology</h3>
            <p className="text-gray-700 mb-4">
              PawSense AI analyzes dog behavior using established principles of canine communication and body language.
            </p>
            <p className="text-gray-700 mb-4">
              Our system examines multiple aspects of behavior including posture, ear positions, engagement cues, and
              interaction patterns to create a comprehensive assessment.
            </p>
            <p className="text-gray-700 mb-4">
              The analysis is based on recognized dog behavior concepts and training approaches that focus on balanced
              energy and clear communication.
            </p>
            <p className="text-gray-700">
              We continuously refine our analysis framework to provide practical, applicable insights that help
              strengthen the bond between dogs and their owners.
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
