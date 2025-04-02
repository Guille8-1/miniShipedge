"use client"

import {Skeleton} from '@/components/ui/skeleton'
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


interface ProjectTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({columns, data}: ProjectTableProps<TData, TValue>)  {

        const table = useReactTable({
            data,
            columns,
            getCoreRowModel: getCoreRowModel()
        })

    return (
        <>
            <section className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <>
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )
                                                }
                                            </TableHead>
                                        </>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "Seleccionado"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                                <div className="flex bg-gray-100 p-3">
                                    {Array(4).fill(0).map((_, i) => (
                                        <Skeleton key={i} className="flex-1 h-4 mx-2" />
                                    ))}
                                </div>
                                {Array(4).fill(0).map((_, rowIndex) => (
                                    <div key={rowIndex} className="flex p-3 border-b border-gray-200">
                                        {Array(4).fill(0).map((_, colIndex) => (
                                            <Skeleton key={colIndex} className="flex-1 h-4 mx-2" />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </TableBody>
                </Table>
            </section>
        </>
    )
}

