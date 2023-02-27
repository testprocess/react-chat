import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import InputForm from "./components/Input"
import ChatBox from "./components/ChatBox"
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



function App() {
  const [state, dispatch]: any = useReducer(reducer, initialChatState);


  return (
    <ChatStateContext.Provider value={state}>
      <ChatDispatchContext.Provider value={dispatch}>
        <div className="App h-full">
          <Navbar></Navbar>
          <Header></Header>
          <ChatBox></ChatBox>


          <InputForm></InputForm>
        </div>
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

export default App;
