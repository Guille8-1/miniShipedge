"use server"
import { verifySession } from "../auth/dal"

type Report30Days = {
    start: string,
    end: string,
    userId: number
}

export async function get30DaysReport(report30Days: Report30Days) {
    const { token } = await verifySession()
    const urlBackEnd: string = `${process.env.BACK_URL}/reports/download`
    const request = await fetch(urlBackEnd, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(report30Days)
    })

    if(!request.ok) {
        throw new Error('Error al descargar el reporte')
    }

    const blob = await request.blob()
    const url = window.URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'report.xlsx'
    a.click()
    a.remove()

    window.URL.revokeObjectURL(url)
}
