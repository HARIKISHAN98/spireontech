"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // ---------- HANDLE INPUT CHANGE ----------
  const handleChange = (e) => {
    const { name, value } = e.target;

    // optional small sanitation
    const cleanedValue = value.replace(/\s+/g, " ");

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  // ---------- VALIDATION ----------
  const validateForm = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const company = formData.company.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name) return "Please enter your name.";
    if (!/^[a-zA-Z\s]{2,60}$/.test(name)) {
      return "Name should contain only letters and spaces (2–60 characters).";
    }

    if (!email) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address.";
    }

    if (!phone) return "Please enter your phone number.";
    if (!/^[0-9+\-\s]{7,15}$/.test(phone)) {
      return "Please enter a valid phone number (7–15 digits, + or - allowed).";
    }

    if (!company) return "Please enter your company name.";
    if (company.length < 2) {
      return "Company name should be at least 2 characters.";
    }

    if (!subject) return "Please enter a subject.";
    if (subject.length < 5) {
      return "Subject should be at least 5 characters long.";
    }

    if (!message) return "Please enter your message.";
    if (message.length < 10) {
      return "Message should be at least 10 characters long.";
    }

    return null; // everything OK
  };

  // ---------- SUBMIT ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    if (loading) return; // double-click guard

    setLoading(true);

    try {
      await emailjs.send(
        "service_10gvqmn",        // your EmailJS service ID
        "template_zmj9rer",       // your template ID
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          title: formData.subject.trim(), // matches {{title}} in template
          message: formData.message.trim(),
        },
        "kBoch1VLJSn61TeCQ"      // your public key
      );

      // ✅ reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });

      setSuccess("✅ Message sent successfully! We'll contact you soon.");
      setError("");

      // Optional: hide success after few seconds
      setTimeout(() => {
        setSuccess("");
      }, 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("❌ Failed to send message. Please try again later.");
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-12 sm:py-16 md:py-20">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-14"
      >
        {/* LEFT SIDE */}
        <div className="space-y-4 sm:space-y-5">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1F2937] leading-tight">
            Get In Touch
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Ready to start your digital transformation journey?
            Let’s discuss how we can help your business grow.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-gray-700">

            {/* EMAIL */}
            <div
              onClick={() => (window.location.href = "mailto:info@spireontech.com")}
              className="flex items-start sm:items-center gap-3 cursor-pointer hover:text-blue-600 transition break-all">
              <span className="p-2 sm:p-3 rounded-lg bg-linear-to-br from-[#667FEA] to-[#4A5EDB] text-white shrink-0">
                <i className="fas fa-envelope text-sm sm:text-base"></i>
              </span>
              <span>info@spireontech.com</span>
            </div>

            {/* PHONE */}
            <div
              onClick={() => (window.location.href = "tel:+919533839201")}
              className="flex items-start sm:items-center gap-3 cursor-pointer hover:text-blue-600 transition break-all">
              <span className="p-2 sm:p-3 rounded-lg bg-linear-to-br from-[#667FEA] to-[#4A5EDB] text-white shrink-0">
                <i className="fas fa-phone text-sm sm:text-base"></i>
              </span>
              <span>+91 95338-39201</span>
            </div>

            {/* LOCATION */}
            <div className="flex items-start sm:items-center gap-3 break-all">
              <span className="p-2 sm:p-3 rounded-lg bg-linear-to-br from-[#667FEA] to-[#4A5EDB] text-white shrink-0">
                <i className="fas fa-map-marker-alt text-sm sm:text-base"></i>
              </span>
              <span>IT Park, Dehradun (UK)</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 space-y-5 sm:space-y-6">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-serif font-bold text-center text-[#1F2937]">
            Send Us a Message
          </h3>

          {/* Global success / error message */}
          {success && (
            <p className="text-sm sm:text-base text-green-600 text-center">
              {success}
            </p>
          )}
          {error && (
            <p className="text-sm sm:text-base text-red-600 text-center">
              {error}
            </p>
          )}

          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#F5F8FA] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition" />

              <input
                name="email"
                type="email"
                required
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#F5F8FA] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition" />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="phone"
                type="tel"
                required
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#F5F8FA] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition" />

              <input
                name="company"
                type="text"
                required
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-[#F5F8FA] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition" />
            </div>

            {/* Subject */}
            <input
              name="subject"
              type="text"
              required
              placeholder="Subject *"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[#F5F8FA] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition" />

            {/* Message */}
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#F5F8FA] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition resize-none" />

            {/* Button */}
            <div className="flex justify-center sm:justify-start">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-3 px-8 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all w-full sm:w-auto">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
