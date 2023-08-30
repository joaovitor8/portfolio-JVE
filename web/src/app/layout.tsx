import { Header } from "@/components/Header"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white">
        <Header />
        {children}
      </body>
    </html>
  )
}
