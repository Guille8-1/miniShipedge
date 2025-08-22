import type { Metadata } from "next"
import LoginFrom from "@/components/auth/LoginFrom"

export const metadata: Metadata = {
    title:'LogIn Servicios UMSA',
    description:'Gestion/Control Servicios/Proyectos'
}

export default async function LoginPage() {


  return (
    <>
        <LoginFrom />
    </>
  )
}
