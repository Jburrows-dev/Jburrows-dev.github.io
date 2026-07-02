'use client'
import { motion } from 'motion/react'
import { useState } from 'react'

export default function Toggle() {
    const [isLight, setIsLight] = useState(true);
    const toggleDarkMode = () => {
        if (document.documentElement.getAttribute('data-theme') == 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        setIsLight(isLight => !isLight)
    };

    return (
        <button
            id='theme-toggle'
            style={{
                justifyContent: "flex-" + (isLight ? "start" : "end"),
            }}
            onClick={toggleDarkMode}>
            <motion.div
                id="theme-toggle-ball"
                layout
                transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 50,
                }}
            />
        </button>
    )
}