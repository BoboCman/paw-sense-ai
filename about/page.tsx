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
          Combining advanced AI technology with canine behavior science to help you better understand and train your
          dog.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At PawSense AI, we believe that understanding is the foundation of a strong human-canine bond. Our mission
              is to make professional-level dog behavior analysis accessible to all dog owners.
            </p>
            <p className="text-gray-700 mb-4">
              By leveraging artificial intelligence, we provide insights that help owners understand their dogs' needs,
              emotions, and behaviors - leading to more effective training and a happier relationship.
            </p>
            <p className="text-gray-700">
              We're committed to promoting positive, force-free training methods that respect your dog's unique
              personality and needs.
            </p>
          </div>
          <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Happy dog with owner"
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
                  You record and upload a video of your dog displaying the behavior you want analyzed. Our system
                  accepts videos up to 100MB in common formats.
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
                  Our advanced neural networks analyze your dog's body language, movements, vocalizations, and
                  contextual cues frame by frame.
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
                  The AI compiles its findings into a comprehensive report with observations, behavioral insights, and
                  tailored recommendations.
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
                  You receive practical, actionable advice that you can immediately incorporate into your training and
                  interaction with your dog.
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
              Our system can identify over 50 distinct dog behaviors and body language signals, from subtle ear
              positions to complex play sequences.
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
                Gain insights into your dog's communication style, emotional state, and behavioral patterns that might
                not be obvious to the untrained eye.
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

