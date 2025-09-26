/* eslint-disable @next/next/no-img-element */
// app/about/career/page.tsx  (SERVER COMPONENT)
import type { Metadata } from "next";
import Image from "next/image";
import CareerForm from "./CareerForm"; // client component
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | RexGalaxy",
  description: "Join RexGalaxy and shape the future of technology with us.",
};

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#0b1120] text-white">
      {/* Hero */}
      <section className="relative py-36 text-center">
        <div className="absolute inset-0">
          <img
            src="/career/hero.webp"
            alt="RexGalaxy team"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold md:text-6xl">Careers</h1>
          <p className="mt-4 text-lg text-white/70">
            Let’s shape the future of technology together!
          </p>
        </div>
      </section>

      {/* Dynamic Workplace */}
      {/* Dynamic Workplace */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-4 md:grid-cols-2">
        {/* TEXT FIRST ON MOBILE */}
        <div className="order-1 md:order-2">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            Be a part of a dynamic workplace that fosters growth and innovation
          </h2>
          <p className="mb-6 text-white/70">
            At RexGalaxy Technology, we’re committed to doing great things by fostering a culture of innovation and growth. Our like-minded family works together towards shared goals with a spirit of determination. Join our team and experience a culture of constant growth and education, where we build futuristic products and solutions for millions of users together.
          </p>
          <Link
            href="/about/company-culture"
            className="inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-400"
          >
            Know More
          </Link>
        </div>

        {/* IMAGE SECOND ON MOBILE */}
        <div className="order-2 md:order-1 relative aspect-[4/3] overflow-hidden rounded-2xl">
         <img
            src="/career/company-cluture.webp"
            alt="Dynamic workplace at RexGalaxy"
            className="object-contain"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>


      {/* Why Us */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            Why RexGalaxy?
          </h2>
          <p className="mb-6 text-white/70">
            A position at RexGalaxy offers more than just a job; it’s an
            opportunity to contribute to the greater good.
          </p>
          <ul className="space-y-3 text-white/80">
            <li>✔ Promotes diversity and inclusivity</li>
            <li>✔ Encourages individual growth and development</li>
            <li>✔ Recognizes and values effort</li>
            <li>✔ Fosters a collaborative and fun environment</li>
            <li>✔ Cultivates autonomy and flexibility in work</li>
            <li>✔ World-class employee benefits</li>
          </ul>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
          <img
            src="/career/WCU.png"
            alt="Our Team"
            className="object-cover"
          />
        </div>
      </section>

      {/* Form (client) */}
      <section id="form" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-semibold">
          Drop in Your Resume Here and Get in Touch With Us!
        </h2>
        <CareerForm />
      </section>
    </main>
  );
}
