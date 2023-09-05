import { Animacao } from "@/components/Animacao"
import { Sobre } from "@/components/Sobre"
import { Habilidades } from "@/components/Habilidades"
import { Projetos } from "@/components/Projetos"

export default function Home() {
  return (
    <main>
      <Animacao />
      <Sobre />
      <Habilidades />
      <Projetos />
    </main>
  )
}
