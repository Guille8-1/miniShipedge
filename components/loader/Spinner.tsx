"use client"

import { BarLoader } from 'react-spinners'

export default function Loader () {
    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <BarLoader
                    color = '#0C4A6E'
                    width = {230}
                    speedMultiplier = {1}
                    loading
                />
            </div>
        </>
    )
}