import { ColumnDef, Row } from '@tanstack/react-table'
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from 'lucide-react'
import { type ProjectTypes as ProjectRow} from '@/src/schemas'

export function filterAssigneesNames <TData> (
    row: Row<TData>,
    columnId: string,
    filterName: string[]
) {
    const rowValue: string = row.getValue(columnId)

    if(columnId === 'asignados') {
        return filterName.some((name)=> rowValue.toLowerCase().includes(name.toLowerCase()))
    }
    return true;
}

export const getColumns = (setSelectedIndex: (project: ProjectRow) => void): ColumnDef<ProjectRow>[] => [
    {
        accessorKey: 'id',
        header: ({column})=> {
            return (

                <Button
                    variant="ghost"
                    className="px-0"
                    onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Id
                    <ArrowUpDown />
                </Button>
            )
        }
    },
    {
        accessorKey: 'asignados',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0"
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Asignados
                        <ArrowUpDown/>
                    </Button>
                </>
            )
        },
        cell: ({ row }) => row.original.asignados?.map((asignado)=> asignado.charAt(0).toUpperCase() + asignado.slice(1)).join(", ") || "N/A",
        filterFn: filterAssigneesNames
    },
    {
        accessorKey: 'titulo',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0"
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Titulo
                        <ArrowUpDown />
                    </Button>
                </>
            )
        },
        cell: ({ row }) => (
            <div
                className="text-blue-600 md: text-left cursor-pointer"
                onClick={ () => setSelectedIndex(row.original) }
            >
                { row.getValue("titulo") }
            </div>
        )
    },
    {
        accessorKey: 'estado',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0"
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Estado
                        <ArrowUpDown />
                    </Button>
                </>
            )
        }
    },
    {
        accessorKey: 'avance',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0"
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Avance
                        <ArrowUpDown />
                    </Button>
                </>
            )
        }
    },
    {
        accessorKey: 'citeNumero',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0"
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Cite Numero
                        <ArrowUpDown />
                    </Button>
                </>
            )
        }
    },
    {
        accessorKey: 'rutaCv',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0"
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Ruta Cv
                        <ArrowUpDown />
                    </Button>
                </>
            )
        }
    },
    {
        accessorKey: 'tipoDocumento',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0"
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Tipo Doc.
                        <ArrowUpDown />
                    </Button>
                </>
            )
        }
    },
    {
        accessorKey: 'gestor',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0"
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Gestor
                        <ArrowUpDown/>
                    </Button>
                </>
            )
        },
        cell: ({row}) => row.original.gestor ? row.original.gestor.charAt(0).toUpperCase() + row.original.gestor.slice(1) : "N/A",
    },
    {
        accessorKey: 'prioridad',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0"
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Prioridad
                        <ArrowUpDown />
                    </Button>
                </>
            )
        }
    },
    {
        accessorKey: 'diasActivo',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0"
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Dias Act
                        <ArrowUpDown />
                    </Button>
                </>
            )
        }
    },
    {
        accessorKey: 'oficinaOrigen',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0"
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Origen
                        <ArrowUpDown />
                    </Button>
                </>
            )
        }
    },
    {
        accessorKey: 'isActive',
        header: "Activo"
    },
]