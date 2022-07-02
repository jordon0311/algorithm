import { motion } from "framer-motion"

const animations = {
    visible: {
        opacity: 1,
        transition: { duration: 2 },
        ease: [1, 0, 1, 1]
    },
    hidden: {
        opacity: 0,
        transition: { duration: 0.5 },
        ease: [0, 1, 1, 1]
    },
}

const AnimatedDiv = ({ children }) => {
    return (
        <motion.div className="motionDiv"
            variants={animations}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1, }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedDiv