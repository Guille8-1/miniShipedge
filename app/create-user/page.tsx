import CreateUserForm from "@/components/create-user/CreateUserForm";

export default function CreateUser() {
  return (
    <>
      <h1 className="font-bold text-4xl text-cyan-600">Registro Usuarios</h1>
      <p className="text-3xl font-bold">Seguimiento Administrativo</p>
      <CreateUserForm />
    </>
  );
}
