"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const galleryItems = [
    {
      type: "image",
      src: "/placeholder-zottr.png",
      alt: "Clinic Reception Area",
      title: "Welcome to Our Clinic",
    },
    {
      type: "image",
      src: "/prenatal-ayurvedic-room.png",
      alt: "Prenatal Consultation Room",
      title: "Prenatal Care Room",
    },
    {
      type: "image",
      src: "/garbhasanskar-meditation.png",
      alt: "Garbhasanskar Session",
      title: "Garbhasanskar Program",
    },
    {
      type: "image",
      src: "/placeholder-0gt0u.png",
      alt: "Treatment Room",
      title: "Ayurvedic Treatment Room",
    },
    {
      type: "image",
      src: "/suwarnprashan-ceremony.png",
      alt: "Suwarnprashan Ceremony",
      title: "Suwarnprashan for Kids",
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
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {galleryItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative">
                    <img src={item.src || "/placeholder.svg"} alt={item.alt} className="w-full h-96 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-white text-xl font-playfair font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
