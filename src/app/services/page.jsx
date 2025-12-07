"use client";

import React from "react";
import ServiceCard from "./ServiceCard";
import StatsSection from "../components/StatsSection";
import Contact from "../components/Contact";

const services = [
  {
    icon: "fas fa-code",
    title: "Digital Solutions",
    desc: "Transform your business with cutting-edge digital solutions that drive growth and enhance customer experiences.",
    offers: [
      "Custom Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Digital Strategy Consulting",
      "E-commerce Solutions",
      "Progressive Web Apps"
    ],
    technologies: ["React", "Node.js", "Python", "React Native", "Figma", "Adobe XD"],
  },
  {
    icon: "fas fa-database",
    title: "Data & Analytics",
    desc: "Unlock the power of your data with advanced analytics and machine learning solutions.",
    offers: [
      "Data Architecture Design",
      "Business Intelligence",
      "Machine Learning Models",
      "Data Visualization",
      "Predictive Analytics",
      "Data Migration"
    ],
    technologies: ["Python", "R", "TensorFlow", "Power BI", "Tableau", "AWS"],
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud Services",
    desc: "Scale your infrastructure with secure and reliable cloud solutions tailored to your needs.",
    offers: [
      "Cloud Migration",
      "Infrastructure Setup",
      "DevOps & Automation",
      "Cloud Security",
      "Serverless Architecture",
      "Container Orchestration"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: "fas fa-robot",
    title: "AI & Automation",
    desc: "Leverage artificial intelligence to automate processes and gain competitive advantages.",
    offers: [
      "AI Solutions",
      "Process Automation",
      "Chatbots & Virtual Assistants",
      "Predictive Models",
      "Computer Vision",
      "Natural Language Processing"
    ],
    technologies: ["OpenAI", "TensorFlow", "PyTorch", "Azure AI", "AWS AI", "Google AI"],
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f8fafc]">

      {/* ✅ Banner — Mobile Optimized Only */}
      <div
        className="bg-linear-to-br from-[#667FEA] to-[#4A5EDB] min-h-[32vh] sm:min-h-[40vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 space-y-3 sm:space-y-4" >
        <h1 className="text-2xl sm:text-5xl font-bold text-white leading-tight">
          Our Services
        </h1>

        <p className="text-sm sm:text-xl text-white max-w-2xl leading-relaxed">
          Comprehensive technology solutions to drive your digital transformation
        </p>
      </div>

      {/* ✅ Services Grid — Mobile Spacing & Stack Improved */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* StatsSection */}
      <StatsSection />

      {/* ContactSection */}
      <Contact />
    </div>
  );
}
