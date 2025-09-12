import { motion } from "framer-motion"
import "./hero.scss"

const Hero = () => {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            }
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }

    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-250%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,
                staggerChildren: 0.1,
            }
        },
    }


    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >

                    <motion.h2 variants={textVariants}>
                        HARVEY TYLER
                    </motion.h2>
                    <motion.h1 variants={textVariants}>
                        Web developer and UI designer
                    </motion.h1>
                    <motion.div className="buttons">
                        <button>See the Latest Works</button>
                        <button>Contact Me</button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div variants={sliderVariants} initial="intial" animate="animate" className="slidingTextContainer">
                Writer Content Creator Influencer
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero

/**
 * Assuming 50vh for the text gives ~2000px
 * x = -220% of 2000px = -4400px
 * So the text is coming from 0 to -2000px after it flew past it's own visible area. and when repeatType: "mirror" kicks in it reverses
 * back from -4400px to 0 which looks like it snaps.
 * 
 * Used width: 50vh. For example say it's ~700px.
 * Now x = -220% of 700px = -1540px
 * 
 * that's smaller than `4400px, so the travel distance is reasonable compared to our viewport. 
 * 
 */