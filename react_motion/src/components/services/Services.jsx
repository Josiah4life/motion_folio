import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const Services = () => {


    const ref = useRef()
    const isInView = useInView(ref, { margin: "-100px" })    //Or some, 1,

    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,

            transition: {
                staggerChildren: 0.1,
                duration: 1
            }
        }
    }


    return (
        <motion.div
            variants={variants}
            // initial="initial"
            // whileInView="animate"
            className="services"
            ref={ref}
            animate={isInView && "animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{
                            color: "orange"
                        }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{
                            color: "orange"
                        }}>For Your</motion.b> Business{" "}
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div whileHover={{ background: "lightgray", color: "black" }} className="box">
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris

                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
                <motion.div whileHover={{ background: "lightgray", color: "black" }} className="box">
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris

                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
                <motion.div whileHover={{ background: "lightgray", color: "black" }} className="box">
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris

                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
                <motion.div whileHover={{ background: "lightgray", color: "black" }} className="box">
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
