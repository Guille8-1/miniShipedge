"use client"

//import { useEffect } from 'react';
import { User } from '@/src/schemas'

export default function ReportsProyectForm({user}: {user: User}) {
    const { id } = user
    const getRangeDate = () => {
        const actualDate = new Date()
        console.log(`user with id ${id}`, actualDate)
    }
    return (
        <>
            <form>
                <fieldset>
                    <legend>
                        Elige un rango de fechas para generar un reporte
                    </legend>
                    <section className="flex flex-row gap-5 mt-3">
                        <input
                            className="bg-sky-700 text-white p-2 rounded-md hover:bg-sky-600"
                            onClick={(e)=>{
                                e.preventDefault();
                                getRangeDate();
                            }}
                            type="submit"
                            value="30 Dias Anteriores"
                        />
                    </section>
                </fieldset>
            </form>
        </>
    )
}