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
        setInputText('');

        setChatMessages(newMessages);

        const typingId = crypto.randomUUID();

        setChatMessages([
        ...newMessages,
        {
            sender: "bot",
            message: "Typing...",
            id: typingId
        }
        ]);

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
            
            setInputText('');
            const data = await response.json();

            setChatMessages(prev =>
            prev.map(msg =>
                msg.id === typingId
                    ? {
                        sender: "bot",
                        message: data.reply,
                        id: typingId
                    }
                    : msg
                )
            );
        } catch (error) {
            console.error(error);
            setChatMessages(prev =>
            prev.map(msg =>
                msg.id === typingId
                    ? {
                        sender: "bot",
                        message: "Somthing went wrong",
                        id: typingId
                    }
                    : msg
            )
        );
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