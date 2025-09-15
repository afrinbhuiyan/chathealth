"use client";

import { useState, FC } from "react";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) onChange(!isChecked);
  };

  return (
    <div
      className="relative w-sm h-[50px] bg-gray-100 rounded-full cursor-pointer flex items-center border border-black"
      onClick={handleToggle}
    >
      <span className="absolute left-8 text-gray-800 font-medium">Text Mode</span>
      <span className="absolute right-8 text-gray-800 font-medium">Voice Mode</span>
      {/* Slider */}
      <div
        className={`absolute left-0 w-[calc(50%-8px)] mx-2 h-[80%] bg-black rounded-full flex items-center justify-center text-white font-medium transition-transform duration-300 ${
          isChecked ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {isChecked ? "Voice Mode" : "Text Mode"}
      </div>
    </div>
  );
};

export default ToggleSwitch;
