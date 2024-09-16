import React, { useState, useRef } from 'react';
import '../css/chat.css';

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Hi I'm Collin, how may I assist you today?", sender: "bot" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const chatRef = useRef(null);

  const handleSend = () => {
    if (inputMessage.trim() === '') return;

    setMessages([...messages, { text: inputMessage, sender: "user" }]);
    setInputMessage('');
  };

  return (
    <div className="container-chat">
      <div className="chatWindow" ref={chatRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`messageBubble ${
              message.sender === "user" ? "userBubble" : "botBubble"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="inputContainer border-top p-3">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className={"inputBox me-2"}
          placeholder="Type your message..."
          onKeyUp={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className={"sendButton"}>
          Send
        </button>
      </div>
    </div>
  );
}
