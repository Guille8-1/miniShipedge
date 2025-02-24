import { z } from 'zod'

export const SuccessSchema = z.string()
export const ErrorResponseSchema = z.string()

export const CreateUserSchema = z.object({
    name: z.string()
                .min(3,{message:'El Nombre no Valido'}),
    email: z.string()
                .min(1,{message:'Email Vacio'})
                .email({message:'Email no Valido'}),
    password: z.string()
                .min(5,{message:'Email Debe Tener almenos 5 caracteres'}),
    admin:z.string()
})

export const LoginSchema = z.object({
    email: z.string()
        .min(1, {message:'E-mail Vacio'})
        .email({message:'E-mail No Valido'}),
    password: z.string().min(5, {message:'Password No Valido'})
})

export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    admin: z.boolean()
})

export type User = z.infer<typeof UserSchema>

export const CreateProjectSchema = z.object({
    titulo: z.string()
    .min(5, {message:'Titulo No Valido'}),
    facultad: z.string()
    .min(1, {message:'Facultad no Valida'}),
    estado: z.string()
    .min(1, {message:'Estado no Valido'}),
    asignado: z.string()
    .min(1, {message:'Asisgnado no Valido'}),
    tipo: z.string()
    .min(1, {message:'Tipo no Valido'}),
    prioridad: z.string()
    .min(1, {message:'Prioridad no Valida'}),
})


export const ProjectSchemaResponse = z.object({
    id: z.number(),
    titulo: z.string(),
    facultad: z.string(),
    estado: z.string(),
    etiquetas: z.string(),
    asignados: z.array(z.string()),
    prioridad: z.string(),
    tipo: z.string(),
    comentarios: z.array(z.object({
        id: z.number(),
        comentarios: z.string(),
        createdDate: z.string(),
        updatedDate: z.string()
    })),
    createdDate: z.string(),
    updatedDate: z.string()
})

export const ProjectsFullArray = z.array(ProjectSchemaResponse)
