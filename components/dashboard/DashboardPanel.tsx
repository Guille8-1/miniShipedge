import Link from "next/link";
import { GrDocumentConfig } from "react-icons/gr";
import { FcServices } from "react-icons/fc";

export default function DashboardPanel() {
  return (
    <section>
      <section className="w-full h-auto mt-10 border-2 border-slate-300 rounded-2xl p-5 flex flex-row gap-8">
        <Link
          href={"/dashboard/projects"}
          className="w-36 h-48 flex flex-col items-center border-2 border-sky-700 rounded-md p-5 text-center hover:opacity-60 transition-opacity duration-200"
        >
          <GrDocumentConfig size="4em" className="text-orange-600" />
          <h1 className="mt-4">Gestion de Proyectos</h1>
        </Link>
        <Link
          href={"/dashboard"}
          className="w-36 h-48 flex flex-col items-center border-2 border-sky-700 rounded-md p-5 text-center hover:opacity-60 transition-opacity duration-200"
        >
          <FcServices size="4em" />
          <h1 className="mt-4">Control Servicios</h1>
        </Link>
      </section>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <div className="bg-blue-500 text-white p-4 rounded">Item 1</div>
        <div className="bg-green-500 text-white p-4 rounded">Item 2</div>
        <div className="bg-red-500 text-white p-4 rounded">Item 3</div>
        <div className="bg-yellow-500 text-white p-4 rounded">Item 4</div>
        <div className="bg-purple-500 text-white p-4 rounded">Item 5</div>
        <div className="bg-pink-500 text-white p-4 rounded">Item 6</div>
      </div> */}
    </section>
  );
}
