"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const serviceNames = {
      prenatal: "Prenatal Check-ups",
      garbhasanskar: "Garbhasanskar Programs",
      gynec: "Ayurvedic Gynec Care",
      suwarnprashan: "Suwarnprashan for Kids",
      urinary_stones: "Urinary Tract And Bladder Stones",
      chronic_uti: "Chronic Urinary Tract Infections",
      abdominal_pain: "Abdominal Pain",
      uti: "Urinary Tract Infection (UTI)",
      migraine: "Migraine",
      endometriosis: "Endometriosis",
      ovarian: "Ovarian Diseases",
      thyroid: "Thyroid",
      iud: "IUD (Intra Uterine Device) Placement",
      diabetes: "Diabetes Management",
    }

    const message =
      `*New Appointment Booking*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || "Not provided"}%0A` +
      `*Service:* ${serviceNames[formData.service as keyof typeof serviceNames] || formData.service}%0A` +
      `*Message:* ${formData.message || "No additional message"}%0A%0A` +
      `Please confirm the appointment details.`

    const whatsappUrl = `https://wa.me/919373693032?text=${message}`
    window.open(whatsappUrl, "_blank")

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us to schedule an appointment or learn more about our Ayurvedic treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      Shop No 5, Sarveshwar Apt, East
                      <br />
                      Next to Krishna Snacks Centre, Aptewadi
                      <br />
                      Badlapur, 421503 Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+91 9373693032 </p>
                    <p className="text-muted-foreground">+91 9146891929 </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@ayurvedicclinic.com</p>
                    <p className="text-muted-foreground">appointments@ayurvedicclinic.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Hours</h3>
                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 11:00 PM</p>
                    <p className="text-muted-foreground">Sunday: 10:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full" size="lg" asChild>
              <a href="https://wa.me/919373693032" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>

            {/* Map Placeholder */}
            <a
              href="https://share.google/iz8zRKpyRV5zjuNvm"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-muted rounded-lg h-64 flex items-center justify-center hover:bg-muted/80 transition-colors cursor-pointer"
            >
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground font-medium">View on Google Maps</p>
                <p className="text-sm text-muted-foreground/70">Click to open location</p>
              </div>
            </a>
          </div>

          {/* Appointment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair">Book an Appointment</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="prenatal">Prenatal Check-ups</option>
                    <option value="garbhasanskar">Garbhasanskar Programs</option>
                    <option value="gynec">Ayurvedic Gynec Care</option>
                    <option value="suwarnprashan">Suwarnprashan for Kids</option>
                    <option value="urinary_stones">Urinary Tract And Bladder Stones</option>
                    <option value="chronic_uti">Chronic Urinary Tract Infections</option>
                    <option value="abdominal_pain">Abdominal Pain</option>
                    <option value="uti">Urinary Tract Infection (UTI)</option>
                    <option value="migraine">Migraine</option>
                    <option value="endometriosis">Endometriosis</option>
                    <option value="ovarian">Ovarian Diseases</option>
                    <option value="thyroid">Thyroid</option>
                    <option value="iud">IUD (Intra Uterine Device) Placement</option>
                    <option value="diabetes">Diabetes Management</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements or any questions you have"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
