import React from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
export default function Navbar({ brandName = "ChatHealth" }) {
   return (
    <nav className="w-full bg-white shadow-md px-4 md:px-8 py-3 flex items-center justify-between">
      {/* Left: Brand */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-gray-800">{brandName}</span>
      </div>

      {/* Right: Menu / Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Button variant="ghost" size="sm">
          Home
        </Button>
        <Button variant="ghost" size="sm">
          Profile
        </Button>
        <Button variant="outline" size="sm">
          Logout
        </Button>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button variant="ghost" size="sm">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </nav>
  );
}
