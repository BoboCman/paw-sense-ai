import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
  image: string
}

export default function TestimonialCard({ name, location, quote, image }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <Quote className="h-6 w-6 text-[#3498db] mb-4" />
        <p className="text-gray-700 mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-600">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

