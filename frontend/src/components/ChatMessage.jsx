import userImg from "../assets/user.png"
import botImg from "../assets/chatbot.jpg"

export function ChatMessage({sender,message}) {

    return(
        <div className={sender === 'user' ? 'chat-message-user':'chat-message-bot'}>
            { sender === 'bot' && (
                
                <img 
                    src={botImg}
                    width="50px" 
                />

            )}

            <div className="chat-message-text">
                {message}    
            </div>

            {sender === 'user' && (
                
                <img 
                    src={userImg} 
                    width="50px"  
                />

            )}

        </div>   
    );

}