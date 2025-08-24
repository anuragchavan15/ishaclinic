import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "The Garbhasanskar program was life-changing for me and my baby. The holistic approach and caring staff made my pregnancy journey beautiful and peaceful.",
      rating: 5,
    },
    {
      name: "Anjali Patel",
      location: "Delhi",
      text: "Suwarnprashan has significantly improved my child's immunity and overall health. The traditional approach combined with modern care is exceptional.",
      rating: 5,
    },
    {
      name: "Meera Gupta",
      location: "Bangalore",
      text: "The Ayurvedic gynecological treatments helped me overcome health issues naturally. The doctors are knowledgeable and truly caring.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">What Our Patients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from families who have experienced the healing power of Ayurveda at our clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
