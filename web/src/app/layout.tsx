import { Footer } from "@/components/componentsPage/Footer"
import { Header } from "@/components/componentsPage/Header"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio de João Vitor Ezequiel",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="max-lg:hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
