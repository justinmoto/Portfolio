'use client'
import React, { useState } from 'react'

const Achievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const achievements = [
    {
      year: "2024",
      title: "Symposium 2024",
      subtitle: "Best Research Award",
      description: "In a competition organized by STI College San Jose Del Monte in January 2024, our group presented our thesis on an appointment system for a veterinary hospital in San Jose Del Monte. Our project aimed to make scheduling easier and more efficient. We worked hard and our efforts paid off when we won the Best Research Award. This award shows the value of our work and the support we received from STI College San Jose Del Monte. It highlights our team success and the positive impact of our project on improving veterinary care management."
    },
    {
      year: "2023",
      title: "STI Tagisan ng Talino - Codefest Competition 2023",
      subtitle: "Local and Cluster Level Champion 2023\nNational Level Finalist 2023",
      description: "In the STI Tagisan ng Talino - Codefest Competition 2023, organized by STI College, our team built a mobile app based on a problem given to us with a tight deadline. We started by competing at our school and won the Local Level Champion 2023 title, which allowed us to represent our branch. Next, we competed at the cluster level against other STI branches and won again, representing Cluster 2 at the national competition. Although we didn't win at the nationals, we were excited to be listed among the top 8 branches in the country. This achievement shows our team's hard work and ability to succeed in a tough competition."
    }
  ]

  return (
    <section id="achievements" className="py-20 bg-[#34353A] relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute w-96 h-96 rounded-full bg-[#FAD26E]/20 blur-3xl left-1/2 top-40 -translate-x-1/2"></div>
      <div className="absolute w-80 h-80 rounded-full bg-[#FAD26E]/20 blur-3xl right-40 bottom-20"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white mb-16">
          Achievements<span className="text-[#FAD26E]">.</span>
        </h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-10 top-0 bottom-0 w-px bg-zinc-700"></div>
          
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`relative mb-24 pl-24 transform transition-all duration-500 ease-out ${
                hoveredIndex === index ? 'translate-x-8' : 'translate-x-0'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Year circle */}
              <div className="absolute left-0 top-0 w-20 h-20 rounded-full bg-[#34353A] border-2 border-zinc-700 flex items-center justify-center text-white font-bold">
                {achievement.year}
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-[#FAD26E] mb-2">
                  {achievement.title}
                </h3>
                <h4 className="text-xl font-semibold text-white mb-4">
                  {achievement.subtitle}
                </h4>
                <div className="max-w-4xl">
                  <p className="text-white leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements