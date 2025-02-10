import React from "react";
import Link from "next/link";
import { FaChartLine } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import DashboardMenu from "@/components/dashboard/DashboardMenu";
import ToastNotification from "@/components/ui/ToastNotification";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import { verifySession } from "@/src/auth/dal";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await verifySession();
  return (
    <>
        <section className="flex flex-row bg-gray-100">
            <nav className="w-52 bg-gray-100">
                <div className="flex flex-col justify-between h-screen">
                    <ul className="text-black mx-auto flex flex-col gap-5 mt-10 w-auto">
                        <Link href={"/dashboard"} className="flex flex-col ">
                            <h4 className="font-bold text-2xl text-sky-800">
                                UMSA
                            </h4>
                            <p className="font-normal text-xl">Sistema HHRR</p>
                        </Link>
                        <p className="text-xs font-semibold">GENERAL</p>
                        <Link href={"/dashboard"} className="text-gray-600 font-semibold py-2 hover:text-gray-900 transition duration-300 flex flex-row gap-3 items-center">
                            <FaChartLine size="1.2em"/>
                            <li>Dashboard</li>
                        </Link>
                        {user.admin && <Link href={"/dashboard/users"}
                               className="text-gray-600 font-semibold py-2 hover:text-gray-900 transition duration-300 flex flex-row gap-3 items-center">
                            <FaUserFriends size="1.2em"/>
                            <li>Usuarios</li>
                        </Link>}
                        <Link href={"/dashboard/projects"} className="text-gray-600 font-semibold py-2 hover:text-gray-900 transition duration-300 flex flex-row gap-3 items-center">
                            <AiOutlineFundProjectionScreen size="1.2em"/>
                            <li>Proyectos</li>
                        </Link>
                        <Link href={"/servicios"} className="text-gray-600 font-semibold py-2 hover:text-gray-900 transition duration-300 flex flex-row gap-3">
                            <MdOutlineMiscellaneousServices size="1.2em"/>
                            <li>Servicios</li>
                        </Link>
                    </ul>
                    <footer className="py-5 text-xs">
                        <p className="text-black ml-5">
                            v1.0.0
                        </p>
                    </footer>
                </div>
            </nav>
            <section className="w-full py-2 ml-10 bg-white mt-4 mb-4 rounded-2xl shadow-lg">
                <section className="flex flex-row gap-5 px-10 py-4 justify-between items-center border-b  border-opacity-15 border-neutral-800">
                    <div>
                        breadcrumb
                    </div>
                    <div className="flex flex-row gap-5">
                        <h1 className="font-normal mb-4 mt-2">Usuario: <span className="font-semibold ml-1">{user.name}</span> </h1>
                        <DashboardMenu user={user} />
                    </div>
                </section>
                <section className="mx-8 my-5">
                    {children}
                </section>
            </section>
        </section>
      <ToastNotification />
    </>
  );
}
