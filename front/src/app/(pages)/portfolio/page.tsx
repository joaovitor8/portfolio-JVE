import { Sobre } from "@/components/componentsPages/sobre"
import { Habilidades } from "@/components/componentsPages/habilidades"
import { Contato } from "@/components/componentsPages/contato"

export default function Portfolio() {
  return (
    <main className="flex flex-col items-center">
      {/* <Sobre /> */}
      {/* <div className="border w-screen my-10 "></div> */}
      {/* <Habilidades /> */}
      {/* <div className="border w-screen my-10 "></div> */}
      <Contato />
    </main>
  )
}
