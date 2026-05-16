import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Acrypt — LCA, EPD & CSRD Consultancy",
    template: "%s | Acrypt — LCA, EPD & CSRD Consultancy",
  },
  description:
    "Acrypt delivers ISO 14025-certified Life Cycle Assessments, Environmental Product Declarations, and CSRD compliance reporting for companies that need defensible environmental data.",
  metadataBase: new URL("https://acrypt.dk"),
  authors: [{ name: "Acrypt", url: "https://acrypt.dk" }],
  creator: "Acrypt",
  publisher: "Acrypt",
  keywords: [
    "LCA", "EPD", "CSRD", "life cycle assessment", "environmental product declaration",
    "carbon accounting", "GHG Protocol", "ISO 14025", "EN 15804", "sustainability consultancy",
    "CSRD compliance", "Scope 3 emissions", "sustainability reporting Denmark",
  ],
  openGraph: {
    type: "website",
    locale: "en_DK",
    url: "https://acrypt.dk",
    siteName: "Acrypt",
    title: "Acrypt — LCA, EPD & CSRD Consultancy",
    description:
      "ISO 14025-certified LCA, EPD and CSRD reporting. PhD-led process engineering rigour applied to sustainability measurement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acrypt — LCA, EPD & CSRD Consultancy",
    description:
      "ISO 14025-certified LCA, EPD and CSRD reporting. PhD-led process engineering rigour applied to sustainability measurement.",
    creator: "@acrypt_dk",
  },
  alternates: {
    canonical: "https://acrypt.dk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
