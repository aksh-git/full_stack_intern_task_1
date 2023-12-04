import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <div className='w-full py-8'>
            <div className='text-center md:flex justify-between space-y-6'>

                <div className='font-bold text-2xl lg:text-3xl text-accent'>
                    Logo
                </div>

                <div className='w-full flex flex-col md:flex-row justify-center items-center md:w-fit gap-6 text-accent text-xl'>
                    <Link className='hover:underline text-white hover:text-accent/60' href='https://akash-web.netlify.app'>
                        <div className=' text-base'>Contact@ydevakash</div>
                    </Link>

                    <div className='flex gap-4 items-center'>
                        <Link className='hover:text-white' href='https://github.com/aksh-git'>
                            <div className='text-4xl md:text-2xl'>
                                <FaGithub />
                            </div>
                        </Link>

                        <Link className='hover:text-red-500' href='https://instagram.com/ydevakash'>
                            <div className='text-4xl md:text-2xl'>
                                <FaInstagram />
                            </div>
                        </Link>

                        <Link className='hover:text-white' href='https://x.com/ydevakash'>
                            <div className='text-4xl md:text-2xl'>
                                <FaXTwitter />
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer