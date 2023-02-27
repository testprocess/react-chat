import React, { useContext, createContext, useReducer, useState } from "react";

import ChatBody from "./ChatBody"
import { useChatState } from "../ChatContext"




function ChatBox() {
    const chatState: any = useChatState()


    
    return (
        <div className="container mx-auto px-20">
            {chatState.chat.map((chatData: any) => (
                <ChatBody data={chatData} key={chatData.id}></ChatBody>
            ))}

            <div className="mb-50">
                <br />
                <br />
                <br />
            </div>
            
        </div>
    );
  }
  
export default ChatBox;