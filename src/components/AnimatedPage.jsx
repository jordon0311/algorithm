import { motion } from "framer-motion"

const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1,
        transition: {duration: 2},
        ease: [1, 0, 1, 1]},
    exit: { opacity: 0, 
        transition: {duration: 0.5},
        ease: [0, 1, 1, 1] },
}

const AnimatedPage = ({ children }) => {
    return (
        <motion.div className="motionDiv"
            variants={animations}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{duration: 1,}}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage