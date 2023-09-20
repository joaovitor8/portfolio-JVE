/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from "react"

export const MaquinaDeEscrever = (props: { esconderCursor?: any; texto: string; delay?: any }) => {
  const [texto, setTexto] = useState("")
  const [mostrarCursor, setMostrarCursor] = useState(false)

  const EscreverNaTela = (texto: string, i = 0) => {
    if (i < texto.length) {
      setMostrarCursor(true)

      setTexto(texto.slice(0, i + 1))
      setTimeout(() => EscreverNaTela(texto, i + 1), 100)
    }
    else if (i >= texto.length && props?.esconderCursor) {
      setMostrarCursor(false)
    }
  }

  useEffect(() => {
    setTimeout(() => EscreverNaTela(props.texto), props?.delay ?? 200)
  }, [5000])

  return (
    <p className="text-4xl">
      {texto}
      {mostrarCursor && (
        <span className="animate-animar-cursor text-4xl ml-1 font-medium">|</span>
      )}
    </p>
  )
}
