"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";
import { GrSend } from "react-icons/gr";
import botsData from '@/assets/bots.json';
import MessageList from './list/MessageList';

export type Message = {
    id: string;
    content: string;
    from: {
        image: string,
        name: string
    };
    timestamp: Date;
}

type chatProps = {
    chat_id: string;
    messageStore: Message[];
    deleteMessages: () => void;
    sendMessage: (message: string) => void;
}

function ChatArea({ chat_id, messageStore, deleteMessages, sendMessage }: chatProps) {

    const bots= botsData['bots']
    const bot = bots.filter((b) => b.id === chat_id)[0]

    const [message, setMessage] = useState('')

    const onMessageChange = (event: any) => {
        const value = event.target.value;
        setMessage(value)
    }

    const messageSend = (e: any) => {
        e.preventDefault();

        sendMessage(message)
        setMessage('')
    }

    return (
        <div className='relative w-full h-full bg-primary rounded-lg flex flex-col overflow-clip'>
            {chat_id && <>
                <div className='absolute top-0 w-full h-12 bg-secondary z-20'>
                    <div className='py-3 h-full px-4 w-full flex justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <div className='w-8 rounded-full overflow-hidden'>
                                <Image className='w-full h-full' src={bot?.avatar} alt='avatar' width={240} height={240}></Image>
                            </div>
                            <div className='text-sm lg:text-base font-semibold text-white/90'>
                                {bot?.title}
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
                            <div onClick={() => deleteMessages()} className='flex items-center gap-2 hover:text-accent cursor-pointer p-2 lg:p-0 hover:bg-primary lg:hover:bg-transparent rounded-md'>
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

                <div className='absolute bottom-6 w-full h-full pt-16'>
                    <div className='w-full h-full flex flex-col gap-4'>

                        <div className='w-full h-full overflow-scroll'>
                            <ul className='w-full space-y-2'>
                                <MessageList messages={messageStore} />
                            </ul>
                        </div>

                        <div className='w-full h-10 px-4 lg:px-6'>
                            <form className='w-full flex items-center gap-2 lg:gap-4' autoComplete='off' onSubmit={messageSend}>
                                <div className='w-full'>
                                    <input className='w-full text-sm font-medium py-3 px-5 rounded-full text-white/90 bg-secondary outline-none' type="text" name="message" id="message" placeholder='Message...' title='Type your message here' value={message} onChange={onMessageChange} required />
                                </div>

                                <div className=''>
                                    <button className='flex justify-center items-center bg-accent text-black text-xl p-3 rounded-full cursor-pointer disabled:bg-accent/50' title='send' type='submit' disabled={message.length<=0}>
                                        <GrSend />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default ChatArea