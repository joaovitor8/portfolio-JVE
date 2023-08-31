import Image from "next/image"

export const Sobre = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-5">
      <h2 className="text-3xl">Sobre</h2>
      <div className="h-3/4 w-1/2 rounded-xl shadow-white shadow-sombraLadosIguais p-5 flex flex-col">
        <div className="flex flex-col items-center h-1/2 space-y-5">
          <h3 className="text-xl">Developer</h3>
          <p className="text-center">Olá, me chamo João Vitor, sou um jovem entusiasta da tecnologia com uma paixão por aprender e crescer na área.</p>
        </div>

        <div className="flex flex-col items-center space-y-5">
          <h3 className="text-xl">Habilidades</h3>
          <ul className="flex flex-wrap space-x-2 justify-center w-1/2">
            <li><Image src={"/icons8-git.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/icons8-html.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/icons8-css.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/icons8-javascript.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/icons8-typescript.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/icons8-react.js.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/icons8-tailwindcss.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/icons8-next.js.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/icons8-node.js.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/icons8-mongodb.png"} height={40} width={40} alt={"IMG tecs"}/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
