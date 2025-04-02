import { motion } from 'framer-motion'
import { ProjectTypes } from "@/src/schemas";

interface UserProjectModalProps {
     data: ProjectTypes | null,
     onClose: () => void,
//     goPrevious: () => void,
//     goNext: () => void,
//     disablePrevious: boolean,
//     disableNext: boolean
 }

export function ProjectModal ({data, onClose}:UserProjectModalProps){
    const createdDate: string | null | undefined = data?.createdDate

    const created = new Date(createdDate ?? new Date())
    const formattedDate = created.toLocaleString('en-GB',{
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })

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
                                    <p className="mt-2">Fecha Creacion: </p>
                                </section>
                                <section className="text-base   ">
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
                            <div
                                className="mt-5 flex flex-row gap-3 p-4 bg-gray-200 rounded-2xl">
                                <section>comments holder</section>
                            </div>
                        </section>
                    ): null}

                </motion.aside>
            </section>
            {/*{data && (<div*/}
            {/*    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"*/}
            {/*    onClick={ onClose }*/}
            {/*/>*/}
            {/*)}*/}
            {/*<motion.aside*/}
            {/*    initial={{ x: "100%" }}*/}
            {/*    animate={{ x: data ? 0 : "100%" }}*/}
            {/*    exit={{ x: "100%" }}*/}
            {/*    transition={{ type: "spring", stiffness: 100, damping: 15 }}*/}
            {/*    className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 flex flex-col"*/}
            {/*>*/}
            {/*    <section className="p-4 justify-between items-center border-b">*/}
            {/*        <h2 className="text-lg font-semibold">{data?.titulo}</h2>*/}
            {/*        <button onClick={onClose}>x</button>*/}
            {/*    </section>*/}

            {/*    {data ? (*/}
            {/*        <section*/}
            {/*            className="p-4 flex flex-col flex-grow justify-between"*/}
            {/*        >*/}
            {/*            <div>*/}
            {/*                <p> <strong>ID:</strong>{data.id} </p>*/}
            {/*                <p> <strong>Titulo:</strong>{data.titulo}</p>*/}
            {/*            </div>*/}
            {/*            /!* Navigation Buttons *!/*/}
            {/*            <div className="flex justify-between mt-4">*/}
            {/*                <button*/}
            {/*                    onClick={goPrevious}*/}
            {/*                    disabled={disablePrevious}*/}
            {/*                    className={`px-4 py-2 rounded bg-gray-200 ${*/}
            {/*                        disablePrevious ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"*/}
            {/*                    }`}*/}
            {/*                >*/}
            {/*                    ⬅ Previous*/}
            {/*                </button>*/}

            {/*                <button*/}
            {/*                    onClick={goNext}*/}
            {/*                    disabled={disableNext}*/}
            {/*                    className={`px-4 py-2 rounded bg-gray-200 ${*/}
            {/*                        disableNext ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"*/}
            {/*                    }`}*/}
            {/*                >*/}
            {/*                    Next ➡*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </section>*/}
            {/*    ):(*/}
            {/*        <section>*/}
            {/*            <div className="p-4">Select a user to see details.</div>*/}
            {/*        </section>*/}
            {/*    )}*/}
            {/*</motion.aside>*/}
        </>
    )
}