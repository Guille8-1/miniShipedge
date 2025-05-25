"use server"

import { ErrorResponseSchema, SuccessSchema, CreateComment} from '@/src/schemas'
import { verifySession } from '@/src/auth/dal'

type ActionState = {
    errors: string[],
    success: string
}

export async function createCommentActivity (prevState: ActionState, formData: FormData) {

    const {user, token} = await verifySession();

    const newComment = {
        comentario: formData.get('comentario'),
        projectId: formData.get('projectId')
    };
    const commentValidation = CreateComment.safeParse(newComment);

    if(!commentValidation.success) {
        const errors = commentValidation.error.errors.map((error) => error.message);
        return {
            errors,
            success: ''
        }
    }

    const bodyRequest = {
        activity: commentValidation.data.projectId,
        actComentario: commentValidation.data.comentario,
        author: `${user.name} ${user.lastName}`
    }
    console.log(bodyRequest)

    const url = `${process.env.BACK_URL}/actividades/commentactividad`

    const request = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(bodyRequest)
    })
    const json = await request.json()
    
    console.log(json)

    if(!request.ok) {
        const error = ErrorResponseSchema.parse(json)
        return {
            errors:[error],
            success: ''
        }
    } else {
        const success = SuccessSchema.parse(json)
        return {
            errors:[],
            success
        }
    }

}