"use client";

import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
  time?: string;
}

const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I am your Health Assistant. How can I help you today?",
      sender: "other",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
    {
      id: 2,
      text: "I've been experiencing chest pain for the past few days...",
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const [input, setInput] = useState("");
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto scroll when messages or typing change
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Detect scroll position
  const handleScroll = () => {
    if (!messagesContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
    setShowScrollBtn(scrollTop + clientHeight < scrollHeight - 50);
  };

  const generateAIResponse = (text: string) => {
    const msg = text.toLowerCase();
    if (msg.includes("chest")) return "Chest pain can be serious. I recommend contacting a doctor immediately.";
    if (msg.includes("headache")) return "Make sure to rest and stay hydrated. If it persists, consult a doctor.";
    return "Thank you for sharing. Could you give more details about your symptoms?";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI typing
    setIsTyping(true);
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: generateAIResponse(input),
        sender: "other",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col p-3 h-full relative">
      {/* Messages */}
      <div
        ref={messagesContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F1F1F180] rounded-2xl
        [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-lg px-4 py-2 relative break-words ${
              msg.sender === "me"
                ? "bg-white border border-[#E2E2E2] text-gray-800 ml-auto rounded-t-md rounded-l-md shadow-sm"
                : "bg-black text-white rounded-t-md rounded-r-md shadow-sm"
            }`}
          >
            {msg.text}
            <span className="text-xs text-gray-400 block mt-1">{msg.time}</span>
          </div>
        ))}

        {isTyping && (
          <div className="max-w-lg px-4 py-2 bg-black text-white rounded-t-md rounded-r-md shadow-sm">
            Health Assistant is typing...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Scroll button */}
      {showScrollBtn && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-24 right-1/2 text-black p-1 rounded-full shadow-lg transition bg-white"
        >
          <ArrowDown size={15} />
        </button>
      )}

      {/* Input box */}
      <div className="flex items-center bg-white rounded-2xl px-4 py-2 w-full mt-4">
        <Input
          className="flex-1 border-none shadow-none focus-visible:ring-0 focus-visible:outline-none placeholder:text-gray-400 text-gray-800"
          placeholder="Tell us more"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button
          onClick={sendMessage}
          className="rounded-full w-10 h-10 flex items-center justify-center bg-[#2D8CFF] hover:bg-[#2484fa] text-white p-0"
        >
          <ArrowUp />
        </Button>
      </div>
    </div>
  );
};

export default ChatWindow;
