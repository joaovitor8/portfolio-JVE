import Link from "next/link"

export const Header = () => {
  return (
    <header className="h-16 w-full flex items-center justify-between px-10 fixed bg-black">
      <Link href={"#"}><h1 className="text-4xl">&lt;DEV/&gt;</h1></Link>
      <nav className="space-x-10">
        <Link href={"#sobre"} className="hover:underline decoration-green-500">Sobre</Link>
        <Link href={"#habilidades"} className="hover:underline decoration-green-500">Habilidades</Link>
        <Link href={"#projetos"} className="hover:underline decoration-green-500">Projetos</Link>
        <Link href={"#contato"} className="hover:underline decoration-green-500">Contato</Link>
      </nav>
    </header>
  )
}
