import Link from "next/link"

export const Header = () => {
  return (
    <header className="h-16 w-full flex items-center justify-between px-10 fixed">
      <h1 className="text-4xl">&lt;DEV/&gt;</h1>
      <nav className="space-x-10">
        <Link href={""} className="hover:underline decoration-green-500">Home</Link>
        <Link href={""} className="hover:underline decoration-green-500">Sobre</Link>
        <Link href={""} className="hover:underline decoration-green-500">Projetos</Link>
        <Link href={""} className="hover:underline decoration-green-500">Contato</Link>
      </nav>
    </header>
  )
}
