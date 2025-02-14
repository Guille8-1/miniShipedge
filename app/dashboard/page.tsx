export default function DashboardMain() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between items-left">
        <div className="w-full md:w-auto">
          <h2 className="font-bold text-4xl text-sky-800 my-5">
            Panel Principal
          </h2>
          <p className="text-xl font-semibold">
            Gestiona y Administra {""}
            <span className="text-blue-900 font-semibold">Proyectos</span>
          </p>
        </div>
      </div>
    </>
  );
}
