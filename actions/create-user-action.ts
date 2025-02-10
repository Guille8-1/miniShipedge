"use server"

import { CreateUserSchema, ErrorResponseSchema, SuccessSchema } from "@/src/schemas"
type ActionState = { 
    errors: string[],
    success: string
}
export async function createUser(prevState: ActionState, formData: FormData ) {
    const newUser = {
        name: formData.get('nombre'),
        email: formData.get('email'),
        password: formData.get('password'),
        admin: formData.get('user-group')
    }
    const userValidation = CreateUserSchema.safeParse(newUser)
    
    if(!userValidation.success) {
        const errors = userValidation.error.errors.map(error => error.message)
        return {
            errors,
            success: ''
        }
    }

    const url = `${process.env.BACK_URL}/auth/create-user`

    const request = await fetch(url, {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userValidation.data.name,
            email: userValidation.data.email,
            password: userValidation.data.password,
            admin:userValidation.data.admin
        })
    })

    const json = await request.json()

    if(!request.ok){
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