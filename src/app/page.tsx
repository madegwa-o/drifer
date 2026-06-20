"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
    const [scrollY, setScrollY] = useState(0)
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const heroOpacity = Math.max(0, 1 - scrollY / 500)

    return (
        <main className="w-full bg-white text-[#0a0a0a] font-sans overflow-x-hidden">

            {/* ── HERO ── */}
            <section
                ref={heroRef}
                className="relative w-full h-screen flex items-end overflow-hidden"
            >
                {/* background video */}
                <div className="absolute inset-0">
                    <video
                        autoPlay muted loop playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/home.mp4" type="video/mp4" />
                    </video>
                    {/* very light dark vignette at bottom so text stays readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                {/* hero copy — bottom-left, Waymo-style */}
                <div
                    className="relative z-10 px-8 md:px-16 lg:px-24 pb-20 md:pb-28 max-w-3xl"
                    style={{ opacity: heroOpacity }}
                >
                    <p className="text-xs tracking-[0.25em] uppercase text-white/60 mb-4 font-medium">
                        Road Safety Technology
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                        Zero deaths.<br />Starting now.
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
                        We combine emergency detection, AI vision, and LiDAR to make every road journey survivable — at a cost anyone can afford.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/journeys">
                            <button className="h-12 px-8 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors">
                                Get Started →
                            </button>
                        </Link>
                        <Link href="/docs">
                            <button className="h-12 px-8 border border-white/40 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-colors">
                                Our Technology
                            </button>
                        </Link>
                    </div>
                </div>

                {/* scroll indicator */}
                <div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2 opacity-60">
                    <div className="w-px h-12 bg-white/50 animate-pulse" />
                    <span className="text-[10px] tracking-widest text-white/50 uppercase rotate-0">Scroll</span>
                </div>
            </section>

            {/* ── MISSION ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 border-b border-neutral-100">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">Our Mission</p>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#0a0a0a] mb-6">
                            Make road deaths<br />a thing of the past.
                        </h2>
                        <p className="text-lg text-neutral-500 leading-relaxed">
                            1.2 million people die on roads every year. We believe that number can reach zero. AntiDeath deploys affordable, open hardware into everyday vehicles so help arrives before it&#39;s too late.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { n: "1.2M+", label: "Annual road deaths worldwide" },
                            { n: "<2s", label: "Target emergency detection time" },
                            { n: "3", label: "Technology phases to full autonomy" },
                            { n: "$0", label: "Extra cost for basic life-save tier" },
                        ].map(({ n, label }) => (
                            <div key={label} className="border border-neutral-100 rounded-2xl p-6 hover:border-neutral-300 transition-colors">
                                <p className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-1">{n}</p>
                                <p className="text-sm text-neutral-400 leading-snug">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── THREE PHASES ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 bg-[#f7f7f5] border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">Technology Roadmap</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        Three phases to make roads safe.
                    </h2>

                    <div className="grid md:grid-cols-3 gap-0 border border-neutral-200 rounded-3xl overflow-hidden">
                        {[
                            {
                                phase: "Phase 01",
                                title: "Detect & Alert",
                                status: "Live",
                                statusColor: "bg-emerald-100 text-emerald-700",
                                description: "A Raspberry Pi 5 paired with a SIM7600NA-H 4G LTE HAT detects collision impact and instantly contacts emergency responders with GPS location — no smartphone required.",
                                tech: ["Raspberry Pi 5", "SIM7600NA-H 4G HAT", "GPS triangulation", "LTE Cat-4"],
                            },
                            {
                                phase: "Phase 02",
                                title: "See & Avoid",
                                status: "In Development",
                                statusColor: "bg-amber-100 text-amber-700",
                                description: "A YOLO-based real-time vision model running on a 13 TOPS AI HAT enables split-second hazard detection and evasive response — identifying threats before a human driver can react.",
                                tech: ["YOLO object detection", "13 TOPS AI HAT+", "Real-time inference", "Sub-50ms response"],
                            },
                            {
                                phase: "Phase 03",
                                title: "Map & Predict",
                                status: "Research",
                                statusColor: "bg-blue-100 text-blue-700",
                                description: "LiDAR technology builds a live 3D map of the vehicle's surroundings, enabling predictive routing around danger zones and full situational awareness at any speed.",
                                tech: ["LiDAR sensing", "3D point clouds", "Predictive routing", "360° awareness"],
                            },
                        ].map(({ phase, title, status, statusColor, description, tech }, i) => (
                            <div
                                key={phase}
                                className={`p-8 md:p-10 flex flex-col gap-6 ${i < 2 ? "border-b md:border-b-0 md:border-r border-neutral-200" : ""}`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-xs tracking-[0.2em] uppercase text-neutral-400 font-medium">{phase}</span>
                                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor}`}>{status}</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#0a0a0a] mb-3">{title}</h3>
                                    <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
                                </div>
                                <ul className="mt-auto space-y-2">
                                    {tech.map(t => (
                                        <li key={t} className="flex items-center gap-2 text-xs text-neutral-400">
                                            <span className="w-1 h-1 rounded-full bg-neutral-300 flex-shrink-0" />
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">How It Works</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        From impact to help in under 2 seconds.
                    </h2>

                    <div className="space-y-0 divide-y divide-neutral-100">
                        {[
                            {
                                n: "01",
                                title: "Impact detected",
                                body: "Sensors embedded in the hardware detect a sudden change in acceleration consistent with a collision. The event is timestamped and logged immediately.",
                            },
                            {
                                n: "02",
                                title: "Location pinpointed",
                                body: "The 4G HAT triangulates GPS coordinates and cross-references with cell tower data for sub-meter accuracy even in areas with weak GPS signal.",
                            },
                            {
                                n: "03",
                                title: "Responders notified",
                                body: "An automated call and data packet are sent to the nearest emergency dispatch centre, including vehicle ID, location, speed, and estimated impact severity.",
                            },
                            {
                                n: "04",
                                title: "Help arrives",
                                body: "Emergency services are on the way before the driver has a chance to call — often before they're even conscious enough to do so.",
                            },
                        ].map(({ n, title, body }) => (
                            <div key={n} className="grid md:grid-cols-[120px_1fr] gap-6 py-10 group">
                                <span className="text-4xl font-bold text-neutral-100 group-hover:text-neutral-200 transition-colors">{n}</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2">{title}</h3>
                                    <p className="text-neutral-500 leading-relaxed max-w-xl">{body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ── COVERAGE ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 bg-[#f7f7f5] border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">Coverage</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-4">
                        Launching in Kenya first.
                    </h2>
                    <p className="text-neutral-400 mb-16 max-w-lg">
                        We&#39;re starting where it matters most — Kenya&#39;s highest-risk corridors.
                        Phase 1 hardware pilots are planned for the roads with the highest accident
                        and fatality rates.
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            { road: "Nairobi–Nakuru Highway", note: "A104 — highest fatality rate" },
                            { road: "Nairobi–Mombasa Road", note: "A109 — long-haul truck corridor" },
                            { road: "Nairobi–Thika Superhighway", note: "A2 — high urban volume" },
                            { road: "Nakuru–Eldoret Road", note: "A104 — frequent head-ons" },
                            { road: "Kisumu–Kakamega Road", note: "A1 — western region hub" },
                            { road: "Mombasa–Malindi Road", note: "B8 — coastal fatality hotspot" },
                        ].map(({ road, note }) => (
                            <div
                                key={road}
                                className="border border-neutral-200 rounded-2xl px-6 py-5 hover:border-neutral-400 hover:bg-white transition-all cursor-default"
                            >
                                <p className="text-sm font-semibold text-[#0a0a0a] mb-1">{road}</p>
                                <p className="text-xs text-neutral-400">{note}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-neutral-400 text-sm mt-8">
                        Partnering with NTSA and county governments for pilot deployment in 2025.
                    </p>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div>
                        <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">Get Involved</p>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0a0a0a] leading-tight">
                            Ready to be<br />found in time?
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4 md:items-end">
                        <p className="text-neutral-400 max-w-xs md:text-right">
                            Join thousands of drivers who&#39;ve already installed Phase 1 hardware.
                        </p>
                        <Link href="/journeys">
                            <button className="h-14 px-10 bg-[#0a0a0a] text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-colors">
                                Get Started Now →
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    )
}