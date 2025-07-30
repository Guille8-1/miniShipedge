"use client";

import { User } from "@/src/schemas";
import { TiWarning } from "react-icons/ti";
import { useRef } from "react";
import Link from "next/link";

export default function DashboardStart({ user }: { user: User }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const changedPw = !user.changedPw;
  setTimeout(() => {
    if (changedPw) {
      dialogRef.current?.showModal();
    }
  }, 500);
  const redirectToPw = () => {
    console.log("redirecting to the pw change");
  };
  return (
    <>
      <section>
        <dialog className="p-7 rounded-md" ref={dialogRef}>
          <section className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-2">
              <TiWarning className="text-[#D32F2F] w-8 h-8" />
              <h3 className="font-semibold text-sky-800 text-lg">
                Antes de continuar, debe restablecer la contraseña
              </h3>
            </div>

            <Link
              href={"/reset-password"}
              autoFocus={false}
              className="text-center p-2 w-1/2 mx-auto border-2 border-solid border-sky-700 bg-slate-100 rounded-md"
              onClick={redirectToPw}
            >
              Restablecer Contraseña
            </Link>
          </section>
        </dialog>
      </section>
    </>
  );
}
