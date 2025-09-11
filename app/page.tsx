"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  User,
  Download,
  Award,
  Zap,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = "Front-End Developer (Angular)"

  useEffect(() => {
    setIsVisible(true)

    // Typing animation for the title
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-purple-500/15 rounded-full animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-12 h-12 bg-cyan-500/25 rounded-full animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-500/18 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div
            className={`relative w-40 h-40 mx-auto mb-8 transition-all duration-1000 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
          >
            <Image
              src="/moamen-gad-professional-photo.jpg"
              alt="Moamen Gad - Professional Photo"
              width={160}
              height={160}
              className="rounded-full object-cover border-4 border-blue-500/30 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Code className="w-6 h-6 text-white" />
            </div>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold text-white mb-4 text-balance bg-gradient-to-r from-white to-gray-300 bg-clip-text transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Moamen Gad
          </h1>

          <p className="text-2xl md:text-3xl text-blue-400 font-semibold mb-6 text-balance min-h-[2.5rem] flex items-center justify-center">
            <span className="border-r-2 border-blue-400 animate-pulse pr-1">{typedText}</span>
          </p>

          <p
            className={`text-lg text-gray-300 max-w-2xl mx-auto mb-8 text-pretty leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Passionate about building responsive, user-friendly, and visually engaging web applications with modern
            technologies. Delivering exceptional user experiences through clean code and innovative design.
          </p>

<Button
  size="lg"
  className={`gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-1000 delay-700 hover:scale-105 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`}
>
  <a href="mailto:momengad63@gmail.com" className="flex items-center gap-2">
    <Mail className="w-4 h-4" />
    Contact Me
  </a>
</Button>

<Button
  variant="outline"
  size="lg"
  className={`gap-2 bg-gray-800/80 border-gray-600 text-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 backdrop-blur-sm transition-all duration-1000 delay-800 hover:scale-105 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`}
>
  <a
    href="/Moamen-Gad-FlowCV-Resume.pdf"
    download
    className="flex items-center gap-2"
  >
    <Download className="w-4 h-4" />
    Download CV
  </a>
</Button>

<Button
  variant="outline"
  size="lg"
  className={`gap-2 bg-gray-800/80 border-gray-600 text-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 backdrop-blur-sm transition-all duration-1000 delay-900 hover:scale-105 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`}
>
  <a
    href="https://github.com/moamengad15"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2"
  >
    <ExternalLink className="w-4 h-4" />
    View Projects
  </a>
</Button>


          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-6 px-4 bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 text-sm">
          <a
            href="mailto:momengad63@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 group hover:scale-105"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform group-hover:rotate-12" />
            <span>momengad63@gmail.com</span>
          </a>
          <div className="flex items-center gap-2 text-gray-400 hover:scale-105 transition-transform duration-300">
            <Phone className="w-4 h-4" />
            <span>01007477385</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 hover:scale-105 transition-transform duration-300">
            <MapPin className="w-4 h-4" />
            <span>Egypt</span>
          </div>
          <a
            href="https://github.com/moamengad15"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 group hover:scale-105"
          >
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform group-hover:rotate-12" />
            <span>github.com/moamengad15</span>
          </a>
          <a
            href="https://linkedin.com/in/moamen-gad"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 group hover:scale-105"
          >
            <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform group-hover:rotate-12" />
            <span>linkedin.com/in/moamen-gad</span>
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* About Section */}
        <section className="scroll-animate">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center animate-pulse">
              <User className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">About Me</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="h-full bg-gray-800/50 border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-300 leading-relaxed text-pretty mb-6">
                    As a fourth-year computer science student and Frontend developer with a strong foundation in
                    computer science and expertise in modern web development technologies. I'm passionate about building
                    responsive, user-friendly, and visually engaging web applications.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed text-pretty">
                    Skilled in solving technical challenges and collaborating within teams to deliver high-quality
                    projects that exceed expectations and drive business success.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <Card className="text-center p-6 bg-gray-800/50 border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg text-white">High Performance</h3>
                <p className="text-sm text-gray-400">Exceptional Project Quality</p>
              </Card>
              <Card className="text-center p-6 bg-gray-800/50 border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg text-white">Mobile Responsive</h3>
                <p className="text-sm text-gray-400">Enhanced User Experience</p>
              </Card>
              <Card className="text-center p-6 bg-gray-800/50 border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <ExternalLink className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg text-white">User Engagement</h3>
                <p className="text-sm text-gray-400">Improved Interactions</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="scroll-animate">
          <div className="flex items-center gap-3 mb-12">
            <div
              className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center animate-spin"
              style={{ animationDuration: "3s" }}
            >
              <Code className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">Skills & Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group bg-gray-800/50 border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:rotate-1 overflow-hidden">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 overflow-hidden">
                  <Image
                    src="/frontend-development-technologies-html-css-java.jpg"
                    alt="Frontend Technologies"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-lg text-white">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-orange-500/40 text-white border-orange-500/50 hover:scale-105 transition-transform"
                  >
                    HTML5
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/40 text-white border-blue-500/50 hover:scale-105 transition-transform"
                  >
                    CSS3
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-500/40 text-black border-yellow-500/50 hover:scale-105 transition-transform"
                  >
                    JavaScript
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-red-500/40 text-white border-red-500/50 hover:scale-105 transition-transform"
                  >
                    Angular
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/40 text-white border-purple-500/50 hover:scale-105 transition-transform"
                  >
                    Bootstrap
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gray-800/50 border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 overflow-hidden">
                  <Image
                    src="/computer-science-data-structures-algorithms-flow.jpg"
                    alt="Core Concepts"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-lg text-white">Core Concepts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/40 text-white border-blue-500/50 hover:scale-105 transition-transform"
                  >
                    OOP
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyan-500/40 text-white border-cyan-500/50 hover:scale-105 transition-transform"
                  >
                    Data Structures
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-500/40 text-white border-indigo-500/50 hover:scale-105 transition-transform"
                  >
                    Algorithms
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gray-800/50 border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 overflow-hidden">
                  <Image
                    src="/python-cpp-programming-languages-logos.jpg"
                    alt="Programming Languages"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-lg text-white">Programming</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-green-500/40 text-white border-green-500/50 hover:scale-105 transition-transform"
                  >
                    Python
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-600/40 text-white border-blue-600/50 hover:scale-105 transition-transform"
                  >
                    C++
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-gray-800/50 border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-500/20 to-slate-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 overflow-hidden">
                  <Image
                    src="/git-github-version-control-developer-tools.jpg"
                    alt="Tools & Skills"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-lg text-white">Tools & Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-gray-500/40 text-white border-gray-500/50 hover:scale-105 transition-transform"
                  >
                    Git
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-slate-500/40 text-white border-slate-500/50 hover:scale-105 transition-transform"
                  >
                    GitHub
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-500/40 text-white border-emerald-500/50 hover:scale-105 transition-transform"
                  >
                    Problem-Solving
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-teal-500/40 text-white border-teal-500/50 hover:scale-105 transition-transform"
                  >
                    Teamwork
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">Professional Experience</h2>
          </div>
          <Card className="overflow-hidden bg-gray-800/50 border-gray-700">
            <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src="/nti-egypt-telecommunication-institute-logo.jpg"
                    alt="NTI Logo"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="flex items-center gap-2 text-xl text-white">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    NTI - Front-End Developer
                  </CardTitle>
                  <CardDescription className="text-base mt-1 text-gray-400">
                    National Telecommunication Institute
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center">
                <h4 className="font-semibold text-lg text-white mb-6">Key Achievement</h4>
                <div className="inline-flex items-center gap-3 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-lg text-white font-medium">
                    Delivered a project that earned a 96% performance score
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="scroll-animate">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center animate-pulse">
              <ExternalLink className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group bg-gray-800/50 border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-3 hover:rotate-1 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-indigo-500/10 relative overflow-hidden">
                <Image
                  src="/noiceland-cityscape-evening-skyline.jpg"
                  alt="Noiceland Magazine - Modern Cityscape Evening View"
                  width={350}
                  height={200}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 animate-pulse">
                    <ExternalLink className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                  Noiceland Magazine
                </CardTitle>
                <CardDescription className="text-gray-400">Modern Online Magazine & Blog</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-500/40 text-white border-red-500/50 hover:scale-105 transition-transform">
                    Angular
                  </Badge>
                  <Badge className="bg-orange-500/40 text-white border-orange-500/50 hover:scale-105 transition-transform">
                    HTML5
                  </Badge>
                  <Badge className="bg-blue-500/40 text-white border-blue-500/50 hover:scale-105 transition-transform">
                    CSS3
                  </Badge>
                </div>
                <p className="text-sm text-gray-400 text-pretty leading-relaxed">
                  Responsive front-end web application showcasing curated articles on design, creativity, and culture.
                  Features reusable Angular components, routing, and modern CSS layouts.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group-hover:scale-105"
                  asChild
                >
                  <a href="/noiceland" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Site
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group bg-gray-800/50 border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-3 hover:rotate-1 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-500/10 to-slate-500/10 relative overflow-hidden">
                <Image
                  src="/luxury-car-rental-website-interface.png"
                  alt="Car Dealership Website - Luxury Car Rental Interface"
                  width={350}
                  height={200}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 animate-pulse">
                    <ExternalLink className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                  Car Dealership Website
                </CardTitle>
                <CardDescription className="text-gray-400">Responsive Business Website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-500/40 text-white border-orange-500/50 hover:scale-105 transition-transform">
                    HTML
                  </Badge>
                  <Badge className="bg-blue-500/40 text-white border-blue-500/50 hover:scale-105 transition-transform">
                    CSS
                  </Badge>
                  <Badge className="bg-yellow-500/40 text-black border-yellow-500/50 hover:scale-105 transition-transform">
                    JavaScript
                  </Badge>
                </div>
                <p className="text-sm text-gray-400 text-pretty leading-relaxed">
                  Responsive car dealership website with high-resolution visuals and modern layouts. Optimized for
                  cross-browser compatibility and seamless device access.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group-hover:scale-105"
                  asChild
                >
                  <a href="https://moamengad15.github.io/my-website-cars/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Site
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group bg-gray-800/50 border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-3 hover:rotate-1 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-500/10 to-emerald-500/10 relative overflow-hidden">
                <Image
                  src="/steak-house-restaurant-website-interface.png"
                  alt="Food Lover Website - Steak House Restaurant Interface"
                  width={350}
                  height={200}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 animate-pulse">
                    <ExternalLink className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                  Food Lover Website
                </CardTitle>
                <CardDescription className="text-gray-400">Modern Landing Page</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-500/40 text-white border-orange-500/50 hover:scale-105 transition-transform">
                    HTML
                  </Badge>
                  <Badge className="bg-blue-500/40 text-white border-blue-500/50 hover:scale-105 transition-transform">
                    CSS
                  </Badge>
                  <Badge className="bg-yellow-500/40 text-black border-yellow-500/50 hover:scale-105 transition-transform">
                    JavaScript
                  </Badge>
                </div>
                <p className="text-sm text-gray-400 text-pretty leading-relaxed">
                  Modern food blog and recipe-sharing website with fully responsive interface. Features mobile-friendly
                  design, recipe browsing, and user rating sections.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all group-hover:scale-105"
                  asChild
                >
                  <a href="https://moamengad15.github.io/food-lover/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Site
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education & Training Section */}
        <section>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">Education & Training</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group bg-gray-800/50 border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <Image
                      src="/university-computer-science-graduation-degree.jpg"
                      alt="University Education"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Bachelor of Computer Science</CardTitle>
                    <CardDescription className="text-base text-gray-400">2022 – 2026 • Tanta, Egypt</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Currently pursuing a comprehensive computer science degree with focus on software development and
                  modern programming practices. Strong foundation in algorithms, data structures, and software
                  engineering principles.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gray-800/50 border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <Image
                      src="/frontend-training-react-html-css-certificate.jpg"
                      alt="Frontend Training"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Front-End Development Training</CardTitle>
                    <CardDescription className="text-base text-gray-400">Professional Certification</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 text-pretty leading-relaxed">
                  Completed comprehensive training in HTML5, CSS3, JavaScript (ES6+), and Bootstrap. Built responsive
                  portfolio website using React with modern front-end practices and industry standards.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gray-800/50 border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <Image
                      src="/python-programming-advanced-coding-training.jpg"
                      alt="Python Training"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Advanced Python Programming</CardTitle>
                    <CardDescription className="text-base text-gray-400">Specialized Training</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 text-pretty leading-relaxed">
                  Focused training in Advanced Python Programming with practical project applications. Developed puzzle
                  game project demonstrating problem-solving and coding efficiency with clean, maintainable code.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gray-800/50 border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <Image
                      src="/english-arabic-language-communication-flags.jpg"
                      alt="Languages"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Languages</CardTitle>
                    <CardDescription className="text-base text-gray-400">Communication Skills</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-blue-500/40 text-white border-blue-500/50 px-3 py-1">
                    English - Fluent
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/40 text-white border-green-500/50 px-3 py-1">
                    Arabic - Native
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center scroll-animate">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center animate-pulse">
              <Mail className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">Let's Work Together</h2>
          </div>
          <Card className="max-w-3xl mx-auto overflow-hidden bg-gray-800/50 border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-500/20 rounded-full flex items-center justify-center animate-bounce">
                <Mail className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Next Project?</h3>
              <p className="text-lg text-gray-300 mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can
                work together to bring your ideas to life with cutting-edge web technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
               <Button
               asChild
               size="lg"
               className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse"
               >
               <a
               href="https://outlook.live.com/mail/deeplink/compose?to=momengad63@gmail.com"
               target="_blank"
               rel="noreferrer"
               className="flex items-center gap-2"
               >
               <Mail className="w-5 h-5" />
               Send Email
               </a>
               </Button>

                <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 backdrop-blur-sm transition-all hover:scale-110"
                >
                <a href="https://github.com/moamengad15" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
                </a>
                </Button>
               <Button
               asChild
               variant="outline"
               size="lg"
               className="gap-2 bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 backdrop-blur-sm transition-all hover:scale-110"
               >
               <a href="https://linkedin.com/in/moamen-gad" target="_blank" rel="noreferrer" className="flex items-center gap-2">
               <Linkedin className="w-5 h-5" />
               LinkedIn
               </a>
               </Button>

              </div>
            </div>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800/50 backdrop-blur-sm py-12 px-4 text-center border-t border-gray-700/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            <a href="mailto:momengad63@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              Email
            </a>
            <a href="https://github.com/moamengad15" className="text-gray-400 hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/moamen-gad"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-gray-400">
            © 2025 Moamen Gad. Built with love, creativity, and passion for great design.
          </p>
        </div>
      </footer>
    </div>
  )
}
