"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Handshake, Heart, Target, Users, Lightbulb, Rocket, Star} from "lucide-react";
import Link from "next/link";

// Color tokens sampled to match your theme (navy + orange accent)
const colors = {
  bg: "#0e1b2a", // deep navy
  bgAlt: "#132538",
  accent: "#ff7a18", // orange
  accentSoft: "#ff9b4b",
  ring: "#2a3d55",
  textMuted: "#a7b4c6",
};

// Small helper component
const SectionTitle: React.FC<{ eyebrow?: string; title: string; subtitle?: string }> = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {eyebrow && (
      <div
        className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm"
        style={{ background: "rgba(255, 122, 24, 0.12)", color: colors.accent }}
      >
        <Sparkles className="h-4 w-4" /> {eyebrow}
      </div>
    )}
    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-base leading-relaxed" style={{ color: colors.textMuted }}>
        {subtitle}
      </p>
    )}
  </div>
);

const values = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Invent with Purpose",
    desc: "We pair technical rigor with creative vision to deliver outcomes that matter.",
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Own the Outcome",
    desc: "We take responsibility from idea to impact—no silos, no excuses.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Win as a Team",
    desc: "We celebrate diverse perspectives and practice radical candor.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Obsess over Value",
    desc: "Every sprint ties back to measurable business results for our clients.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Be Human",
    desc: "Kindness, trust, and integrity guide how we work and grow.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Raise the Bar",
    desc: "We learn continuously and leave things better than we found them.",
  },
];

const perks = [
  { title: "Hybrid-first flexibility", desc: "Work where you’re most effective—home, office, or anywhere in between." },
  { title: "Learning budget", desc: "Annual stipend for courses, conferences, and certifications." },
  { title: "Wellness support", desc: "Comprehensive health coverage and monthly wellness reimbursement." },
  { title: "Time to recharge", desc: "Generous PTO, paid holidays, and company-wide reset days." },
  { title: "Top-tier gear", desc: "Choose the tools you need to do your best work." },
  { title: "Impact days", desc: "Paid time for volunteering in your community." },
];

const timeline = [
  { year: "2018", text: "Founded by industry veterans with a vision to blend business insight with engineering excellence." },
  { year: "2019", text: "First Fortune 500 engagement; established our research & prototypes guild." },
  { year: "2021", text: "Scaled cross-functional delivery squads across continents." },
  { year: "2023", text: "Launched accelerator playbooks for faster idea-to-value cycles." },
  { year: "Today", text: "Continuing to craft digital excellence with our clients and partners." },
];

