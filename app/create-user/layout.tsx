import DashboardMenu from "@/components/dashboard/DashboardMenu";
import ToastNotification from "@/components/ui/ToastNotification";
import { verifySession } from "@/src/auth/dal";
import Image from "next/image";
import Link from "next/link";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {user} = await verifySession()
  return (
    <>
      <header className="bg-sky-800 py-5">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div>
            <Link href={"/dashboard"}>
              <Image src="/umsa-logo.png" width={100} height={100} alt="umsa-alt-logo"/> 
            </Link>
          </div>
          <DashboardMenu 
            user={user}
          />
        </div>
      </header>
      <section className="max-w-5xl mx-auto mt-20 p-3 py-10">
        {children}
      </section>
      <ToastNotification />

      <footer className="py-5">
        <p className="text-center">
          Todos los Derechos Reservados {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
