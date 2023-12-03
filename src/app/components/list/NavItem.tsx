"use client";

import React from 'react'

const NavItem = ({ children, label, isActive }: { children: React.ReactNode, label: String, isActive: boolean }) => {
  return (
    <li className={`w-full lg:w-fit flex items-center gap-3 text-xl cursor-pointer p-2 px-4 lg:p-0 rounded-lg hover:bg-primary lg:hover:bg-transparent lg:hover:text-accent ${isActive ? 'text-accent' : ''}`}>
      <div className='w-5 h-5 flex justify-center items-center'>
        {children}
      </div>
      <span className='capitalize'>{label}</span>
    </li>
  )
}

export default NavItem