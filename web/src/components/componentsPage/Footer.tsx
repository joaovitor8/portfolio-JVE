"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export const Footer = () => {

  const DD = () => {
    navigator.clipboard.writeText("jonnesbones")
  }

  return (
    <div className="h-screen flex items-center justify-center flex-col" id="contato">
      <div className="h-4/5 w-[95%] flex flex-col items-center justify-between p-5">
        <h2 className="text-3xl">Contato</h2>
        <Card className="h-60 w-[500px] flex items-center justify-center space-x-5">
          <a href="https://twitter.com/Joao_Ezeki" target="_blank" className="hover:bg-blue-400 rounded-md p-2"> <Image src={"/twitter.png"} alt={""} height={50} width={50}/> </a>
          <a href="https://www.linkedin.com/in/joaovitorezequiel/" target="_blank" className="hover:bg-blue-600 rounded-md p-2"> <Image src={"/linkedin.png"} alt={""} height={50} width={50}/> </a>
          <a href= "https://github.com/joaovitor8" target="_blank" className="hover:bg-gray-600 rounded-md p-2"> <Image src={"/github.png"} alt={""} height={50} width={50}/> </a>
          <a href="mailto:joaoezeki@gmail.com" className="hover:bg-red-600 rounded-md p-2"> <Image src={"/envelope.png"} alt={""} height={50} width={50}/> </a>
          <a href="https://wa.me/5518935000734" target="_blank" className="hover:bg-green-600 rounded-md p-2"> <Image src={"/whatsapp.png"} alt={""} height={50} width={50}/> </a>
          <div onClick={DD} className="hover:bg-violet-600 rounded-md p-2"> <Image src={"/discord.png"} alt={""} height={50} width={50}/> </div>
        </Card>
        <div></div>
      </div>
    </div>
  )
}
