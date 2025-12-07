"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "fa-solid fa-cloud",
    title: "Cloud Services",
    color: "#4A5EDB",
    points: [
      "Cloud Migration",
      "Infrastructure Setup",
      "DevOps & Automation",
      "Cloud Security",
    ],
  },
  {
    icon: "fa-solid fa-database",
    title: "Data & Analytics",
    color: "#6C63FF",
    points: [
      "Data Architecture",
      "Business Intelligence",
      "Machine Learning",
      "Data Visualization",
    ],
  },
  {
    icon: "fa-solid fa-laptop-code",
    title: "Web & App Development",
    color: "#667FEA",
    points: [
      "Modern Web Applications",
      "Mobile App Development",
      "Custom Software Solutions",
      "UI/UX Implementation",
    ],
  },
  {
    icon: "fa-solid fa-robot",
    title: "AI & Automation",
    color: "#7C6BF2",
    points: [
      "AI Model Development",
      "Process Automation",
      "Machine Learning Integration",
      "Chatbot & AI Assistants",
    ],
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Cyber Security",
    color: "#5A67D8",
    points: [
      "Secure Infrastructure",
      "Compliance Management",
      "Identity & Access Management",
      "Threat Monitoring & Protection",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
          Our Services
        </h2>

        <p className="text-center text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 sm:mb-14">
          Comprehensive technology solutions to drive your digital transformation
        </p>

        {/* ✅ MOBILE GRID OPTIMIZED */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              icon={service.icon}
              title={service.title}
              color={service.color}
              points={service.points}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
