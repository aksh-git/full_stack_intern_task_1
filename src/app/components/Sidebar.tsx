"use client";

import React, { useEffect, useState } from 'react'
import ButtonWithIcon from './button/ButtonWithIcon';
import { SiWechat } from "react-icons/si";
import BotList from './list/BotList';
import botsData from '@/assets/bots.json';
import { IoIosAddCircle } from "react-icons/io";

interface bot {
    id: string
    title: string
    description: string
    avatar: string
}

type sidebarProps = {
    chatImageOption: boolean,
    activeChat: String,
    toggleChatImageOption: () => void,

    bots: bot[],
    launchBot: (id: String) => void,
    addNewBot: () => void,
}

function Sidebar({ bots, chatImageOption, activeChat, toggleChatImageOption, launchBot, addNewBot }: sidebarProps) {

    return (
        <div className='w-full h-full'>
            <div className='h-full w-full p-2 md:px-6 md:py-4 bg-primary rounded-lg space-y-4'>
                <div className='w-full'>
                    <div className='uppercase font-semibold text-white/80 text-xs lg:text-base'>
                        <span className='hidden md:block'>All your chats</span>
                        <span className='md:hidden'>chats</span>
                    </div>
                </div>
                <div className='w-full'>
                    <ButtonWithIcon
                        label={`Chat Images : ${chatImageOption ? 'ON' : 'OFF'}`}
                        style={`${chatImageOption ? 'bg-accent text-background' : 'bg-secondary/30 text-accent'} rounded-lg`}
                        action={toggleChatImageOption} >
                        <SiWechat />
                    </ButtonWithIcon>
                </div>
                <div className='w-full'>
                    <div className='hidden md:block font-medium text-white/80 text-xs'>When a bot sends you images, you will be charged one secondary image</div>
                </div>
                {/* Bots List Area */}
                <div className='w-full border-b pb-4 border-secondary'>
                    <ul className='list-none w-ful space-y-2'>
                        {bots && bots.map((bot) => {
                            return <BotList
                                key={bot.id}
                                id={bot.id}
                                image={bot.avatar}
                                title={bot.title}
                                description={bot.description}
                                action={launchBot}
                                isActive={activeChat === bot.id}
                                style={``} />
                        })}
                    </ul>
                </div>

                <div className='w-fit '>
                    <div onClick={() => addNewBot()} className='flex p-2 gap-2 items-center cursor-pointer hover:text-accent lg:p-0 hover:bg-secondary lg:hover:bg-transparent rounded-md'>
                        <div className='w-6 h-6 text-accent text-3xl flex justify-center items-center '>
                            <IoIosAddCircle />
                        </div>
                        <div className='hidden md:block text-base font-medium'>
                            Create new bot
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar