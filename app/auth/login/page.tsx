import type { Metadata } from "next"
import LoginFrom from "@/components/auth/LoginFrom"

export const metadata: Metadata = {
    title:'LogIn Servicios UMSA',
    description:'Gestion/Control Servicios/Proyectos'
}

export default function LoginPage() {
  return (
    <>
        <h1 className="font-bold text-4xl text-cyan-600">Sistema de Información y</h1>
        <p className="text-4xl font-bold text-cyan-600">Gestión de Infraestructura</p>

        <LoginFrom />
    </>
  )
}