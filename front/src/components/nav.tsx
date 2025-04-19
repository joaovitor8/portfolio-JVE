"use client"

import Link from "next/link"

const navigation = [
	{ name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  // { name: "Habilidades", href: "/habilidades" },
	{ name: "Formação", href: "/formacao" },
  { name: "Experiencia", href: "/experiencia" },
  { name: "Projetos", href: "/projetos" },
]

export const Navigation: React.FC = () => {
	return (
		<header className="">
			<nav className="animate-fade-in w-full absolute flex justify-end p-6 gap-10 max-md:hidden">
				{navigation.map((item, key) => (
					<Link key={key} href={item.href} className="duration-200 text-zinc-400 hover:text-zinc-100">{item.name}</Link>
				))}
			</nav>

			{/* <div className="md:hidden">Abrir</div> */}

			<nav className="bg-black w-full absolute z-50 flex flex-col items-center p-5 gap-2 md:hidden">
				{navigation.map((item, key) => (
					<Link key={key} href={item.href} className="duration-200 text-zinc-400 hover:text-zinc-100">{item.name}</Link>
				))}
			</nav>
		</header>
	)
}
