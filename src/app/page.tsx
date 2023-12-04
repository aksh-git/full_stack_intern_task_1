"use client";

import React, { useEffect, useState } from 'react';
import Sidebar from "@/app/components/Sidebar";
import ChatArea from "@/app/components/ChatArea";
import PHChatArea from '@/app/components/placeHolders/PHChatArea';
import botsData from '@/assets/bots.json';
import { Message } from './components/list/MessageList';

export default function Home() {

  
  const [chatImageOption, setchatImages] = useState(false)
  const [bots, setbots] = useState(botsData['bots'])
  const [activeChat, setactiveChat] = useState<any>()
  const [messageStore, setMessageStore] = useState<any>([])

  
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
    const bot = bots.filter((b) => b.id === activeChat)[0]
    setMessageStore(bot.chatHistory)
  }, [bots, activeChat, setMessageStore])


  const deleteMessages = () => {
    setMessageStore([])
  }

  const sendMessage = (message : string) => {
    const msg: Message = {
      id: "",
      content: message,
      from: {
        image: "user",
        name: "User"
      },
      timestamp: new Date,
    }
    setMessageStore([...messageStore, msg])
  }

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
          {activeChat && <ChatArea
            chat_id={activeChat}
            messageStore={messageStore}
            deleteMessages={deleteMessages}
            sendMessage={sendMessage}
          />}
        </div>
      </div>
    </div>
  )
}
