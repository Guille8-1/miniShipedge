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
    nivel:z.string()
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
    admin: z.boolean(),
})

export type User = z.infer<typeof UserSchema>

export const CreateProjectSchema = z.object({
    titulo: z.string()
    .min(5, {message:'Titulo No Valido'}),
    tipoDocumento: z.string()
    .min(1, {message:'Tipo de Documento Obligatorio'}),
    asignadosId: z.array(z.string()
    .min(1,{message:'Al menos 1 Asignado es Obligatorio'})),
    estado: z.string()
    .min(1, {message:'Estado no Valido'}),
    tipo: z.string()
    .min(1, {message:'Tipo no Valido'}),
    prioridad: z.string()
    .min(1, {message:'Prioridad no Valida'}),
    citeNumero: z.string()
        .min(1,{message:'El Numero Cite es obligatorio'}),
    rutaCv: z.string()
        .min(1,{message:'El Numero de ruta es obligatorio'}),
    oficinaOrigen: z.string()
        .min(6,{message:'Oficina de Origen Obligatorio'})
})


export const ProjectSchemaResponse = z.object({
    id: z.number(),
    titulo: z.string(),
    asignados: z.nullable(z.array(z.string())),
    asignadosId: z.nullable(z.array(z.number())),
    tipoDocumento: z.nullable(z.string()),
    prioridad: z.nullable(z.string()),
    tipoActividad: z.nullable(z.string()),
    citeNumero: z.nullable(z.string()),
    rutaCv: z.nullable(z.string()),
    avance: z.nullable(z.number()),
    diasActivo: z.nullable(z.number()),
    estado: z.nullable(z.string()),
    oficinaOrigen: z.nullable(z.string()),
    fechaAtencion: z.nullable(z.string()),
    actualUsuario: z.nullable(z.string()),
    gestor: z.nullable(z.string()),
    isActive: z.nullable(z.boolean()),
    comentarios: z.nullable(z.array(z.object({
        id: z.nullable(z.number()),
        comentarios: z.nullable(z.string()),
        createdDate: z.nullable(z.string()),
        updatedDate: z.nullable(z.string())
    }))),
    user: z.nullable(z.object({
        id: z.nullable(z.number()),
        nombre: z.nullable(z.string()),
        apellido: z.nullable(z.string()),
        email: z.nullable(z.string()),
        nivel: z.nullable(z.number()),
    })),
    createdDate: z.nullable(z.string()),
    updatedDate: z.nullable(z.string())
})

export const ProjectsFullArray = z.array(ProjectSchemaResponse)

export type ProjectTypes = z.infer<typeof ProjectSchemaResponse>

export const GetUsersSchema = z.array(z.object({
    nombre: z.string(),
    apellido: z.string(),
    nivel: z.number()
})) 

export type GetUserType = z.infer<typeof GetUsersSchema>