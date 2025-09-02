/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect, useRef } from 'react';
import dynamic from "next/dynamic";
import { createPortal } from "react-dom";

// Dynamically import modal to avoid SSR issues
const ElegantFormPopup = dynamic(() => import("@/components/PopupForm"), {
  ssr: false,
});

// Counter component with animation
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div id={`counter-${end}`} className="text-2xl font-bold text-orange-500">
      {count}{suffix}
    </div>
  );
};

// Improved scroll-based animation hook
// Improved scroll-based animation hook - Modified for entry-only animations
const useScrollAnimation = (threshold = 0.1, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false); // Track if we've animated once

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger when coming into view for the first time
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true; // Mark as animated
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);

  return { isVisible, elementRef };
};
// Simple portal wrapper
function BodyPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? createPortal(children, document.body) : null;
}

const CompanyOverview = () => {
  // Animation hooks for different sections with proper spacing
  const hero = useScrollAnimation(0.3);
  const story = useScrollAnimation(0.2);
  const storyImage = useScrollAnimation(0.2);
  const mission = useScrollAnimation(0.3);
  const leadership = useScrollAnimation(0.3)
  const values = useScrollAnimation(0.2);
  // const team = useScrollAnimation(0.2);
  const features = useScrollAnimation(0.2);
  const testimonials = useScrollAnimation(0.2);
  const cta = useScrollAnimation(0.2);
  const [showForm, setShowForm] = useState(false);

  // Lock body scroll while modal open
  useEffect(() => {
    if (!showForm) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showForm]);
  return (
    <>
      <div className="min-h-screen bg-slate-900 text-gray-100 overflow-hidden">
        {/* Hero Section */}
        <section
          className="relative py-24 overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/About.webp')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 opacity-70"></div>

          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div
              ref={hero.elementRef}
              className={`text-center max-w-4xl mx-auto transition-all duration-1000 ease-out ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
            >
              <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm text-orange-400 px-6 py-2 rounded-full text-sm font-medium mb-8 border border-orange-500/30">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Established in 2018
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Crafting Digital Excellence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">Since 2018</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                At RexGalaxy, we combine technical expertise with creative vision to deliver transformative digital solutions that drive business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div
                ref={storyImage.elementRef}
                className={`relative rounded-xl overflow-hidden shadow-2xl h-96 transition-all duration-1000 ease-out ${storyImage.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
              >
                <img
                  src="/about/team.jpg"
                  alt="Our team collaboration"
                  className="w-full h-full object-cover"
                />

              </div>
              <div
                ref={story.elementRef}
                className={`transition-all duration-1000 ease-out delay-200 ${story.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
                  }`}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-100">
                  <span className="border-b-4 border-orange-500 pb-2">Our Heritage</span>
                </h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Founded in 2018 by industry veterans, RexGalaxy was born from a shared vision to create a technology partner that truly understands business challenges.
                    What began as a small team of passionate developers has grown into a full-service digital transformation agency.
                  </p>
                  <p>
                    Our journey has been marked by continuous learning and adaptation. We&#39;ve evolved alongside technological advancements, always staying ahead of the curve to
                    deliver solutions that are not just current, but future-ready.
                  </p>
                  <p>
                    Today, we&lsquo;re proud to serve clients across four continents, helping them navigate digital transformation with confidence and strategic insight.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-orange-500">
                    <AnimatedCounter end={50} suffix="+" />
                    <div className="text-sm text-gray-400">Global Clients</div>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-orange-500">
                    <AnimatedCounter end={80} suffix="+" />
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div
              ref={mission.elementRef}
              className={`text-center mb-16 transition-all duration-1000 ease-out ${mission.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-100">
                <span className="border-b-4 border-orange-500 pb-2">Our Guiding Principles</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The foundation of everything we do at RexGalaxy
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className={`bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 border border-slate-700 hover:border-orange-500/50 ${mission.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                }`}>
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500/20 p-3 rounded-full mr-4 border border-orange-500/30">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100">Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To empower organizations with innovative, scalable technology solutions that drive measurable business results. We combine technical excellence with
                  strategic thinking to create digital products that users love and businesses value.
                </p>
              </div>
              <div className={`bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 delay-200 border border-slate-700 hover:border-orange-500/50 ${mission.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
                }`}>
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500/20 p-3 rounded-full mr-4 border border-orange-500/30">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100">Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To be the most trusted digital transformation partner for businesses worldwide. We envision a future where technology seamlessly bridges the gap between
                  business objectives and user needs, creating exceptional value for all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <div
              ref={values.elementRef}
              className={`text-center mb-16 transition-all duration-1000 ease-out ${values.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-100">
                <span className="border-b-4 border-orange-500 pb-2">Our Core Values</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The principles that define our culture and guide our decisions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Innovation", desc: "We challenge conventional thinking to develop breakthrough solutions that create competitive advantage for our clients.", delay: 0 },
                { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", title: "Excellence", desc: "We pursue mastery in everything we do, delivering work that meets the highest standards of quality and craftsmanship.", delay: 200 },
                { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "Integrity", desc: "We build trust through transparency, honesty, and accountability in all our relationships and commitments.", delay: 400 }
              ].map((value, index) => (
                <div
                  key={index}
                  className={`bg-slate-700 p-8 rounded-xl border border-slate-600 hover:border-orange-500/50 transition-all duration-700 ease-out ${values.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                    }`}
                  style={{ transitionDelay: values.isVisible ? `${value.delay}ms` : '0ms' }}
                >
                  <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={value.icon}></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-gray-100">{value.title}</h3>
                  <p className="text-gray-300 text-center">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ------------------------- Leadership Section ------------------------- */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div
              ref={leadership.elementRef}
              className={`text-center mb-16 transition-all duration-1000 ease-out ${leadership.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="border-b-4 border-orange-500 pb-2">Meet the Leader</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                With over 10 years of experience, we have got a well-seasoned team at the helm
              </p>
            </div>
            <div
              className={`max-w-5xl mx-auto bg-gradient-to-br from-slate-800 to-slate-700 p-4 md:p-6 rounded-2xl border border-slate-600/50 transition-all duration-1000 ease-out delay-200 ${leadership.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            >
              <div className=" items-center">
                <div className={`md:col-span-2 transition-all duration-1000 ease-out delay-400 ${leadership.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">Rohit Tyagi</h3>
                  <h4 className="text-xl font-semibold text-teal-400 mb-4">Founder & CEO</h4>
                  <p className="text-gray-300 mb-4">
                    The guiding light of RexGalaxy, Rohit Tyagi exudes a dynamic, influential and exemplary leadership style that
                    motivates and inspires everyone around him to dream big, learn more, and perform better every day.
                  </p>
                  <p className="text-gray-300">
                    Responsible for overseeing every facet of our esteemed organization, Sumit is a leader who brings out the best
                    in every employee. As the backbone of RexGalaxy, he is fueled with a desire to work hard and make a difference
                    in the technology industry.
                  </p>
                  <div className="mt-6 flex space-x-4">
                    <a href="https://www.linkedin.com/in/rohit-tyagi-0427401a2/" className="text-gray-400 hover:text-orange-500 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ------------------------- Team Section ------------------------- */}
        {/* <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div
            ref={team.elementRef}
            className={`text-center mb-16 transition-all duration-1000 ease-out ${team.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-100">
              <span className="border-b-4 border-orange-500 pb-2">Leadership Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The experienced professionals guiding RexGalaxy&lsquo;s vision and growth
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "John Doe", role: "Founder & CEO", desc: "Technology visionary with 15+ years of experience leading digital transformation initiatives for Fortune 500 companies.", delay: 0 },
              { name: "Jane Smith", role: "Chief Technology Officer", desc: "Former Google engineer with deep expertise in cloud architecture and scalable system design.", delay: 200 },
              { name: "Mike Johnson", role: "Lead Developer", desc: "Full-stack specialist with expertise in React, Node.js, and cloud-native application development.", delay: 400 }
            ].map((member, index) => (
              <div
                key={index}
                className={`bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-700 ease-out border border-slate-700 hover:border-orange-500/50 ${team.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                  }`}
                style={{ transitionDelay: team.isVisible ? `${member.delay}ms` : '0ms' }}
              >
                <div className="h-64 relative">
                  <img
                    src={`https://via.placeholder.com/400x300/334155/f97316?text=${member.name.replace(' ', '+')}`}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/40 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-100">{member.name}</h3>
                  <p className="text-orange-500 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.desc}</p>
                  <div className="mt-4 flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

        {/* Why Choose Us */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <div
              ref={features.elementRef}
              className={`text-center mb-16 transition-all duration-1000 ease-out ${features.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-100">
                <span className="border-b-4 border-orange-500 pb-2">Why Partner With RexGalaxy?</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                What distinguishes us in the competitive technology landscape
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Strategic Technology Partner", desc: "We go beyond implementation to become true technology partners, aligning solutions with your business objectives for maximum impact.", delay: 0 },
                { icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4", title: "Enterprise-Grade Solutions", desc: "Our solutions are built with scalability, security, and performance in mind, ready to support your growth at any stage.", delay: 200 },
                { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", title: "Dedicated Support", desc: "Our commitment doesn't end at delivery. We provide ongoing support and optimization to ensure your solution continues to deliver value.", delay: 400 },
                { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", title: "Proven Methodology", desc: "Our refined development process ensures predictable outcomes, on-time delivery, and solutions that truly meet your requirements.", delay: 600 }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start transition-all duration-700 ease-out ${features.isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-16' : 'translate-x-16'}`
                    }`}
                  style={{ transitionDelay: features.isVisible ? `${feature.delay}ms` : '0ms' }}
                >
                  <div className="bg-orange-500/20 p-3 rounded-lg mr-6 border border-orange-500/30">
                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon}></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-100">{feature.title}</h3>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-orange-900">
          <div className="container mx-auto px-6">
            <div
              ref={testimonials.elementRef}
              className={`text-center mb-16 transition-all duration-1000 ease-out ${testimonials.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                <span className="border-b-4 border-orange-400 pb-2">Client Success Stories</span>
              </h2>
              <p className="text-orange-200 max-w-2xl mx-auto">
                Don&lsquo;t just take our word for it - hear what our clients say about working with us
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { quote: "RexGalaxy transformed our digital presence completely. Their technical expertise and strategic approach delivered results beyond our expectations.", author: "Sarah Johnson", position: "CEO, TechStart", delay: 0 },
                { quote: "The team's dedication to understanding our business challenges and delivering tailored solutions has been exceptional. Highly recommended!", author: "Michael Chen", position: "CTO, InnovateCorp", delay: 200 },
                { quote: "Working with RexGalaxy has been a game-changer. They're not just developers - they're true strategic partners in our digital transformation.", author: "Emily Rodriguez", position: "Director, DigitalFlow", delay: 400 }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-orange-400/20 transition-all duration-700 ease-out ${testimonials.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                    }`}
                  style={{ transitionDelay: testimonials.isVisible ? `${testimonial.delay}ms` : '0ms' }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/90 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&ldquo;</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-orange-200 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="border-b-2 border-gray-500 bg-slate-900 py-20">
          <div className="container mx-auto px-6 text-center">
            <div
              ref={cta.elementRef}
              className={`mx-auto max-w-4xl transition-all duration-1000 ease-out ${
                cta.isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-100">
                Ready to Transform Your
                <span className="bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
                  {" "}
                  Digital Future?
                </span>
              </h2>
              <p className="mb-8 text-xl text-gray-300">
                Let&apos;s discuss how RexGalaxy can help accelerate your business growth
                through innovative technology solutions.
              </p>

              <div className="mt-10">
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 font-medium text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
                >
                  Get a custom quote
                </button>
              </div>

              {/* Counters */}
              <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-4">
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
                  <AnimatedCounter end={4} suffix=" Years" />
                  <div className="mt-2 text-sm text-gray-400">Experience</div>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
                  <AnimatedCounter end={40} suffix="+" />
                  <div className="mt-2 text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
                  <AnimatedCounter end={80} suffix="+" />
                  <div className="mt-2 text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
                  <AnimatedCounter end={24} suffix="/7" />
                  <div className="mt-2 text-sm text-gray-400">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {showForm && (
        <BodyPortal>
          <ElegantFormPopup isOpen={showForm} onClose={() => setShowForm(false)} />
        </BodyPortal>
      )}
    </>
  );
};

export default CompanyOverview;