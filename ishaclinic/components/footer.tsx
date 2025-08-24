import { Leaf, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-playfair font-bold"> Isha Clinic</h3>
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Dedicated to providing holistic healthcare solutions through ancient Ayurvedic wisdom and modern
              understanding, specializing in maternal and child health.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+91 9373693032 </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@ayurvedicclinic.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  {
                    "Shop No 5, Sarveshwar Apt, East\nNext to Krishna Snacks Centre, Aptewadi\nBadlapur, 421503 Maharashtra"
                  }
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Prenatal Check-ups</li>
              <li>Garbhasanskar Programs</li>
              <li>Ayurvedic Gynec Care</li>
              <li>Suwarnprashan for Kids</li>
              <li>Urinary Tract & Bladder Stones</li>
              <li>Chronic UTI Treatment</li>
              <li>Abdominal Pain Management</li>
              <li>UTI Treatment</li>
              <li>Migraine Care</li>
              <li>Endometriosis Treatment</li>
              <li>Ovarian Diseases</li>
              <li>Thyroid Management</li>
              <li>IUD Placement</li>
              <li>Diabetes Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2024 Isha Clinic. All rights reserved. | Holistic Care for Mothers &amp; Children
          </p>
        </div>
      </div>
    </footer>
  )
}
