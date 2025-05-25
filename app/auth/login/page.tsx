import type { Metadata } from "next"
import LoginFrom from "@/components/auth/LoginFrom"
import Image from "next/image";

export const metadata: Metadata = {
    title:'LogIn Servicios UMSA',
    description:'Gestion/Control Servicios/Proyectos'
}

export default function LoginPage() {
  return (
    <>
        <div className='flex flex-col items-center gap-10 md:flex-row'>
            <div className='flex flex-col text-center sm:justify-start'>
                <h1 className="font-bold text-4xl text-cyan-600">Sistema de Información y</h1>
                <p className="text-4xl font-bold text-cyan-600">Gestión de Infraestructura</p>
            </div>
            <Image src="/umsaoff.jfif" width={190} height={125} alt='off-umsa'></Image>
        </div>
        <LoginFrom />
    </>
  )
}