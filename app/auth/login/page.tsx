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
        <div className='flex flex-row items-center gap-10'>
            <div className='flex flex-col'>
                <h1 className="font-bold text-4xl text-cyan-600">Sistema de Información y</h1>
                <p className="text-4xl font-bold text-cyan-600">Gestión de Infraestructura</p>
            </div>
            <Image src="/umsaoff.jfif" width={190} height={125} alt='off-umsa'></Image>
        </div>
        <LoginFrom />
    </>
  )
}