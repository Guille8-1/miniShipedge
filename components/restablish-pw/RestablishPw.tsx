"use client";

import { useActionState, useEffect } from "react";
import { resetPwAction } from "@/actions/reset-password-actions";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

export default function RestablishingPw() {
  const [state, dispatch] = useActionState(resetPwAction, {
    errors: [],
    success: "",
  });

  useEffect(() => {
    if (state.errors) {
      state.errors.forEach((error) => {
        toast.error(error);
      });
    }
  }, [state]);
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
      setTimeout(() => {
        redirect("/dashboard");
      }, 1500);
    }
  }, [state]);

  return (
    <>
      <form className="mt-2" noValidate action={dispatch}>
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-8 w-[500px]">
            <div className="flex flex-col">
              <label className="font-bold text-2xl" htmlFor="email">
                Nueva Contraseña
              </label>
              <input
                id="nombre"
                type="password"
                placeholder="Contraseña"
                className="w-full border border-gray-300 p-3 rounded-lg"
                name="password"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-bold text-2xl" htmlFor="email">
                Repetir Contraseña
              </label>
              <input
                id="nombre"
                type="password"
                placeholder="Repetir Contraseña"
                className="w-full border border-gray-300 p-3 rounded-lg"
                name="repeated_password"
              />
            </div>
          </div>
        </div>
        <input
          className="bg-cyan-800 hover:bg-cyan-700 w-full p-3 rounded-lg text-white text-xl font-bold cursor-pointer block mt-8"
          type="submit"
          value="Restablecer Contraseña"
        />
      </form>
    </>
  );
}
