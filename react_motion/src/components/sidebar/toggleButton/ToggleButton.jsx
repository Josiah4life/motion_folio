import { motion } from "framer-motion"

const ToggleButton = ({ setOpen }) => {

    return (
        <button onClick={() => setOpen((prev) => !prev)}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round"
                    variants={{
                        closed: {
                            d: "M 2 2.5 L 20 2.5",
                        },
                        open: {
                            d: "M 3 16.5 L 17 2.5"
                        }
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round"
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round"
                    variants={{
                        closed: {
                            d: "M 2 16.346 L 20 16.346",
                        },
                        open: {
                            d: "M 3 2.5 L 17 16.346"
                        }
                    }} />
            </svg>
        </button>
    );
};

export default ToggleButton;



// const ToggleButton = ({ setOpen }) => {
//     return (
//         <button onClick={() => setOpen((prev) => !prev)}>
//             <svg width="23" height="23" viewBox="0 0 23 23">
//                 <path d="M 2 5 H 21" strokeWidth="3" stroke="black" strokeLinecap="round" />
//                 <path d="M 2 11.5 H 21" strokeWidth="3" stroke="black" strokeLinecap="round" />
//                 <path d="M 2 18 H 21" strokeWidth="3" stroke="black" strokeLinecap="round" />
//             </svg>
//         </button>
//     );
// };

// export default ToggleButton;


// viewBox

// This defines the internal coordinate system of the SVG.

// Format: viewBox="minX minY width height"

// minX minY: where the coordinate system starts.

// width height: how big the coordinate system is


// d (the path data)

// ⚡ This is the most important part — it tells the browser what to draw.

// It’s a string of drawing commands, like a little language inside SVG.
// Common commands:

// M x y → Move to (without drawing).

// L x y → Line to.

// H x → Horizontal line to.

// V y → Vertical line to.

// C ... → Curve to.

// Z → close the path.

// "M 2 2 L 20 2 L 20 20 L 2 20 Z"

// Move to (2,2).

// Line to (20,2).

// Line to (20,20).

// Line to (2,20).

// Close (Z).
// → That draws a square.