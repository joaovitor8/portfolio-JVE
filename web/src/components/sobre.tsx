import Image from "next/image"

export const Sobre = () => {
  return (
    <div className="h-screen flex flex-col bg-green-500 items-center justify-center space-y-5">
      <h2 className="text-3xl">Sobre</h2>
      <div className="h-3/4 w-1/2 rounded-xl shadow-white shadow-sombraLadosIguais p-5 flex flex-col">
        <div className="flex flex-col items-center h-1/2 space-y-5">
          <h3 className="text-xl">Developer</h3>
          <p className="text-center">Olá, me chamo João Vitor, sou um jovem entusiasta da tecnologia com uma paixão por aprender e crescer na área.</p>
        </div>

        <div className="flex flex-col items-center space-y-5">
          <h3 className="text-xl">Habilidades</h3>
          <ul className="flex flex-wrap space-x-2 justify-center w-1/2">
            <li><Image src={"/git-logo.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/html5-logo.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/css3-logo.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/javascript-logo.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/typescript-logo.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/react-logo.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/tailwindcss-logo.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/nextjs-logo.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/nodejs-logo.png"} height={40} width={40} alt={"IMG tecs"}/></li>
            <li><Image src={"/mongodb-logo.png"} height={40} width={40} alt={"IMG tecs"}/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
