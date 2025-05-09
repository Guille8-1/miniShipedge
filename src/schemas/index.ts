import { z } from "zod";

export const SuccessSchema = z.string();
export const ErrorResponseSchema = z.string();
export const CreateUserSchema = z.object({
  nombre: z.string().min(3, { message: "El Nombre no es Valido" }),
  apellido: z.string().min(3, { message: "El apellido no es Valido" }),
  email: z
    .string()
    .min(1, { message: "Email Vacio" })
    .email({ message: "Email no Valido" }),
  password: z
    .string()
    .min(5, { message: "Email Debe Tener almenos 5 caracteres" }),
  nivel: z.string(),
});
export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "E-mail Vacio" })
    .email({ message: "E-mail No Valido" }),
  password: z.string().min(5, { message: "Password No Valido" }),
});
export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  lastName: z.string(),
  admin: z.boolean(),
});
export const CreateProjectSchema = z.object({
  titulo: z.string().min(5, { message: "Titulo No Valido" }),
  tipoDocumento: z
    .string()
    .min(1, { message: "Tipo de Documento Obligatorio" }),
  asignadosId: z.array(
    z.string().min(1, { message: "Al menos 1 Asignado es Obligatorio" }),
  ),
  estado: z.string().min(1, { message: "Estado no Valido" }),
  tipo: z.string().min(1, { message: "Tipo no Valido" }),
  prioridad: z.string().min(1, { message: "Prioridad no Valida" }),
  citeNumero: z.string().min(1, { message: "El Numero Cite es obligatorio" }),
  rutaCv: z.string().min(1, { message: "El Numero de ruta es obligatorio" }),
  oficinaOrigen: z
    .string()
    .min(6, { message: "Oficina de Origen Obligatorio" }),
});

export const ProjectSchemaResponse = z.object({
  id: z.number(),
  titulo: z.string(),
  asignados: z.array(z.string()),
  asignadosId: z.nullable(z.array(z.number())),
  tipoDocumento: z.string(),
  prioridad: z.string(),
  tipoActividad: z.nullable(z.string()),
  citeNumero: z.string(),
  rutaCv: z.string(),
  avance: z.number(),
  diasActivo: z.number(),
  estado: z.string(),
  oficinaOrigen: z.string(),
  fechaAtencion: z.nullable(z.string()),
  actualUsuario: z.nullable(z.string()),
  gestor: z.string(),
  isActive: z.boolean(),
  comentarios: z.array(
    z.object({
      id: z.number(),
      comentario: z.string(),
      author: z.string(),
      createdDate: z.string(),
      updatedDate: z.string(),
    }),
  ),
  user: z.object({
    id: z.number(),
    nombre: z.string(),
    apellido: z.string(),
    email: z.string(),
    nivel: z.number(),
  }),
  createdDate: z.string(),
  updatedDate: z.string(),
});

export const ProjectsFullArray = z.array(ProjectSchemaResponse);

export const GetUsersSchema = z.array(
  z.object({
    nombre: z.string(),
    apellido: z.string(),
    nivel: z.number(),
  }),
);

export const CreateComment = z.object({
  comentario: z
    .string()
    .max(700, { message: "Comentario Demasiado Largo" })
    .min(10, { message: "Comentario Demasiado Corto" }),
  projectId: z.string(),
});

export const Comments = z.array(
  z.object({
    id: z.number(),
    comentario: z.string(),
    author: z.string(),
    createdDate: z.string(),
    updatedDate: z.string(),
  }),
);

export type ProjectArrayType = z.infer<typeof ProjectsFullArray>;

export type ProjectTypes = z.infer<typeof ProjectSchemaResponse>;

export type GetUserType = z.infer<typeof GetUsersSchema>;

export type User = z.infer<typeof UserSchema>;

export type Comments = z.infer<typeof Comments>;
