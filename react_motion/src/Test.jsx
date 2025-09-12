import { motion, transform } from "framer-motion"




const Test = () => {

    const items = [ "item1", "item2", "item3", "item4", "item5" ];
    
    const variants = {
        visible: (i) => ({
            opacity: 1,
            x: 100,
            transition: {
                delay: i * 0.3
            }
        }),
        hidden: {
            opacity: 0
        }
    }

    return (
        <div className="course">
            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {
                    items.map((item, i) => (
                        <motion.li variants={variants} key={item} custom={i}>
                            {item}
                        </motion.li>
                    ))
                }
            </motion.ul>

        </div>
    )
}