"use client"

import { useEffect, useState, useRef } from "react"
import axios from "axios"

export const Projetos = () => {
  const [repos, setRepos] = useState([])
  const carousel = useRef(null)

  useEffect(() => {
    GetRepos()
  }, [])

  const GetRepos = () => {
    axios.get("https://api.github.com/users/joaovitor8/repos")
    .then((res) => { setRepos(res.data) })
    .catch((error) => { console.error(error) })
  }

  const handleLeftClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()

    carousel.current.scrollLeft += carousel.current.offsetWidth
  }
  
  console.log(repos)

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-5">
      <h2 className="text-3xl">Projetos</h2>
      <div className="flex overflow-x-auto w-4/5" ref={carousel}> {/*container*/}
        <div className="flex space-x-5">  {/* Carousel */}
          {repos.map((r, key) => (
            <div key={key} className="h-80 w-60 bg-slate-500">
              {r.name}
            </div>
          ))}
        </div>
      </div>
      <div className="space-x-6">
        <button onClick={handleLeftClick}>Esquerda</button>
        <button onClick={handleRightClick}>Direita</button>
      </div>
    </div>
  )
}
