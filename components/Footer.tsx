"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX, BsYoutube } from "react-icons/bs";

// --------- Company details (edit yaha) ----------
const COMPANY = {
  name: "RexGalaxy Technology",
  email: "rexgalaxytechnology@gmail.com",
  phone: "+91 74112 11148", // update
  addr1: "A 40, Ithum Tower A, 6th Floor, 606, Noida, Uttar Pradesh 201301"
  // regNo: "Registration No.: 136527", // "" to hide
  // cinNo: "CIN: U72200UP2020PTC136527", // "" to hide
};

// Certifications strip data (local images inside /public/certifications)
const CERTS = [
  { src: "/certifications/mahakumbh.png", label: "Startup India Certified" },
  { src: "/certifications/msme.png", label: "MSME Registered" },
  { src: "/certifications/digital.png", label: "Digital India Initiative" },
  { src: "/certifications/Djgjtal.png", label: "Startup Mahakumbh Partner" },
  { src: "/certifications/sti.png", label: "Invest India Recognized" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* ================= TOP: 5-COLUMN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* 1) BRAND / CONTACT / ADDRESS */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png" // <- put your logo at public/logo.svg
                alt={`${COMPANY.name} logo`}
                width={150}
                height={150}
                priority
              />
            </div>

            <p className="text-sm text-gray-400 mb-5">
              We engineer reliable software, web, and mobile solutions that help you
              launch faster and scale with confidence.
            </p>

            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-500">Email:</span>{" "}
                <Link href={`mailto:${COMPANY.email}`} className="hover:text-orange-400">
                  {COMPANY.email}
                </Link>
              </div>
              <div>
                <span className="text-gray-500">Phone:</span>{" "}
                <Link href={`tel:${COMPANY.phone}`} className="hover:text-orange-400">
                  {COMPANY.phone}
                </Link>
              </div>
              <div className="mt-2">
                <div className="text-gray-500">Address:</div>
                <div>{COMPANY.addr1}</div>
              </div>
            </div>
          </div>

          {/* 2) SOFTWARE SOLUTIONS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Software Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/services/software-dev" className="hover:text-orange-400">Software Development</Link></li>
              <li><Link href="/services/mobile-dev" className="hover:text-orange-400">Mobile App Development</Link></li>
              <li><Link href="/services/app-modernization" className="hover:text-orange-400">Application Modernization</Link></li>
              <li><Link href="/services/saas-dev" className="hover:text-orange-400">SaaS Development</Link></li>
              <li><Link href="/services/ui-ux" className="hover:text-orange-400">UI/UX Services</Link></li>
              <li><Link href="/services/hire-developers" className="hover:text-orange-400">Hire Dedicated Developers</Link></li>
            </ul>
          </div>

          {/* 3) WEB SOLUTIONS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Web Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/services/web-app" className="hover:text-orange-400">Web App Development</Link></li>
              <li><Link href="/services/api-integration" className="hover:text-orange-400">API Integration</Link></li>
              <li><Link href="/services/cloud-consulting" className="hover:text-orange-400">Cloud Consulting</Link></li>
              <li><Link href="/services/devops" className="hover:text-orange-400">DevOps Services</Link></li>
            </ul>
          </div>

          {/* 4) ENTERPRISE SOLUTIONS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Enterprise Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/services/enterprise-software" className="hover:text-orange-400">Enterprise Software</Link></li>
              <li><Link href="/services/software-outsourcing" className="hover:text-orange-400">Software Outsourcing</Link></li>
              <li><Link href="/services/crm-development" className="hover:text-orange-400">CRM Development</Link></li>
              <li><Link href="/services/erp-software" className="hover:text-orange-400">ERP Software</Link></li>
            </ul>
          </div>

          {/* 5) RESOURCES + ABOUT (MERGED) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources &amp; About</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="hover:text-orange-400">Blog</Link></li>
              <li><Link href="/case-studies" className="hover:text-orange-400">Case Studies</Link></li>
              <li><Link href="/about/company-overview" className="hover:text-orange-400">About Us</Link></li>
              <li><Link href="/about/company-culture" className="hover:text-orange-400">Company Culture</Link></li>
              <li><Link href="/about/career" className="hover:text-orange-400">Career</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        {/* ================= SOCIAL ICONS ================= */}
        <div className="flex flex-col justify-center mb-10">
          <h4 className="text-center text-gray-400 font-medium mb-8">
            Recognized by Government of India
          </h4>
          <div className="flex justify-center gap-6 text-2xl">
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebook />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-black transition-colors duration-300"
            >
              <BsTwitterX />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-red-600 transition-colors duration-300"
            >
              <BsYoutube />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-pink-600 transition-colors duration-300"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* ================= GOVT RECOGNITION STRIP ================= */}
        <div className="border-t border-gray-700 pt-10">
          <h4 className="text-center text-gray-400 font-medium mb-8">
            Recognized by Government of India
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {CERTS.map((c) => (
              <div key={c.label} className="flex flex-col items-center text-center bg-white p-4 rounded-lg">
                <div className="relative w-44 h-14">
                  <Image
                    src={c.src}
                    alt={c.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-400">{c.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= LEGAL LINKS + COPYRIGHT ================= */}
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="space-y-1 text-sm text-gray-400">
              <div>© {new Date().getFullYear()} All rights are reserved by {COMPANY.name}</div>
              {/* <div className="flex flex-wrap gap-x-6">
                {COMPANY.regNo && <span>{COMPANY.regNo}</span>}
                {COMPANY.cinNo && <span>{COMPANY.cinNo}</span>}
              </div> */}
            </div>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <li><Link href="/legal/privacy-policies" className="hover:text-orange-400">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-orange-400">Terms of Use</Link></li>
              <li><Link href="/legal/sales-policy" className="hover:text-orange-400">Sales Policy</Link></li>
              <li><Link href="/legal" className="hover:text-orange-400">Legal</Link></li>
              <li><Link href="/sitemap" className="hover:text-orange-400">Site Map</Link></li>
            </ul>
          </div>
        </div>

        {/* ================= DISCLAIMER ================= */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-sm text-gray-400 leading-relaxed">
            <span className="font-semibold text-gray-300">Disclaimer:</span>{" "}
            The information provided on this website is for general informational purposes only.
            While we strive to keep the information up to date and accurate, we make no
            representations or warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability, or availability with respect to the website or the
            information, products, services, or related graphics contained on the website for any
            purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Through this website, you may be able to link to other websites which are not under the
            control of {COMPANY.name}. We have no control over the nature, content, and availability
            of those sites. The inclusion of any links does not necessarily imply a recommendation or
            endorse the views expressed within them.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
