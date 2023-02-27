
import React, { ReactElement, JSXElementConstructor, createContext, useReducer, useState, useContext } from "react";

const initialChatState: any = {
  chat: [{
    id: Math.random(),
    name: "dvs",
    message: "df"
  }]
}

function reducer(state: any, action: any) {
  switch (action.type) {
      case 'CREATE':
      return {
          chat: state.chat.concat(action.chat)
      };
      case 'REMOVE':
      return {
          ...state,
          chat: state.chat.filter((chat: { id: any; }) => chat.id !== action.id)
      };
      default:
      return state;
  }
}

const ChatStateContext = createContext(null);
const ChatDispatchContext = createContext(null);



function ChatProvider(props: any) {
  const [state, dispatch]: any = useReducer(reducer, initialChatState);


  return (
    <ChatStateContext.Provider value={state}>
      <ChatDispatchContext.Provider value={dispatch}>
        {props.children}

      </ChatDispatchContext.Provider>
    </ChatStateContext.Provider>

  );
}

export function useChatState() {
  const context = useContext(ChatStateContext)
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useChatDispatch() {
  const context = useContext(ChatDispatchContext)
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export default ChatProvider;
