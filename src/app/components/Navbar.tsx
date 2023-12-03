"use client";

import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { BiSolidMagicWand } from "react-icons/bi";
import { GiFairyWand } from "react-icons/gi";
import { CgMenu, CgClose } from "react-icons/cg";
import NavItem from './list/NavItem';

function Navbar() {

    const [mobileNavBar, setmobileNavBar] = useState(false)
    const [activeNav, setactiveNav] = useState('explore')

    return (
        <nav className='w-full sticky top-0 z-50'>
        
            <div className='w-full'> {/* Wrapper */}
                <div className='bg-background/10 backdrop-blur-sm w-full flex justify-between items-center'> {/* Desktop Navbar */}
                    {/* LEFT Part */}
                    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between space-x-2 lg:gap-8 lg:space-x-0'>

                        <div className='flex items-center gap-2'>
                            <div onClick={() => setmobileNavBar(!mobileNavBar)} className='lg:hidden'> {/* Hamburger Icon (Mobile/Small Screen Only) */}
                                <div className='w-12 h-12 flex justify-center items-center text-3xl p-2 hover:bg-primary rounded-lg cursor-pointer'>
                                    {!mobileNavBar ? <CgMenu /> : <CgClose />}
                                </div>
                            </div>
                            <div className='font-bold text-2xl lg:text-3xl text-accent'>
                                Logo
                            </div>
                        </div>

                        <div className='border-r-2 lg:h-8 border-white/60'></div> {/* Horizontal Divider (Mobile/Small Screen Only) */}

                        {/* Menu Items */}
                        <div className={'hidden lg:flex w-full'}>
                            <ul className='list-none flex items-center gap-10 font-medium w-full'>
                                <NavItem isActive={activeNav === "explore"} label={"Explore"}>
                                    <FaHome />
                                </NavItem>
                                <NavItem isActive={activeNav === "create"} label={"Create"}>
                                    <BiSolidMagicWand />
                                </NavItem>
                                <NavItem isActive={activeNav === "edit"} label={"Edit"}>
                                    <GiFairyWand />
                                </NavItem>
                            </ul>
                        </div>

                    </div>

                    {/* RIGHT Part */}
                    <div className='h-fit'>
                        {/* Login Button */}
                        <div className='py-1 mr-2 lg:mr-0 lg:py-2 px-10 lg:px-14 rounded-full bg-accent cursor-pointer'>
                            <span className='text-background font-semibold text-base'>Login</span>
                        </div>
                    </div>

                </div>

                {/* Mobile NavBar Menu (Mobile/Small Screen Only) */}
                <div className='w-full relative bg-background'>
                    <div className={`${mobileNavBar ? '' : 'hidden'} lg:hidden w-full  border-b border-primary py-4`}>
                        <ul className='list-none flex flex-col lg:flex-row items-center gap-4 lg:gap-10 font-medium w-full'>
                            <NavItem isActive={activeNav === "explore"} label={"Explore"}>
                                <FaHome />
                            </NavItem>
                            <NavItem isActive={activeNav === "create"} label={"Create"}>
                                <BiSolidMagicWand />
                            </NavItem>
                            <NavItem isActive={activeNav === "edit"} label={"Edit"}>
                                <GiFairyWand />
                            </NavItem>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar   