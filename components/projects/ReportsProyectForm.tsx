"use client"

import { get30DaysReport } from '@/src/API/download-resources';
import { UserTokenType } from '@/src/schemas';
// import {useEffect, useState} from "react";
import { format, subDays } from 'date-fns';

export default function ReportsProyectForm({user}: {user: UserTokenType}) {
    const { id } = user
    const reportPetition = {
        start: '',
        end: '',
        userId: id
    }
    const actualDate = new Date()
    const year = actualDate.getFullYear()
    const month = String(actualDate.getMonth()+1).padStart(2, '0');
    const day = String(actualDate.getDate()).padStart(2, '0');
    const past30Days = subDays(new Date(), 30)
    reportPetition.start = format(past30Days, 'yyyy-MM-dd');
    reportPetition.end = `${year}-${month}-${day}`;


    return (
        <>
            <form>
                <fieldset>
                    <legend>
                        Elige un rango de fechas para generar un reporte
                    </legend>
                    <section className="flex flex-row gap-5 mt-3">
                        <input
                            className="bg-sky-700 text-white p-2 rounded-md hover:bg-sky-600 cursor-pointer"
                            onClick={(e)=>{
                                e.preventDefault();
                            }}
                            type="submit"
                            value="30 Dias Anteriores"
                            name="completeDates"
                        />
                    </section>
                </fieldset>
            </form>
        </>
    )
}
