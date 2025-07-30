import ToastNotification from "@/components/ui/ToastNotification";

import Image from "next/image";
import Link from "next/link";

export default async function MasterAdmin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="bg-sky-800 py-5">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div>
            <Link href={"/dashboard"}>
              <Image
                src="/umsa-logo.png"
                width={100}
                height={100}
                alt="umsa-alt-logo"
              />
            </Link>
          </div>
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
