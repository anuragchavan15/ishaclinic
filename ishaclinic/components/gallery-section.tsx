"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const galleryItems = [
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.20.04%20AM-JCubg2d2wSvQUsatoGrgBV44bmqc7o.jpeg",
      alt: "Suwarnprashan ceremony with Dr. Priyanka administering golden drops to baby",
      title: "Suwarnprashan for Infants",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.01.43%20AM-x5oQT7Ws6Ax6cQ3pjVVrowaC5Au29X.jpeg",
      alt: "Medical consultation and treatment session in clinic",
      title: "Patient Consultation",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.20.04%20AM%20%281%29-rdF2rj31oqXsm0X1YnNTcPWU7WHwnV.jpeg",
      alt: "Dr. Priyanka giving Suwarnprashan to young girl",
      title: "Pediatric Suwarnprashan Care",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.10.20%20AM%20%281%29-OcfCSAeo3VThE7ya749sXtXSXTqX3Q.jpeg",
      alt: "Community health camp with outdoor medical services",
      title: "Community Health Camp",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.10.20%20AM-JRjA6rs8Tug9xYK9ZvAgdd7BPOGTWY.jpeg",
      alt: "Outdoor health consultation and community outreach",
      title: "Community Outreach Program",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.02.11%20AM-uRijqFH4HhIyeghTStHESy2BBhVdhL.jpeg",
      alt: "Busy clinic interior with patients receiving care",
      title: "Active Patient Care",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.01.52%20AM-1MrLagWN5MWxo0xdEwzdQSzPVd6PAo.jpeg",
      alt: "Outdoor consultation setup with Dr. Priyanka",
      title: "Mobile Clinic Services",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.02.06%20AM-pjXjAkjYLRI7aLrsHVjRcrqpiW0Qph.jpeg",
      alt: "Dr. Priyanka receiving recognition at clinic event",
      title: "Community Recognition",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.01.47%20AM-Cl9smcUT29v9NZWNepfqIU3iAuH3wU.jpeg",
      alt: "Clinic waiting area full of patients",
      title: "Trusted Healthcare Provider",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.10.19%20AM-rXKUBsTxuEEjV7OmDccD1KzombO3Uu.jpeg",
      alt: "Close-up of Suwarnprashan administration to child",
      title: "Gentle Pediatric Care",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.20.04%20AM%20%282%29-2ul9vyOtab7mVW6m5Y3tXwn0XUcLhn.jpeg",
      alt: "Outdoor health camp with Dr. Priyanka consulting patients",
      title: "Community Health Services",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.53.36%20AM%20%281%29-2aBsFF19oeYlJL0AuNWTv8gWwjYsbh.jpeg",
      alt: "Clinic interior showing medical supplies and service information",
      title: "Well-Equipped Medical Facility",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.53.38%20AM-oz46zKYQ5nTApneHViQ3JDwiixg7HR.jpeg",
      alt: "Consultation room with traditional spiritual elements",
      title: "Holistic Treatment Environment",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.53.37%20AM%20%282%29-PgOLDymWvRh5Lz4DYQt128mQM0KJcA.jpeg",
      alt: "Isha Clinic exterior signage with doctor credentials and timings",
      title: "Professional Clinic Entrance",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.53.37%20AM%20%281%29-T5Sgo2DYB1iC24q5UVlarZfHCYz5B8.jpeg",
      alt: "Modern clinic interior with organized medicine storage",
      title: "Clean and Organized Facility",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.53.37%20AM-rOhf2MUDcQrdG4hrNaggAeq5bOWaXl.jpeg",
      alt: "Treatment area with privacy curtains and medical equipment",
      title: "Private Treatment Spaces",
    },
    {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-24%20at%206.53.36%20AM-JxlVKRmZzXZ2EzqiiemW01uLCuJwJC.jpeg",
      alt: "Ayurvedic medicine dispensary with comprehensive stock",
      title: "Complete Ayurvedic Pharmacy",
    },
    {
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-08-24%20at%206.20.07%20AM-rxLEsWjHP3WbsknCgVbnYGfIfGKjkF.mp4",
      alt: "Clinic video showcasing services and facilities",
      title: "Clinic Overview Video",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">Our Clinic Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour of our serene and welcoming clinic environment designed for your comfort and healing.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-[16/10] bg-muted rounded-lg overflow-hidden shadow-lg">
            {galleryItems[currentSlide].type === "video" ? (
              <video
                src={galleryItems[currentSlide].src}
                className="w-full h-full object-contain"
                controls
                muted
                playsInline
              />
            ) : (
              <img
                src={galleryItems[currentSlide].src || "/placeholder.svg"}
                alt={galleryItems[currentSlide].alt}
                className="w-full h-full object-contain"
              />
            )}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/90 backdrop-blur-sm shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/90 backdrop-blur-sm shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="mt-6 text-center">
            <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
              {galleryItems[currentSlide].title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {currentSlide + 1} of {galleryItems.length}
            </p>

            <div className="flex justify-center space-x-2">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
