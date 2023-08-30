import Link from "next/link"


export const Header = () => {
  return (
    <header className="h-14 flex items-center justify-between px-10">
      <p className="text-3xl bg-gradient-to-l from-green-500  to-violet-500">JV.DEV</p>
      <nav className="space-x-10">
        <Link href={""} className="hover:underline decoration-green-500">Sobre</Link>
        <Link href={""} className="hover:underline decoration-green-500">Projetos</Link>
        <Link href={""} className="hover:underline decoration-green-500">Contato</Link>
      </nav>
    </header>
  )
}
