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
    { name: "Dart", logo: "/tech-icons/dart.svg" },
    { name: "JavaScript", logo: "/tech-icons/js.svg" },
    { name: "TypeScript", logo: "/tech-icons/typescript.svg" },
    { name: "Swift", logo: "/tech-icons/swift.svg" },
    { name: "Kotlin", logo: "/tech-icons/kotlin.svg" },
    { name: "Java", logo: "/tech-icons/java.svg" },
  ],
  databases: [
    { name: "Firebase", logo: "/tech-icons/firebase.svg" },
    { name: "Realm", logo: "/tech-icons/realm.svg" },
    { name: "SQLite", logo: "/tech-icons/sqlite.svg" },
    { name: "MongoDB", logo: "/tech-icons/mongodb.svg" },
  ],
  frameworks: [
    { name: "Flutter", logo: "/tech-icons/flutter.svg" },
    { name: "React Native", logo: "/tech-icons/react.svg" },
    { name: "Ionic", logo: "/tech-icons/ionic.svg" },
    { name: "Xamarin", logo: "/tech-icons/xamarin.svg" },
    { name: "SwiftUI", logo: "/tech-icons/swiftui.svg" },
  ],
};

const tabs = [
  { key: "languages", label: "Languages", icon: MonitorCog },
  { key: "databases", label: "Database", icon: DbIcon },
  { key: "frameworks", label: "Frameworks", icon: Boxes },
] as const;

type StackKey = typeof tabs[number]["key"];

type Item = { name: string; logo: string };


export default function MobileAppDevelopment(){
  const title = "Our Tech Stack"
  const description = "Our tech stack for Mobile App development encompasses the latest technologies..."
  const techStack = DEFAULT_STACK
  
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
      title: "Custom Mobile App Development",
      desc: "Tailored mobile solutions designed specifically for your business needs and user requirements",
      detail: "We specialize in custom mobile app development, crafting innovative and scalable apps that align perfectly with clients' requirements, delivering a competitive edge."
    },
    {
      icon: <Layers className="w-10 h-10 text-blue-500" />,
      title: "Cross-Platform App Development",
      desc: "Solutions that work seamlessly across iOS and Android platforms",
      detail: "Our expertise in cross-platform development ensures your app reaches the widest audience with native-like performance and user experience."
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: "UI/UX Design for Mobile",
      desc: "Transform your concepts into intuitive, user-friendly mobile experiences",
      detail: "We provide end-to-end support with mobile-first design principles to create engaging and successful mobile applications."
    }
  ];

  const testimonials = [
    {
      rating: 4.5,
      comment: "Their team delivered an outstanding mobile app that exceeded our expectations.",
      author: "CEO, Retail Startup",
      verified: true
    },
    {
      rating: 5,
      comment: "The app they developed has significantly improved our customer engagement.",
      author: "Product Manager, Healthcare Company",
      verified: true
    },
    {
      rating: 5,
      comment: "They delivered our mobile app on time and within budget. Highly recommended!",
      author: "CTO, FinTech Startup",
      verified: true
    },
    {
      rating: 5,
      comment: "The user experience of the app they built is exceptional.",
      author: "Marketing Director, E-commerce Company",
      verified: true
    }
  ];

  return (
    <div className="bg-slate-900 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-900/30 to-blue-900/30" />

        <div className="container relative  mx-auto px-6 py-6 md:py-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* LEFT: text */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Mobile App Development Services
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-300">
                Transform your business with our cutting-edge mobile app development services. Our expert developers specialize in creating secure, intuitive mobile applications that prioritize performance, user experience, and scalability, leveraging the latest mobile technologies to drive business growth.
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
                  src="/services/mobile-app-dev.png"
                  alt="Developers working on mobile apps"
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
            <h2 className="text-3xl font-bold mb-4">Mobile App Development Services We Offer</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Our mobile app development services are designed to create engaging, high-performance applications that meet your business objectives and delight your users.
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
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Mobile App Development Services</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Our mobile app development services are designed to deliver exceptional value to your business and your users. Here are the key benefits you can expect:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Benefit 1 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">01</div>
              <h3 className="text-xl font-semibold mb-4">Enhanced User Engagement</h3>
              <p className="text-slate-300">
                Mobile apps provide direct access to your customers, enabling personalized experiences, push notifications, and seamless interactions that keep users engaged with your brand.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">02</div>
              <h3 className="text-xl font-semibold mb-4">Cross-Platform Compatibility</h3>
              <p className="text-slate-300">
                Our expertise in cross-platform development ensures your app works flawlessly on both iOS and Android, maximizing your reach while minimizing development costs.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">03</div>
              <h3 className="text-xl font-semibold mb-4">Offline Functionality</h3>
              <p className="text-slate-300">
                We build apps with offline capabilities, allowing users to access key features and content even without an internet connection, enhancing usability and convenience.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">04</div>
              <h3 className="text-xl font-semibold mb-4">Device Feature Integration</h3>
              <p className="text-slate-300">
                Our apps leverage native device features like camera, GPS, biometrics, and more to create rich, immersive experiences that web apps can&apos;t match.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">05</div>
              <h3 className="text-xl font-semibold mb-4">App Store Visibility</h3>
              <p className="text-slate-300">
                Presence in app stores increases your brand visibility and credibility while making it easy for users to discover and download your application.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-slate-800/70 p-8 hover:bg-slate-800 transition">
              <div className="text-orange-500 font-bold text-lg mb-2">06</div>
              <h3 className="text-xl font-semibold mb-4">Performance Optimization</h3>
              <p className="text-slate-300">
                We optimize apps for smooth performance, fast loading times, and minimal battery consumption, ensuring a positive user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 bg-slate-800/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">See What Our Clients Have To Say</h2>
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
            <h2 className="text-3xl font-bold mb-6">Ready To Get Started?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Our mobile app development team is ready to bring your ideas to life with cutting-edge solutions for iOS and Android.
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