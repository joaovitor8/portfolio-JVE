"use client"

import { useState } from "react"
import Link from "next/link"

import { Menu, X } from "lucide-react"

export const Header = () => {
  const [nav, setNav] = useState(false)

  const showNav = () => {
    setNav(!nav)
  }

  return (
    <header className="h-16 w-full flex items-center justify-between px-10 fixed">
      <Link href={"#"}><h1 className="text-4xl">&lt;DEV/&gt;</h1></Link>
      <nav className="space-x-10 max-md:hidden">
        <Link href={"#sobre"} className="hover:underline decoration-green-500">Sobre</Link>
        <Link href={"#habilidades"} className="hover:underline decoration-green-500">Habilidades</Link>
        <Link href={"#projetos"} className="hover:underline decoration-green-500">Projetos</Link>
        <Link href={"#contato"} className="hover:underline decoration-green-500">Contato</Link>
      </nav>

      <div className="mr-7 flex h-20 items-center justify-end md:hidden">
        {nav ? (
          <X onClick={showNav} className="fixed right-[68px] top-[20px] z-50"/>
        ) : (
          <Menu onClick={showNav}/>
        )}
      </div>

      <nav className={`fixed top-[0px] z-40 flex h-[100vh] w-full flex-col items-center justify-center space-y-5 bg-gray-600 md:hidden ${ nav ? "right-[0px]" : "right-[-100vw]" } `}>
        <Link href={"#sobre"} className="hover:underline decoration-green-500">Sobre</Link>
        <Link href={"#habilidades"} className="hover:underline decoration-green-500">Habilidades</Link>
        <Link href={"#projetos"} className="hover:underline decoration-green-500">Projetos</Link>
        <Link href={"#contato"} className="hover:underline decoration-green-500">Contato</Link>
      </nav>
    </header>
  )
}
