import {motion} from 'framer-motion'
import {ProjectTypes} from "@/src/schemas";

interface UserProjectModalProps {
    data: ProjectTypes | null,
    onClose: () => void,
//     goPrevious: () => void,
//     goNext: () => void,
//     disablePrevious: boolean,
//     disableNext: boolean
}

export function ProjectModal({data, onClose}: UserProjectModalProps) {
    const createdDate: string | null | undefined = data?.createdDate

    const created = new Date(createdDate ?? new Date())
    const formattedDate = created.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })

    const comment = data?.comentarios
    const comments = comment ?? [];
    const newCommnets  = comments.map((comment) => ({
        id: comment.id ?? 'Sin Id',
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
                    className="fixed right-0 top-0 h-full w-1/3 bg-white shadow-xl shadow-outline z-50 p-4 border-gray-500 border-solid border-accent-foreground"
                >
                    <div className="bg-sky-800 w-12 rounded-2xl">
                        <button
                            className="font-bold text-xl text-white px-4"
                            onClick={onClose}>X
                        </button>
                    </div>
                    {data ? (
                        <section className="">
                            <h1 className="mt-3 text-center text-xl">Detalles Del Proyecto</h1>
                            <div className="mt-5 flex flex-row gap-10 w-auto p-4 bg-gray-200 rounded-2xl">
                                <section className="text-base">
                                    <p className="mt-2">Titulo: </p>
                                    <p className="mt-2">Gestor: </p>
                                    <p className="mt-2">Estado: </p>
                                    <p className="mt-2">Avance: </p>
                                    <p className="mt-2">Dias Activo: </p>
                                    <p className="mt-2">Ruta CV: </p>
                                    <p className="mt-2">Numero CITE: </p>
                                    <p className="mt-2">Documento o Actividad: </p>
                                    <p className="mt-2">Oficina de Origen: </p>
                                    <p className="mt-2">Ultima Actualizacion: </p>
                                </section>
                                <section className="text-base">
                                    <p className="mt-2">{data.titulo}</p>
                                    <p className="mt-2">{data.gestor}</p>
                                    <p className="mt-2">{data.estado}</p>
                                    <p className="mt-2">{data.avance}</p>
                                    <p className="mt-2">{data.diasActivo}</p>
                                    <p className="mt-2">{data.rutaCv}</p>
                                    <p className="mt-2">{data.citeNumero}</p>
                                    <p className="mt-2">{data.tipoDocumento}</p>
                                    <p className="mt-2">{data.oficinaOrigen}</p>
                                    <p className="mt-2">{formattedDate}</p>
                                </section>
                            </div>
                            <div className="mt-5 flex flex-row gap-3 p-4 bg-gray-200 rounded-2xl">
                                {
                                    comments.length > 0 ?
                                        (

                                            newCommnets.map((comment, index) => (
                                                <div key={comment.id ?? index} className="w-full">
                                                    <div className="flex flex-col">
                                                        <h2><strong>Seguimiento: </strong></h2>
                                                    </div>
                                                    <div className="border-4 rounded-2xl shadow-lg bg-gray-100 p-3 mt-3">
                                                      <p>{comment.comentario}</p>
                                                        <div className="flex place-content-between mt-3 font-thin">
                                                            <p className="text-sm">{comment.autor}</p>
                                                            <p className="text-sm">{comment.fechaCreacion}</p>
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
                        </section>
                    ) : null}

                </motion.aside>
            </section>
        </>
    )
}