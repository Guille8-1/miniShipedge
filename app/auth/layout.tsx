import Image from "next/image";
import ToastNotification from "@/components/ui/ToastNotification";
export default function LoginLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
                <div className="bg-slate-200">
                    <Image src="/umsa-logo.png" width={500} height={500} alt="umsa-alt-logo" className="flex items-center mx-auto my-auto w-auto pt-10 lg:w-auto md:w-auto sm:w-auto "/>
                </div>
                <div className="p-10 lg:py-28">
                    <div className="max-w-3xl mx-auto">
                        {children}
                    </div>
                </div>
            </div>
            <ToastNotification />
        </>
    )
  }