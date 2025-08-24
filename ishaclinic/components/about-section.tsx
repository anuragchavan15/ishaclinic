import { Award, Users, Leaf, GraduationCap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">About Our Clinic</h2>

            <div className="bg-white/50 rounded-lg p-6 mb-6 border border-primary/10">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-foreground mb-2">Dr. Priyanka Rathod</h3>
                  <p className="text-primary font-semibold mb-1">MD(BAMS), Mumbai</p>
                  <p className="text-muted-foreground text-sm mb-2">8 Years of Experience</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Specialized in Ayurvedic gynecology, prenatal care, and holistic family wellness with extensive
                    experience in traditional healing practices.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our Ayurvedic clinic is dedicated to providing holistic healthcare solutions that blend ancient wisdom
              with modern understanding. We specialize in maternal and child health, offering comprehensive care through
              traditional Ayurvedic practices.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of experience in Ayurvedic medicine, our team of qualified practitioners is committed to
              supporting families on their journey to optimal health and wellness through natural, time-tested methods.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Certified Practitioners</h3>
                <p className="text-sm text-muted-foreground">Qualified Ayurvedic doctors</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">500+ Families</h3>
                <p className="text-sm text-muted-foreground">Trusted by families</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Natural Approach</h3>
                <p className="text-sm text-muted-foreground">100% natural treatments</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/ayurvedic-pregnancy-consultation.png"
              alt="Our experienced Ayurvedic practitioners"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
