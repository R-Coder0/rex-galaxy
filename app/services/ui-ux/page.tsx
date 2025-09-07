'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Smartphone, Layout, Eye, Star, Check } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ArrowRight } from "lucide-react";
import ElegantFormPopup from '@/components/PopupForm';

const DEFAULT_STACK = {
  design: [
    { name: "Figma", logo: "/tech-icons/figma.svg" },
    { name: "Adobe XD", logo: "/tech-icons/adobe-xd.svg" },
    { name: "Sketch", logo: "/tech-icons/sketch.svg" },
    { name: "Photoshop", logo: "/tech-icons/photoshop.svg" },
    { name: "Illustrator", logo: "/tech-icons/illustrator.svg" },
  ],
  research: [
    { name: "User Testing", logo: "/tech-icons/user-testing.svg" },
    { name: "Heatmaps", logo: "/tech-icons/heatmap.svg" },
    { name: "Analytics", logo: "/tech-icons/analytics.svg" },
    { name: "Surveys", logo: "/tech-icons/survey.svg" },
  ],
  prototyping: [
    { name: "Prototyping", logo: "/tech-icons/prototyping.png" },
    { name: "Wireframing", logo: "/tech-icons/wireframe.svg" },
    { name: "Microinteractions", logo: "/tech-icons/interactions.png" },
    { name: "Animation", logo: "/tech-icons/animation.png" },
  ],
};

const tabs = [
  { key: "design", label: "Design Tools", icon: Palette },
  { key: "research", label: "Research Methods", icon: Eye },
  { key: "prototyping", label: "Prototyping", icon: Smartphone },
] as const;

type StackKey = typeof tabs[number]["key"];

type Item = { name: string; logo: string };

