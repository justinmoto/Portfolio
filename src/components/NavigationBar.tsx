'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const NavigationBar = () => {
  return (
    <nav className="fixed w-full z-10 py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-[#FAD26E]">PORTFOLIO.</span>
        </div>
        <div className="bg-[#34353A]/90 rounded-full px-8 py-3 backdrop-blur-sm shadow-lg">
          <ul className="flex space-x-8">
            <li><Button asChild variant="link" className="text-white hover:text-[#FAD26E] px-1 py-0 h-auto"><a href="#home">Home</a></Button></li>
            <li><Button asChild variant="link" className="text-white hover:text-[#FAD26E] px-1 py-0 h-auto"><a href="#about">About</a></Button></li>
            <li><Button asChild variant="link" className="text-white hover:text-[#FAD26E] px-1 py-0 h-auto"><a href="#skills">Skills</a></Button></li>
            <li><Button asChild variant="link" className="text-white hover:text-[#FAD26E] px-1 py-0 h-auto"><a href="#works">Works</a></Button></li>
            <li><Button asChild variant="link" className="text-white hover:text-[#FAD26E] px-1 py-0 h-auto"><a href="#achievements">Achievements</a></Button></li>
            <li><Button asChild variant="link" className="text-white hover:text-[#FAD26E] px-1 py-0 h-auto"><a href="#contact">Contact</a></Button></li>
          </ul>
        </div>
        <div className="text-sm text-white font-medium">V1.2</div>
      </div>
    </nav>
  )
}

export default NavigationBar