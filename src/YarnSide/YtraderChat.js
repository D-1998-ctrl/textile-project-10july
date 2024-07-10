
//for trader
import React, { useState } from 'react';

const YtraderChat = () => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);
    const [istrader, setIsTrader] = useState(true); // True if the current message is from Loom, false if from Trader

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSendClick = () => {
        if (inputText.trim() !== '') {
            const newMessage = {
                name: istrader ? 'Trader' : 'Loom',
                date: new Date().toLocaleString(),
                message: inputText
            };
            setMessages([...messages, newMessage]);
            setInputText('');
            setIsTrader(!istrader); 
        }
    };

    return (
        <div className='ytrader-chat-container' style={{ flex: '1' }}>
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

export default YtraderChat;