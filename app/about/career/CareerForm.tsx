"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function CareerForm() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    try {
      // Extract form data to avoid sending large files directly
      const formData = new FormData(formRef.current);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        role: formData.get('role'),
        linkedin: formData.get('linkedin'),
        source: formData.get('source'),
        message: formData.get('message'),
        resume: (() => {
          const resumeEntry = formData.get('resume');
          return resumeEntry instanceof File && resumeEntry.name
            ? resumeEntry.name
            : 'No file attached';
        })()
      };

      // Send data instead of form to avoid 413 error
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_CAREER_TEMPLATE_ID as string,
        data,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
        }
      );

      alert("Application sent. We'll be in touch.");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send. Please try again or email careers@rexgalaxy.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      id="career-form"
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
    >
      {/* Honey-pot spam trap (users इसे नहीं भरेंगे) */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 md:grid-cols-3">
        <input
          name="name"
          placeholder="Name"
          required
          className="rounded-lg border border-white/20 bg-transparent p-3 outline-none placeholder:text-white/40"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="rounded-lg border border-white/20 bg-transparent p-3 outline-none placeholder:text-white/40"
        />
        <input
          name="phone"
          placeholder="Phone"
          className="rounded-lg border border-white/20 bg-transparent p-3 outline-none placeholder:text-white/40"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <input
          name="role"
          placeholder="Role"
          className="rounded-lg border border-white/20 bg-transparent p-3 outline-none placeholder:text-white/40"
        />
        <input
          name="linkedin"
          placeholder="LinkedIn Profile"
          className="rounded-lg border border-white/20 bg-transparent p-3 outline-none placeholder:text-white/40"
        />
        <input
          name="source"
          placeholder="How did you find out about us?"
          className="rounded-lg border border-white/20 bg-transparent p-3 outline-none placeholder:text-white/40"
        />
      </div>

      <textarea
        name="message"
        placeholder="Your Message Here"
        rows={5}
        className="rounded-lg border border-white/20 bg-transparent p-3 outline-none placeholder:text-white/40"
      />

      <div>
        <label className="mb-2 block">Please upload your CV / Resume</label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          className="block w-full text-sm text-white/70 file:mr-4 file:rounded-lg file:border-0 file:bg-orange-500 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-orange-400"
        />
        {/* <p className="mt-1 text-xs text-white/50">
          Note: Only the filename will be sent via email. We&apos;ll contact you for the full file if needed.
        </p> */}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 w-full rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}