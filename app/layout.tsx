import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BioTissue Colombia - Página en Construcción",
  description: "Importación y comercialización de dispositivos médicos de alta calidad. Sitio en construcción.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
