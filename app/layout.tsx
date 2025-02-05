import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/(navbar_total)/header";
import { Footer } from "./components/piePagina/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Domitunja - Domicilios Rápidos y Confiables en Tunja",
  description:
    "Domitunja ofrece servicios de domicilios rápidos y seguros en Tunja. ¡Pide lo que necesites y lo llevamos hasta tu puerta en minutos!",
  openGraph: {
    title: "Domitunja - Domicilios en Tunja",
    description:
      "Domicilios rápidos y confiables en Tunja. Desde comida hasta documentos, te llevamos lo que necesites.",
    url: "https://www.domitunja.com",
    type: "website",
    images: [
      {
        url: "https://www.domitunja.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Domitunja - Tu servicio de domicilios en Tunja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Domitunja",
    title: "Domitunja - Domicilios en Tunja",
    description:
      "Pide domicilios rápidos y seguros en Tunja con Domitunja. ¡Servicio confiable y eficiente!",
    images: ["https://www.domitunja.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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

