import { Animacao } from "@/components/components/Animacao"
import { Habilidades } from "@/components/components/Habilidades"
import { Projetos } from "@/components/components/Projetos"
import { Sobre } from "@/components/components/Sobre"

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
