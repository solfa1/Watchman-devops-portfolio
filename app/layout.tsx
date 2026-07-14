import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Watchman Okoro | DevOps & Reliability Engineer",
    template: "%s | Watchman Okoro",
  },
  description:
    "DevOps and Reliability Engineer building resilient cloud infrastructure, automated software delivery pipelines, and production-ready platforms with AWS, Terraform, Docker, Kubernetes, and CI/CD.",
  keywords: [
    "Watchman Okoro",
    "DevOps Engineer",
    "Reliability Engineer",
    "Site Reliability Engineering",
    "SRE",
    "Cloud Engineer",
    "AWS",
    "Terraform",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Prometheus",
    "Grafana",
  ],
  authors: [
    {
      name: "Watchman Okoro",
    },
  ],
  creator: "Watchman Okoro",
  openGraph: {
    type: "website",
    title: "Watchman Okoro | DevOps & Reliability Engineer",
    description:
      "Portfolio showcasing cloud infrastructure, automation, observability, Kubernetes, Infrastructure as Code, and production-focused engineering projects.",
    siteName: "Watchman Okoro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watchman Okoro | DevOps & Reliability Engineer",
    description:
      "Portfolio showcasing cloud infrastructure, automation, observability, Kubernetes, Infrastructure as Code, and production-focused engineering projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}