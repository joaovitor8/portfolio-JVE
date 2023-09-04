import { Animacao } from "@/components/Animacao"
import { SobreMin } from "@/components/SobreMin"
import { Habilidades } from "@/components/Habilidades"
import { Projetos } from "@/components/Projetos"

export default function Home() {
  return (
    <main>
      <Animacao />
      <SobreMin />
      <Habilidades />
      <Projetos />
    </main>
  )
}
