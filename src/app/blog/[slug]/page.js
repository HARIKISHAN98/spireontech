// src/app/blog/[slug]/page.js

import Link from "next/link";

const BLOGS = {
  "future-of-ai-in-business": {
    title: "The Future of AI in Business",
    tag: "AI & Technology",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    author: "Sarah Johnson",
    intro:
      "Artificial Intelligence is no longer a futuristic concept—it is a present-day business driver reshaping how organizations operate, compete, and grow.",
    content: `
## The Current Landscape
AI is transforming industries through automation, predictive analytics, and intelligent decision support systems.

## Key AI Applications
- Customer Service Automation
- Data Analytics & Insights
- Process Automation
- Predictive Analytics

## Business Benefits
- Increased operational efficiency
- Reduced costs
- Better customer experience
- Faster decision-making

## The Future Outlook
AI adoption will accelerate with IoT, blockchain, and autonomous systems.

## Getting Started
Start with pilot projects, build internal AI skills, and focus on high-impact use cases.
`,
  },

  "cloud-migration-best-practices": {
    title: "Cloud Migration Best Practices",
    tag: "Cloud Computing",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    author: "Michael Brown",
    intro:
      "Cloud migration enables scalability, resilience, and cost optimization—but only when executed with the right strategy.",
    content: `
## Why Businesses Move to the Cloud
Organizations migrate to the cloud for agility, scalability, and global accessibility.

## Core Benefits
- Reduced infrastructure costs
- Disaster recovery
- Better performance
- Flexibility for remote teams

## Best Practices
- Perform readiness assessment
- Migrate in phases
- Implement security-first architecture
- Optimize after migration

## Common Challenges
- Data security concerns
- Downtime risks
- Skill gaps

## Conclusion
A well-planned migration ensures long-term digital success.
`,
  },

  "mobile-first-development": {
    title: "Mobile-First Development",
    tag: "Web Development",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    author: "Emily Carter",
    intro:
      "Mobile-first development is a design philosophy that prioritizes mobile user experience over desktop.",
    content: `
## What is Mobile-First Design?
It starts designing from the smallest screen and scales upward.

## Why It Matters
- Google mobile-first indexing
- Faster load times
- Higher user engagement
- Increased conversions

## Key Principles
- Responsive layouts
- Performance optimization
- Touch-friendly interfaces

## Final Thoughts
Mobile-first is no longer optional—it’s mandatory.
`,
  },

  "data-driven-decision-making": {
    title: "Data-Driven Decision Making",
    tag: "Data Analytics",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    author: "Daniel Wong",
    intro:
      "Data-driven decision making empowers organizations to replace assumptions with factual insights.",
    content: `
## What is Data-Driven Decision Making?
It is the practice of using real data to guide business strategies.

## Benefits
- Accurate forecasting
- Improved performance
- Better customer targeting

## Tools Used
- Business Intelligence
- Predictive Analytics
- Data Warehousing

## Challenges
- Data quality
- Integration issues
- Skills shortage

## Conclusion
Data is the most valuable asset for modern enterprises.
`,
  },

  "cybersecurity-best-practices": {
    title: "Cybersecurity Best Practices",
    tag: "Cybersecurity",
    date: "Nov 20, 2024",
    readTime: "8 min read",
    author: "Rajiv Mehta",
    intro:
      "With rising cyber threats, cybersecurity is now a boardroom-level priority for businesses.",
    content: `
## Why Cybersecurity is Critical
Cyberattacks cause financial loss, legal damage, and brand erosion.

## Common Cyber Threats
- Phishing
- Ransomware
- Malware
- Insider threats

## Essential Practices
- Multi-Factor Authentication
- Secure networks
- Employee training
- Regular backups

## Compliance Standards
ISO 27001, GDPR, HIPAA, PCI-DSS

## Conclusion
Cybersecurity is a continuous business responsibility.
`,
  },

  "digital-transformation-strategies": {
    title: "Digital Transformation Strategies",
    tag: "Business Strategy",
    date: "Nov 15, 2024",
    readTime: "9 min read",
    author: "Ankit Verma",
    intro:
      "Digital transformation is the integration of digital technologies into every business area.",
    content: `
## What is Digital Transformation?
It reshapes how organizations operate and deliver value.

## Key Pillars
- Customer Experience
- Process Automation
- Data Analytics
- Cloud Infrastructure

## Challenges
- Legacy systems
- Organizational resistance
- Budget constraints

## Roadmap
1. Assess readiness
2. Define goals
3. Select technology
4. Train teams
5. Execute in phases

## Conclusion
Transformation is a continuous journey, not a destination.
`,
  },
};

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blog = BLOGS[slug];

  if (!blog) {
    return (
      <div className="text-center py-24 px-4 text-sm sm:text-xl font-semibold">
        Blog Not Found
      </div>
    );
  }

  return (
    <section className="bg-[#f8fafc] px-2 xs:px-3 sm:px-6 py-10 sm:py-20 overflow-x-hidden">
      <div
        className="max-w-4xl mx-auto bg-white rounded-xl sm:rounded-3xl p-4 xs:p-5 sm:p-8 md:p-12 shadow-xl overflow-hidden"
      >
        {/* ✅ Breadcrumb */}
        <div className="text-[10px] xs:text-xs sm:text-sm text-gray-500 mb-3 sm:mb-6 wrap-break-word">
          <Link href="/blog" className="text-blue-600 hover:underline">
            Blog
          </Link>{" "}
          / {blog.title}
        </div>

        {/* ✅ Meta */}
        <div className="flex flex-wrap gap-1.5 sm:gap-4 text-[10px] xs:text-xs sm:text-sm text-gray-500 mb-4 wrap-break-word">
          <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 max-w-full">
            {blog.tag}
          </span>
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
          <span>By {blog.author}</span>
        </div>

        {/* ✅ Title */}
        <h1 className="text-lg xs:text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-snug wrap-break-word">
          {blog.title}
        </h1>

        {/* ✅ Intro */}
        <p className="text-xs xs:text-sm sm:text-lg text-gray-600 mb-6 leading-relaxed wrap-break-word">
          {blog.intro}
        </p>

        {/* ✅ CONTENT WITH SAFE BULLETS */}
        <article className="text-gray-700 text-xs xs:text-sm sm:text-base leading-relaxed wrap-break-word space-y-4">
          {blog.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-sm xs:text-base sm:text-2xl font-bold mt-6 wrap-break-word"
                >
                  {line.replace("## ", "")}
                </h2>
              );
            }

            if (line.startsWith("- ")) {
              return null; // handled below in list
            }

            return (
              line.trim() && (
                <p key={i} className="wrap-break-word">
                  {line}
                </p>
              )
            );
          })}

          {/* ✅ SAFE BULLET LIST */}
          <ul className="mt-4 space-y-2 pl-4 xs:pl-5 sm:pl-6 list-disc wrap-break-word">
            {blog.content
              .split("\n")
              .filter((line) => line.startsWith("- "))
              .map((line, index) => (
                <li
                  key={index}
                  className="text-xs xs:text-sm sm:text-base wrap-break-word"
                >
                  {line.replace("- ", "")}
                </li>
              ))}
          </ul>
        </article>

        {/* ✅ Back Button */}
        <div className="mt-8 sm:mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base rounded-lg hover:bg-blue-50 transition">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </section>
  );
}

