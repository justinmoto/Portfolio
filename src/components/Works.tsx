'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const Works = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: "Flextrack",
      subtitle: "A exercise tracking website offers a seamless, user-friendly experience for monitoring physical activity, designed to enhance fitness routines while ensuring accessibility across devices, helping users stay committed to their health goals.",
      image: "/images/flextrack.jpg",
      tags: ["HTML", "CSS", "React", "Tailwind", "Express", "JavaScript", "MongoDB", "NodeJS"],
      liveUrl: "https://github.com/justinmoto/FlexTrack-MERN",
    },
    {
      id: 2,
      title: "PLMun Chorale",
      subtitle: "A appointment scheduling system simplifies coordination for clients, allowing them to easily book rehearsals, meetings, or performances with the chorale group, ensuring smooth management and streamlined communication.",
      image: "/images/plmun.png",
      tags: ["HTML", "CSS", "NextJS", "Tailwind", "Shadcn", "TypeScript", "MySQL"],
      liveUrl: "https://plmun-chorale.vercel.app/",
    },
    {
      id: 3,
      title: "Paws Care",
      subtitle: "A veterinary shop landing page offers a welcoming and informative space where clients can quickly access services, book appointments, and learn about pet care, ensuring a smooth and caring experience.",
      image: "/images/pawscare.jpeg",
      tags: ["HTML", "CSS", "React", "Tailwind", "JavaScript"],
      liveUrl: "https://github.com/justinmoto/PawsCare-FRONTEND",
    },
    {
      id: 4,
      title: "Trees Residence",
      subtitle: "A staycation condo landing page invites guests to explore a cozy retreat, showcasing amenities, booking options, and local attractions, providing a seamless and inviting experience for potential vacationers.",
      image: "/images/TreesResidence.jpeg",
      tags: ["HTML", "CSS", "React", "Tailwind", "JavaScript"],
      liveUrl: "#",
    },
    {
      id: 5,
      title: "Brainwise",
      subtitle: "A elementary ELMS landing page, designed in Figma for my client, offers an intuitive and engaging interface, enabling students and teachers to access learning materials and manage courses with ease and clarity.",
      image: "/images/brainwise.jpeg",
      tags: ["Figma"],
      liveUrl: "https://www.figma.com/design/sIMw3PKEbB4SJEKUCV9mkx/Brainwise?node-id=0-1&t=1R05XxMT2piBgj3v-1",
    },
    {
      id: 6,
      title: "Pixel Wanderer",
      subtitle: "A platformer game features two captivating levels with dynamic challenges and smooth controls, delivering an engaging adventure through creatively designed environments that offer players a rewarding and enjoyable experience.",
      image: "/images/pixelwanderer.png",
      tags: ["Unity", "C#"],
      liveUrl: "https://drive.google.com/file/d/1lewY22eIQT77YGNaFOms5Rpr3Rx-hNcm/view?usp=sharing",
    },
    {
      id: 7,
      title: "Insightz Technology",
      subtitle: "Revamping an existing website with a modernized design and enhanced functionality. Transforming the frontend and backend using Figma for a seamless, user-friendly, and visually appealing experience.",
      image: "/images/InsightzTechnology.png",
      tags: ["Figma"],
      liveUrl: "https://www.figma.com/proto/aizc9imebHc1nKGnzCQLGp/Website?page-id=0%3A1&node-id=1-3&p=f&viewport=122%2C1334%2C0.02&t=SMnKykD7Mc8FjebL-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3&show-proto-sidebar=1'",
    },
    {
      id: 8,
      title: "SGCybersecurity",
      subtitle: "Revamping an existing website with an updated design and new features. Currently developing and enhancing functionality for a more seamless and engaging user experience. Development is ongoing.",
      image: "/images/SGCybersecurity.png",
      tags: ["Figma", "Tailwind", "NextJS", "Vercel", "JavaScript", "NodeJS", "Express", "MySQL"],
      liveUrl: "https://sg-cybersecurity-2025.vercel.app/",
    },
    {
      id: 9,
      title: "FortiMSS Shopping",
      subtitle: "Designed an e-commerce website using Figma to showcase and sell cybersecurity products. Features a sleek, user-friendly interface tailored for secure and efficient online shopping experiences.",
      image: "/images/FortiMSS.png",
      tags: ["Figma"],
      liveUrl: "https://www.figma.com/proto/AZlJEHf9K0jNpRJFf6qP5E/Fortinet-Shopping?page-id=0%3A1&node-id=736-3000&viewport=6204%2C-684%2C0.13&t=pziFqhuSq7YYsjA5-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2452%3A8318",
    },
    {
      id: 10,
      title: "Yuzo Massage Services",
      subtitle: "Yuzo is a Massage Service Website that provides an elegant and user-friendly interface for clients to explore services, book appointments, and learn about the relaxing experience offered.",
      image: "/images/yuzo.png",
      tags: ["Figma", "React", "Tailwind", "Vercel"],
      liveUrl: "https://yuzomassageservices.com/",
    },
    {
      id: 11,
      title: "Teatrack",
      subtitle: "Teatrack is Ordering System with Inventory Management and Bar Code Scanner for a Tea Shop, streamlining operations and enhancing customer experience.",
      image: "/images/teatrack.png",
      tags: ["Figma", "NextJS", "Tailwind", "Vercel", "JavaScript", "NodeJS", "Express", "MySQL"],
      liveUrl: "https://tea-track.vercel.app/",
    },
    {
      id: 12,
      title: "Smart Handog",
      subtitle: "Smart Handog is a platform where the resident of Taguig City can get their Ayuda by Scanning their QR Code, making the distribution process efficient and accessible.",
      image: "/images/smarthandog.png",
      tags: ["Figma", "NextJS", "Tailwind", "Vercel", "JavaScript", "NodeJS", "Express", "MySQL"],
      liveUrl: "https://www.smarthandog.com/",
    },
    {
      id: 13,
      title: "Garment",
      subtitle: "A Inventory Management System for a Garment Shop that helps track stock, manage orders, and streamline the business operations.",
      image: "/images/garment.png",
      tags: ["Figma", "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      liveUrl: "https://github.com/Seaaaany1804/garment-inventory-management.git",
    },
    {
      id: 14,
      title: "Drivr",
      subtitle: "A Delivery Management System with GPS Tracking and Route Optimization, designed to improve logistics efficiency and delivery performance.",
      image: "/images/drivr.png",
      tags: ["Figma", "Tailwind", "NextJS", "Vercel", "JavaScript", "NodeJS", "Express", "MongoDB"],
      liveUrl: "#",
    },
    {
      id: 15,
      title: "CErevu",
      subtitle: "CErevu is a web application designed to help civil engineering students prepare for their board exams. Built using Figma, it offers an interactive and efficient way to review key concepts, practice problem-solving, and track progress",
      image: "/images/cevu.png",
      tags: ["Figma"],
      liveUrl: "https://www.figma.com/design/udG4a6cimGUE01eM3qL048/Reviewer-App?node-id=0-1&t=C3wMmfbBSUaRSLjW-1",
    }
  ]

  return (
    <section id="works" className="py-20 bg-[#34353A] relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute w-80 h-80 rounded-full bg-[#FAD26E]/20 blur-3xl right-20 -top-40"></div>
      <div className="absolute w-80 h-80 rounded-full bg-[#FAD26E]/20 blur-3xl left-40 top-60"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white mb-16">
          Works<span className="text-[#FAD26E]">.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#34353A]/70 border border-zinc-700 rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-video relative bg-zinc-800">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={640}
                  height={360}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#34353A]/50"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-white text-sm mb-4 line-clamp-4">{project.subtitle}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 5).map((tag, index) => (
                    <span key={index} className="bg-zinc-800 text-white text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button asChild variant="link" className="text-[#FAD26E] px-0 flex items-center gap-1 hover:text-[#FAD26E]/80">
                  <a href={project.liveUrl}>
                    <span>Live Preview</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
