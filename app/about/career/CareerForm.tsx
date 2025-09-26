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
      const formData = new FormData(formRef.current);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        role: formData.get("role"),
        linkedin: formData.get("linkedin"),
        source: formData.get("source"),
        message: formData.get("message"),
        resume: (() => {
          const resumeEntry = formData.get("resume");
          return resumeEntry instanceof File && resumeEntry.name
            ? resumeEntry.name
            : "No file attached";
        })(),
      };

      // 👉 Yahan direct keys dal do
      await emailjs.send(
        "service_o6fe03w", // <-- apna SERVICE ID yahan likho
        "template_8ejlwrp", // <-- apna TEMPLATE ID yahan likho
        data,
        {
          publicKey: "Yfsdit-4AmwEeEx0M0", // <-- apna PUBLIC KEY yahan likho
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
      {/* Honey-pot spam trap */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

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