export default function UIDesignService(){
  const title = "Our UI/UX Design Stack"
  const description = "Our comprehensive toolkit for creating exceptional user experiences..."
  const techStack = DEFAULT_STACK

  const [active, setActive] = useState<StackKey>("design");
  const items: Item[] = techStack[active];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Services Data
  const services = [
    {
      icon: <Layout className="w-10 h-10 text-orange-500" />,
      title: "UI/UX Design",
      desc: "Beautiful, intuitive interfaces that enhance user engagement and satisfaction",
      detail: "We create pixel-perfect designs that combine aesthetics with functionality, ensuring seamless user experiences across all devices."
    },
    {
      icon: <Eye className="w-10 h-10 text-blue-500" />,
      title: "User Research",
      desc: "Data-driven insights to understand your users and their needs",
      detail: "Our research methods uncover valuable user behaviors and preferences to inform design decisions that truly resonate with your audience."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-purple-500" />,
      title: "Prototyping",
      desc: "Interactive prototypes to test and validate concepts before development",
      detail: "We build high-fidelity prototypes that allow stakeholders to experience and provide feedback on designs before implementation."
    }
  ];

  const testimonials = [
    {
      rating: 5,
      comment: "Their redesign increased our conversion rate by 45% while maintaining our brand identity perfectly.",
      author: "CMO, E-commerce Platform",
      verified: true
    },
    {
      rating: 5,
      comment: "The user research uncovered insights we never considered, completely changing our approach.",
      author: "Product Lead, SaaS Company",
      verified: true
    },
    {
      rating: 5,
      comment: "Our app ratings jumped from 3.2 to 4.8 after their UX overhaul. The difference is night and day.",
      author: "CEO, Mobile App Startup",
      verified: true
    },
    {
      rating: 4.5,
      comment: "The prototypes helped us secure funding by clearly demonstrating our product vision to investors.",
      author: "Founder, Tech Startup",
      verified: true
    }
  ];

  return (
    <div className="bg-slate-900 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-900/30 to-blue-900/30" />

        <div className="container relative mx-auto px-6 py-6 md:py-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT: text */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                UI/UX Design Services
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-300">
                Transform your digital products with user-centered design that delights customers and drives business results. Our UI/UX services combine aesthetic excellence with data-driven insights to create experiences users love.
              </p>

              <div className="mt-10">
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 font-medium text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400/60">
                  Get a design consultation
                  <ArrowRight className="h-5 w-5" />
                </button>
                <ElegantFormPopup isOpen={showForm} onClose={() => setShowForm(false)} />
              </div>
            </div>

            {/* RIGHT: PNG illustration */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 - rounded-3xl bg-blue-900/20 blur-3xl" />
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src="/ui-ux.webp"
                  alt="UI/UX design process"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none h-16 w-full bg-gradient-to-b from-transparent to-slate-950/60" />
      </section>

      {/* Services */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">UI/UX Design Services We Offer</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Comprehensive design services that cover the entire product development lifecycle, from research to final implementation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 p-8 hover:bg-slate-800 transition group">
                <div className="mb-6 group-hover:scale-110 transition">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4">{service.desc}</p>
                <p className="text-slate-300 text-sm">{service.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-gradient-to-r from-orange-900/20 to-blue-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Benefits of Professional UI/UX Design</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Investing in quality design delivers measurable business outcomes. Here&apos;s what you can expect:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Benefit 1 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">01</div>
              <h3 className="text-xl font-semibold mb-4">Increased Conversions</h3>
              <p className="text-slate-300">
                Well-designed interfaces typically see 30-200% higher conversion rates through improved usability and clearer calls-to-action.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">02</div>
              <h3 className="text-xl font-semibold mb-4">Reduced Development Costs</h3>
              <p className="text-slate-300">
                Proper UX design reduces development rework by 50-80% by catching issues before coding begins.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">03</div>
              <h3 className="text-xl font-semibold mb-4">Higher User Retention</h3>
              <p className="text-slate-300">
                Intuitive designs keep users engaged, with top apps seeing 2-3x longer session times and higher retention rates.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">04</div>
              <h3 className="text-xl font-semibold mb-4">Competitive Advantage</h3>
              <p className="text-slate-300">
                Superior UX is a key differentiator, with 88% of users less likely to return after a bad experience.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">05</div>
              <h3 className="text-xl font-semibold mb-4">Lower Support Costs</h3>
              <p className="text-slate-300">
                Intuitive designs reduce user confusion, decreasing support requests by 40-60%.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">06</div>
              <h3 className="text-xl font-semibold mb-4">Brand Loyalty</h3>
              <p className="text-slate-300">
                Positive experiences create emotional connections, with 70% of customers paying more for better UX.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`}
                  />
                ))}
              </div>
              <span className="text-xl font-medium">5.0 Rating</span>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <div className="bg-slate-800/70 p-8 rounded-xl shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`}
                  />
                ))}
                <span className="ml-2 text-slate-400">
                  {testimonials[currentIndex].rating.toFixed(1)}
                </span>
              </div>
              <p className="text-lg mb-6 italic">&quot;{testimonials[currentIndex].comment}&quot;</p>
              <div className="text-slate-300">
                <p className="font-medium">{testimonials[currentIndex].author}</p>
                {testimonials[currentIndex].verified && (
                  <div className="flex items-center gap-1 mt-2 text-sm text-green-500">
                    <Check className="w-4 h-4" />
                    <span>Verified Review</span>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-12 bg-slate-800/80 hover:bg-slate-700 p-2 rounded-full shadow-md transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-8 top-1/2 -translate-y-1/2 translate-x-12 bg-slate-800/80 hover:bg-slate-700 p-2 rounded-full shadow-md transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${currentIndex === index ? 'bg-orange-500' : 'bg-slate-600'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-10 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          {/* Title + Description */}
          <header className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
            <p className="text-slate-400 mt-4 leading-relaxed">{description}</p>
          </header>

          {/* Tabs */}
          <div className="mt-10 flex items-center justify-center">
            <div className="inline-flex rounded-2xl bg-slate-800/70 p-1 shadow-lg shadow-black/20 ring-1 ring-slate-700">
              {tabs.map(({ key, label, icon: Icon }) => {
                const isActive = active === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`group relative flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-medium transition-all focus:outline-none ${isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                      }`}
                  >
                    {/* pill background */}
                    {isActive && (
                      <motion.span
                        layoutId="tab-pill"
                        className="absolute inset-0 rounded-2xl bg-slate-700"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                    <span className="relative  flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {items.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -3 }}
                  className="bg-slate-800/60 ring-1 ring-slate-700 p-4 text-center">
                  <div className="mx-auto h-16 w-16 overflow-hidden rounded-xl bg-gray-600 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-12 w-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 text-sm font-medium text-slate-200">{item.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-orange-900/30 to-blue-900/30 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Ready To Transform Your User Experience?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Our design team is ready to elevate your digital products with user-centered design that drives results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowForm(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition">
                Start Your Design Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}