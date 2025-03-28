'use client'
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Justin!';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 200);
    
    // Blinking cursor animation
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen bg-[#34353A] relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute w-96 h-96 rounded-full bg-[#FAD26E]/20 blur-3xl -left-20 -top-20"></div>
      <div className="absolute w-96 h-96 rounded-full bg-[#FAD26E]/20 blur-3xl right-20 top-20"></div>
      <div className="absolute w-80 h-80 rounded-full bg-[#FAD26E]/20 blur-3xl -right-10 bottom-40"></div>
      <div className="absolute w-80 h-80 rounded-full bg-[#FAD26E]/20 blur-3xl left-40 bottom-0"></div>
      
      {/* Content */}
      <div className="container mx-auto pt-32 relative z-1">
        <div className="flex flex-col items-center text-center mt-36">
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm <span className="text-[#FAD26E]">{text}</span>
            <span className={`text-zinc-700 ml-2 inline-block w-3 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
          </h1>
          
          <div className="mt-8">
            <h2 className="text-3xl font-normal text-white">
              Aspiring <span className="text-[#FAD26E]">UI/UX Designer & Web Developer</span> based in
            </h2>
            <h2 className="text-3xl font-normal text-[#FAD26E] mt-1">
              San Jose Del Monte, Bulacan
            </h2>
          </div>
          
          <div className="mt-10 max-w-3xl">
            <p className="text-white text-lg leading-relaxed">
              I craft seamless <span className="text-[#FAD26E]">user experiences and build dynamic, responsive websites</span> tailored to bring your vision to life. Let's work together to <span className="text-[#FAD26E]">turn ideas into engaging digital solutions.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero