import React, { useState, useRef } from 'react';
import '../css/chat.css';
import { OpenAI } from "openai";
import "../envConfig.ts"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function openAIRequest(message: string) {
  const stream = await openai.beta.threads.createAndRun({
    assistant_id: "asst_KALTCQrKd5aKMv9LLVgoyJF5",
    thread: {
      messages: [
        { role: "user", content: message },
      ],
    },
    stream: true
  });

  var ai_message = ""
  for await (const event of stream) {
    console.log(event);

    if (event.event === "thread.message.delta" && event.data.delta.content !== undefined) {
      const content_arr = event.data.delta.content

      for (const content of content_arr) {
        console.log(content);
        if ("text" in content) {
          ai_message += content.text?.value; 
        }
      }
    }

  }

  return ai_message;
}

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Hi I'm Collin, how may I assist you today?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [threadID, setThreadID] = useState(null);
  const [isTyping, setIsTyping] = useState(false);  // State to indicate typing animation

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
    const ai_response = await openAIRequest(user_message);
    const formattedResponse = ai_response.replace(/\n/g, "<br />");
  
    // Start typing animation
    setIsTyping(true);
    let displayedText = "";
    
    // Add an initial empty message for the bot
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "", sender: "bot" }, // Add an empty bot message for typing animation
    ]);
  
    for (let i = 0; i < formattedResponse.length; i++) {
      displayedText += formattedResponse[i];
      await new Promise((resolve) => setTimeout(resolve, 10));  // Adjust delay for speed
      setMessages((prevMessages) => {
        // Replace the last bot message with progressively displayed text
        const updatedMessages = [...prevMessages];
        updatedMessages[updatedMessages.length - 1] = { text: displayedText, sender: "bot" };
        return updatedMessages;
      });
    }
  
    setIsTyping(false); // End typing animation
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
