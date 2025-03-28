'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  // Development skills with their logos
  const devSkills = [
    { name: 'HTML5', logo: '/images/html.png' },
    { name: 'CSS3', logo: '/images/css.png' },
    { name: 'JavaScript', logo: '/images/js.png' },
    { name: 'React', logo: '/images/react.png' },
    { name: 'Next.js', logo: '/images/nextjs.png' },
    { name: 'Tailwind', logo: '/images/tailwind.png' },
    { name: 'Shadcn', logo: '/images/shadcn (1).png' },
    { name: 'Bootstrap', logo: '/images/bootstrap.png' },
    { name: 'MongoDB', logo: '/images/mongodb.png' },
    { name: 'Node.js', logo: '/images/nodejs.png' },
    { name: 'Express', logo: '/images/express.png' },
    { name: 'PHP', logo: '/images/php.png' },
    { name: 'MySQL', logo: '/images/mysql.png' },
    { name: 'Java', logo: '/images/java.png' },
    { name: 'C#', logo: '/images/c.png' },
    { name: 'VS Code', logo: '/images/vscode.png' },
    { name: 'DaisyUI', logo: '/images/daisyui.png' },
  ]

  // Tools skills with their logos
  const toolsSkills = [
    { name: 'Figma', logo: '/images/figma.png' },
    { name: 'Canva', logo: '/images/canva.png' },
    { name: 'MySQL', logo: '/images/mysql.png' },
    { name: 'GitHub', logo: '/images/github.png' },
    { name: 'Unity', logo: '/images/unity.png' },
  ]

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-[#34353A] relative overflow-hidden">
        
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-16">
            About Me<span className="text-[#FAD26E]">.</span>
          </h2>
          
          <div className="max-w-4xl">
            <p className="text-xl text-white leading-relaxed">
              I'm <span className="text-[#FAD26E]">Justin Mark Agustin</span>, a self-taught programmer from San Jose Del Monte. I love watching 
              movies, playing mobile and PC games, and <span className="text-[#FAD26E]">diving into self-study</span>. I'm passionate about design and 
              development, <span className="text-[#FAD26E]">focusing on creating exceptional user experiences</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#34353A] relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute w-80 h-80 rounded-full bg-[#FAD26E]/20 blur-3xl left-20 top-40"></div>
        <div className="absolute w-80 h-80 rounded-full bg-[#FAD26E]/20 blur-3xl right-40 bottom-20"></div>
        
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-16">
            My Skills<span className="text-[#FAD26E]">.</span>
          </h2>
          
          <div className="mb-16">
            <h3 className="text-2xl font-medium text-white mb-8">Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {devSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`relative group border border-zinc-700 rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 ${
                    hoveredSkill === index ? 'bg-[#FAD26E]' : 'bg-[#34353A]/50'
                  }`}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="relative w-12 h-12 mb-2">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Image 
                        src={skill.logo} 
                        alt={skill.name} 
                        width={48} 
                        height={48}
                        className="object-contain" 
                      />
                    </div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-[#FAD26E] text-[#34353A] font-medium py-1 px-3 rounded text-sm whitespace-nowrap z-10">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium text-white mb-8">Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {toolsSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`relative group border border-zinc-700 rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 ${
                    hoveredTool === index ? 'bg-[#FAD26E]' : 'bg-[#34353A]/50'
                  }`}
                  onMouseEnter={() => setHoveredTool(index)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  <div className="relative w-12 h-12 mb-2">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Image 
                        src={skill.logo} 
                        alt={skill.name} 
                        width={48} 
                        height={48} 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-[#FAD26E] text-[#34353A] font-medium py-1 px-3 rounded text-sm whitespace-nowrap z-10">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About