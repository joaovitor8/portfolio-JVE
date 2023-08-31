"use client"

import { useEffect, useState } from "react"
import axios from "axios"

export const Projetos = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    GetRepos()
  }, [])

  const GetRepos = () => {
    axios.get("https://api.github.com/users/joaovitor8/repos")
    .then((res) => { setRepos(res.data) })
    .catch((error) => { console.error(error) })
  }
  
  console.log(repos)

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-5">
      <h2 className="text-3xl">Projetos</h2>
      <div className="flex">
        {repos.map((r, key) => (
          <div key={key} className="h-40 w-60 bg-slate-500">
            {r.name}
          </div>
        ))}
      </div>
    </div>
  )
}
