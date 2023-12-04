"use client";

import React from 'react'

type propsType = {
    children: React.ReactNode,
    label: String,
    action: () => void,
    style: String,
}

function ButtonWithIcon({ children, label, action, style }: propsType) {
    return (
        <button onClick={() => action()} className={`flex items-center justify-center gap-2 w-fit md:w-full p-2 lg:py-2 text-semibold ${style}`}>
            <div className='w-6 h-6 flex justify-center items-center text-2xl'>
                {children}
            </div>
            <div className='hidden md:block font-bold text-base'>
                {label}
            </div>
        </button>
    )
}

export default ButtonWithIcon