import { redirect } from 'next/navigation';
import { verifySession } from '@/src/auth/dal';
import RestablishingPw from "@/components/restablish-pw/RestablishPw";

export default async function RestablishPw() {
  const { user } = await verifySession();
  if(user.changedPw){
    redirect('/dashboard')
  }
  return (
    <>
      <section className="flex flex-col align-middle items-center">
        <h1 className="font-bold text-4xl text-cyan-600 ">
          Restablecer Contraseña
        </h1>
        <section className="flex flex-col items-center mt-10">
          <RestablishingPw />
        </section>
      </section>
    </>
  );
}
