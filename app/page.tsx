import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import TestimonialCard from "@/components/testimonial-card"
import { ArrowRight, CheckCircle, PawPrint } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2980b9] to-[#3498db] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <PawPrint className="h-6 w-6" />
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">PawSense AI</h1>
              </div>
              <p className="text-xl md:text-2xl font-light">Intelligent analysis for balanced dog training</p>
              <p className="text-lg md:text-xl opacity-90 max-w-xl">
                Upload videos of your dog's behavior and receive detailed AI-powered insights to better understand and
                train your furry companion.
              </p>
              <div className="pt-4">
                <Link href="/upload">
                  <Button size="lg" className="bg-[#27ae60] hover:bg-[#219955] text-white">
                    Upload Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 mt-8 md:mt-0">
              <div className="relative w-full max-w-md mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dog being analyzed by AI"
                  width={600}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[#f5f0e1]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How PawSense AI Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#3498db] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Your Video</h3>
              <p className="text-gray-600">Record your dog's behavior and upload it through our simple form.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#3498db] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">Our advanced AI analyzes the video for behavioral patterns and cues.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#3498db] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Receive Insights</h3>
              <p className="text-gray-600">Get a detailed report with actionable training recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Analysis */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Sample Analysis Report</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Here's an example of the detailed analysis you'll receive after uploading your dog's video.
          </p>

          <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
            <div className="bg-[#2980b9] text-white p-4">
              <h3 className="text-xl font-semibold">Behavior Analysis Report</h3>
              <p className="text-sm opacity-90">Sample: Golden Retriever, 2 years old, Play Behavior</p>
            </div>

            <div className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">Key Observations</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#27ae60] mt-0.5 flex-shrink-0" />
                        <span>Displays high energy play style with frequent bouncing and play bows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#27ae60] mt-0.5 flex-shrink-0" />
                        <span>Gentle mouth pressure during toy play - good bite inhibition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#27ae60] mt-0.5 flex-shrink-0" />
                        <span>Occasional pausing to check in with owner - good social referencing</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Behavioral Insights</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Your dog shows a balanced play style with appropriate energy levels for the breed and age. The
                      frequent play bows indicate a healthy social communication style and desire to engage.
                    </p>
                    <p>
                      The periodic check-ins with you during play demonstrate a good attachment bond and awareness of
                      your presence as a source of security.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">Recommendations</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3">
                      <li className="pb-3 border-b border-gray-100">
                        <h4 className="font-medium text-[#2980b9]">Continue Varied Play Sessions</h4>
                        <p className="text-gray-600 mt-1">
                          Your dog benefits from the diverse play styles observed. Continue offering both fetch and tug
                          games to provide physical and mental stimulation.
                        </p>
                      </li>
                      <li className="pb-3 border-b border-gray-100">
                        <h4 className="font-medium text-[#2980b9]">Introduce Impulse Control Games</h4>
                        <p className="text-gray-600 mt-1">
                          To balance the high energy, incorporate more "wait" and "stay" commands during play to build
                          impulse control.
                        </p>
                      </li>
                      <li>
                        <h4 className="font-medium text-[#2980b9]">Socialization Opportunities</h4>
                        <p className="text-gray-600 mt-1">
                          The play style observed would translate well to dog-dog interactions. Consider supervised play
                          dates with compatible dogs.
                        </p>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/upload">
              <Button className="bg-[#2980b9] hover:bg-[#3498db]">
                Get Your Analysis <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Dog Owners Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Sarah M."
              location="Boston, MA"
              quote="PawSense AI helped me understand why my rescue dog was having trouble with certain commands. The personalized training tips made a huge difference!"
              image="/placeholder.svg?height=100&width=100"
            />

            <TestimonialCard
              name="James T."
              location="Portland, OR"
              quote="As a first-time dog owner, I was struggling to read my puppy's body language. The analysis gave me insights I never would have noticed on my own."
              image="/placeholder.svg?height=100&width=100"
            />

            <TestimonialCard
              name="Aisha K."
              location="Austin, TX"
              quote="My trainer recommended PawSense AI to help with my dog's reactivity issues. The detailed breakdown of triggers and body language cues was eye-opening."
              image="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#27ae60] text-white py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to better understand your dog?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Upload a video today and receive detailed insights within 15 minutes.
          </p>
          <Link href="/upload">
            <Button size="lg" variant="outline" className="bg-white text-[#27ae60] hover:bg-gray-100 border-white">
              Upload Your Video Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

