'use client'
import React, { useRef, FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import emailjs from '@emailjs/browser'

const Contacts = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  
  const socialLinks = [
    {
      platform: "Facebook",
      icon: "facebook",
      url: "https://www.facebook.com/jamactin13",
      username: "www.facebook.com/jamactin13"
    },
    {
      platform: "Email",
      icon: "mail",
      url: "mailto:justinmkl34@gmail.com",
      username: "justinmkl34@gmail.com"
    },
    {
      platform: "GitHub",
      icon: "github",
      url: "https://github.com/justinmoto",
      username: "https://github.com/justinmoto"
    },
    {
      platform: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/justinmarkagustin-1a3101298/",
      username: "https://www.linkedin.com/in/justinmarkagustin-1a3101298/"
    }
  ]

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);

    if (form.current) {
      emailjs
        .sendForm('service_0jh6iyi', 'template_xgz587b', form.current, {
          publicKey: 'zXelnN0tsYPo4b87x',
        })
        .then(
          () => {
            form.current?.reset();
            setShowSuccess(true);
            setIsSubmitting(false);
            
            // Auto hide success message after 5 seconds
            setTimeout(() => {
              setShowSuccess(false);
            }, 5000);
          },
          (error) => {
            console.log('FAILED...', error.text);
            setShowError(true);
            setIsSubmitting(false);
            
            // Auto hide error message after 5 seconds
            setTimeout(() => {
              setShowError(false);
            }, 5000);
          },
        );
    }
  };
  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'facebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        )
      case 'mail':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        )
      case 'github':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        )
      case 'linkedin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#34353A] relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute w-96 h-96 rounded-full bg-[#FAD26E]/20 blur-3xl left-1/2 top-40 -translate-x-1/2"></div>
      <div className="absolute w-80 h-80 rounded-full bg-[#FAD26E]/20 blur-3xl right-40 bottom-20"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white mb-16">
          Contact Me<span className="text-[#FAD26E]">.</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-white mb-12 max-w-md">
              Want to discuss an opportunity to create something great? I'm ready when you are.
            </p>
            
            <ul className="space-y-6">
              {socialLinks.map((link, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center text-white">
                    {renderIcon(link.icon)}
                  </div>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FAD26E] transition">
                    {link.username}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <form ref={form} onSubmit={sendEmail} className="bg-[#34353A]/70 backdrop-blur-sm border border-zinc-700 rounded-xl p-8">
              {showSuccess && (
                <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-lg">
                  <p className="text-green-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
              
              {showError && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg">
                  <p className="text-red-400 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    Something went wrong. Please try again later.
                  </p>
                </div>
              )}
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="from_name"
                    className="w-full rounded-md bg-zinc-800 border-zinc-700 text-white p-3 focus:outline-none focus:ring-2 focus:ring-[#FAD26E]" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="from_email"
                    className="w-full rounded-md bg-zinc-800 border-zinc-700 text-white p-3 focus:outline-none focus:ring-2 focus:ring-[#FAD26E]" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-white">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={6}
                    className="w-full rounded-md bg-zinc-800 border-zinc-700 text-white p-3 focus:outline-none focus:ring-2 focus:ring-[#FAD26E]" 
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#FAD26E] hover:bg-[#FAD26E]/80 text-zinc-900 font-medium py-3 rounded-md flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-zinc-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send">
                        <path d="m22 2-7 20-4-9-9-4Z"></path>
                        <path d="M22 2 11 13"></path>
                      </svg>
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-32 border-t border-zinc-700 pt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-18">
            <div className="text-2xl font-bold text-[#FAD26E] mb-6 md:mb-0">PORTFOLIO.</div>
            
            <div className="flex gap-4 mb-6 md:mb-0">
              <a href="#" className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center text-white hover:bg-[#FAD26E] transition">
                {renderIcon('facebook')}
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center text-white hover:bg-[#FAD26E] transition">
                {renderIcon('github')}
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center text-white hover:bg-[#FAD26E] transition">
                {renderIcon('linkedin')}
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center text-white hover:bg-[#FAD26E] transition">
                {renderIcon('mail')}
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#home" className="text-white hover:text-[#FAD26E] transition">Home</a>
              <a href="#about" className="text-white hover:text-[#FAD26E] transition">About</a>
              <a href="#skills" className="text-white hover:text-[#FAD26E] transition">Skills</a>
              <a href="#works" className="text-white hover:text-[#FAD26E] transition">Works</a>
              <a href="#achievements" className="text-white hover:text-[#FAD26E] transition">Achievements</a>
              <a href="#contact" className="text-white hover:text-[#FAD26E] transition">Contact</a>
            </div>
          </div>
          <hr className="w-full border-zinc-700 mt-6"></hr>

          <div className="text-center mt-8 text-white text-sm">
            <p>© 2025 Justin Mark Agustin. All Rights Reserved.</p>
          <p className="text-zinc-400 mt-1">Made by NextJS, Tailwind and Shadcn</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts