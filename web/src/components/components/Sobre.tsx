import { Card } from "@/components/ui/card"
import { MaquinaDeEscrever } from "../efeitos/MaquinaDeEscrever"

export const Sobre = () => {
  return (
    <div className="h-screen flex items-center justify-center" id="sobre">
      <div className="h-4/5 w-[95%] flex flex-col items-center justify-between p-5">
        <h2 className="text-3xl">Sobre mim</h2>
        <div className="h-4/5 w-full flex max-md:justify-center">
          <div className="w-1/2 flex flex-col items-center justify-center space-y-5 max-md:hidden">
            <p className="text-6xl">Developer</p>
            <MaquinaDeEscrever texto="Web / Front-End" />
          </div>
          <Card className="w-1/2 p-5 max-md:w-[95%]">
            <p className="text-center">Olá, me chamo João Vitor, sou um jovem entusiasta da tecnologia com uma paixão por aprender e crescer na área, atualmente sou aluno na ADA e estou estudando desenvolvimento Front-End com ReactJS.</p>
          </Card>
        </div>
      </div>

    </div>
  )
}
