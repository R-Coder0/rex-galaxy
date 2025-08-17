'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { MonitorCog, Database as DbIcon, Boxes } from "lucide-react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ArrowRight } from "lucide-react";
import { Code, Zap, Layers, Star, Check } from 'lucide-react';
import ElegantFormPopup from '@/components/PopupForm';

const DEFAULT_STACK = {
  platforms: [
    { name: "AWS", logo: "/tech-icons/aws.svg" },
    { name: "Azure", logo: "/tech-icons/azure.svg" },
    { name: "Google Cloud", logo: "/tech-icons/gcp.svg" },
    { name: "Kubernetes", logo: "/tech-icons/kubernetes.svg" },
    { name: "Docker", logo: "/tech-icons/docker.svg" },
  ],
  approaches: [
    { name: "Microservices", logo: "/tech-icons/microservices.svg" },
    { name: "API-first", logo: "/tech-icons/api.svg" },
    { name: "Cloud-native", logo: "/tech-icons/cloud.svg" },
    { name: "CI/CD", logo: "/tech-icons/cicd.svg" },
  ],
  technologies: [
    { name: "Node.js", logo: "/tech-icons/node.svg" },
    { name: ".NET Core", logo: "/tech-icons/dotnetcore.svg" },
    { name: "React", logo: "/tech-icons/react.svg" },
    { name: "Angular", logo: "/tech-icons/angular.svg" },
    { name: "Spring Boot", logo: "/tech-icons/springboot.svg" },
  ],
};

const tabs = [
  { key: "platforms", label: "Platforms", icon: MonitorCog },
  { key: "approaches", label: "Approaches", icon: DbIcon },
  { key: "technologies", label: "Technologies", icon: Boxes },
] as const;

type StackKey = typeof tabs[number]["key"];

type Item = { name: string; logo: string };

type Props = {
  title?: string;
  description?: string;
  techStack?: {
    platforms: Item[];
    approaches: Item[];
    technologies: Item[];
  };
};

export default function ApplicationModernization({
  title = "Our Modernization Stack",
  description = "Our technology stack for application modernization encompasses the latest platforms and approaches...",
  techStack = DEFAULT_STACK,
}: Props) {
  const [active, setActive] = useState<StackKey>("platforms");
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
      icon: <Code className="w-10 h-10 text-orange-500" />,
      title: "Legacy System Modernization",
      desc: "Transform outdated systems into modern, scalable applications with improved performance",
      detail: "We specialize in modernizing legacy applications, migrating them to contemporary architectures while preserving business logic and data integrity."
    },
    {
      icon: <Layers className="w-10 h-10 text-blue-500" />,
      title: "Cloud Migration",
      desc: "Move your applications to the cloud for enhanced scalability and reduced infrastructure costs",
      detail: "Our cloud migration expertise ensures smooth transition to AWS, Azure, or GCP with minimal downtime and maximum performance benefits."
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: "Architecture Modernization",
      desc: "Redesign monolithic applications into microservices for greater agility",
      detail: "We help decompose monolithic applications into modular microservices architectures that enable faster development cycles and easier maintenance."
    }
  ];

  const testimonials = [
    {
      rating: 5,
      comment: "Their modernization of our legacy system was flawless - zero downtime and doubled performance.",
      author: "CIO, Financial Services Company",
      verified: true
    },
    {
      rating: 4.5,
      comment: "The cloud migration was completed ahead of schedule with no disruption to our operations.",
      author: "IT Director, Healthcare Provider",
      verified: true
    },
    {
      rating: 5,
      comment: "Our application performance improved 300% after their architecture modernization.",
      author: "CTO, Logistics Company",
      verified: true
    },
    {
      rating: 5,
      comment: "They modernized our 20-year-old system while maintaining all business rules - impressive work!",
      author: "VP Engineering, Manufacturing Firm",
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
                Application Modernization Services
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-300">
                Transform your legacy systems into modern, scalable applications with our comprehensive modernization services. We help businesses revitalize outdated applications, migrate to the cloud, and adopt modern architectures to improve performance, reduce costs, and enable digital transformation.
              </p>

              <div className="mt-10">
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 font-medium text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400/60">
                  Get a custom quote
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
                  src="/services/app-modernization.png"
                  alt="Application modernization process"
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
            <h2 className="text-3xl font-bold mb-4">Application Modernization Services We Offer</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Our comprehensive modernization services help businesses transform outdated systems into agile, cloud-ready applications that drive digital transformation.
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
            <h2 className="text-3xl font-bold mb-4">Benefits of Application Modernization</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Modernizing your applications delivers tangible business value across multiple dimensions. Here are the key benefits you can expect:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Benefit 1 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">01</div>
              <h3 className="text-xl font-semibold mb-4">Improved Performance</h3>
              <p className="text-slate-300">
                Modernized applications typically see 2-5x performance improvements through optimized architectures, cloud scaling, and updated technologies.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">02</div>
              <h3 className="text-xl font-semibold mb-4">Reduced Maintenance Costs</h3>
              <p className="text-slate-300">
                Modern architectures reduce maintenance costs by 40-60% through simplified infrastructure, automated processes, and easier troubleshooting.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">03</div>
              <h3 className="text-xl font-semibold mb-4">Enhanced Security</h3>
              <p className="text-slate-300">
                Modern applications incorporate the latest security protocols, reducing vulnerabilities and ensuring compliance with current standards.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">04</div>
              <h3 className="text-xl font-semibold mb-4">Better Scalability</h3>
              <p className="text-slate-300">
                Cloud-native architectures allow seamless scaling to handle traffic spikes and business growth without infrastructure overhauls.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">05</div>
              <h3 className="text-xl font-semibold mb-4">Faster Time-to-Market</h3>
              <p className="text-slate-300">
                Modern development practices enable 50-70% faster feature delivery through CI/CD pipelines and modular architectures.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">06</div>
              <h3 className="text-xl font-semibold mb-4">Improved User Experience</h3>
              <p className="text-slate-300">
                Modern interfaces and responsive designs significantly enhance user satisfaction and productivity.
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
              className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
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
            <h2 className="text-3xl font-bold mb-6">Ready To Modernize Your Applications?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Our modernization experts are ready to assess your current systems and create a transformation roadmap tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowForm(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition">
                Get Modernization Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}