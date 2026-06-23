
import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Suspense } from "react";
import { AuthProvider } from "@/hooks/auth-provider";
import { ThemeProvider } from "next-themes";

// DM Sans — clean, geometric, trustworthy. Perfect for a safety brand.
const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "AntiDeath — Road Safety Technology",
    description:
        "AntiDeath deploys affordable emergency detection, AI vision, and LiDAR into everyday vehicles to reduce road fatalities to zero.",
    openGraph: {
        title: "AntiDeath — Road Safety Technology",
        description: "Real-time accident detection. When every second counts.",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${dmSans.variable} antialiased font-sans`}>
        <AuthProvider>
            <ThemeProvider defaultTheme="light" storageKey="theme-pref">
                <Suspense fallback={null}>
                    <Header />
                    {children}
                </Suspense>
            </ThemeProvider>
        </AuthProvider>
        </body>
        </html>
    );
}