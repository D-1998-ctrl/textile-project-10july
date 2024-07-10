
import React, { useState } from 'react';

const YloomChat = () => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoom, setIsLoom] = useState(true); // True if the current message is from Loom, false if from Trader

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSendClick = () => {
        if (inputText.trim() !== '') {
            const newMessage = {
                name: isLoom ? 'Loom' : 'Trader',
                date: new Date().toLocaleString(),
                message: inputText
            };
            setMessages([...messages, newMessage]);
            setInputText('');
            setIsLoom(!isLoom); 
        }
    };

    return (
        <div className='yloom-chat-container' style={{ flex: '1' }}>
            <div style={{ border: '2px solid var(--complementary-color)', borderRadius: '10px', padding: '20px' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <textarea
                            style={{
                                width: '89%',
                                margin: '8px',
                                border: '1px solid var(--primary-color)',
                                padding: '5px',
                                resize: 'vertical'
                            }}
                            rows={4}
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Type your message here..."
                        />
                        <div>
                            <button style={{ width: '100%' }} className='btn2' onClick={handleSendClick}>Send</button>
                        </div>
                    </div>
                </div>

                <div className="msgs-container">
                    {messages.slice().reverse().map((msg, index) => (
                        <div key={index} className="message">
                            <p><strong>{msg.name}</strong> - <span>{msg.date}</span></p>
                            <p>{msg.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default YloomChat;



















// import React from 'react'
// import { useState } from "react";
// const Yloom_chat = () => {


//     const [inputText, setInputText] = useState('');
//     const [messages, setMessages] = useState([]);
//     const [username, setUsername] = useState('user1');
//     const handleInputChange = (event) => {
//         setInputText(event.target.value);
//     };
//     const handleSendClick = () => {
//         if (inputText.trim() !== '') {
//             const newMessage = {
//                 name: username,
//                 date: new Date().toLocaleString(),
//                 message: inputText
//             };
//             setMessages([...messages, newMessage]);
//             setInputText('');
//         }
//     };

//   return (
//     <div className='yloom-chat-container'  style={{ flex: '1' }}  >
//                         <div style={{ border: '2px solid var( --complementary-color)', borderRadius: '10px', padding: '20px' }}>
//                             <div >
//                                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                                     <textarea
//                                         style={{
//                                             width: '89%',
//                                             margin: '8px',
//                                             border: '1px solid var(--primary-color)',
//                                             padding: '5px',
//                                             resize: 'vertical'
//                                         }}
//                                         rows={4}
//                                         value={inputText}
//                                         onChange={handleInputChange}
//                                         placeholder="Type your message here..."
//                                     />
//                                     <div>
//                                         <button style={{ width: '100%' }} className='btn2' onClick={handleSendClick}>Send</button>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="msgs-container">
//                                 {messages.slice().reverse().map((msg, index) => (
//                                     <div key={index} className="message">
//                                         <p><strong>{msg.name}</strong> - <span>{msg.date}</span></p>
//                                         <p>{msg.message}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                     </div>
//   )
// }

// export default Yloom_chat