import { motion } from 'framer-motion'
import { CommentsActivity, ActivityTypes } from "@/src/schemas";
import { useActionState, useEffect } from "react";
import { createCommentActivity } from '@/actions/create-comment-activity-action';
import { toast } from "react-toastify";
import { setValue } from "@/src/Store";
import { useDispatch } from "react-redux";
import { Separator } from "../../ui/separator"

interface UserProjectModalProps {
    data: ActivityTypes | null,
    comments: CommentsActivity | null,
    onClose: () => void,
//     goPrevious: () => void,
//     goNext: () => void,
//     disablePrevious: boolean,
//     disableNext: boolean
}

export function ActividadModal({data, comments, onClose}: UserProjectModalProps) {
    
    const createdDate: string | null | undefined = data?.createdDate;
    const created = new Date(createdDate ?? new Date());

    const formattedDate = created.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    const newComment = comments ?? [];
    
    const newCommnets = newComment.map((comment) => ({
        id: comment.id,
        comentario: comment.comentario ?? 'Sin Comentarios',
        autor: comment.author ?? 'Sin Autor ',
        fechaCreacion: new Date(comment.createdDate ?? new Date()).toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }),
        fechaActualizada: new Date(comment.updatedDate ?? new Date()).toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }),
    }))
    const sortedComments = [...newCommnets].sort((a, b) => b.id - a.id);

    const lastUpdated = [...newCommnets].reduce((maxId, objId) =>
        (objId.id > maxId.id ? objId : maxId), newCommnets[0])

    const [state, dispatch] = useActionState(createCommentActivity, {
        errors:[],
        success:""
    })
    
    useEffect(() => {
        if(state.errors) {
            state.errors.forEach((error:string)=> {
                toast.error(error)
            })
        }
    }, [state]);

    useEffect(() => {
        if (state.success) {
            toast.success(state.success)
        }
    }, [state])
    const fetchDispatch = useDispatch();
    const dispatchFunction = () => {
        fetchDispatch(setValue('changed'));
    }
    return (
        <>
            {
                data && (
                    <div
                        onClick={onClose}
                    />
                )
            }
            <section className="w-auto">
                <motion.aside
                    initial={{x: "100%"}}
                    animate={{x: data ? "0%" : "100%"}}
                    exit={{x: "100%"}}
                    transition={{type: "spring", stiffness: 100, damping: 20}}
                    className="fixed right-0 top-0 h-full w-1/3  shadow-outline shadow-2xl z-50 p-4 border-gray-500 bg-gray-100 border-solid border-accent-foreground overflow-auto"
                >
                    <div className=" w-fit bg-sky-800 rounded-2xl mr-0 mx-auto ">
                        <button
                            className="text-xl text-white px-4 font-light"
                            onClick={onClose}> Cerrar
                        </button>
                    </div>
                    <Separator className='mt-3 bg-gray-300 w-100'/>

                    {data ? (
                        <section className="">
                            <div className="mx-auto bg-sky-800 rounded-2xl py-2 felx align-middle p-5 mt-4 w-fit">
                                <h1 className="text-center text-xl text-white">{data.tituloActividad}</h1>
                            </div>
                            <div className="mt-5 flex flex-row gap-10 w-auto p-4 bg-gray-200 rounded-2xl">
                                <section className="text-base">
                                    <p className="mt-2"> <strong>Gestor: </strong></p>
                                    <p className="mt-2"> <strong>Estado: </strong>  </p>
                                    <p className="mt-2"> <strong>Avance: </strong></p>
                                    <p className="mt-2"> <strong>Dias Activo: </strong></p>
                                    <p className="mt-2"> <strong>Prioridad: </strong></p>
                                    <p className="mt-2"> <strong>Oficina de Origen: </strong></p>
                                    <p className="mt-2"> <strong>Categoria Actividad: </strong></p>
                                    <p className="mt-2"> <strong>Ultima Actualizacion: </strong></p>
                                </section>
                                <section className="text-base">
                                    <p className="mt-2">{data.gestorActividad}</p>
                                    <p className="mt-2">{data.estadoActividad}</p>
                                    <p className="mt-2">{data.avanceActividad} %</p>
                                    <p className="mt-2">{data.diasActivoActividad}</p>
                                    <p className="mt-2">{data.prioridadActividad}</p>
                                    <p className="mt-2">{data.oficinaOrigenActividad}</p>
                                    <p className="mt-2">{data.categoriaActividad ?? 'Sin Categoria'}</p>
                                    <p className="mt-2">{lastUpdated?.fechaCreacion ?? formattedDate}</p>
                                </section>
                            </div>
                            <div
                                key={state.success}
                                className="mt-5 flex flex-col gap-3 p-4 bg-gray-200 rounded-2xl">
                                <div className="flex flex-col">
                                    <h2><strong>Seguimiento: </strong></h2>
                                </div>
                                {
                                    newComment.length > 0 ?
                                        (
                                            sortedComments.map((comment, index) => (
                                                <div key={comment.id ?? index} className="w-full">
                                                    <div className="border-4 rounded-2xl shadow-lg bg-gray-100 p-3">
                                                        <p>{comment.comentario}</p>
                                                        <div className="flex place-content-between mt-3 font-thin">
                                                            <p className="text-sm font-medium">
                                                                <strong>{comment.autor}</strong>
                                                            </p>
                                                            <p className="text-sm font-medium"><strong>{comment.fechaCreacion}</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )
                                        :
                                        (
                                            <p>Aun No existen Comentarios en Este Proyecto</p>
                                        )
                                }
                            </div>
                            <section className="w-full">
                                <form
                                    noValidate
                                    className="w-full mt-4 p-4 border rounded-xl shadow bg-white flex flex-col items-end"
                                    action={dispatch}
                                >
                                    <textarea
                                        className="border-2 border-solid p-2 w-full"
                                        name="comentario"
                                        id="comentario"
                                        placeholder="Escribe un Comentario"
                                        rows={4}>
                                    </textarea>
                                    <div className='hidden'>
                                        <label htmlFor="comentario"></label>
                                        <input type="numero" id="comentario" name="projectId" value={data.id} readOnly={true}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        onClick={dispatchFunction}
                                        className="mt-4 px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700 transition w-3/12"
                                    >
                                        Comentar
                                    </button>
                                </form>
                            </section>
                        </section>
                    ) : null}
                </motion.aside>
            </section>
        </>
    )
}
