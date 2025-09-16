"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Mic, MicOff } from "lucide-react";

export default function ListeningScreen() {
  const [micOn, setMicOn] = useState(true);

  const toggleMic = () => setMicOn((prev) => !prev);

  return (
    <div className="flex flex-col justify-center items-center h-full space-y-6">
      <h2 className="text-2xl font-semibold mb-3">We are listening...</h2>

      <div className="p-2 rounded-full shadow-inner shadow-[black]/30 border relative">
        {/* subtle pulse ring behind mic avatar */}
        {micOn && (
          <span className="absolute inset-0 rounded-full border border-blue-300 opacity-50 animate-ping"></span>
        )}

        <button className="flex items-center space-x-4 bg-white/55 px-5 py-2 rounded-full shadow-sm shadow-[black]/50 transition-shadow duration-200 relative z-10">
          <div
            className={`w-12 h-12 flex-shrink-0 rounded-full border border-black shadow-inner transition-transform duration-300 ${
              micOn ? "animate-pulse" : ""
            }`}
            style={{
              background:
                "linear-gradient(125.26deg, #96AEE3 -22.88%, #385DCF -3.14%, #362FCE 48.04%, #B86B6E 68.95%, #DB9D67 107.82%, #E6925F 151.53%)",
            }}
          />

          <div className="flex flex-col text-start">
            <p className="font-semibold">Rakesh</p>
            <p className="text-sm text-gray-600">11 May 1993, Male</p>
          </div>
        </button>
      </div>

      <div className="w-72 h-72 relative">
        <Image
          src="/images/chat-icon.png"
          alt="Chat Icon"
          fill
          className="object-contain"
        />
      </div>

      <Button
        size="xl"
        className={`rounded-full bg-white text-black hover:bg-gray-200 flex items-center justify-center transition-transform ${
          micOn ? "animate-pulse shadow-blue-300" : ""
        }`}
        onClick={toggleMic}
      >
        {micOn ? <Mic className="text-green-600" /> : <MicOff className="text-red-500" />}
      </Button>
    </div>
  );
}
