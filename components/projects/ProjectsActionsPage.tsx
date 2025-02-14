"use client";
import { TiPlus } from "react-icons/ti";
import { useState, useRef, useEffect, Fragment } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";

export default function ProjectsActionsPage() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);

  const isOpen = () => setOpen(true);
  const isClosed = () => setOpen(false);

  useEffect(() => {
    const handleClick = () => {
      if (dialogRef.current) {
        console.log(open);
        isClosed();
      }
    };
    if (open) {
      window.addEventListener("click", handleClick);
    }
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [open]);

  return (
    <>
      <section className="h-auto w-full">
        <button
          onClick={isOpen}
          className="flex flex-row align-items-center justify-items-center gap-2 bg-sky-800 p-3 text-gray-200 rounded"
        >
          <TiPlus size="1.1em" className="mt-0.5" />
          <h2 className="font-semibold text-lg leading-tight">
            Crear Proyecto
          </h2>
        </button>
        {open && (
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
                      <p>desde Modal</p>
                      <>
                        <form
                          className="mt-14 space-y-3"
                          noValidate
                          action={() => {}}
                        >
                          <div className="flex flex-col gap-2">
                            <label
                              className="font-bold text-2xl"
                              htmlFor="email"
                            >
                              Nombre
                            </label>
                            <input
                              id="nombre"
                              type="text"
                              placeholder="Nombre"
                              className="w-full border border-gray-300 p-3 rounded-lg"
                              name="nombre"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label
                              className="font-bold text-2xl"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="Email"
                              className="w-full border border-gray-300 p-3 rounded-lg"
                              name="email"
                            />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label
                              className="font-bold text-2xl"
                              htmlFor="password"
                            >
                              Password (Se recomienda usar numero de carnet)
                            </label>
                            <input
                              id="password"
                              type="text"
                              placeholder="Password"
                              className="w-full border border-gray-300 p-3 rounded-lg"
                              name="password"
                            />
                          </div>
                          <div className="flex flex-row gap-2">
                            <label
                              className="font-semibold text-xl"
                              htmlFor="email"
                            >
                              Admin
                            </label>
                            <input
                              id="admin"
                              type="radio"
                              name="user-group"
                              value="true"
                            />
                            <label
                              className="font-semibold text-xl ml-5"
                              htmlFor="email"
                            >
                              Usuario Standard
                            </label>
                            <input
                              id="admin"
                              type="radio"
                              name="user-group"
                              value="false"
                            />
                          </div>
                          <input
                            className="bg-cyan-800 hover:bg-cyan-700 w-full p-3 rounded-lg text-white text-xl font-bold cursor-pointer block"
                            type="submit"
                            value="Registrar"
                          />
                        </form>
                      </>
                      <button onClick={() => setOpen(false)}>Cerrar</button>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </Transition>
        )}
      </section>
    </>
  );
}
