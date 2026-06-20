"use client"

import Link from "next/link"
import { TrendingUp } from "lucide-react"

export default function OurMarketPage() {
    return (
        <main className="w-full bg-white text-[#0a0a0a] font-sans overflow-x-hidden">

            {/* ── HERO ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Market Opportunity
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a0a0a] leading-[1.05] tracking-tight mb-6">
                        A $40B market<br />waiting to be saved.
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-500 mb-8 leading-relaxed max-w-2xl">
                        The global road safety technology market is fragmented and expensive. We&#39;re building the affordable, open platform that reaches everyone — especially those in underserved regions where accidents claim the most lives.
                    </p>
                </div>
            </section>

            {/* ── MARKET SIZE ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 bg-[#f7f7f5] border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Global Opportunity
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        Scale and impact.
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                metric: "$40B",
                                label: "Road Safety Tech Market Size",
                                description: "Expected to grow at 8% CAGR through 2035. Includes telematics, emergency systems, and autonomous features.",
                            },
                            {
                                metric: "1.5B",
                                label: "Vehicles in High-Risk Regions",
                                description: "Sub-$15,000 vehicles in Africa, South Asia, and Latin America. Our addressable market: 90% of new vehicle sales globally.",
                            },
                            {
                                metric: "200M+",
                                label: "Annual Crash Events",
                                description: "Unreported minor collisions to serious injury crashes. Current response systems miss 85% of them.",
                            },
                        ].map(({ metric, label, description }, i) => (
                            <div
                                key={i}
                                className="border border-neutral-200 rounded-2xl p-8 md:p-10 bg-white hover:border-neutral-300 transition-colors"
                            >
                                <p className="text-5xl md:text-6xl font-bold text-[#0a0a0a] mb-3">{metric}</p>
                                <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">{label}</h3>
                                <p className="text-neutral-500 leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── REGIONAL MARKETS ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Launch Markets
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        Geographic expansion strategy.
                    </h2>

                    <div className="space-y-0 divide-y divide-neutral-100">
                        {[
                            {
                                region: "East Africa",
                                countries: "Kenya, Uganda, Tanzania",
                                drivers: "45,000+ annual road deaths, rapid motorization, government support",
                                timeline: "Phase 1: 2025",
                                opportunity: "$2.8B regional market by 2030",
                            },
                            {
                                region: "South Asia",
                                countries: "India, Bangladesh, Pakistan",
                                drivers: "350,000+ annual deaths, highest crash rate globally, 40M+ new vehicles/year",
                                timeline: "Phase 2: 2026",
                                opportunity: "$18B+ market opportunity",
                            },
                            {
                                region: "Southeast Asia",
                                countries: "Indonesia, Vietnam, Thailand",
                                drivers: "180,000+ annual deaths, motorcycle-dominant, growing infrastructure",
                                timeline: "Phase 3: 2027",
                                opportunity: "$8.5B potential",
                            },
                            {
                                region: "Latin America",
                                countries: "Brazil, Mexico, Colombia",
                                drivers: "130,000+ annual deaths, established logistics, economic growth",
                                timeline: "Phase 4: 2028",
                                opportunity: "$6.2B addressable market",
                            },
                        ].map(({ region, countries, drivers, timeline, opportunity }, i) => (
                            <div key={i} className="py-10 group">
                                <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#0a0a0a] mb-2">{region}</h3>
                                        <p className="text-sm text-neutral-400 mb-4">{countries}</p>
                                        <p className="text-neutral-500 leading-relaxed mb-4">{drivers}</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-neutral-300" />
                                            <span className="text-sm font-semibold text-[#0a0a0a]">{timeline}</span>
                                        </div>
                                    </div>
                                    <div className="bg-[#f7f7f5] rounded-2xl p-6 border border-neutral-100">
                                        <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 font-medium mb-2">Market Opportunity</p>
                                        <p className="text-3xl font-bold text-[#0a0a0a]">{opportunity}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COMPETITIVE POSITION ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 bg-[#f7f7f5] border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Why AntiDeath
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        Built for emerging markets.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                advantage: "Affordability",
                                description: "Competitors charge $2,000+. Our Phase 1 system costs <$50, making it accessible to 90% of the global vehicle market.",
                                icon: "💰",
                            },
                            {
                                advantage: "Open Hardware",
                                description: "Our designs are open-source and patent-friendly, enabling local manufacturing and reducing supply chain friction.",
                                icon: "🔧",
                            },
                            {
                                advantage: "Offline-First",
                                description: "Works without constant cloud connectivity. Stores data locally, syncs when connectivity is available — critical for rural deployment.",
                                icon: "📡",
                            },
                            {
                                advantage: "Government-Ready",
                                description: "Designed for public health systems and government procurement. Integrates with existing emergency dispatch infrastructure.",
                                icon: "🏛️",
                            },
                            {
                                advantage: "Mission-Aligned",
                                description: "We're not chasing profit at any cost. Every product decision prioritizes life-saving impact over margins.",
                                icon: "❤️",
                            },
                            {
                                advantage: "Tech Transfer Ready",
                                description: "Structured for rapid technology transfer to local partners and manufacturers in each region.",
                                icon: "🌍",
                            },
                        ].map(({ advantage, description, icon }, i) => (
                            <div
                                key={i}
                                className="border border-neutral-200 rounded-2xl p-8 md:p-10 bg-white hover:border-neutral-300 transition-colors"
                            >
                                <div className="text-4xl mb-4">{icon}</div>
                                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{advantage}</h3>
                                <p className="text-neutral-500 leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── REVENUE MODEL ── */}
            <section className="px-8 md:px-16 lg:px-24 py-28 md:py-40 border-b border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-5 font-medium">
                        Monetization
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 max-w-lg">
                        How we grow sustainably.
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                stream: "Hardware Sales",
                                description: "Direct sales of Phase 1 detection units to consumers, insurance companies, and fleet operators. Target margin: 40%.",
                                forecast: "$12M by 2027",
                            },
                            {
                                stream: "Cloud & Analytics",
                                description: "Subscription access to historical data, predictive analytics, and integration APIs for fleet managers and insurers.",
                                forecast: "$3M by 2027",
                            },
                            {
                                stream: "Government Contracts",
                                description: "Licensing to national road safety authorities, integration with public ambulance dispatch systems, and public health data access.",
                                forecast: "$5M by 2027",
                            },
                        ].map(({ stream, description, forecast }, i) => (
                            <div
                                key={i}
                                className="border border-neutral-200 rounded-2xl p-8 md:p-10 bg-[#f7f7f5] hover:border-neutral-300 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{stream}</h3>
                                <p className="text-neutral-500 leading-relaxed mb-6">{description}</p>
                                <p className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg w-fit">
                                    {forecast}
                                </p>
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
                            Join Us
                        </p>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0a0a0a] leading-tight">
                            Help us reach<br />every market.
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4 md:items-end">
                        <p className="text-neutral-400 max-w-xs md:text-right">
                            We're looking for regional partners, distribution channels, and impact investors.
                        </p>
                        <Link href="/journeys">
                            <button className="h-14 px-10 bg-[#0a0a0a] text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-colors flex items-center gap-2">
                                Get Started Now
                                <TrendingUp className="h-4 w-4" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    )
}
