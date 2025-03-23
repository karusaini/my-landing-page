"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#f4ede4] shadow-md">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* Left - Logo & Menu */}
        <div className="flex items-center gap-6">
          <Image
            src="/slack-logo.png"
            alt="Slack Logo"
            width={160}
            height={60}
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-gray-700">
            <Link href="#" className="hover:text-black flex items-center gap-1">
              Product <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-black">
              Enterprise
            </Link>
            <Link href="#" className="hover:text-black">
              Resources
            </Link>
            <Link href="#" className="hover:text-black">
              Pricing
            </Link>
          </div>
        </div>

        {/* Right - Search, Sign In, Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Search className="w-5 h-5 text-gray-700 cursor-pointer" />
          <Link href="#" className="text-gray-700 hover:text-black">
            Sign in
          </Link>
          <Button variant="outline" className="border-gray-700 text-gray-700">
            Talk to Sales
          </Button>
          <Button className="bg-purple-600 text-white">Try for Free</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full p-4 flex flex-col gap-4">
          <Link href="#" className="hover:text-black flex items-center gap-1">
            Product <ChevronDown className="w-4 h-4" />
          </Link>
          <Link href="#" className="hover:text-black">
            Enterprise
          </Link>
          <Link href="#" className="hover:text-black">
            Resources
          </Link>
          <Link href="#" className="hover:text-black">
            Pricing
          </Link>
          <div className="border-t border-gray-300 mt-2 pt-2">
            <Link href="#" className="block text-gray-700 hover:text-black">
              Sign in
            </Link>
            <Button
              variant="outline"
              className="w-full mt-2 border-gray-700 text-gray-700"
            >
              Talk to Sales
            </Button>
            <Button className="w-full mt-2 bg-purple-600 text-white">
              Try for Free
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
