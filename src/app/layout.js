import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://sureship.in"),
  title: {
    default: "Sureship - Reliable Courier & Logistics Solutions",
    template: "%s - Sureship - Reliable Courier & Logistics Solutions",
  },

  description:
    "Sureship provides fast, secure, and efficient courier and logistics services tailored for businesses and individuals across India.",
  keywords:
    "courier service, logistics solutions, parcel delivery, express shipping, Sureship, shipping service, logistics India",
  icons: {
    icon: "/favicon.ico", // Replace with actual favicon for Sureship
  },
  openGraph: {
    title: "Sureship - Delivering Trust and Speed",
    description:
      "Sureship offers end-to-end courier and logistics solutions with real-time tracking and nationwide coverage.",
    url: "https://sureship.in",
    site_name: "Sureship - Reliable Courier & Logistics Solutions",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Sureship - Reliable Courier & Logistics Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sureship - Fast & Secure Logistics Across India",
    description:
      "Experience seamless courier services and logistics operations with Sureship, your trusted delivery partner.",
    image: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
