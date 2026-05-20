import {useState} from 'react'
import { ChatMessages } from './ChatMessages';


export function Chatinput({chatMessages,setChatMessages})
{
    const [inputText,setInputText]=useState('');

    function saveInput(event) {
        setInputText(event.target.value);
    }

    async function SendMessage() {

        if (!inputText.trim()) return;

        const newMessages =[
            ...chatMessages,
            {
                sender:'user',
                message: inputText,
                id:crypto.randomUUID()
            }
        ];

        setChatMessages(newMessages);

         setInputText('');

        try {
            const response =await fetch("https://react-ai-chatbot-nr6r.onrender.com/chat",{
                method : "POST",
                headers : {
                    "content-type":"application/json"
                },
                body : JSON.stringify({
                    message : inputText
                })                
            });
            

            const data = await response.json();

            setChatMessages( [
            ...newMessages,
            {
                sender:'bot',
                message:data.reply,
                id:crypto.randomUUID()
            }
            ]
            );
        } catch (error) {
            console.error(error);
        }

    }
    
    function handleKeyDown(event) {
        if (event.key === "Enter" && inputText.trim()) {
         SendMessage()
        }
    }

    return(
        <div className="chat-input-container">
            <input 
                className="chat-input"
                placeholder="Send a message"  
                onChange={saveInput}
                value={inputText}
                onKeyDown={handleKeyDown}
            />
            <button className="send-button" width="50px" onClick={SendMessage}>Send</button>
        </div>
    );
}