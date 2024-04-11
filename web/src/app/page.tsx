import { Animacao } from "@/components/componentsPage/Animacao"
import { Habilidades } from "@/components/componentsPage/Habilidades"
import { Projetos } from "@/components/componentsPage/Projetos"
import { Sobre } from "@/components/componentsPage/Sobre"

export default function Home() {
  return (
    <main>
      {/* <Animacao /> */}
      <Sobre />
      <Habilidades />
      <Projetos />
    </main>
  )
}
