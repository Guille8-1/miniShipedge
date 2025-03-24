"use client"

import { ColumnDef } from '@tanstack/react-table'
import { type ProjectTypes as ProjectRow} from '@/src/schemas'

export const columns: ColumnDef<ProjectRow>[] = [
    {
        accessorKey: 'id',
        header: "Id"
    },
    {
        accessorKey: 'titulo',
        header: "Titulo"
    },
    {
        accessorKey: 'asignados',
        header: 'Asignados',
        cell: ({ row }) => row.original.asignados?.map((asignado)=> asignado.charAt(0).toUpperCase() + asignado.slice(1)).join(", ") || "N/A"
    },
    {
        accessorKey: 'estado',
        header: "Estado"
    },
    {
        accessorKey: 'avance',
        header: "Avance"
    },
    {
        accessorKey: 'citeNumero',
        header: "Cite Numero"
    },
    {
        accessorKey: 'rutaCv',
        header: "Ruta Cv"
    },
    {
        accessorKey: 'tipoDocumento',
        header: "Tipo Documento"
    },
    {
        accessorKey: 'gestor',
        header: "Gestor",
        cell: ({row}) => row.original.gestor ? row.original.gestor.charAt(0).toUpperCase() + row.original.gestor.slice(1) : "N/A",
    },
    {
        accessorKey: 'prioridad',
        header: "Prioridad"
    },
    {
        accessorKey: 'diasActivo',
        header: "Dias Activo"
    },
    {
        accessorKey: 'oficinaOrigen',
        header: "Oficina De Origen"
    },
    {
        accessorKey: 'isActive',
        header: "Activo"
    },
]