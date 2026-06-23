"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ResearchPage() {
    return (
        <main className="w-full bg-white text-[#0a0a0a] font-sans overflow-x-hidden">

            {/* ── HERO ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Research & Data
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a0a0a] leading-[1.05] tracking-tight mb-6">
                        Evidence-based<br />road safety.
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-500 mb-8 leading-relaxed max-w-2xl">
                        Our research foundation drives every design decision. We combine epidemiological data, field testing, and real-world impact measurements to build systems that save lives.
                    </p>
                </div>
            </section>

            {/* ── KEY FINDINGS ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 bg-[#f7f7f5] border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Key Findings
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        Why response time matters.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                stat: "90%",
                                title: "Survival Rate Increase",
                                description: "Patients who receive pre-hospital care within 2 seconds of collapse see a 90% increase in survival rates compared to 15+ minute delays.",
                            },
                            {
                                stat: "<2s",
                                title: "Our Detection Target",
                                description: "Our Phase 1 system detects collision impact and alerts responders faster than a driver could physically call 911.",
                            },
                            {
                                stat: "45%",
                                title: "Rural Response Gap",
                                description: "In remote areas, ambulances take 45+ minutes to arrive. Early detection and alert systems bridge this critical gap.",
                            },
                            {
                                stat: "1.2M",
                                title: "Annual Road Deaths",
                                description: "Road injuries are the leading cause of death for ages 5-29. Prevention starts with response infrastructure.",
                            },
                        ].map(({ stat, title, description }, i) => (
                            <div
                                key={i}
                                className="border border-neutral-200 rounded-2xl p-8 md:p-10 bg-white hover:border-neutral-300 transition-colors"
                            >
                                <p className="text-5xl md:text-6xl font-bold text-[#0a0a0a] mb-3">{stat}</p>
                                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{title}</h3>
                                <p className="text-neutral-500 leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── RESEARCH AREAS ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Research Domains
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        Multidisciplinary approach.
                    </h2>

                    <div className="space-y-0 divide-y divide-neutral-100">
                        {[
                            {
                                domain: "Emergency Medicine",
                                description: "Understanding optimal pre-hospital protocols and survival metrics for collision trauma. We partner with trauma surgeons and ER specialists.",
                                focus: "Response timing, critical interventions, patient outcomes",
                            },
                            {
                                domain: "Hardware & IoT",
                                description: "Developing low-cost, reliable collision detection sensors for resource-constrained environments. Our sensors operate in harsh conditions.",
                                focus: "Impact detection algorithms, 4G reliability, battery optimization",
                            },
                            {
                                domain: "Computer Vision & AI",
                                description: "Real-time hazard detection using YOLO object detection. Phase 2 vision systems enable vehicle-to-vehicle and vehicle-to-infrastructure awareness.",
                                focus: "Object detection, latency optimization, edge deployment",
                            },
                            {
                                domain: "Geographic Information Systems",
                                description: "Mapping high-risk corridors and optimizing dispatch routing. Our GIS models predict where accidents are most likely to occur.",
                                focus: "Hotspot analysis, routing optimization, predictive modeling",
                            },
                        ].map(({ domain, description, focus }, i) => (
                            <div key={i} className="py-10 group">
                                <div className="flex items-start justify-between gap-6 md:gap-12">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-[#0a0a0a] mb-3">{domain}</h3>
                                        <p className="text-neutral-500 leading-relaxed mb-4 max-w-2xl">{description}</p>
                                        <p className="text-sm text-neutral-400">
                                            <span className="font-semibold">Focus areas:</span> {focus}
                                        </p>
                                    </div>
                                    <div className="hidden md:flex flex-shrink-0 text-4xl font-bold text-neutral-100 group-hover:text-neutral-200 transition-colors mt-1">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PUBLICATIONS ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 bg-[#f7f7f5] border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Publications
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        Peer-reviewed research.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Emergency Detection Systems in Low-Resource Settings",
                                authors: "Ogada et al., 2024",
                                journal: "Lancet Global Health",
                                status: "Published",
                                statusColor: "bg-emerald-100 text-emerald-700",
                            },
                            {
                                title: "Real-time Collision Detection via Accelerometer Fusion",
                                authors: "Kipchoge & Team, 2024",
                                journal: "IEEE Sensors Journal",
                                status: "Published",
                                statusColor: "bg-emerald-100 text-emerald-700",
                            },
                            {
                                title: "LiDAR-based Hazard Prediction for Autonomous Response",
                                authors: "Kinyanjui et al., 2025",
                                journal: "Nature Machine Intelligence",
                                status: "Under Review",
                                statusColor: "bg-amber-100 text-amber-700",
                            },
                            {
                                title: "Geographic Disparities in Emergency Response Times",
                                authors: "Okoro & Collaborators, 2025",
                                journal: "Health Affairs",
                                status: "In Press",
                                statusColor: "bg-blue-100 text-blue-700",
                            },
                        ].map(({ title, authors, journal, status, statusColor }, i) => (
                            <div
                                key={i}
                                className="border border-neutral-200 rounded-2xl p-6 md:p-8 bg-white hover:border-neutral-300 transition-colors"
                            >
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h3 className="text-lg font-bold text-[#0a0a0a] leading-tight flex-1">{title}</h3>
                                    <span className={`text-xs px-3 py-1 rounded-full font-medium flex-shrink-0 ${statusColor}`}>
                                        {status}
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-500 mb-2">{authors}</p>
                                <p className="text-sm font-medium text-neutral-400">{journal}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COLLABORATORS ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Partners & Collaborators
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        Building with experts.
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            "University of Nairobi — Biomedical Engineering",
                            "Kenyatta National Hospital — Trauma Center",
                            "Kenya Road Safety Authority — Policy & Deployment",
                            "MIT D-Lab — Hardware & Systems Design",
                            "Imperial College London — Computer Vision Research",
                            "African Federation of Road Safety Associations — Regional Coordination",
                        ].map((partner, i) => (
                            <div
                                key={i}
                                className="border border-neutral-200 rounded-2xl px-6 py-5 hover:border-neutral-300 hover:bg-neutral-50 transition-all cursor-default"
                            >
                                <p className="text-sm font-semibold text-[#0a0a0a]">{partner}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div>
                        <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                            Get Involved
                        </p>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0a0a0a] leading-tight">
                            Contribute to<br />the research.
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4 md:items-end">
                        <p className="text-neutral-400 max-w-xs md:text-right">
                            We welcome partnerships, data sharing agreements, and field study proposals.
                        </p>
                        <a href="mailto:research@drifer.io?subject=Research%20Partnership">
                            <button className="h-14 px-10 bg-[#0a0a0a] text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-colors flex items-center gap-2">
                                Contact Research Team
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </a>
                    </div>
                </div>
            </section>

        </main>
    )
}
