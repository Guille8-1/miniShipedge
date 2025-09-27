import { useState } from 'react';
import { motion } from 'framer-motion'
import { CommentsActivity, ActivityTypes } from "@/src/schemas";
import { useActionState, useEffect } from "react";
import { createCommentActivity } from '@/actions/create-comment-activity-action';
import { toast } from "react-toastify";
import { setValue } from "@/src/Store";
import { useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import sanitizeHtml from 'sanitize-html'


interface UserProjectModalProps {
    data: ActivityTypes | null,
    comments: CommentsActivity | null,
    onClose: () => void,
    //     goPrevious: () => void,
    //     goNext: () => void,
    //     disablePrevious: boolean,
    //     disableNext: boolean
}

export function ActividadModal({ data, comments, onClose }: UserProjectModalProps) {

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
    }));

    const linkfy = (comment: string): string => {
        const urlRegex = /((https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=%]*)?)/gi;
        return comment.replace(urlRegex, (url) => {
            const href = url.startsWith('http') ? url : `https://${url}`;
            return `<a href="${href}" target="_blank" class="text-blue-500 underline">${url}</a>`;
        });
    }

    const links = (textComment: string): string => {
        const raw = linkfy(textComment)
        return sanitizeHtml(raw, {
            allowedTags: ['a'],
            allowedAttributes: {
                a: ['href', 'target', 'class']
            },
        });
    }



    const sortedComments = [...newCommnets].sort((a, b) => b.id - a.id);

    const lastUpdated = [...newCommnets].reduce((maxId, objId) =>
        (objId.id > maxId.id ? objId : maxId), newCommnets[0])

    const [state, dispatch] = useActionState(createCommentActivity, {
        errors: [],
        success: ""
    })

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach((error: string) => {
                toast.error(error)
            })
        }
    }, [state])

    useEffect(() => {
        if (state.success) {
            toast.success(state.success)
        }
    }, [state])
    const fetchDispatch = useDispatch();
    const dispatchFunction = () => {
        fetchDispatch(setValue('changed'));
    }

    const [bodyEdit, setBodyEdit] = useState<boolean>(false);

    const switchEdit = () => {
        setBodyEdit(true);
        if (bodyEdit) {
            setBodyEdit(false);
        }
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
                    initial={{ x: "100%" }}
                    animate={{ x: data ? "0%" : "100%" }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="fixed right-0 top-0 h-full w-1/3  shadow-outline shadow-2xl z-50 p-4 border-gray-500 bg-gray-100 border-solid border-accent-foreground overflow-auto"
                >
                    {data ? (
                        <section className="">
                            <div className="mx-auto py-2 align-middle p-5 mt-4 w-fit flex flex-row gap-5 itmes-center">
                                <div className='flex flex-col bg-gray-300 items-center rounded-2xl px-4 py-1 shadow-xl border-gray-300 border-2'>
                                    <h1>Proyecto</h1>

                                    <h2
                                        className="font-bold text-center text-xl text-sky-800 rounded-2xl">
                                        {data.tituloActividad}
                                    </h2>
                                </div>
                                <button
                                    className="text-xl text-white px-2 py-3 font-light flex align-middle items-center rounded-2xl bg-red-400"
                                    onClick={onClose}> <IoClose size='25px' />
                                </button>
                            </div>
                            <div className='w-full h-[2px] bg-gray-400 mt-4' />
                            <div className="mt-2 flex flex-col w-auto p-4 rounded-2xl">
                                <form action="">
                                    <section className='bg-gray-200 rounded-2xl px-4 py-2 flex flex-row gap-10 shadow-lg'>
                                        <div>
                                            <p className="mt-2"> <strong>Gestor : </strong></p>
                                            <p className="mt-2"> <strong>Asignados : </strong></p>
                                        </div>
                                        <div>
                                            <p className="mt-2"> {data.gestorActividad}</p>
                                            <p className="mt-2 text-sky-800 font-bold">{data.asignadosActividad.join(", ")}</p>
                                        </div>
                                    </section>
                                </form>
                                <section className=" bg-gray-200 px-4 py-2 rounded-2xl mt-6 shadow-lg">
                                    <section className='flex flex-row gap-10'>
                                        <section className="text-base">
                                            <p className="mt-2"> <strong>Estado : </strong>  </p>
                                            <p className="mt-2"> <strong>Avance : </strong></p>
                                            <p className="mt-2"> <strong>Dias Activo : </strong></p>
                                            <p className="mt-2"> <strong>Prioridad : </strong></p>
                                            <p className="mt-2"> <strong>Oficina de Origen : </strong></p>
                                            <p className="mt-2"> <strong>Categoria Actividad : </strong></p>
                                            <p className="mt-2"> <strong>Ultima Actualizacion : </strong></p>
                                        </section>
                                        <form action="">
                                            <section className="text-base">
                                                {
                                                    bodyEdit ? (
                                                            <input type="text" defaultValue={data.estadoActividad} className='w-[150px] px-2 rounded-lg mt-2' />
                                                        ) : (
                                                            <p className="mt-2">{data.estadoActividad}</p>
                                                    )
                                                }
                                                
                                                <p className="mt-2">{data.avanceActividad} %</p>
                                                <p className="mt-2">{data.diasActivoActividad}</p>
                                                <p className="mt-2">{data.prioridadActividad}</p>
                                                <p className="mt-2">{data.oficinaOrigenActividad}</p>
                                                <p className="mt-2">{data.categoriaActividad ?? 'Sin Categoria'}</p>
                                                <p className="mt-2">{lastUpdated?.fechaCreacion ?? formattedDate}</p>
                                            </section>
                                        </form>
                                    </section>
                                    {
                                        bodyEdit ? (
                                            <section className='flex flex-row mt-2 gap-5'>
                                                <button
                                                    onClick={() => {
                                                        console.log('sending edit activity data');
                                                    }}
                                                    className='flex flex-row text-white bg-sky-800 p-2 rounded-lg'>
                                                    Guardar
                                                </button>
                                                <button
                                                    onClick={switchEdit}
                                                    className='text-red-400 font-bold'>
                                                    cancelar
                                                </button>
                                            </section>
                                        ) : (
                                            <button
                                                onClick={switchEdit}
                                                className='rounded-lg p-2 text-white bg-sky-800 mt-2'>
                                                Editar
                                            </button>
                                        )
                                    }
                                </section>
                            </div>

                            <div className='w-full h-[2px] bg-gray-400 mt-4' />
                            <div
                                key={state.success}
                                className="mt-5 flex flex-col gap-3 p-4 bg-gray-100 rounded-2xl">
                                <div className="flex flex-col">
                                    <h2 className='text-[18px]'><strong>Seguimiento: </strong></h2>
                                </div>
                                {
                                    newComment.length > 0 ?
                                        (
                                            sortedComments.map((comment, index) => (
                                                <div
                                                    key={comment.id ?? index}
                                                    className="w-full break-all"
                                                >
                                                    <section
                                                        className="border-4 rounded-2xl shadow-lg bg-gray-100 p-3 break-all"
                                                    >
                                                        <section
                                                            className='break-all flex flex-col gap-2'
                                                        >
                                                            <p className="text-[18px] font-medium">
                                                                <strong>{comment.autor}</strong>
                                                            </p>
                                                            <div
                                                                className='text-[19px]'
                                                                dangerouslySetInnerHTML={{ __html: links(comment.comentario) }}
                                                            />
                                                        </section>
                                                        <section className="flex place-content-end mt-3">
                                                            <p className="text-sm font-medium text-[16px]">
                                                                <strong>{comment.fechaCreacion}</strong>
                                                            </p>
                                                        </section>
                                                    </section>
                                                </div>
                                            ))
                                        )
                                        :
                                        (
                                            <p>Aun No existen Comentarios en Esta Actividad</p>
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
