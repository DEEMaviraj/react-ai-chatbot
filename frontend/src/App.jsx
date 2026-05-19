
import { useState } from 'react';
import { Chatinput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import './App.css'


function App() {

  const [chatMessages,setChatMessages]=useState([
            
                            {
                                message:"Hello,How can I help you?" , 
                                sender:"bot",
                                id: crypto.randomUUID()
                                
                            }
                    ]);

  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />
      <Chatinput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
    
  )
}

export default App
