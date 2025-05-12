import { ColumnDef, Row } from "@tanstack/react-table";
import { Button } from '@/components/ui/button'
import { ArrowUpDown } from "lucide-react";
import { type ActivityTypes as ActivityRow } from "@/src/schemas";

export function filterAssigneesNames <TData> (
    row: Row<TData>,
    columnId: string,
    filterName: string[]
) {
    const rowValue: string = row.getValue(columnId)
    if(columnId === 'asignados') {
        return filterName.some((name) => rowValue.toLowerCase().includes(name.toLowerCase()))
    }
    return true
}

export const getColumns = (setSelectedIndex: (activity: ActivityRow) => void): ColumnDef<ActivityRow>[] => [
    {
        accessorKey: 'id',
        header: ({column}) => {
            return (
                <Button
                    variant= 'ghost'
                    className="px-0 text-white hover:text-white hover:bg-sky-800"
                    onClick={()=>column.toggleSorting(column.getIsSorted() === 'asc')}
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
                        className="px-0 text-white hover:text-white hover:bg-sky-800 "
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Asignados
                        <ArrowUpDown/>
                    </Button>
                </>
            )
        },
        cell: ({ row }) => row.original.asignadosActividad?.map((asignado)=> asignado.charAt(0).toUpperCase() + asignado.slice(1)).join(", ") || "N/A",
        filterFn: filterAssigneesNames
    },
    {
        accessorKey: 'tituloActividad',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0 text-white hover:text-white hover:bg-sky-800 "
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Titulo Actividad
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
                { row.getValue("tituloActividad") }
            </div>
        )
    },
    {
        accessorKey: 'estadoActividad',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0 text-white hover:text-white hover:bg-sky-800 "
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
                        className="px-0 text-white hover:text-white hover:bg-sky-800 "
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Avance
                        <ArrowUpDown />
                    </Button>
                </>
            )
        }
    },{
        accessorKey: 'gestor',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0 text-white hover:text-white hover:bg-sky-800 "
                        onClick={()=>column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Gestor Actividad
                        <ArrowUpDown/>
                    </Button>
                </>
            )
        },
        cell: ({row}) => row.original.gestorActividad ? row.original.gestorActividad.charAt(0).toUpperCase() + row.original.gestorActividad.slice(1) : "N/A",
    },
    {
        accessorKey: 'prioridadActividad',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0 text-white hover:text-white hover:bg-sky-800 "
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
        accessorKey: 'diasActivoActividad',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0 text-white hover:text-white hover:bg-sky-800 "
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
        accessorKey: 'oficinaOrigenActividad',
        header: ({column})=> {
            return (
                <>
                    <Button
                        variant="ghost"
                        className="px-0 text-white hover:text-white hover:bg-sky-800 "
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
        header: () => {
            return (
                <>
                    <h1 className="text-white hover:text-white hover:bg-sky-800 text-center">Activo</h1>
                </>
            )
        }
    },
]