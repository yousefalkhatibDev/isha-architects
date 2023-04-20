import React from 'react'
import { motion, AnimatePresence, useCycle } from 'framer-motion'
import { Link } from 'react-router-dom'
import "../styles/Menu.css"


const menuVariants = {
    visible: {
        x: 0
    },
    origin: {
        x: "100vw",
        transition: {
            when: "beforeChildren",
            ease: "easeInOut"
        }
    }
}

const lineVariants = {
    initial: {
        rotate: 0,
        x: 0
    },
    lineOne: {
        rotate: -30
    },
    lineTwo: {
        rotate: 90,
        x: 10
    },
    lineThree: {
        rotate: 30
    }
}

const linkVariants = {
    hidden: {
        x: "120vw"
    },
    visible: {
        x: 0
    },
    hover: {
        color: "black",
        width: "100%",
        transition: {
            delay: 0,
        }
    }
}

export default function Menu(props) {
    const [line1Cycle, setLine1Cycle] = useCycle("initial", "lineOne")
    const [line2Cycle, setLine2Cycle] = useCycle("initial", "lineTwo")
    const [line3Cycle, setLine3Cycle] = useCycle("initial", "lineThree")

    const triggerHamburgerAnimation = () => {
        setLine1Cycle()
        setLine2Cycle()
        setLine3Cycle()
        props.showMenu()
    }
    return (
        <motion.div className='Menu-Container' variants={menuVariants} animate={props.showAnimation}>
            <div className="Menu-Links-Container">
                <motion.a href="/" className="menu-link link1"
                    variants={linkVariants}
                    whileHover="hover"
                    transition={{ delay: 0.3 }}
                >
                    <motion.div
                        className="Menu-Link-Background"
                    >
                    </motion.div>
                    <span>
                        HOME
                    </span>
                </motion.a>
                <motion.a href="/mylearnings" className="menu-link link2"
                    variants={linkVariants}
                    initial="hidden"
                    animate={props.linkAnimation}
                    whileHover="hover"
                    transition={{ delay: 0.5 }}
                >
                    <motion.div
                        className="Menu-Link-Background"
                    >
                    </motion.div>
                    PROJECTS / PORTFOLIO
                </motion.a>
                <motion.a href="https://linkpop.com/yousefalkhatib" className="menu-link link3"
                    variants={linkVariants}
                    initial="hidden"
                    animate={props.linkAnimation}
                    whileHover="hover"
                    transition={{ delay: 0.7 }}
                >
                    <motion.div
                        className="Menu-Link-Background"
                    >
                    </motion.div>
                    CONTACT US
                </motion.a>
                <motion.a href="/aboutus" className="menu-link link4"
                    variants={linkVariants}
                    initial="hidden"
                    animate={props.linkAnimation}
                    whileHover="hover"
                    transition={{ delay: 0.9 }}
                >
                    <motion.div
                        className="Menu-Link-Background"
                    >
                    </motion.div>
                    SERVICES
                </motion.a>
                <motion.a href="/aboutus" className="menu-link link4"
                    variants={linkVariants}
                    initial="hidden"
                    animate={props.linkAnimation}
                    whileHover="hover"
                    transition={{ delay: 1.2 }}
                >
                    <motion.div
                        className="Menu-Link-Background"
                    >
                    </motion.div>
                    About Us
                </motion.a>

            </div>

        </motion.div>
    )
}
