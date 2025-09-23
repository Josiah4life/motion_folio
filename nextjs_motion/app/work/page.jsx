"use client"

import { motion } from 'motion/react'
import React, { useState } from 'react'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"

import WorkSliderBtns from "@/components/WorkSliderBtns"
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight, BsGithub } from "react-icons/bs"

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "Portfolio Website",
        description:
            "A personal portfolio website to showcase projects, skills, and experience.",
        stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
        image: "/assets/work/thumb1.png",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "fullstack",
        title: "E-commerce Platform",
        description:
            "An online store with product listings, shopping cart, and secure checkout.",
        stack: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }],
        image: "/assets/work/thumb2.png",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "frontend",
        title: "Landing Page Design",
        description:
            "A responsive landing page for a startup, optimized for conversions.",
        stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "TypeScript" }],
        image: "/assets/work/thumb3.png",
        live: "",
        github: "",
    },
];


const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        // get the current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    }
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4, duration: 0.4, ease: "easeIn"
                }
            }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            {/* outline num */}
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                                {project.category} project
                            </h2>
                            <p className='text-white/60'>
                                {project.description}
                            </p>
                            <ul className='flex gap-4'>
                                {project.stack.map((item, index) => {
                                    return (
                                        <li className="text-accent text-xl" key={index}>
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>

                            {/* border */}
                            <div className='border border-white/20'></div>
                            {/* buttons */}
                            <div className='flex items-center gap-4'>
                                {/* live project button*/}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                                            justify-center items-center group">
                                                <BsArrowRight className='text-white text-3xl group-hover:text-accent group -rotate-45 hover:rotate-0 transition-all duration-300' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    Live project
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github project button*/}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                                            justify-center items-center">
                                                <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    Github repository
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className='w-full'>
                                        <div className='h-[460px] group relative bg-pink-50/20 items-center justify-center'>
                                            {/* overlay */}
                                            <div className='absolute top-0 bottom-0 w-full bg-black/10 z-10'>

                                            </div>
                                            {/* image */}
                                            <div>
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className='object-cover'
                                                    alt='' />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Work