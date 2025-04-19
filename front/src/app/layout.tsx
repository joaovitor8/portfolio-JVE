import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Navigation } from "@/components/nav"
import Particles from "@/components/particles"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio JVE",
  description: "Meu Portfolio",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navigation/>
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
        {children}
      </body>
    </html>
  )
}
