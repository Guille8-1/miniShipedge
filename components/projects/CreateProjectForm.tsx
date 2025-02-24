"use client"

import { useActionState, useEffect } from 'react'
import { createProject } from '@/actions/create-project-action';
import { toast } from 'react-toastify';

export default function ProjectForm() {
    const [state, dispatch] = useActionState(createProject, {
        errors:[],
        success:''
      })
      useEffect(()=> {
        if(state.errors) {
            state.errors.forEach(error => {
                toast.error(error)
            })
        }
      },[state])
      useEffect(()=>{
        if(state.success){
            toast.success(state.success)
        }
      },[state])
  return (
    <>
      <form 
        className="mt-5 space-y-3" 
        noValidate 
        action={dispatch}
        >
        <div className="flex flex-col gap-2">
          <label className="font-bold text-lg" htmlFor="email">
            Titulo
          </label>
          <input
            id="titulo"
            type="text"
            placeholder="Titulo Proyecto"
            className="w-full border border-gray-300 p-3 rounded-lg"
            name="titulo"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold text-lg" htmlFor="facultad">
            Facultad
          </label>
          <select
            name="facultad"
            id="facultad"
            className="w-full border border-gray-300 p-3 rounded-lg"
          >
            <option value="" defaultChecked>
              Seleccionar
            </option>
            <option value="Ciencias Puras">Cs Puras</option>
            <option value="Ingenieria">Ingenieria</option>
            <option value="Medicina">Medicina</option>
            <option value="Derecho">Derecho</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold text-lg" htmlFor="estado">
            Estado
          </label>
          <select
            name="estado"
            id="estado"
            className="w-full border border-gray-300 p-3 rounded-lg"
          >
            <option value="" defaultChecked>
              Seleccionar
            </option>
            <option value="activo">Activo</option>
            <option value="pendiente">Pendiente</option>
            <option value="mora">En Mora</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold text-lg" htmlFor="asignado">
            Asignado
          </label>
          <select
            name="asignado"
            id="asignado"
            className="w-full border border-gray-300 p-3 rounded-lg"
          >
            <option value="" defaultChecked>
              Seleccionar
            </option>
            <option value="Usuario 1">Usuario 1</option>
            <option value="Usuario 2">Usuario 2</option>
            <option value="Usuario 3">Usuario 3</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold text-lg" htmlFor="tipo">
            Tipo
          </label>
          <select
            name="tipo"
            id="tipo"
            className="w-full border border-gray-300 p-3 rounded-lg"
          >
            <option value="" defaultChecked>
              Seleccionar
            </option>
            <option value="construccion">Contruction</option>
            <option value="planeacion">Planeacion</option>
            <option value="idea">Idea</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold text-lg" htmlFor="prioridad">
            Prioridad
          </label>
          <select
            name="prioridad"
            id="prioridad"
            className="w-full border border-gray-300 p-3 rounded-lg"
          >
            <option value="" defaultChecked>
              Seleccionar
            </option>
            <option value="urgente">Urgente</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
        </div>

        <input
          className="bg-cyan-800 hover:bg-cyan-700 w-full p-3 rounded-lg text-white text-xl font-bold cursor-pointer block mt-10"
          type="submit"
          value="Crear Proyecto"
        />
      </form>
    </>
  );
}
