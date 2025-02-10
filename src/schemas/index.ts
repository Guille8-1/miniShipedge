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

export const LoginSchema = z.object( {
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

