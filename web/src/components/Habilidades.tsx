import Image from "next/image"

export const Habilidades = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <h3 className="text-3xl">Habilidades</h3>
      <div className="h-4/5">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl">Linguagens</h3>
          <div className="flex">
            <Image src={"/icons/linguagens/html5.png"} height={70} width={70} alt={""} className="hover:bg-blue-500 rounded-md p-3"/>
            <Image src={"/icons/linguagens/css3.png"} height={70} width={70} alt={""} className="hover:bg-orange-500 rounded-md p-3"/>
            <Image src={"/icons/linguagens/javascript.png"} height={70} width={70} alt={""} className="hover:bg-yellow-500 rounded-md p-3"/>
            <Image src={"/icons/linguagens/typescript.png"} height={70} width={70} alt={""} className="hover:bg-blue-600 rounded-md p-3"/>
            <Image src={"/icons/linguagens/python.png"} height={70} width={70} alt={""} className="hover:bg-gradient-to-br from-blue-600 to-yellow-600 rounded-md p-3"/>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-3xl">Tecnologias</h3>
          <div className="flex">
            <Image src={"/icons/tecnologias/react.png"} height={70} width={70} alt={""} className="hover:bg-blue-400 rounded-md p-3"/>
            <Image src={"/icons/tecnologias/nextjs.png"} height={70} width={70} alt={""} className="hover:bg-gray-600 rounded-md p-3"/>
            <Image src={"/icons/tecnologias/tailwindcss.png"} height={70} width={70} alt={""} className="hover:bg-blue-600 rounded-md p-3"/>
            <Image src={"/icons/tecnologias/nodejs.png"} height={70} width={70} alt={""} className="hover:bg-green-700 rounded-md p-3"/>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-3xl">Ferramentas</h3>
          <div className="flex">
            <Image src={"/icons/ferramentas/git.png"} height={70} width={70} alt={""} className="hover:bg-red-600 rounded-md p-3"/>
            <Image src={"/icons/ferramentas/visual-studio.png"} height={70} width={70} alt={""} className="hover:bg-blue-500 rounded-md p-3"/>
            <Image src={"/icons/ferramentas/mongodb.png"} height={70} width={70} alt={""} className="hover:bg-green-500 rounded-md p-3"/>
          </div>
        </div>
      </div>
    </div>
  )
}
