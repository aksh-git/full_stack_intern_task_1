"use client";

import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react'
import { RiUser6Fill } from "react-icons/ri";

export type Message = {
    id: string;
    content: string;
    from: {
        image: string,
        name: string
    };
    timestamp: Date;
}

type Props = {
    messages: Message[];
};

function MessageList({ messages }: Props) {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messages?.length) {
            ref.current?.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }
    }, [messages?.length]);

    
    return (
        <div className='w-full h-full overflow-y-auto p-6'>
            <ul className='w-full space-y-6'>
                {messages?.map((message: Message) => {
                    return <li key={message?.id} className='w-full'>
                        <div className={`w-full justify-end flex ${message.from.image === "user" ? "" : "flex-row-reverse"} items-end gap-2 lg:gap-3`}>
                            <div className={`${message.from.image === "user" ? "rounded-t-xl rounded-l-xl bg-accent text-black" : "rounded-t-xl rounded-r-xl bg-secondary text-white/90"}  w-fit max-w-lg py-2 px-3 text-sm font-medium`}>
                                {message.content}
                            </div>
                            <div className='w-8 flex justify-center items-center'>
                                <div className='text-xl bg-secondary rounded-full'>
                                    {message.from.image === "user" ? (
                                        <div className='p-2'>
                                            <RiUser6Fill />
                                        </div>
                                    ) : (
                                        <div className='w-full h-full rounded-full overflow-clip'>
                                            <Image className='' src={message.from.image} alt='avatar' width={240} height={240} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </li>
                })}
                <div ref={ref} />
            </ul>
        </div>

    )
}

export default MessageList