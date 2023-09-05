"use client"

import Image from "next/image"

export const Footer = () => {

  const DD = () => {
    navigator.clipboard.writeText("jonnesbones")
  }

  return (
    <div className="h-screen flex items-center justify-between flex-col" id="contato">
      <h2 className="text-3xl mt-14">Contato</h2>
      <div className="flex items-center justify-center h-40 w-1/2 bg-slate-800 rounded-md max-md:flex-wrap">
        <a href="https://twitter.com/Joao_Ezeki" target="_blank" className="hover:bg-blue-400 rounded-md p-3"> <Image src={"/twitter.png"} alt={""} height={50} width={50}/> </a>
        <a href="https://www.linkedin.com/in/joaovitorezequiel/" target="_blank" className="hover:bg-blue-600 rounded-md p-3"> <Image src={"/linkedin.png"} alt={""} height={50} width={50}/> </a>
        <a href="https://github.com/joaovitor8" target="_blank" className="hover:bg-gray-600 rounded-md p-3"> <Image src={"/github.png"} alt={""} height={50} width={50}/> </a>
        <a href="mailto:joaoezeki@gmail.com" className="hover:bg-red-600 rounded-md p-3"> <Image src={"/envelope.png"} alt={""} height={50} width={50}/> </a>
        <a href="https://wa.me/5518935000734" target="_blank" className="hover:bg-green-600 rounded-md p-3"> <Image src={"/whatsapp.png"} alt={""} height={50} width={50}/> </a>
        <div onClick={DD} className="hover:bg-violet-600 rounded-md p-3"> <Image src={"/discord.png"} alt={""} height={50} width={50}/> </div>
      </div>
      <div className="animate-rgbAnim h-5 w-full"></div>
    </div>
  )
}
