import RestablishingPw from "@/components/restablish-pw/RestablishPw";
export default function RestablishPw() {
  return (
    <>
      <h1 className="font-bold text-4xl text-cyan-600">
        Restablecer Contraseña
      </h1>
      <section className="flex flex-col items-center mt-10">
        <RestablishingPw />
      </section>
    </>
  );
}
