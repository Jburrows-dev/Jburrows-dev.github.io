"use client"

import Link from "next/link"
import Image from "next/image"
import type { Variants } from "motion/react"
import { stagger } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"
import { social } from "./types/types"

type DrawerProps = {
    name: string
    avatar: string
    social: Array<social>
}

const navItems = [
    { href: "#body", icon: "zmdi-border-color", label: "about" },
    { href: "#portfolio_sec", icon: "zmdi-case", label: "what i do" },
    { href: "#experience_sec", icon: "zmdi-time-restore", label: "experience" },
    { href: "#skills_sec", icon: "zmdi-flash", label: "skills" },
    { href: "#certs_sec", icon: "zmdi-badge-check", label: "certifications" },
    { href: "#project_sec", icon: "zmdi-code", label: "projects" },
]

export default function Drawer({ name, avatar, social }: DrawerProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <MenuToggle isOpen={isOpen} toggle={() => setIsOpen((v) => !v)} />

            <motion.div
                className="drawer-backdrop"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={backdropVariants}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                onClick={() => setIsOpen(false)}
            />

            <motion.nav
                className="mdl-layout__drawer"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={panelVariants}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                aria-hidden={!isOpen}
            >
                <div className="nicescroll-bar">
                    <div className="drawer-profile-wrap">
                        <Image
                            src={avatar}
                            alt={name}
                            className="candidate-img-drawer mt-25 mb-20"
                            width={250}
                            height={250}
                        />
                        <span className="candidate-name block mb-10 text-center">{name}</span>
                        <motion.ul className="social-icons mb-30" variants={navListVariants}>
                            {social.map((s) => (
                                <motion.li key={s.id} variants={itemVariants}>
                                    <Link className={s.class} href={s.url}>
                                        <i className={`zmdi zmdi-${s.label}`}></i>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    <motion.ul className="mdl-navigation" variants={navListVariants}>
                        {navItems.map((item) => (
                            <motion.li key={item.href} variants={itemVariants}>
                                <a
                                    className="mdl-navigation__link border-t-(--border)"
                                    data-scroll
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <i className={`zmdi ${item.icon} pr-15`}></i>
                                    <span className="capitalize">{item.label}</span>
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <div className="drawer-footer mt-50 mb-30 text-center">
                        <p className="text-xs mt-10">{name}© 2026.</p>
                    </div>
                </div>
            </motion.nav>
        </>
    )
}

/**
 * ==============   Variants   ================
 */

const panelVariants: Variants = {
    open: {
        x: 0,
        transition: { type: "spring", stiffness: 300, damping: 32 },
    },
    closed: {
        x: "-105%",
        transition: { type: "spring", stiffness: 300, damping: 32 },
    },
}

const backdropVariants: Variants = {
    open: { opacity: 1, transition: { duration: 0.2 } },
    closed: { opacity: 0, transition: { duration: 0.2 } },
}

const navListVariants: Variants = {
    open: {
        transition: { delayChildren: stagger(0.05, { startDelay: 0.15 }) },
    },
    closed: {
        transition: { delayChildren: stagger(0.03, { from: "last" }) },
    },
}

const itemVariants: Variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: { y: { stiffness: 1000, velocity: -100 } },
    },
    closed: {
        y: 30,
        opacity: 0,
        transition: { y: { stiffness: 1000 } },
    },
}

/**
 * ==============   Toggle button   ================
 */

interface PathProps {
    d?: string
    variants: Variants
    transition?: { duration: number }
}

const Path = (props: PathProps) => (
    <motion.path
        fill="transparent"
        strokeWidth="2.5"
        stroke="var(--text)"
        strokeLinecap="round"
        {...props}
    />
)

const MenuToggle = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => (
    <button className="drawer-toggle-btn" onClick={toggle} aria-label="Toggle menu">
        <motion.svg
            width="20"
            height="20"
            viewBox="0 0 23 23"
            initial={false}
            animate={isOpen ? "open" : "closed"}
        >
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </motion.svg>
    </button>
)