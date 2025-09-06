import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User, Eye, Heart, Share2, Menu, Search } from "lucide-react"
import Link from "next/link"

export default function NoicelandDemo() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--noiceland-background)", color: "var(--noiceland-foreground)" }}
    >
      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-md border-b"
        style={{ borderColor: "var(--noiceland-border)", backgroundColor: "rgba(255, 255, 255, 0.95)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold" style={{ color: "var(--noiceland-primary)" }}>
                Noiceland
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="#" className="hover:opacity-70 transition-opacity">
                  Design
                </Link>
                <Link href="#" className="hover:opacity-70 transition-opacity">
                  Culture
                </Link>
                <Link href="#" className="hover:opacity-70 transition-opacity">
                  Creativity
                </Link>
                <Link href="#" className="hover:opacity-70 transition-opacity">
                  About
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                style={{ backgroundColor: "var(--noiceland-primary)", color: "var(--noiceland-primary-foreground)" }}
              >
                Subscribe
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  style={{ backgroundColor: "var(--noiceland-accent)", color: "var(--noiceland-accent-foreground)" }}
                >
                  Featured Article
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  The Future of
                  <span style={{ color: "var(--noiceland-primary)" }}> Creative Design</span>
                </h1>
                <p className="text-lg opacity-80 leading-relaxed">
                  Exploring the intersection of technology, art, and human creativity in the digital age. Discover how
                  modern designers are reshaping our visual landscape.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-sm opacity-70">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Sarah Johnson</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Dec 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>2.4k views</span>
                </div>
              </div>
              <Button
                size="lg"
                style={{ backgroundColor: "var(--noiceland-primary)", color: "var(--noiceland-primary-foreground)" }}
              >
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="/noiceland-cityscape-evening-skyline.jpg"
                alt="Modern cityscape representing creative design"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--noiceland-muted)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-lg opacity-80">Curated stories about design, creativity, and culture</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src="/minimalist-architecture-design.jpg"
                  alt="Minimalist Architecture"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 space-y-4">
                  <Badge
                    variant="outline"
                    style={{ borderColor: "var(--noiceland-primary)", color: "var(--noiceland-primary)" }}
                  >
                    Architecture
                  </Badge>
                  <h3 className="text-xl font-semibold group-hover:text-cyan-600 transition-colors">
                    Minimalist Architecture: Less is More
                  </h3>
                  <p className="opacity-70 text-sm leading-relaxed">
                    Exploring how minimalist principles are revolutionizing modern architectural design...
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 text-xs opacity-60">
                      <span>5 min read</span>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>124</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src="/digital-art-creative-process.jpg"
                  alt="Digital Art Process"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 space-y-4">
                  <Badge
                    variant="outline"
                    style={{ borderColor: "var(--noiceland-accent)", color: "var(--noiceland-accent)" }}
                  >
                    Digital Art
                  </Badge>
                  <h3 className="text-xl font-semibold group-hover:text-cyan-600 transition-colors">
                    The Creative Process Behind Digital Art
                  </h3>
                  <p className="opacity-70 text-sm leading-relaxed">
                    A deep dive into the tools, techniques, and mindset of contemporary digital artists...
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 text-xs opacity-60">
                      <span>8 min read</span>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>89</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src="/sustainable-design-eco-friendly.jpg"
                  alt="Sustainable Design"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 space-y-4">
                  <Badge
                    variant="outline"
                    style={{ borderColor: "var(--noiceland-primary)", color: "var(--noiceland-primary)" }}
                  >
                    Sustainability
                  </Badge>
                  <h3 className="text-xl font-semibold group-hover:text-cyan-600 transition-colors">
                    Sustainable Design for a Better Future
                  </h3>
                  <p className="opacity-70 text-sm leading-relaxed">
                    How designers are incorporating environmental consciousness into their creative work...
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 text-xs opacity-60">
                      <span>6 min read</span>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>156</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              style={{ borderColor: "var(--noiceland-primary)", color: "var(--noiceland-primary)" }}
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Stay Inspired</h2>
            <p className="text-lg opacity-80">
              Get the latest articles on design, creativity, and culture delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                style={{
                  borderColor: "var(--noiceland-border)",
                  backgroundColor: "var(--noiceland-background)",
                  focusRingColor: "var(--noiceland-primary)",
                }}
              />
              <Button
                size="lg"
                style={{ backgroundColor: "var(--noiceland-primary)", color: "var(--noiceland-primary-foreground)" }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--noiceland-muted)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold" style={{ color: "var(--noiceland-primary)" }}>
                Noiceland
              </h3>
              <p className="text-sm opacity-70">A modern online magazine exploring design, creativity, and culture.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Categories</h4>
              <div className="space-y-2 text-sm opacity-70">
                <Link href="#" className="block hover:opacity-100 transition-opacity">
                  Design
                </Link>
                <Link href="#" className="block hover:opacity-100 transition-opacity">
                  Architecture
                </Link>
                <Link href="#" className="block hover:opacity-100 transition-opacity">
                  Digital Art
                </Link>
                <Link href="#" className="block hover:opacity-100 transition-opacity">
                  Culture
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-sm opacity-70">
                <Link href="#" className="block hover:opacity-100 transition-opacity">
                  About
                </Link>
                <Link href="#" className="block hover:opacity-100 transition-opacity">
                  Contact
                </Link>
                <Link href="#" className="block hover:opacity-100 transition-opacity">
                  Careers
                </Link>
                <Link href="#" className="block hover:opacity-100 transition-opacity">
                  Privacy
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="space-y-2 text-sm opacity-70">
                <Link href="#" className="block hover:opacity-100 transition-opacity">
                  Twitter
                </Link>
                <Link href="#" className="block hover:opacity-100 transition-opacity">
                  Instagram
                </Link>
                <Link href="#" className="block hover:opacity-100 transition-opacity">
                  LinkedIn
                </Link>
                <Link href="#" className="block hover:opacity-100 transition-opacity">
                  Newsletter
                </Link>
              </div>
            </div>
          </div>
          <div
            className="border-t mt-8 pt-8 text-center text-sm opacity-60"
            style={{ borderColor: "var(--noiceland-border)" }}
          >
            <p>&copy; 2024 Noiceland Magazine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
