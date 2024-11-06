"use client";

import React, { useState } from 'react';
import '../css/chat.css';

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Hi I'm JJ, how may I assist you today?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const pdfLinks = [
    { name: "Master Script", url: "https://drive.usercontent.google.com/uc?id=1e2YrpovVCQpDRa7OUmlq8ngUradf35Q4&export=download", keywords: ["script"] },
    { name: "Lowball Offer", url: "https://drive.usercontent.google.com/uc?id=1GWg47WLAd3wKWj6SKRuaNnaHyzsYEFWS&export=download", keywords: ["lowball", "offer"] },
    { name: "Not a Good Time To Buy", url: "https://drive.usercontent.google.com/uc?id=1YvbWVxdBZv_0Vcwo1BwfUpqqU9FO4X_r&export=download", keywords: ["not a good time", "buy"] },
    { name: "Don't Need a Pre-Approval", url: "https://drive.usercontent.google.com/uc?id=1LsKj5YvCKUXBnn8ab8NkzwWr4gkwPFBn&export=download", keywords: ["pre-approval", "preapproval"] },
    { name: "Online Lead Script", url: "https://drive.usercontent.google.com/uc?id=1qHrmpBl2PDYCc33S1DzW1VYtjptPs_dg&export=download", keywords: ["online lead", "lead script"] },
    { name: "Prospecting Around Just Listed", url: "https://drive.usercontent.google.com/uc?id=1LsfwK49wBxumCJHIIfF0-va5vBmjdqhm&export=download", keywords: ["prospecting", "just listed"] },
    { name: "Working with Listing Agent", url: "https://drive.usercontent.google.com/uc?id=1vVfeib_M2MNf9tatHbjAxRYeMMDArnQK&export=download", keywords: ["listing agent", "working with agent"] },
  ];


  const handleSend = async () => {
    if (inputMessage.trim() === "") return;

    const user_message = inputMessage;
    setInputMessage("");

    // Append user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: user_message, sender: "user" },
    ]);

    if (user_message.includes("script")) {
      // Filter links based on keywords in user message
      const matchedLinks = pdfLinks.filter((link) =>
        link.keywords.some((keyword) => user_message.includes(keyword))
      );

      // Create the HTML for the matched links
      const linksMessage = matchedLinks
        .map(link => link && `<a class="chat-link" href="${link.url}" target="_blank" download>${link.name}</a>`)
        .join("<br />");

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `Here are the scripts you requested:<br />${linksMessage}`, sender: "bot" },
      ]);
    }

    // Start the typing animation for bot response
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "Analyzing... please wait", sender: "bot" }, // Add an empty bot message for typing animation
    ]);

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: user_message }),
        signal: AbortSignal.timeout(30000)
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