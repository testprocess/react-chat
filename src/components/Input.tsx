import React, { useState, useContext } from 'react';
import { useChatDispatch } from "../ChatContext"

function InputForm() {
    const [message, setMessage] = useState('');
    const dispatch: any = useChatDispatch()


    const handleChange = (e: any) => {
        setMessage(e.target.value);
    }

    const handleClick = (e: any) => {
        dispatch({ type: "CREATE", chat: {
            id: Math.random(),
            name: "Me",
            message: message
        }})
        setMessage('');
    }



    return (
        <div className="fixed bottom-0 left-0 px-6 py-4 w-full">
            <div className="flex justify-start">
                <input type="text" value={message} onChange={ handleChange } className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                <button className="bg-blue-600 text-white px-3 py-2 ml-2 rounded" onClick={ handleClick }>Send</button>
            </div>
        </div>
    )
}




export default React.memo(InputForm);
  
  