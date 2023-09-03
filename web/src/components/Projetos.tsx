"use client"

import { useEffect, useState } from "react"
import axios from "axios"

export const Projetos = () => {
  const [repos, setRepos] = useState([])
  const [mostrar, setMostrar] = useState(false)

  useEffect(() => {
    GetRepos()
  }, [])

  const GetRepos = () => {
    axios.get("https://api.github.com/users/joaovitor8/repos")
    .then((res) => res.data)
    .then((res) => {
      const respositorios = []
      res.map((r) => {
        if(r.topics[0] !== "book" ) {
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
    }else {
      setMostrar(false)
    }
  }

  return (
    <div className={mostrar ? "flex flex-col bg-red-950 items-center justify-between" : "h-screen flex flex-col bg-red-950 items-center justify-between"}>
      <h2 className="text-3xl">Projetos</h2>
      <div className={mostrar? "w-full bg-red-500 mb-5 flex flex-col items-center mt-20" : "h-3/4 w-full bg-red-500 mb-5 flex flex-col items-center"}>
        <div className="flex flex-wrap justify-center overflow-hidden">
          {repos.map((r, key) => (
            <div key={key} className="h-44 w-2/5 bg-blue-500 border m-1">
              {r.name}
            </div>
          ))}
        </div>
        <div className={mostrar ? "h-20 w-40 bg-fuchsia-500 flex items-center justify-center" : "h-44 w-40 bg-fuchsia-500 flex items-center justify-center"}>
          <button className="bg-lime-500 border p-1 rounded-md" onClick={MostarMaisMenos}>Mostar {mostrar ? "Menos" : "Mais"}</button>
        </div>
      </div>
    </div>
  )
}
