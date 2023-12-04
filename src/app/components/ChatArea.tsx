"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";
import { GrSend } from "react-icons/gr";
import botsData from '@/assets/bots.json';

type chatProps = {
    chat_id: String,
}

interface message {

}

function ChatArea({ chat_id }: chatProps) {

    const [bots, setbots] = useState(botsData['bots'])
    const bot = bots.filter((b) => b.id === chat_id)

    const [messagaes, setMessagaes] = useState('')


    const deleteMessages = () => {
        setMessagaes('')
    }

    
    return (
        <div className='w-full h-full bg-primary rounded-lg flex flex-col overflow-clip'>
            {chat_id && <>
                <div className=' w-full h-12 bg-secondary'>
                    <div className='py-3 h-full px-4 w-full flex justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <div className='w-8 rounded-full overflow-hidden'>
                                <Image className='w-full h-full' src={bot[0]?.avatar} alt='avatar' width={240} height={240}></Image>
                            </div>
                            <div className='text-sm lg:text-base font-semibold text-white/90'>
                                {bot[0]?.title}
                            </div>
                        </div>

                        <div className='flex items-center gap-2 md:gap-4 pr-2'>
                            <div className='flex items-center gap-2 hover:text-accent cursor-pointer p-2 lg:p-0 hover:bg-primary lg:hover:bg-transparent rounded-md'>
                                <div className='text-lg'>
                                    <IoArrowBackCircle />
                                </div>
                                <div className='hidden md:block text-base font-medium capitalize'>
                                    back
                                </div>
                            </div>
                            <div onClick={()=>deleteMessages()} className='flex items-center gap-2 hover:text-accent cursor-pointer p-2 lg:p-0 hover:bg-primary lg:hover:bg-transparent rounded-md'>
                                <div className='text-base'>
                                    <RiDeleteBinFill />
                                </div>
                                <div className='hidden md:block text-base font-medium capitalize'>
                                    Delete
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full h-full'>
                    <div className='p-6 w-full h-full flex flex-col gap-4'>

                        <div className='w-full h-full'>
                            {/* TODO messages */}
                        </div>

                        <div className='w-full'>
                            <div className='w-full flex items-center gap-4'>
                                <div className='w-full'>
                                    <input className='w-full text-sm font-medium py-3 px-5 rounded-full text-white/90 bg-secondary outline-none' type="text" name="message" id="message" placeholder='Message...' title='Type your message here' />
                                </div>

                                <div className=''>
                                    <div className='flex justify-center items-center bg-accent text-black text-xl p-3 rounded-full cursor-pointer' title='send'>
                                        <GrSend />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default ChatArea