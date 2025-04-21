
export default function Habilidades() {
	return (
    <main className="h-screen flex flex-col items-center justify-center">
      <div>
        <h2 className="text-3xl text-center mb-10">Minhas Habilidades e Tecnologias</h2>
        <div className="flex space-x-5">
          <div className="w-[300px] p-5 border rounded">
            <h3 className="text-2xl text-center mb-5">JavaScript</h3>

            <div className="space-y-3">
              <div>
                <h4 className="text-2xl">Front-End</h4>
                <ul className="grid grid-cols-2">
                  <li className="text-center m-0.5 border rounded">HTML</li>
                  <li className="text-center m-0.5 border rounded">CSS</li>
                  <li className="text-center m-0.5 border rounded">React</li>
                  <li className="text-center m-0.5 border rounded">Tailwind CSS</li>
                  <li className="text-center m-0.5 border rounded">Next</li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl">Back-End</h4>
                <ul className="grid grid-cols-2">
                  <li className="text-center m-0.5 border rounded">Node</li>
                  <li className="text-center m-0.5 border rounded">Fastify</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-[300px] p-5 border rounded">
            <h3 className="text-2xl text-center mb-5">Python</h3>

            <h4 className="text-2xl">Dados</h4>
            <ul className="grid grid-cols-2">
              <li className="text-center m-0.5 border rounded">Pandas</li>
              <li className="text-center m-0.5 border rounded">Numpy</li>
            </ul>
          </div>

          <div className="w-[300px] p-5 border rounded">
            <h3 className="text-2xl text-center mb-5">Outros</h3>
            <ul className="grid grid-cols-2">
              <li className="text-center m-0.5 border rounded">Git</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
