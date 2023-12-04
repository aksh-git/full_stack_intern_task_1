"use client";

import React, { useEffect, useState } from 'react';
import Sidebar from "@/app/components/Sidebar";
import ChatArea from "@/app/components/ChatArea";
import PHChatArea from '@/app/components/placeHolders/PHChatArea';
import botsData from '@/assets/bots.json';

export default function Home() {

  const [chatImageOption, setchatImages] = useState(false)
  const [bots, setbots] = useState(botsData['bots'])

  const [activeChat, setactiveChat] = useState<any>()

  const toggleChatImageOption = () => {
    setchatImages(!chatImageOption)
  }

  const launchBot = (id: String) => {
    setactiveChat(id)
  }

  const AddNewBot = () => {
    //
  }

  useEffect(() => {
    if (!activeChat) return;
  }, [activeChat])


  return (
    <div className="py-4 w-full h-[90vh]">

      {/* Wrapper */}
      <div className="w-full h-full flex gap-2 md:gap-4">
        <div className="h-full w-fit md:w-full md:max-w-xs">
          {/* Holds all the chats */}
          <Sidebar
            bots={bots}
            activeChat={activeChat}
            addNewBot={AddNewBot}
            chatImageOption={chatImageOption}
            launchBot={launchBot}
            toggleChatImageOption={toggleChatImageOption} />
        </div>
        <div className="h-full w-full">
          {!activeChat && <PHChatArea />}
          {activeChat && <ChatArea chat_id={activeChat} />}
        </div>
      </div>
    </div>
  )
}
