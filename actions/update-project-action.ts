"use server"

import { ErrorResponseSchema, SuccessSchema, UpdateProjectsSchema, UpdateProjectAssigness} from '@/src/schemas';
import { verifySession } from '@/src/auth/dal';
import { getUsersById } from "@/src/API/client-fetching-action";
import { type userIds} from "@/actions/create-project-action";
import { type ActionState } from "@/actions/create-project-action";

export async function updateProject (prevState: ActionState, formData: FormData) {

    const { token } = await verifySession();

    const editProject = {
      id: formData.get('idProject'),
      estado: formData.get('estadoEdit'),
      avance: formData.get('avanceEdit'),
      documento: formData.get('documentoEdit'),
      prioridad: formData.get('prioridadEdit')
    }

    const editProjectValidation = UpdateProjectsSchema.safeParse(editProject);

    if(!editProjectValidation.success){
      const errors = editProjectValidation.error.errors.map(error=>error.message)
      return {
        errors,
        success:''
      }
    }

    const editProyectRequest = {
      estado: editProjectValidation.data.estado,
      avance: editProjectValidation.data.avance,
      documento: editProjectValidation.data.documento,
      prioridad: editProjectValidation.data.prioridad
    }
    

    const url = `${process.env.BACK_URL}/projects/update/${editProjectValidation.data.id}`

    const request = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(editProyectRequest)
    })

    const json = await request.json();

    if(!request.ok) {
      const error = ErrorResponseSchema.parse(json)
      return {
        errors:[error],
        success:''
      }
    } else {
      const success = SuccessSchema.parse(json);
      return {
        errors:[],
        success
      }
    }
}

export async function updateAssigned (prevState: ActionState, formData: FormData) {
    const { token } = await verifySession();

    const editAssignees = {
      id: formData.get('idProject'),
      editAssing: formData.getAll('usersEdit')
    }

    const usersEditValid = UpdateProjectAssigness.safeParse(editAssignees)

    const userIds: FormDataEntryValue[] = editAssignees.editAssing;
    const callingForIds: userIds[] = await getUsersById(userIds)
    
    const gettingUserIds = callingForIds.map(forId => {
      const { id } = forId
      return id;
    })

    if(!usersEditValid.success) {
      const errors = usersEditValid.error.errors.map(error => error.message)
      return {
        errors,
        success:''
      }
    }

    const assigneeRequest = {
      asignadosId: gettingUserIds
    }

    const url = `${process.env.BACK_URL}/projects/updateusers/${editAssignees.id}`

    const request = await fetch(url, {
      method:'PATCH',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(assigneeRequest)
    })

    const json = await request.json()
    console.log(json)

    if(!request.ok){
      const error = ErrorResponseSchema.parse(json)
      return {
        errors: [error],
        success:''
      }
    }else {
      const success = SuccessSchema.parse(json)
      return {
        errors:[],
        success
      }
    }

}
