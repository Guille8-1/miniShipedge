import Image from "next/image";
import ToastNotification from "@/components/ui/ToastNotification";

export default async function LoginLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
                <div className="p-10 lg:py-28 flex-col align-middle justify-center justify-items-center">
                    <div className="max-w-3xl mx-auto">
                        {children}
                    </div>
                </div>
                <div className="bg-slate-200 flex items-center justify-center h-screen ">
                    <Image
                    src="/umsa-logo.png" 
                    width={500} 
                    height={500} 
                    alt="umsa-alt-logo" 
                    className="opacity-65 mx-auto my-auto w-auto pt-10 lg:w-auto md:w-auto sm:w-auto "/>
                </div>
            </div>
            <ToastNotification />
        </>
    )
  }
