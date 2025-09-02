"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function CareerForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    linkedin: "",
    source: "",
    message: "",
    resume: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((s) => ({
      ...s,
      resume: e.target.files ? e.target.files[0] : null,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
      linkedin: formData.linkedin,
      source: formData.source,
      message: formData.message,
    } as const;

    try {
      // Send main fields
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      // Optional: attach resume if your EmailJS template supports base64 attachments
      if (formData.resume) {
        const reader = new FileReader();
        reader.onload = async () => {
          const base64 = (reader.result as string).split(",")[1];
          await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
            {
              ...templateParams,
              attachment: base64,
              filename: formData.resume?.name,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
          );
        };
        reader.readAsDataURL(formData.resume);
      }

      alert("Application sent. We’ll be in touch.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        linkedin: "",
        source: "",
        message: "",
        resume: null,
      });
      (document.getElementById("career-form") as HTMLFormElement)?.reset();
    } catch (err) {
      alert(
        "Failed to send. Please try again or email careers@rexgalaxy.com."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      id="career-form"
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
    >
      <div className="grid gap-4 md:grid-cols-3">
        <input
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          className="rounded-lg border border-white/20 bg-transparent p-3 outline-none placeholder:text-white/40"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="rounded-lg border border-white/20 bg-transparent p-3 outline-none placeholder:text-white/40"
        />
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="rounded-lg border border-white/20 bg-transparent p-3 outline-none placeholder:text-white/40"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <input
          name="role"
          placeholder="Role"
          onChange={handleChange}
          className="rounded-lg border border-white/20 bg-transparent p-3 outline-none placeholder:text-white/40"
        />
        <input
          name="linkedin"
          placeholder="LinkedIn Profile"
          onChange={handleChange}
          className="rounded-lg border border-white/20 bg-transparent p-3 outline-none placeholder:text-white/40"
        />
        <input
          name="source"
          placeholder="How did you find out about us?"
          onChange={handleChange}
          className="rounded-lg border border-white/20 bg-transparent p-3 outline-none placeholder:text-white/40"
        />
      </div>

      <textarea
        name="message"
        placeholder="Your Message Here"
        rows={5}
        onChange={handleChange}
        className="rounded-lg border border-white/20 bg-transparent p-3 outline-none placeholder:text-white/40"
      />

      <div>
        <label className="mb-2 block">Please upload your CV / Resume</label>
        <input
          type="file"
          onChange={handleFileChange}
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
