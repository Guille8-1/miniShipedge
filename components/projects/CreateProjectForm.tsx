"use client"

import { useActionState, useEffect, useState } from "react";
import { createProject } from "@/actions/create-project-action";
import { toast } from "react-toastify";
import { getDataUser } from "@/src/API/client-fetching-action";
import { GetUserType } from "@/src/schemas";
import Select, { MultiValue } from 'react-select'
//redux
import { useDispatch } from 'react-redux'
import { setValue } from "@/src/Store";

type userOptions = {
  label: string,
  value: string
}

export default function ProjectForm() {

  const [state, dispatch] = useActionState(createProject, {
    errors: [],
    success: "",
  });

  const [users, setUsers] = useState<GetUserType>([])
  const [selectedUsers, setSelectedUsers] = useState<userOptions[] | null>([])
  const fetchDispatch = useDispatch();
  const dispatchFunction = () => {
    fetchDispatch(setValue('changed'));
  }
  const userOptions: userOptions[] = []

  const addingUsers = ( userAdded:MultiValue<userOptions>) => {
    setSelectedUsers([...userAdded])
  }

  useEffect(() => {
    async function fetchUsers() {
      const userdata = await getDataUser()
      setUsers(userdata)
    }
    fetchUsers().then()
  }, [])

  useEffect(() => {
    if (state.errors) {
      state.errors.forEach((error) => {
        toast.error(error);
      });
    }
  }, [state]);

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
    }
  }, [state]);

  for(const user of users) {
    const {nombre} = user
    const {apellido} = user
    const label = `${nombre} ${apellido}`
    const value = `${nombre} ${apellido}`.toLowerCase()

    userOptions.push({label, value})
  }

  return (
      <>
        <form
            className="mt-5 space-y-3 "
            noValidate
            action={dispatch}
        >
          <div className="flex flex-row gap-5 justify-center">
            <div className="w-screen">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-lg mt-3" htmlFor="email">
                  Titulo
                </label>
                <input
                    id="titulo"
                    name="titulo"
                    type="text"
                    placeholder="Titulo Proyecto"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-lg mt-3" htmlFor="facultad">
                  Tipo de Documento o Actividad
                </label>
                <input
                    id='tipoDocumento'
                    name="tipoDocumento"
                    type="text"
                    placeholder="Nombre del Documento"
                    className="w-full border border-gray-300 p-3 rounded-lg"
                />
              </div>
              <div className="font-bold text-lg mt-3">
                <label className="font-bold text-lg mt-3" htmlFor="asigandos">
                  Usuarios
                </label>
                <Select
                    name="asignados"
                    options = {userOptions}
                    value={selectedUsers}
                    onChange={addingUsers}
                    className="w-full border border-gray-300 p-3 rounded-lg"
                    placeholder='Asignar Usuarios'
                    isMulti={true}
                    isSearchable={true}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-lg mt-3" htmlFor="estado">
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
                <label className="font-bold text-lg mt-3" htmlFor="tipo">
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
                  <option value="construccion">Construccion</option>
                  <option value="planeacion">Planeacion</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-lg mt-3" htmlFor="prioridad">
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
            </div>
            <div className="w-screen">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-lg mt-3" htmlFor="email">
                  Cite Numero
                </label>
                <input
                    id="citeNumero"
                    type="number"
                    min={1}
                    placeholder="Cite Numero"
                    className="w-full border border-gray-300 p-3 rounded-lg appearance-none"
                    name="citeNumero"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-lg mt-3" htmlFor="email">
                  Ruta CV
                </label>
                <input
                    id="rutaCv"
                    type="number"
                    min={1}
                    placeholder="Ruta Cv"
                    className="w-full border border-gray-300 p-3 rounded-lg appearance-none"
                    name="rutaCv"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-lg mt-3" htmlFor="email">
                  Oficina de Origen
                </label>
                <input
                    id="oficinaOrigen"
                    type="text"
                    placeholder="Oficina de Origen"
                    className="w-full border border-gray-300 p-3 rounded-lg appearance-none"
                    name="oficinaOrigen"
                />
              </div>
            </div>
          </div>
          <input
              onClick={dispatchFunction}
              className="bg-cyan-800 hover:bg-cyan-700 w-full p-3 rounded-lg text-white text-xl font-bold cursor-pointer block mt-4"
              type="submit"
              value="Crear Proyecto"
          />
        </form>
      </>
  );
}