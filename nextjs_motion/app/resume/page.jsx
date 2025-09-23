"use client";

import { FaHtml5 } from "react-icons/fa";

import {
  FaCss3,
  FaFigma,
  FaJs,
  FaNodeJs,
  FaReact
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si';

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "motion/react";

// about data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi doloru.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Agenda Rage"
    },
    {
      fieldName: "Phone",
      fieldValue: "*234793234293"
    },
    {
      fieldName: "Experience",
      fieldValue: "12+"
    },
    {
      fieldName: "Skype",
      fieldValue: "Agenda.01"
    },
    {
      fieldName: "Emain",
      fieldValue: "Agenda.01@gmail.com"
    },
    {
      fieldName: "FreeLance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English, Japanese"
    },
  ]
}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi doloru.",
  items: [
    {
      company: "Tech Solution",
      position: "Frontend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Tech Solution",
      position: "Junior Frontend Developer",
      duration: "2021 - 2022",
    },
    {
      company: "Tech Solution",
      position: "Intern Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Web Design Studio",
      position: "Freelance Web Developer",
      duration: "2019 - 2020",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2018 - 2019",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant (Web Development)",
      duration: "2017 - 2018",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2016 - 2017",
    },
    {
      company: "Software Development Firm",
      position: "Junior Software Engineer",
      duration: "2015 - 2016",
    },
  ],
};

//education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi doloru.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2022 - Present",
    },
    {
      institution: "Tech Institute",
      degree: "Diploma in Frontend Engineering",
      duration: "2020 - 2021",
    },
    {
      institution: "Online Course Platform",
      degree: "Advanced JavaScript & React Specialization",
      duration: "2019 - 2020",
    },
    {
      institution: "Design School",
      degree: "Certification in UI/UX Design",
      duration: "2018 - 2019",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2016 - 2018",
    },
    {
      institution: "High School",
      degree: "High School Diploma (Science Track)",
      duration: "2012 - 2016",
    },
  ],
};


// skills
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi doloru.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
  ],
}



const page = () => {
  return (
  <motion.div initial={{
    opacity: 0
  }}
  animate={{
    opacity: 1,
    transition: {
      delay: 2.4, duration: 0.4, ease: "easeIn"
    },
  }}
  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experince</TabsTrigger> 
          <TabsTrigger value="education">Education</TabsTrigger> 
          <TabsTrigger value="skills" >Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>

        {/* contents */}
        <div className="min-h-[70vh] w-full">
          {/* experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">
                {experience.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index)=> {
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent"> 
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">
                {education.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index)=> {
                    return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent"> 
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {skills.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-white text-primary">
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip> 
                      </TooltipProvider>
                    </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">
                {about.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-col-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li 
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">
                        {item.fieldName}
                      </span>
                      <span className="text-xl">
                        {item.fieldValue}
                      </span>
                    </li>
                  )
                })} 
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>
  )
};

export default page;


