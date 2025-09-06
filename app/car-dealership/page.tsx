"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Car,
  Star,
  Shield,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function CarDealershipLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">LuxAuto</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inventory" className="text-foreground hover:text-primary transition-colors">
                Inventory
              </a>
              <a href="#financing" className="text-foreground hover:text-primary transition-colors">
                Financing
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-card border-t border-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#inventory" className="block px-3 py-2 text-foreground hover:text-primary">
                  Inventory
                </a>
                <a href="#financing" className="block px-3 py-2 text-foreground hover:text-primary">
                  Financing
                </a>
                <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary">
                  About Us
                </a>
                <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/car-rental-best-car-advertisement.png"
            alt="Best Car for Rent - Luxury Vehicle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1
              className={`text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Best Car
              <span className="text-primary block">For Rent</span>
            </h1>
            <p
              className={`text-xl text-muted-foreground mb-8 text-pretty leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Find the best car for rent from our premium fleet. Whether you need a luxury SUV for business or a stylish
              sedan for special occasions, we have the perfect vehicle for every need.
            </p>
            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all"
              >
                <Car className="w-5 h-5 mr-2" />
                Explore Collection
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all bg-transparent"
              >
                Schedule Test Drive
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-4">Why Choose LuxAuto?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experience excellence in every aspect of your car buying journey with our premium services and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group bg-background border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">Certified Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-pretty">
                  Every vehicle undergoes rigorous inspection and certification to ensure premium quality and
                  reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-background border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">Award Winning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-pretty">
                  Recognized as the region's top luxury car dealership with outstanding customer satisfaction ratings.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-background border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-pretty">
                  Our experienced professionals provide personalized service to help you find your perfect vehicle.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-background border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">Fast Financing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-pretty">
                  Quick and easy financing options with competitive rates to get you driving your dream car today.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vehicle Showcase */}
      <section id="inventory" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Vehicles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore our handpicked selection of premium luxury vehicles, each offering exceptional performance and
              style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <Image
                    src={`/luxury-car.png?height=300&width=400&query=luxury car ${index}`}
                    alt={`Luxury Vehicle ${index}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-card-foreground">2024 Luxury Sedan</CardTitle>
                      <CardDescription className="text-muted-foreground">Premium Edition</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">$89,999</div>
                      <div className="text-sm text-muted-foreground">Starting at</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>• 2024 Model</span>
                    <span>• 15K Miles</span>
                    <span>• Automatic</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(4.9/5)</span>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group-hover:scale-105 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Don't just take our word for it. Hear from satisfied customers who found their dream cars with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Business Executive",
                content:
                  "Exceptional service and quality vehicles. The team made my car buying experience seamless and enjoyable.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Entrepreneur",
                content:
                  "Found my dream car at an amazing price. The financing options were flexible and the staff was incredibly helpful.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Designer",
                content:
                  "Outstanding customer service from start to finish. They truly care about finding the perfect match for each customer.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-background border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Visit Our Showroom</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Experience luxury in person. Visit our state-of-the-art showroom or contact us to schedule a private
              viewing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Get in Touch</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Ready to find your perfect vehicle? Contact us today.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Call Us</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Email Us</div>
                    <div className="text-muted-foreground">info@luxauto.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Visit Us</div>
                    <div className="text-muted-foreground">123 Luxury Ave, Premium District</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Hours</div>
                    <div className="text-muted-foreground">Mon-Sat: 9AM-8PM, Sun: 10AM-6PM</div>
                  </div>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all">
                  Schedule Appointment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">Why Choose Us?</h3>
                  <div className="space-y-3">
                    {[
                      "Premium vehicle selection",
                      "Competitive financing rates",
                      "Expert customer service",
                      "Comprehensive warranties",
                      "Trade-in evaluations",
                      "After-sales support",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Special Offer</h3>
                  <p className="mb-4">Get 0% APR financing on select luxury vehicles this month!</p>
                  <Button variant="secondary" className="bg-background text-foreground hover:bg-secondary">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-card-foreground">LuxAuto</span>
              </div>
              <p className="text-muted-foreground text-pretty">
                Your premier destination for luxury vehicles. Experience excellence in every drive.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#inventory" className="block text-muted-foreground hover:text-primary transition-colors">
                  Inventory
                </a>
                <a href="#financing" className="block text-muted-foreground hover:text-primary transition-colors">
                  Financing
                </a>
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Services</h4>
              <div className="space-y-2">
                <div className="text-muted-foreground">Vehicle Sales</div>
                <div className="text-muted-foreground">Financing</div>
                <div className="text-muted-foreground">Trade-ins</div>
                <div className="text-muted-foreground">Service & Parts</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Contact Info</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>+1 (555) 123-4567</div>
                <div>info@luxauto.com</div>
                <div>123 Luxury Ave</div>
                <div>Premium District</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>© 2024 LuxAuto. All rights reserved. Built with passion for automotive excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
