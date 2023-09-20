import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export const Habilidades = () => {
  return (
    <div className="h-screen flex items-center justify-center max-md:h-auto" id="habilidades">
      <div className="h-4/5 w-[95%] flex flex-col items-center justify-between p-5">
        <h2 className="text-3xl max-md:mb-7">Habilidades</h2>
        <div className="h-4/5 w-full flex justify-between max-md:flex-col max-md:items-center max-md:space-y-4">
          <Card className="w-1/4 max-md:h-52 max-md:w-3/5">
            <CardHeader className="text-3xl text-center">
              <CardTitle>Linguagens</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center max-md:justify-center">
              <Image src={"/html5.png"} height={70} width={70} alt={""} className="hover:bg-blue-500 rounded-md p-3"/>
              <Image src={"/css3.png"} height={70} width={70} alt={""} className="hover:bg-orange-500 rounded-md p-3"/>
              <Image src={"/javascript.png"} height={70} width={70} alt={""} className="hover:bg-yellow-500 rounded-md p-3"/>
              <Image src={"/typescript.png"} height={70} width={70} alt={""} className="hover:bg-blue-600 rounded-md p-3"/>
              <Image src={"/python.png"} height={70} width={70} alt={""} className="hover:bg-gradient-to-br from-blue-600 to-yellow-600 rounded-md p-3"/>
            </CardContent>
          </Card>

          <Card className="w-1/4 max-md:h-52 max-md:w-3/5">
            <CardHeader className="text-3xl text-center">
              <CardTitle>Tecnologias</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center max-md:justify-center">
              <Image src={"/react.png"} height={70} width={70} alt={""} className="hover:bg-blue-400 rounded-md p-3"/>
              <Image src={"/nextjs.png"} height={70} width={70} alt={""} className="hover:bg-gray-600 rounded-md p-3"/>
              <Image src={"/nodejs.png"} height={70} width={70} alt={""} className="hover:bg-green-700 rounded-md p-3"/>
              <Image src={"/tailwindcss.png"} height={70} width={70} alt={""} className="hover:bg-blue-600 rounded-md p-3"/>
            </CardContent>
          </Card>

          <Card className="w-1/4 max-md:h-52 max-md:w-3/5">
            <CardHeader className="text-3xl text-center">
              <CardTitle>Ferramentas</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-center max-md:justify-center">
              <Image src={"/visual-studio.png"} height={70} width={70} alt={""} className="hover:bg-blue-500 rounded-md p-3"/>
              <Image src={"/git.png"} height={70} width={70} alt={""} className="hover:bg-red-600 rounded-md p-3"/>
              <Image src={"/mongodb.png"} height={70} width={70} alt={""} className="hover:bg-green-500 rounded-md p-3"/>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
