import type { Metadata } from "next";
import { Geist_Mono, Manrope, Sora } from "next/font/google";
import ScrollReveal from "./components/scroll-reveal";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: true,
  display: 'swap',
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: true,
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: true,
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://radiast.com'),
  title: {
    default: "Radiast | Transformación Digital y Tecnología Integrada",
    template: "%s | Radiast"
  },
  description:
    "Transformación digital, automatización RPA, inteligencia artificial y consultoría tecnológica para empresas. Expertos en Cloud, BI y desarrollo de software.",
  keywords: [
    "transformación digital",
    "automatización empresarial",
    "inteligencia artificial",
    "consultoría tecnológica",
    "RPA",
    "desarrollo software",
    "cloud computing",
    "business intelligence",
    "integración sistemas",
    "microsoft azure"
  ],
  authors: [{ name: "Radiast", url: "https://radiast.com" }],
  creator: "Radiast",
  publisher: "Radiast",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_BO",
    url: "https://radiast.com",
    title: "Radiast | Transformación Digital",
    description: "Líderes en transformación digital, automatización e inteligencia artificial para empresas.",
    siteName: "Radiast",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Radiast - Tecnología Integrada"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Radiast | Transformación Digital",
    description: "Transformación digital, automatización RPA e inteligencia artificial para empresas.",
    images: ["/twitter-image.jpg"],
    creator: "@radiast"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'technology',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${sora.variable} ${manrope.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
