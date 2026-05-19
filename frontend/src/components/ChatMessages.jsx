
import { ChatMessage } from "./ChatMessage";
import {useEffect} from 'react'
import {useRef} from 'react'


export function ChatMessages({chatMessages}) {
    
    const chatMessagesRef = useRef(null);

                    useEffect( ()=>{
                        const containerElem = chatMessagesRef.current;
                        
                        if(containerElem){
                            containerElem.scrollTop=containerElem.scrollHeight;
                        }

                        },[chatMessages]
                    );

    return(
        <div className="chat-messages-container" ref={chatMessagesRef}>
            {
                chatMessages.map( (chatMessage)=>{

                    return(
                    <ChatMessage
                    key={chatMessage.id}
                    message={chatMessage.message}
                    sender={chatMessage.sender}
                    />
                    )
                   
                })
            }
        
        </div>
    );

}