export default function CulturePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-40" style={{ background: colors.accent }} />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full blur-3xl opacity-30" style={{ background: colors.accentSoft }} />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm"
                style={{ background: "rgba(255, 122, 24, 0.12)", color: colors.accent }}
              >
                <Star className="h-4 w-4" /> Established in 2018
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                The Culture that Powers <span style={{ color: colors.accent }}>RexGalaxy</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed" style={{ color: colors.textMuted }}>
                We combine technical expertise with creative vision and a values-driven mindset. Here’s how we build teams,
                make decisions, and show up for each other and our clients—every day.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {/* Primary button */}
                <Link
                  className="rounded-2xl px-6 py-5 text-base font-medium shadow-lg transition hover:opacity-90"
                  style={{ background: colors.accent, color: "#0b0b0b" }}
                  href="/about/career"
                >
                  Join Our Team
                </Link>
                {/* Outline button */}
                {/* <button
                  className="rounded-2xl border px-6 py-5 text-base font-medium transition hover:bg-white/5"
                  style={{ borderColor: colors.ring, color: "#ffffff80" }}
                >
                  Meet the People <ArrowRight className="ml-2 inline-block h-4 w-4" />
                </button> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative border-t" style={{ borderColor: colors.ring, backgroundColor: colors.bgAlt }}>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Our Core Values"
            title="What We Believe In"
            subtitle="Principles that shape our decisions, our products, and the way we collaborate."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {/* Card (plain div) */}
                <div
                  className="h-full rounded-2xl p-6 shadow-lg ring-1 backdrop-blur-md"
                  style={{
                    borderColor: colors.ring,
                    color: "white",
                    background: "rgba(255,255,255,0.02)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <div className="mb-3 flex items-center gap-3" style={{ color: colors.accent }}>
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: colors.textMuted }}>
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="relative border-t" style={{ borderColor: colors.ring }}>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="How We Work"
            title="Crafted Processes. Human Pace."
            subtitle="Rituals and practices that keep our teams aligned and our delivery predictable."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              {
                title: "Discovery → Delivery",
                points: [
                  "Outcome mapping with clients to define value and guardrails.",
                  "Design sprints to derisk assumptions early.",
                  "Dual-track agile to balance discovery and build.",
                ],
              },
              {
                title: "Quality by Default",
                points: [
                  "Code reviews, pairing, and automated checks in every PR.",
                  "Security and accessibility as non-negotiables.",
                  "Dashboards that make delivery health visible.",
                ],
              },
              {
                title: "Grow Together",
                points: [
                  "Weekly guilds for craft (FE, BE, Cloud, Data, PM).",
                  "Career frameworks and mentorship for transparent growth.",
                  "Quarterly feedback cycles focused on strengths.",
                ],
              },
            ].map((b, i) => (
              // Card (plain div)
              <div
                key={i}
                className="rounded-2xl p-6 ring-1"
                style={{ borderColor: colors.ring, background: colors.bgAlt, color: "white" }}
              >
                <h3 className="text-lg font-semibold text-white">{b.title}</h3>
                <ul className="mt-4 space-y-3 text-sm" style={{ color: colors.textMuted }}>
                  {b.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: colors.accent }} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="relative border-y" style={{ borderColor: colors.ring, background: colors.bgAlt }}>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Our Journey" title="From Idea to Impact" />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-5">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {/* Card (plain div) */}
                <div
                  className="relative rounded-2xl p-5 ring-1"
                  style={{ background: "rgba(255,255,255,0.02)", color: "white", borderColor: colors.ring }}
                >
                  <div className="text-sm font-semibold" style={{ color: colors.accent }}>
                    {t.year}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: colors.textMuted }}>
                    {t.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Benefits & Perks"
            title="We Invest in People"
            subtitle="Sustainable performance starts with a healthy, supported team."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p, i) => (
              <div key={i} className="rounded-2xl p-6 ring-1" style={{ borderColor: colors.ring, background: colors.bgAlt }}>
                <h3 className="text-white">{p.title}</h3>
                <p className="mt-2 text-sm" style={{ color: colors.textMuted }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t" style={{ borderColor: colors.ring, background: colors.bgAlt }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl opacity-40"
            style={{ background: colors.accent }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div
            className="relative isolate overflow-hidden rounded-3xl p-8 shadow-2xl sm:p-12"
            style={{ background: `linear-gradient(135deg, ${colors.bg} 0%, ${colors.bgAlt} 60%)` }}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">Build what matters—together</h3>
              <p className="mt-3 text-base" style={{ color: colors.textMuted }}>
                If this sounds like a place you’d thrive, we’d love to meet you. Explore open roles or just say hello.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                {/* <a
                  href="/careers"
                  className="rounded-2xl px-6 py-5 text-base font-medium shadow-lg transition hover:opacity-90"
                  style={{ background: colors.accent, color: "#0b0b0b" }}
                >
                  See Open Roles
                </a> */}
                <Link
                  href="/contact"
                  className="rounded-2xl border px-6 py-5 text-base font-medium transition hover:bg-white/5"
                  style={{ borderColor: colors.ring, color: "#ffffff80" }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="border-t py-10 text-center text-sm" style={{ borderColor: colors.ring, color: colors.textMuted }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">© {new Date().getFullYear()} RexGalaxy. Built with care.</div>
      </footer>
    </main>
  );
}
