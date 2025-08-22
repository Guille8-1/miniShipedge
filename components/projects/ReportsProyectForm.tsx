"use client"

// import { get30DaysReport } from '@/src/API/download-resources';
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

    console.log(reportPetition);

    const handleDownload = async () => {
        try {
          const response = await fetch(`http://localhost:4000/reports/download`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.userToken}`
            },
            body: JSON.stringify(reportPetition)
          });
          if(!response.ok) throw new Error('Fallo en la descarga del reporte');

          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          
          const a = document.createElement('a');
          a.href = url;
          a.download = `Reporte en fechas ${reportPetition.start} - ${reportPetition.end}`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
        } catch (error) {
          console.error(error);
        }
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
                            className="bg-sky-700 text-white p-2 rounded-md hover:bg-sky-600 cursor-pointer"
                            onClick={(e)=>{
                                e.preventDefault();
                                handleDownload()
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
