"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const navigation = [
  { name: "Sobre", href: "/sobre" },
  { name: "Habilidades", href: "/habilidades" },
  { name: "Experiencia", href: "/experiencia" },
  { name: "Projetos", href: "/projetos" },
]

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null)
	const [isIntersecting, setIntersecting] = useState(true)

	useEffect(() => {
		if (!ref.current) return
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		)

		observer.observe(ref.current)
		return () => observer.disconnect()
	}, [])

	return (
		<header ref={ref}>
			<div className={`inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<nav className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<ul className="flex justify-between gap-8">
						{navigation.map((item, key) => (
							<Link key={key} href={item.href} className="duration-200 text-zinc-400 hover:text-zinc-100">{item.name}</Link>
						))}
					</ul>

					<Link href="/"className="duration-200 text-zinc-300 hover:text-zinc-100">
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</nav>
			</div>
		</header>
	)
}
