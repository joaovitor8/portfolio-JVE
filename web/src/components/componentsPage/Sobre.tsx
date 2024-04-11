import { Card } from "@/components/ui/card"
// import { MaquinaDeEscrever } from "../efeitos/MaquinaDeEscrever"

export const Sobre = () => {
  return (
    <div className="h-screen flex items-center justify-center" id="sobre">
      <div className="h-4/5 w-[95%] flex flex-col items-center justify-between p-5">
        <h2 className="text-3xl">Sobre mim</h2>
        <div className="h-4/5 w-full flex justify-center">
          <div className="w-[500px] flex flex-col items-center justify-center space-y-5">
            <p className="text-6xl">Desenvolvedor</p>
            <p className="text-4xl">Front-End / Back-End</p>
          </div>
          <Card className="w-[500px] p-5">
            <p className="text-center">Olá, me chamo João Vitor, sou um entusiasta da tecnologia com uma paixão por aprender e crescer na área, que é onde eu quero seguir. Atualmente estou cursando Ciência da Computação na faculdade Descomplica e trabalhando na Centauro para paga-la. Se tudo ocorrer como estou planejando quero ir para a área de dados e inteligência artificial, por isso além dos estudos da faculdade estou separando um tempo para o aprendizado em python. Por mais que eu esteja trabalhando atualmente busco estagio para dar uma ponta pé nesse meu inicio de carreira na área de tecnologia.</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
