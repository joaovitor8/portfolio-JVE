import { Header } from "@/components/components/Header"
import { Footer } from "@/components/components/Footer"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio de João Vitor Ezequiel",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
