"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Repos } from "./Types"

export const Projetos = () => {
  const [repos, setRepos] = useState<Repos[]>([])
  const [mostrar, setMostrar] = useState(false)

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

  const MostarMaisMenos = () => {
    if (mostrar === false) {
      setMostrar(true)
    } else {
      setMostrar(false)
    }
  }

  console.log(repos)

  return (
    <div className={mostrar ? "flex flex-col items-center justify-between" : "h-screen flex flex-col items-center justify-between"}>
      <h2 className="text-3xl">Projetos</h2>
      <div className={mostrar ? "w-full mb-5 flex flex-col items-center mt-20" : "h-3/4 w-full mb-5 flex flex-col items-center"}>
        <div className="flex flex-wrap justify-center overflow-hidden">
          {repos.map((r, key) => (
            <div key={key} className="h-44 w-2/5 border m-1 flex flex-col justify-between">
              <div><p className="text-xl mt-2 text-center">{r.name}</p></div>
              <div><p className="px-5 text-center">{r.description}</p></div>
              <div className="h-10 flex justify-between">
                <div className="flex flex-wrap items-center justify-center space-x-3 w-1/2">
                  {r.topics.map((t, key) => (
                    <span key={key}>{t}</span>
                  ))}
                </div>
                <button className="px-5 bg-gray-500 rounded-sm"><a href={r.html_url} target="_blank">Ver Repositorio</a></button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="h-12 w-40 my-2 border-none rounded-md animate-rgbAnim" onClick={MostarMaisMenos}>Mostar {mostrar ? "Menos" : "Mais"}</button>
        </div>
      </div>
    </div>
  )
}
