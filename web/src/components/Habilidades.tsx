import Image from "next/image"

export const Habilidades = () => {
  return (
    <div className="h-screen flex items-center justify-center" id="habilidades">
      <div className="h-4/5 w-[95%] flex flex-col items-center justify-between p-5">
        <h3 className="text-3xl">Habilidades</h3>
        <div className="h-4/5 w-full flex justify-between">
          <div className="w-1/4 flex flex-col items-center space-y-5 bg-slate-800 rounded-md">
            <h3 className="text-3xl">Linguagens</h3>
            <div className="flex flex-wrap">
              <Image src={"/html5.png"} height={70} width={70} alt={""} className="hover:bg-blue-500 rounded-md p-3"/>
              <Image src={"/css3.png"} height={70} width={70} alt={""} className="hover:bg-orange-500 rounded-md p-3"/>
              <Image src={"/javascript.png"} height={70} width={70} alt={""} className="hover:bg-yellow-500 rounded-md p-3"/>
              <Image src={"/typescript.png"} height={70} width={70} alt={""} className="hover:bg-blue-600 rounded-md p-3"/>
              <Image src={"/python.png"} height={70} width={70} alt={""} className="hover:bg-gradient-to-br from-blue-600 to-yellow-600 rounded-md p-3"/>
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-center space-y-5 bg-slate-800 rounded-md">
            <h3 className="text-3xl">Tecnologias</h3>
            <div className="flex flex-wrap">
              <Image src={"/react.png"} height={70} width={70} alt={""} className="hover:bg-blue-400 rounded-md p-3"/>
              <Image src={"/nextjs.png"} height={70} width={70} alt={""} className="hover:bg-gray-600 rounded-md p-3"/>
              <Image src={"/nodejs.png"} height={70} width={70} alt={""} className="hover:bg-green-700 rounded-md p-3"/>
              <Image src={"/tailwindcss.png"} height={70} width={70} alt={""} className="hover:bg-blue-600 rounded-md p-3"/>
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-center space-y-5 bg-slate-800 rounded-md">
            <h3 className="text-3xl">Ferramentas</h3>
            <div className="flex flex-wrap">
              <Image src={"/visual-studio.png"} height={70} width={70} alt={""} className="hover:bg-blue-500 rounded-md p-3"/>
              <Image src={"/git.png"} height={70} width={70} alt={""} className="hover:bg-red-600 rounded-md p-3"/>
              <Image src={"/mongodb.png"} height={70} width={70} alt={""} className="hover:bg-green-500 rounded-md p-3"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
