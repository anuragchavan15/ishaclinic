import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted"
    >
      <div className="absolute inset-0 bg-[url('/ayurvedic-clinic-interior.png')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
          Isha Clinic
          <span className="block text-lg md:text-xl font-normal text-muted-foreground mt-2">
            by Dr. Priyanka Rathod
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
          Holistic Care for Mothers & Children through Ayurveda
        </p>

        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience the ancient wisdom of Ayurveda with modern care. We specialize in prenatal wellness, Garbhasanskar
          programs, gynecological health, and children's wellness through traditional practices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3" asChild>
            <a
              href="https://wa.me/919373693032?text=Hi, I would like to book an appointment at Isha Clinic."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent" asChild>
            <a href="tel:+919373693032">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
