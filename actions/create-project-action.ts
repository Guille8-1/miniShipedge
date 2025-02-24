"use server"

import { ErrorResponseSchema, SuccessSchema, CreateProjectSchema} from '@/src/schemas'
import { verifySession } from '@/src/auth/dal'
type ActionState = {
    errors: string[],
    success: string
}

export async function createProject(prevState: ActionState, formData: FormData) {
    const user = await verifySession();
    const asignado = formData.get('asignado')
    const formatAsignado = `[\"${asignado}\"]`
    const newProject = {
        titulo: formData.get('titulo'),
        facultad: formData.get('facultad'),
        estado: formData.get('estado'),
        asignado: formatAsignado,
        tipo: formData.get('tipo'),
        prioridad: formData.get('prioridad')
    }
    const projectValidation = CreateProjectSchema.safeParse(newProject)

    if(!projectValidation.success) {
        const errors = projectValidation.error.errors.map(error => error.message)
        return {
            errors,
            success:''
        }
    }
    const bodyRequest = {
            user: user.user.id,
            titulo: projectValidation.data.titulo,
            facultad: projectValidation.data.facultad,
            estado: projectValidation.data.estado,
            asignado: projectValidation.data.asignado,
            etiquetas:'nuevo',
            tipo: projectValidation.data.tipo,
            prioridad: projectValidation.data.prioridad,
    }

    const url = `${process.env.BACK_URL}/projects/create`

    const request = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyRequest)
    })
    
    const json = await request.json()
    
    if(!request.ok) {
        const error = ErrorResponseSchema.parse(json)
        return {
            errors:[error],
            success:''
        }
    } else {
        const success = SuccessSchema.parse(json)
        return {
            errors:[],
            success
        }
    }
}