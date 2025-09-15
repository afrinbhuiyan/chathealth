import React from "react"

export default function Header() {
  return (
    <header className="w-full bg-white/45 rounded-md shadow flex items-center justify-between px-4 py-4">
      {/* Left side (brand/logo placeholder) */}
      <div className="flex items-center">
        {/* Example: <span className="text-lg font-bold">ChatHealth</span> */}
      </div>

      {/* Right side avatar */}
      <div className="w-8 h-8 rounded-full border bg-gradient-to-tr from-blue-600 to-pink-400" />
    </header>
  )
}
