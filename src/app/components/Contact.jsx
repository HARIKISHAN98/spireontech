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

  const handleChange = (e) => {
    const { name, value } = e.target;
    const cleanedValue = value.replace(/\s+/g, " ");
    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));
  };

  const validateForm = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const company = formData.company.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name) return "Please enter your name.";
    if (!/^[a-zA-Z\s]{2,60}$/.test(name)) return "Name should contain only letters and spaces (2–60 characters).";

    if (!email) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";

    if (phone && !/^[0-9+\-\s]{7,15}$/.test(phone)) {
      return "Please enter a valid phone number (7–15 digits, + or - allowed).";
    }

    if (company && company.length < 2) {
      return "Company name should be at least 2 characters.";
    }

    if (subject && subject.length < 3) {
      return "Subject should be at least 3 characters long.";
    }

    if (!message) return "Please enter your message.";
    if (message.length < 10) return "Message should be at least 10 characters long.";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    if (loading) return;

    setLoading(true);

    try {
      await emailjs.send(
        "service_10gvqmn",
        "template_y2lkcu4",
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          title: formData.subject.trim(),
          message: formData.message.trim(),
        },
        "kBoch1VLJSn61TeCQ"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });

      setSuccess("Message sent successfully! We'll contact you soon.");
      setTimeout(() => setSuccess(""), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-14">

        {/* LEFT SIDE */}
        <div className="space-y-4 sm:space-y-5">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1F2937]">
            Get In Touch
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Ready to start your digital transformation journey? Let’s discuss how we can help your business grow.
          </p>

          <div className="space-y-4 text-gray-700">

            {/* EMAIL */}
            <div
              onClick={() => (window.location.href = "mailto:info@spireontech.com")}
              className="flex items-start sm:items-center gap-3 cursor-pointer hover:text-blue-600 transition">
              <span className="p-3 rounded-lg bg-linear-to-br from-[#667FEA] to-[#4A5EDB] text-white">
                <i className="fas fa-envelope"></i>
              </span>
              <span>info@spireontech.com</span>
            </div>

            {/* PHONE */}
            <div
              onClick={() => (window.location.href = "tel:+919533839201")}
              className="flex items-start sm:items-center gap-3 cursor-pointer hover:text-blue-600 transition">
              <span className="p-3 rounded-lg bg-linear-to-br from-[#667FEA] to-[#4A5EDB] text-white">
                <i className="fas fa-phone"></i>
              </span>
              <span>+91 95338-39201</span>
            </div>

            {/* ADDRESSES */}
            <div className="space-y-4">

              {/* India Office */}
              <div className="flex items-start gap-3">
                <span className="p-3 rounded-lg bg-linear-to-br from-[#667FEA] to-[#4A5EDB] text-white">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div>
                  <strong>India Office</strong>
                  <div>Hi-Tech City, Hyderabad, India</div>
                </div>
              </div>

              {/* USA Office */}
              <div className="flex items-start gap-3">
                <span className="p-3 rounded-lg bg-linear-to-br from-[#667FEA] to-[#4A5EDB] text-white">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div>
                  <strong>USA Office</strong>
                  <div>Silverleaf Capital, Inc</div>
                  <div>155 BARTRAM MARKET DR STE 135, PMB 132</div>
                  <div>SAINT JOHNS, Florida 32259</div>
                  <div>United States of America (USA)</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border space-y-5">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center">
            Send Us a Message
          </h3>

          {success && <p className="text-green-600 text-center">{success}</p>}
          {error && <p className="text-red-600 text-center">{error}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#F5F8FA] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#F5F8FA] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="phone"
                type="tel"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#F5F8FA] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
              />

              <input
                name="company"
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-[#F5F8FA] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <input
              name="subject"
              type="text"
              placeholder="Subject *"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[#F5F8FA] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#F5F8FA] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            />

            <div className="flex justify-center sm:justify-start">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg w-full sm:w-auto disabled:bg-blue-400"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}
