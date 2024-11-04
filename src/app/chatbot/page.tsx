"use client";

import React, { useState } from 'react';
import '../css/chat.css';

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Hi I'm Collin, how may I assist you today?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSend = async () => {
    if (inputMessage.trim() === "") return;

    const user_message = inputMessage;
    setInputMessage("");

    // Append user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: user_message, sender: "user" },
    ]);

    // Start the typing animation for bot response
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "", sender: "bot" }, // Add an empty bot message for typing animation
    ]);

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: user_message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      const formattedResponse = data.message.replace(/\n/g, "<br />");
      let displayedText = "";

      for (let i = 0; i < formattedResponse.length; i++) {
        displayedText += formattedResponse[i];
        await new Promise((resolve) => setTimeout(resolve, 10)); // Adjust delay for speed
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1] = { text: displayedText, sender: "bot" };
          return updatedMessages;
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Sorry, something went wrong. Please try again.", sender: "bot" },
      ]);
    }
  };

  return (
    <div className="container-chat">
      <div className="chatWindow">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`messageBubble ${message.sender === "user" ? "userBubble" : "botBubble"}`}
            dangerouslySetInnerHTML={{ __html: message.text }}
          ></div>
        ))}
      </div>
      <div className="inputContainer border-top p-3">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className={"inputBox me-2"}
          placeholder="Type your message..."
          onKeyUp={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className={"sendButton"}>
          Send
        </button>
      </div>
    </div>
  );
}