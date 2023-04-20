import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useCycle } from "framer-motion"

import IshaLogo from "../imgs/isha-logo.png"
import "../styles/NavBar.css"

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

export default function NavBar(props) {
    const [path, setPath] = useState(window.location.pathname)
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
        <motion.div
            className='NavBar-Container'
            style={{ zIndex: props.showAnimation === "origin" ? 1 : "initial" }}
            initial={{
                y: path === "/" ? -100 : 0
            }}
            animate={{
                y: 0
            }}
            transition={{
                delay: 2.5
            }}
        >
            <img src={IshaLogo} className="NavBar-Logo" />
            <div className="NavBar-Hamburger" onClick={() => triggerHamburgerAnimation()}>
                <motion.div className="NavBar-Hamburger-Line line1" variants={lineVariants} animate={line1Cycle}></motion.div>
                <motion.div className="NavBar-Hamburger-Line line2" variants={lineVariants} animate={line2Cycle}></motion.div>
                <motion.div className="NavBar-Hamburger-Line line3" variants={lineVariants} animate={line3Cycle}></motion.div>
            </div>
        </motion.div>
    )
}
