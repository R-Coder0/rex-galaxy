/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ElegantFormPopup({ isOpen, onClose }: Props) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<null | 'ok' | 'err'>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setSent(null);

    try {
      const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
      const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
      if (!serviceId || !templateId || !publicKey) {
        console.error('Missing EmailJS env vars');
        throw new Error('Email service not configured');
      }

      // Params MUST match your EmailJS template variable names
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        title: 'Website Enquiry',
        time: new Date().toLocaleString(),
      };

      await emailjs.send(serviceId, templateId, templateParams, { publicKey });

      setSent('ok');
      // optional reset
      setFormData({ name: '', email: '', phone: '', company: '', message: '', service: '' });

      // auto-close after a short delay
      setTimeout(() => {
        onClose();
        setSent(null);
      }, 1000);
    } catch (err) {
      console.error(err);
      setSent('err');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(17,24,39,.65),rgba(2,6,23,.9))] backdrop-blur-md"
        onClick={() => !loading && onClose()}
      />

      {/* Dialog */}
      <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 shadow-2xl ring-1 ring-black/40">
        {/* Close */}
        <button
          onClick={() => !loading && onClose()}
          className="absolute right-3 top-3 rounded-full bg-white/10 p-2 text-slate-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
          aria-label="Close"
          disabled={loading}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex max-h-[90vh] overflow-hidden flex-col md:flex-row">
          {/* Image side */}
          <div className="relative hidden w-full md:block md:w-5/12">
            <Image
              src="/formImage.webp"
              alt="Contact Illustration"
              fill
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/40 to-slate-950/80" />
            <div className="absolute left-4 top-4 rounded-full bg-orange-500/20 px-3 py-1 text-sm font-semibold text-orange-300 ring-1 ring-orange-400/30">
              RexGalaxy
            </div>
          </div>

          {/* Form side */}
          <div className="w-full md:w-7/12">
            <div className="max-h-[90vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
              <header className="mb-6">
                <p className="text-xs uppercase tracking-wider text-slate-400">Get in touch</p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Let’s build something future-proof
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Tell us about your project. We’ll get back within one business day.
                </p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    label="Full Name*"
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Email Address*"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <FormField
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Company Name"
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In*</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-2.5 text-slate-100 placeholder-slate-500 shadow-inner shadow-black/20 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40"
                  >
                    <option value="">Select a service</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Application Modernization">Application Modernization</option>
                    <option value="Cloud Services">Cloud Services</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Your Message*</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-100 placeholder-slate-500 shadow-inner shadow-black/20 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40"
                    placeholder="Briefly describe your goals, timeline, and budget range."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-orange-500 focus:ring-orange-500"
                  />
                  <label htmlFor="terms" className="text-sm text-slate-300">
                    I agree to the{' '}
                    <a href="/privacy" className="font-medium text-orange-400 hover:text-orange-300">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-center text-base font-semibold text-white shadow-lg shadow-orange-900/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-500/60 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="relative z-10">
                    {loading ? 'Submitting…' : 'Submit Request'}
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-white/20 transition group-hover:translate-x-0" />
                </button>

                {/* status */}
                {sent === 'ok' && (
                  <p className="text-center text-sm text-green-400">Thanks! We’ve received your request.</p>
                )}
                {sent === 'err' && (
                  <p className="text-center text-sm text-rose-400">
                    Couldn’t send the message. Please try again in a moment.
                  </p>
                )}

                {/* trust row */}
                <div className="mt-2 flex items-center justify-center gap-3 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-orange-400/80" />
                    50+ happy clients
                  </span>
                  <span className="text-slate-600">•</span>
                  <span>Avg. rating 4.9</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- tiny UI helpers (same file) ---------- */

function Label(props: React.ComponentProps<'label'>) {
  return (
    <label
      {...props}
      className="mb-1 block text-sm font-medium text-slate-300"
    />
  );
}

function FormField({
  label,
  id,
  type,
  value,
  onChange,
}: {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: any) => void;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={label.endsWith('*')}
        className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-2.5 text-slate-100 placeholder-slate-500 shadow-inner shadow-black/20 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40"
        placeholder={label.replace('*', '')}
      />
    </div>
  );
}
