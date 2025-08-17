/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Smartphone, Layers, Users, Play, Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ElegantFormPopup from '@/components/PopupForm';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Slider images data
  const sliderImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Modern Workspace",
      subtitle: "Where Innovation Happens"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      title: "Digital Solutions",
      subtitle: "Transforming Business Ideas"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Team Collaboration",
      subtitle: "Building Tomorrow Together"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Scroll listener (only on client side)
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Calculate transform based on scroll (with bounds)
  const heroTransform = Math.min(scrollY * 0.5, 30);

  return (
    <div className="relative overflow-hidden ">
      {/* Image Slider Section */}
      <div className="h-[70vh] md:h-[80vh] relative overflow-hidden">
        {/* Slider Images */}
        {sliderImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center  px-4">
              <div className="text-white max-w-4xl px-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 opacity-90">
                  {image.title}
                </h2>
                <p className="text-xl md:text-2xl opacity-75">
                  {image.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2  bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2  bg-white/10 backdrop-blur-sm p-2 md:p-3 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2  flex space-x-2 md:space-x-3">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentSlide
                ? 'bg-orange-500 w-6 md:w-8'
                : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 ">
          <div
            className="h-full bg-orange-500 transition-all duration-5000 ease-linear"
            style={{ width: `${((currentSlide + 1) / sliderImages.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Hero Content Section */}
      <div
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="relative  container mx-auto px-4 sm:px-6 pt-12 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium border border-orange-500/20 backdrop-blur-sm">
                  Transforming Ideas into Digital Reality
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Navigating the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                  Future
                </span>{' '}
                through Technology
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                At RexGalaxy, we deliver cutting-edge software solutions, mobile apps, and enterprise services that drive innovation and accelerate your business growth in the digital landscape.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full border-2 border-slate-800 flex items-center justify-center text-white text-xs font-bold">
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-slate-400 text-sm">50+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-orange-500 fill-current" />
                  ))}
                  <span className="text-slate-400 text-sm ml-2">4.9 Rating</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12">
                <Link href="/about/company-overview" className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-orange-500/25">
                  Know More
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                 onClick={() => setShowForm(true)}
                className="px-6 py-3 md:px-8 md:py-4 border border-slate-600 hover:border-orange-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-orange-500/10 flex items-center justify-center gap-2 group backdrop-blur-sm">
                  <Play className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  Enquiry Now
                </button>
                 <ElegantFormPopup isOpen={showForm} onClose={() => setShowForm(false)}/>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-12">
                {[
                  "24/7 Support Available",
                  "Free Consultation",
                  "Agile Development",
                  "Quality Assurance"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                    <span className="text-slate-300 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                {[
                  { value: "500+", label: "Projects Delivered" },
                  { value: "50+", label: "Happy Clients" },
                  { value: "5+", label: "Years Experience" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image + Services */}
            <div className="lg:pl-8 xl:pl-12 relative">
              {/* Main Hero Image */}
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-slate-700/50 shadow-xl md:shadow-2xl">
                  {/* Mockup Device */}
                  <div className="relative bg-slate-900 rounded-lg md:rounded-xl p-3 md:p-4 shadow-lg md:shadow-xl">
                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="relative bg-gradient-to-br from-orange-500/20 to-blue-500/20 h-36 md:h-48 rounded-lg overflow-hidden">
                      {/* Background Image */}
                      <img
                        src="/about/aboutbanner.webp"
                        alt="Project Preview"
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                      />
                      {/* Overlay Content */}
                      <div className="relative h-full flex items-center justify-center">
                        <div className="text-center">
                          <Code className="w-12 h-12 md:w-16 md:h-16 text-orange-500 mx-auto mb-2 md:mb-4 animate-pulse" />
                          <div className="text-white font-bold text-lg md:text-xl drop-shadow-lg">Project Preview</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-orange-500 p-2 md:p-3 rounded-lg md:rounded-xl shadow-md md:shadow-lg animate-bounce">
                    <Smartphone className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-blue-500 p-2 md:p-3 rounded-lg md:rounded-xl shadow-md md:shadow-lg animate-pulse">
                    <Layers className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  {
                    icon: <Code className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />,
                    title: "Software Development",
                    description: "Custom solutions tailored to your needs",
                    color: "orange"
                  },
                  {
                    icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />,
                    title: "Mobile Apps",
                    description: "Native & cross-platform applications",
                    color: "blue"
                  },
                  {
                    icon: <Layers className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
                    title: "Enterprise",
                    description: "Scalable enterprise solutions",
                    color: "purple"
                  },
                  {
                    icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-green-500" />,
                    title: "Dedicated Teams",
                    description: "Expert developers for your projects",
                    color: "green"
                  }
                ].map((service, index) => (
                  <div
                    key={index}
                    className={`bg-slate-800/50 backdrop-blur-sm p-4 md:p-6 rounded-lg md:rounded-xl border border-slate-700/50 hover:border-${service.color}-500/50 transition-all duration-300 group hover:transform hover:scale-[1.03]`}
                  >
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-${service.color}-500/20 to-${service.color}-600/20 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:from-${service.color}-500/30 group-hover:to-${service.color}-600/30 transition-colors`}>
                      {service.icon}
                    </div>
                    <h3 className="text-white font-semibold text-sm md:text-base mb-1 md:mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-xs md:text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative container mx-auto px-4 sm:px-6 pb-12">
          <div className="text-center">
            <p className="text-slate-400 text-sm md:text-base mb-4">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 opacity-70">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-32 h-16 md:w-48 md:h-24 rounded-lg flex items-center justify-center p-1">
                  <img
                    src={`/logo/${i}.jpeg`}
                    alt={`Client logo ${i}`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;