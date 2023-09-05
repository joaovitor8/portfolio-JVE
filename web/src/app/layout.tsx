import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio de João Vitor Ezequiel",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
