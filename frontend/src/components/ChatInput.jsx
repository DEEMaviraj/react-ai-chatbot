import {useState} from 'react'
import { ChatMessages } from './ChatMessages';


export function Chatinput({chatMessages,setChatMessages})
{
    const [inputText,setInputText]=useState('');

    function saveInput(event) {
        setInputText(event.target.value);
    }

    async function SendMessage() {

       

        const newMessages =[
            ...chatMessages,
            {
                sender:'user',
                message: inputText,
                id:crypto.randomUUID()
            }
        ];

        setChatMessages(newMessages);

        try {
            const response =await fetch("http://localhost:3001/chat",{
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

        

        setInputText('');
    } 

    return(
        <div className="chat-input-container">
            <input 
                className="chat-input"
                placeholder="Send a message" 
                width="300px" 
                onChange={saveInput}
                value={inputText}
            />
            <button className="send-button" width="50px" onClick={SendMessage}>Send</button>
        </div>
    );
}