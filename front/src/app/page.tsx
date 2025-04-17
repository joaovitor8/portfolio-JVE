import Link from "next/link"

const navigation = [
  { name: "Sobre", href: "/sobre" },
  { name: "Habilidades", href: "/habilidades" },
  { name: "Experiencia", href: "/experiencia" },
  { name: "Projetos", href: "/projetos" },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden   bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item, key) => (
            <Link key={key} href={item.href} className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">{item.name}</Link>
          ))}
        </ul>
      </nav>

      
      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">Portfolio</h1>
      {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}


      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm space-x-5 text-zinc-500">
          <a href="https://www.linkedin.com/in/joaovitorezequiel/" target="_blank">LinkedIn</a>
          <a href="https://github.com/joaovitor8" target="_blank">GitHub</a>
        </h2>
      </div>
    </div>
  )
}
