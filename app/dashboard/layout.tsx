import React from "react";
import Link from "next/link";
import { FaChartLine } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TbActivity } from "react-icons/tb";
import { MdOutlineHomeRepairService } from "react-icons/md";
import DashboardMenu from "@/components/dashboard/DashboardMenu";
import ToastNotification from "@/components/ui/ToastNotification";
import { verifySession } from "@/src/auth/dal";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await verifySession();
  return (
    <>
      <section className="flex flex-row bg-[#25313D]">
        <nav className="w-52 bg-[#25313D]">
          <div className="flex flex-col justify-between h-screen">
            <ul className="text-black mx-auto flex flex-col gap-5 mt-10 w-auto">
              <Link href={"/dashboard"} className="flex flex-col text-white">
                <h4 className="font-bold text-2xl text-white">UMSA</h4>
                <p className="font-normal text-xl">Sistema HHRR</p>
              </Link>
              <p className="text-xs font-semibold text-white">GENERAL</p>
              <Link
                href={"/dashboard"}
                className="text-white font-semibold py-2 hover:text-sky-200 text-lg transition duration-300 flex flex-row gap-3 items-center"
              >
                <FaChartLine size="1.2em" />
                <li>Dashboard</li>
              </Link>
              {user.accountOwner && (
                <Link
                  href={"/dashboard/users"}
                  className="text-white font-semibold py-2 hover:text-sky-200 text-lg transition duration-300 flex flex-row gap-3 items-center"
                >
                  <FaUserFriends size="1.2em" />
                  <li>Usuarios</li>
                </Link>
              )}
              <Link
                href={"/dashboard/projects"}
                className="text-white font-semibold py-2 hover:text-sky-200 text-lg transition duration-300 flex flex-row gap-3 items-center"
              >
                <AiOutlineFundProjectionScreen size="1.2em" />
                <li>Proyectos</li>
              </Link>
              <Link
                href={"/dashboard/actividades"}
                className="text-white font-semibold py-2 hover:text-sky-200 text-lg transition duration-300 flex flex-row gap-3"
              >
                <TbActivity size="1.2em" />
                <li>Actividades</li>
              </Link>
              <Link
                href={"/dashboard/services"}
                className="text-white font-semibold py-2 hover:text-sky-200 text-lg transition duration-300 flex flex-row gap-3 items-center"
              >
                <MdOutlineHomeRepairService size="1.2em" />
                <li>Servicios</li>
              </Link>
              <footer className="py-5 text-xs">
                <p className="text-white ml-5 text-md ">v1.0.0</p>
              </footer>
            </ul>
          </div>
        </nav>
        <section className="w-full py-2 ml-5 bg-white mt-4 mb-4 rounded-2xl shadow-lg">
          <section className="flex flex-row gap-5 px-10 py-4 justify-between items-center border-b  border-opacity-15 border-neutral-800">
            <div>breadcrumb</div>
            <div className="flex flex-row gap-5">
              <h1 className="font-normal mb-4 mt-2">
                Usuario: <span className="font-semibold ml-1">{user.name}</span>{" "}
              </h1>
              <DashboardMenu user={user} />
            </div>
          </section>
          <section className="mx-8 my-5">{children}</section>
        </section>
      </section>
      <ToastNotification />
    </>
  );
}
