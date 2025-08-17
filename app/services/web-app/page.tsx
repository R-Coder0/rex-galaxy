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
  languages: [
    { name: "JavaScript", logo: "/tech-icons/js.svg" },
    { name: "TypeScript", logo: "/tech-icons/typescript.svg" },
    { name: "Python", logo: "/tech-icons/python.svg" },
    { name: "Java", logo: "/tech-icons/java.svg" },
  ],
  databases: [
    { name: "PostgreSQL", logo: "/tech-icons/postgresql.svg" },
    { name: "MongoDB", logo: "/tech-icons/mongodb.svg" },
    { name: "Firebase", logo: "/tech-icons/firebase.svg" },
    { name: "Redis", logo: "/tech-icons/redis.svg" },
  ],
  frameworks: [
    { name: "React", logo: "/tech-icons/react.svg" },
    { name: "Next.js", logo: "/tech-icons/next.svg" },
    { name: "Angular", logo: "/tech-icons/angular.svg" },
    { name: "Vue", logo: "/tech-icons/vue.svg" },
    { name: "Django", logo: "/tech-icons/django.svg" },
    { name: "Flask", logo: "/tech-icons/flask.svg" },
  ],
};

const tabs = [
  { key: "languages", label: "Languages", icon: MonitorCog },
  { key: "databases", label: "Database", icon: DbIcon },
  { key: "frameworks", label: "Frameworks", icon: Boxes },
] as const;

type StackKey = typeof tabs[number]["key"];

type Item = { name: string; logo: string };

type Props = {
  title?: string;
  description?: string;
  techStack?: {
    languages: Item[];
    databases: Item[];
    frameworks: Item[];
  };
};

export default function WebAppDevelopment({
  title = "Our Web Tech Stack",
  description = "Our technology stack for modern web application development",
  techStack = DEFAULT_STACK,
}: Props) {
  const [active, setActive] = useState<StackKey>("languages");
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
      title: "Custom Web Applications",
      desc: "Tailored web solutions designed specifically for your business needs and user requirements",
      detail: "We build custom web applications that solve real business problems with intuitive interfaces and scalable architectures."
    },
    {
      icon: <Layers className="w-10 h-10 text-blue-500" />,
      title: "Progressive Web Apps",
      desc: "Modern PWAs that combine the best of web and mobile app experiences",
      detail: "Our PWAs deliver app-like experiences with offline capabilities, push notifications, and fast performance."
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: "Single Page Applications",
      desc: "Fast, responsive applications that provide seamless user experiences",
      detail: "We develop SPAs using React, Angular, or Vue that eliminate page reloads and provide fluid navigation."
    }
  ];

  const testimonials = [
    {
      rating: 5,
      comment: "They delivered a complex web application that exceeded our expectations in both performance and design.",
      author: "CTO, E-commerce Platform",
      verified: true
    },
    {
      rating: 5,
      comment: "The web app they built has transformed our internal operations and improved efficiency by 40%.",
      author: "Operations Director, Logistics Company",
      verified: true
    },
    {
      rating: 4.5,
      comment: "Their team demonstrated deep expertise in modern web technologies and delivered ahead of schedule.",
      author: "Product Manager, SaaS Startup",
      verified: true
    },
    {
      rating: 5,
      comment: "The progressive web app they developed has significantly increased our mobile engagement.",
      author: "Marketing Head, Retail Brand",
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
                Web Application Development Services
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-300">
                Transform your business with powerful, scalable web applications built using modern technologies. 
                Our expert developers create responsive, secure, and high-performance web solutions that drive 
                engagement and deliver measurable results.
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
                  src="/services/web-app-dev.png"
                  alt="Web application development"
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
            <h2 className="text-3xl font-bold mb-4">Web Application Services We Offer</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Our comprehensive web application development services help businesses leverage the power of modern web technologies to solve complex challenges and deliver exceptional user experiences.
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
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Web Application Development</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Modern web applications offer numerous advantages over traditional software. Here&lsquo;s how our web development services can benefit your business:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Benefit 1 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">01</div>
              <h3 className="text-xl font-semibold mb-4">Cross-Platform Compatibility</h3>
              <p className="text-slate-300">
                Web apps work seamlessly across devices and operating systems, eliminating the need for multiple versions. Our responsive designs ensure optimal performance on any screen size.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">02</div>
              <h3 className="text-xl font-semibold mb-4">Always Up-to-Date</h3>
              <p className="text-slate-300">
                Unlike traditional software, web applications are always current. We implement continuous deployment strategies to ensure your users always have the latest features.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">03</div>
              <h3 className="text-xl font-semibold mb-4">Enhanced Security</h3>
              <p className="text-slate-300">
                We implement robust security measures including HTTPS, CSP, and regular security audits to protect your data and your users&apos; information.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">04</div>
              <h3 className="text-xl font-semibold mb-4">Cost-Effective Development</h3>
              <p className="text-slate-300">
                Web applications typically require less development time and resources compared to native apps, while still delivering powerful functionality.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">05</div>
              <h3 className="text-xl font-semibold mb-4">Scalable Infrastructure</h3>
              <p className="text-slate-300">
                Our web apps are built on cloud-native architectures that can scale effortlessly to handle growing user bases and increasing data loads.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">06</div>
              <h3 className="text-xl font-semibold mb-4">Improved User Engagement</h3>
              <p className="text-slate-300">
                Modern web technologies enable app-like experiences with fast loading, smooth animations, and offline capabilities that keep users engaged.
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
                    <span className="relative flex items-center gap-2">
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
            <h2 className="text-3xl font-bold mb-6">Ready To Build Your Web Application?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how we can create a powerful web application that meets your business objectives and delights your users.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowForm(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition">
                Get Project Estimate
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}