import Image from "next/image";
import Link from "next/link";

const benefits = [
  "60-70% reduction in SharePoint storage spend - a permanent cost fix, not temporary relief.",
  "Moves cold data into your own Azure Data Lake with no third-party custody or vendor lock-in.",
  "Full version history is preserved end-to-end for audit and compliance.",
  "Row-level security (RLS) is carried across exactly as configured.",
  "Users continue opening, editing, and sharing files as normal.",
  "Deploys on your existing Azure footprint without rearchitecting infrastructure.",
];

const problems = [
  ["SharePoint storage limits hit repeatedly", "Organisations with terabytes of documents hit Microsoft storage ceilings on a recurring cycle. Emergency cleanups buy weeks, not solutions."],
  ["Archival breaks compliance and access", "Traditional archive moves files out of SharePoint, creating version-history gaps, breaking RLS, and introducing compliance risk."],
  ["Microsoft storage costs compound fast", "SharePoint per-GB pricing at enterprise scale makes keeping cold data warm an increasingly expensive choice."],
  ["Restore workflows are slow and disruptive", "When archived files are needed, manual retrieval and IT intervention create friction that slows people down."],
];

const steps = [
  ["01", "Detect", "Intelligent cold-data fingerprinting", "Our engine analyses access patterns, file age, and usage signals to identify cold data precisely without touching active documents."],
  ["02", "Move", "Transparent tiering to Azure Data Lake", "Cold files move into your own ADLS Gen2 storage inside your Azure security boundary. SharePoint stubs retain the familiar file experience."],
  ["03", "Preserve", "RLS, versions, and metadata carried intact", "Every permission group, version snapshot, and metadata tag stays with the file. Audit trails remain unbroken."],
];

const reasons = [
  "Permanent cost fix - not a recurring per-GB Microsoft bill",
  "Data stays in your Azure tenancy - sovereignty maintained",
  "No rearchitecting - deploys on existing Azure infrastructure",
  "Compliance-safe - RLS and version history fully preserved",
  "Transparent restore - end users access files instantly",
  "Scales with data growth as volume grows",
];

export default function StorageIQPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] pt-16 text-slate-800 sm:pt-20">
      <section className="bg-linear-to-r from-[#667FEA] to-[#6C63FF] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12 lg:py-20">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.16em] text-white/80 sm:text-sm">MICROSOFT SOLUTIONS · SHAREPOINT STORAGE OPTIMISATION</p>
            <span className="mb-5 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-bold tracking-wide text-white ring-1 ring-white/40">NEW</span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">SharePoint StorageIQ</h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold leading-relaxed text-white sm:text-2xl">60-70% SharePoint storage cost reduction - zero data loss, zero disruption.</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">StorageIQ intelligently tiers cold SharePoint data into your existing Azure Data Lake, helping enterprise teams lower costs while preserving access, governance, permissions, and version history.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/30 bg-white shadow-2xl shadow-indigo-950/30">
            <Image src="/storageiq-version-history.jpg" alt="SharePoint document version history preserved by StorageIQ" width={1920} height={890} className="h-auto w-full" priority />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-5 md:grid-cols-3">
          {[["60-70%", "Lower SharePoint storage spend using your existing Azure environment"], ["0", "Data loss, version gaps, or broken RLS permissions"], ["Seamless", "Users open, edit, and share files just as they do today"]].map(([stat, label]) => (
            <article key={stat} className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm"><p className="text-4xl font-bold text-[#4f5fd8] sm:text-5xl">{stat}</p><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-600">{label}</p></article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[#667FEA]">The challenge</p><h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">Storage should not force a compromise.</h2><p className="mt-4 text-lg leading-8 text-slate-600">When SharePoint storage fills up, teams are often left choosing between escalating Microsoft costs and disruptive archiving. StorageIQ gives you a third path.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2">{problems.map(([title, text]) => <article key={title} className="rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-xl text-red-500">!</span><h3 className="mt-4 text-lg font-bold text-slate-800">{title}</h3><p className="mt-2 leading-6 text-slate-600">{text}</p></article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[#667FEA]">How it works</p><h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">Optimise storage without changing how people work.</h2></div><div className="mt-10 grid gap-6 lg:grid-cols-3">{steps.map(([number, label, title, text]) => <article key={number} className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><p className="text-sm font-bold tracking-widest text-[#667FEA]">STEP {number} · {label.toUpperCase()}</p><h3 className="mt-4 text-xl font-bold text-slate-800">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div></section>

      <section className="bg-[#eef2ff] py-16 sm:py-20"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.12em] text-[#667FEA]">What StorageIQ delivers</p><h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">A storage strategy built for enterprise governance.</h2><div className="mt-8 space-y-4">{benefits.map((benefit) => <p key={benefit} className="flex gap-3 leading-6 text-slate-700"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#667FEA] text-xs font-bold text-white">✓</span>{benefit}</p>)}</div></div><aside className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"><h3 className="text-xl font-bold text-slate-800">Why enterprises choose it</h3><div className="mt-6 space-y-4">{reasons.map((reason) => <p key={reason} className="flex gap-3 text-slate-600"><span className="font-bold text-[#667FEA]">✓</span>{reason}</p>)}</div></aside></div></section>

      <section className="bg-white py-16 sm:py-20"><div className="mx-auto max-w-3xl px-5 text-center sm:px-8"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[#667FEA]">Start the conversation</p><h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">Make your SharePoint storage costs predictable.</h2><p className="mt-4 text-lg leading-7 text-slate-600">Talk to our team about a StorageIQ assessment and the savings potential within your Microsoft environment.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/contact" className="rounded-lg bg-[#063B6F] px-6 py-3 font-semibold text-white transition hover:bg-[#052f5a]">Calculate My Savings →</Link><Link href="/contact" className="rounded-lg border border-[#063B6F] px-6 py-3 font-semibold text-[#063B6F] transition hover:bg-blue-50">Book a Demo</Link></div></div></section>
    </main>
  );
}
