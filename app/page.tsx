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
              <div className="relative w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eBeP9EnLg2AT2n3Q5DywyYRtVVeYBI.png"
                  alt="Dog behavior illustration showing a dog on furniture"
                  width={600}
                  height={400}
                  className="w-full h-auto"
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Comprehensive Behavior Analysis</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Each PawSense AI report delivers deep insights into your dog's natural behavior patterns through six
            essential areas of analysis:
          </p>

          <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
            <div className="bg-[#2980b9] text-white p-4">
              <h3 className="text-xl font-semibold">Behavior Analysis Report</h3>
              <p className="text-sm opacity-90">Sample: Golden Retriever, 2 years old, Play Behavior</p>
            </div>

            <div className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">Overview</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      A clear assessment of your dog's overall behavioral state and social dynamics, establishing the
                      foundation for understanding their needs.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#27ae60] mt-0.5 flex-shrink-0" />
                        <span>Displays balanced energy with good social awareness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#27ae60] mt-0.5 flex-shrink-0" />
                        <span>Shows appropriate play style with clear communication signals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#27ae60] mt-0.5 flex-shrink-0" />
                        <span>Demonstrates healthy relationship dynamics with owner</span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Energy State Analysis</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Detailed evaluation of your dog's energy levels, from active-excited to calm-surrender states,
                      with specific indicators of their emotional balance.
                    </p>
                    <ul className="space-y-3">
                      <li className="pb-3 border-b border-gray-100">
                        <h4 className="font-medium text-[#2980b9]">Identification of energy transitions</h4>
                        <p className="text-gray-600 mt-1">
                          Your dog shows smooth transitions between play and rest states, indicating good emotional
                          regulation.
                        </p>
                      </li>
                      <li className="pb-3 border-b border-gray-100">
                        <h4 className="font-medium text-[#2980b9]">Relaxation vs. arousal patterns</h4>
                        <p className="text-gray-600 mt-1">
                          Demonstrates appropriate arousal during play with periodic self-regulation through brief
                          pauses.
                        </p>
                      </li>
                      <li>
                        <h4 className="font-medium text-[#2980b9]">Environmental energy responses</h4>
                        <p className="text-gray-600 mt-1">
                          Shows appropriate energy adjustment based on environmental context and owner cues.
                        </p>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">Relationship Dynamics</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Analysis of how your dog relates to other animals, humans, and their environment, revealing their
                      social communication style.
                    </p>
                    <ul className="space-y-3">
                      <li className="pb-3 border-b border-gray-100">
                        <h4 className="font-medium text-[#2980b9]">Social confidence indicators</h4>
                        <p className="text-gray-600 mt-1">
                          Your dog displays healthy confidence without dominance issues, showing appropriate social
                          engagement.
                        </p>
                      </li>
                      <li className="pb-3 border-b border-gray-100">
                        <h4 className="font-medium text-[#2980b9]">Leadership/follower tendencies</h4>
                        <p className="text-gray-600 mt-1">
                          Demonstrates good follower behavior with periodic check-ins, indicating recognition of your
                          leadership position.
                        </p>
                      </li>
                      <li>
                        <h4 className="font-medium text-[#2980b9]">Resource-sharing behavior</h4>
                        <p className="text-gray-600 mt-1">
                          Shows healthy toy-sharing behavior without resource guarding, indicating balanced pack
                          dynamics.
                        </p>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">Key Behavioral Indicators</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Specific behaviors that reveal your dog's psychological state and needs, identifying patterns that
                      may not be obvious to the untrained eye.
                    </p>
                    <ul className="space-y-3">
                      <li className="pb-3 border-b border-gray-100">
                        <h4 className="font-medium text-[#2980b9]">Body language interpretation</h4>
                        <p className="text-gray-600 mt-1">
                          Relaxed ear position and fluid tail movement indicate comfort and engagement during play.
                        </p>
                      </li>
                      <li className="pb-3 border-b border-gray-100">
                        <h4 className="font-medium text-[#2980b9]">Stress signal assessment</h4>
                        <p className="text-gray-600 mt-1">
                          Minimal stress signals observed, with appropriate calming signals during high-energy play.
                        </p>
                      </li>
                      <li>
                        <h4 className="font-medium text-[#2980b9]">Conflict resolution style</h4>
                        <p className="text-gray-600 mt-1">
                          Uses appropriate disengagement and redirection when play intensity increases.
                        </p>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium">Training Approach Recommendations</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Customized exercises designed specifically for your dog's needs, with practical implementation
                      steps:
                    </p>
                    <ul className="space-y-3">
                      <li className="pb-3 border-b border-gray-100">
                        <h4 className="font-medium text-[#2980b9]">Structured Play Sessions</h4>
                        <p className="text-gray-600 mt-1">
                          <strong>Implementation:</strong> Begin and end play with clear signals, incorporate 30-second
                          pauses every 2-3 minutes.
                        </p>
                        <p className="text-gray-600 mt-1">
                          <strong>Success indicators:</strong> Dog looks to you for play initiation and respects pause
                          signals.
                        </p>
                        <p className="text-gray-600 mt-1">
                          <strong>Common mistakes:</strong> Inconsistent boundaries or allowing play to escalate without
                          structure.
                        </p>
                      </li>
                      <li>
                        <h4 className="font-medium text-[#2980b9]">Impulse Control Exercise</h4>
                        <p className="text-gray-600 mt-1">
                          <strong>Implementation:</strong> Practice "wait" commands before access to toys, food, or
                          attention.
                        </p>
                        <p className="text-gray-600 mt-1">
                          <strong>Success indicators:</strong> Calm waiting behavior without whining or jumping.
                        </p>
                        <p className="text-gray-600 mt-1">
                          <strong>Common mistakes:</strong> Rewarding too quickly or inconsistent enforcement of waiting
                          period.
                        </p>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg font-medium">Key Training Principle</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      A fundamental insight about your dog's specific needs, delivered as a memorable principle you can
                      apply consistently in your interactions.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <p className="text-[#2980b9] font-medium">
                        "Structure before freedom creates confidence and calm. Your dog thrives when clear boundaries
                        precede play and exploration."
                      </p>
                    </div>
                    <p className="mt-4 text-gray-600">
                      Our analysis provides the roadmap to creating harmony between you and your dog through
                      understanding their natural communication.
                    </p>
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
            Upload a video today and receive detailed insights to your inbox within minutes.
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

