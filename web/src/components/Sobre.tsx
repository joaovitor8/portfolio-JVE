
export const Sobre = () => {
  return (
    <div className="h-screen flex items-center justify-center" id="sobre">
      <div className="h-4/5 w-[95%] flex flex-col items-center justify-between p-5">
        <h2 className="text-3xl">Sobre mim</h2>
        <div className="h-4/5 w-full flex max-md:justify-center">
          <div className="w-1/2 flex flex-col items-center justify-center max-md:hidden">
            <p className="text-6xl">Developer</p>
            <p className="text-4xl">Web</p>
            <p className="text-4xl">Front-End</p>
          </div>
          <div className="w-1/2 p-5 bg-gray-800 rounded-xl shadow-white shadow-sombraLadosIguais max-md:w-[90%]">
            <p className="text-center">Olá, me chamo João Vitor, sou um jovem entusiasta da tecnologia com uma paixão por aprender e crescer na área, atualmente sou aluno na ADA e estou estudando desenvolvimento Front-End com ReactJS.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
