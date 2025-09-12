import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring } from "framer-motion"
import { useTransform } from "framer-motion"



const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    },
    {
        id: 2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    },

]

const Single = ({ item }) => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])



    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div
                        style={{ y }}
                        className="textContainer">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [
            "end end", "start start"
        ]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio