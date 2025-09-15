"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Chat from "@/pages/Chat";
import ToggleSwitch from "@/components/ui/ToggleSwitch";
import { useState } from "react";

export default function Home() {
  const [isVoiceMode, setIsVoiceMode] = useState(false);

  return (
    <div className="min-h-screen relative bg-gray-100 px-14">
      {/* Background Images */}
      <div className="absolute top-0 right-0 h-auto">
        <Image src="/images/topleft.png" alt="Top Left" width={300} height={300} />
      </div>

      <div className="absolute bottom-0 left-0 w-1/3 h-auto">
        <Image src="/images/bottomRight.png" alt="Bottom Right" width={300} height={300} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-2 space-y-4">
        <Header />

        {/* Toggle */}
        <div className="flex items-center justify-center space-x-4">
          <ToggleSwitch checked={isVoiceMode} onChange={setIsVoiceMode} />
        </div>

        {/* Chat Component */}
        <div className="my-8">
          <Chat mode={isVoiceMode ? "voice" : "text"} />
        </div>
      </div>
    </div>
  );
}
