"use client"

import { useEffect, useState } from "react"
import { Repos } from "@/outros/types"
import axios from "axios"

import { Card } from "@/components/card"
import { Navigation } from "@/components/nav"

export default function Projetos() {
  const [repos, setRepos] = useState<Repos[]>([])

  useEffect(() => {
    GetRepos()
  }, [])

  const GetRepos = () => {
    axios.get("https://api.github.com/users/joaovitor8/repos")
      .then((res) => res.data)
      .then((res) => {
        const respositorios: Repos[] = []
        res.map((r: Repos) => {
          if (!r.topics.includes("book")) {
            respositorios.push(r)
          }
        })
        setRepos(respositorios)
      })
      .catch((error) => { console.error(error) })
  }

  // console.log(repos)

  return(
    <div className="relative min-h-screen bg-linear-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <Navigation/>
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3 px-20 pt-20">
        {repos.map((r, key) => (
          <Card key={key}>
            <div className="h-40 pl-5 pt-5">
              <div>{r.name}</div>
              <div>{r.description}</div>
              <div className="mt-10"><a href={r.html_url} target="_blank">Ver repositorio</a></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
