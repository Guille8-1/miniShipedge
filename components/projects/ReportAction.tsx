"use client"

import {useRef, useEffect, useState, Fragment} from "react";
import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel
} from '@headlessui/react'
import {GrDocumentExcel} from "react-icons/gr";
import ReportsProyectForm from "@/components/projects/ReportsProyectForm";
import ToastNotification from "@/components/ui/ToastNotification";
import {User} from "@/src/schemas";

export function ReportAction({user}: {user: User}) {
    const [open, setOpen] = useState(false);
    const dialogRef = useRef(null);

    const isOpen = () => {
        setOpen(true)
    };
    const isClosed = () => setOpen(false);

    useEffect(() => {
        const handleClick = () => {
            if (dialogRef.current) {
                isClosed();
            }
        };
        if (open){
            window.addEventListener("click", handleClick);
        }
        return () => {
            window.removeEventListener("click", handleClick);
        }
    },[open])

    return (
        <>
            <button
                onClick={isOpen}
                className="flex flex-row align-items-center justify-items-center gap-2 bg-sky-800 p-3 text-gray-200 rounded"
            >
                <GrDocumentExcel size="1.1em" className="mt-0.5" />
                <h2 className="font-semibold text-lg leading-tight">
                    Crear Reporte
                </h2>
            </button>
            {
                open && (
                    <Transition appear show={open} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={isClosed}>
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/60" />
                            </TransitionChild>
                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <TransitionChild
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <DialogPanel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                                            <h1 className="font-bold text-xl">
                                                Seleccionar Fechas - Reporte Proyectos
                                            </h1>
                                            <section>
                                                <ReportsProyectForm user={user}/>
                                            </section>
                                            <div className="mx-auto my-0 mt-5 flex justify-end">
                                                <ToastNotification />
                                            </div>
                                        </DialogPanel>
                                    </TransitionChild>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                )
            }
        </>
    )
}
