"use client"

import Link from "next/link"
import Image from "next/image"
import React from 'react'
import type { Variants } from "motion/react"
import { stagger } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"
import { social } from "./types/types"
import MenuToggle from "./menuToggle"

type DrawerProps = {
    name: string
    avatar: string
    social: Array<social>,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const navItems = [
    { href: "#body", icon: "zmdi-border-color", label: "about" },
    { href: "#portfolio_sec", icon: "zmdi-case", label: "what i do" },
    { href: "#experience_sec", icon: "zmdi-time-restore", label: "experience" },
    { href: "#skills_sec", icon: "zmdi-flash", label: "skills" },
    { href: "#certs_sec", icon: "zmdi-badge-check", label: "certifications" },
    { href: "#project_sec", icon: "zmdi-code", label: "projects" },
]

export default function Drawer({ name, avatar, social, isOpen, setIsOpen }: DrawerProps) {

    return (
        <>
            <motion.div
                className="drawer-backdrop"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={backdropVariants}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                onClick={() => setIsOpen(false)}
            />

            <motion.nav
                className="drawer"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={panelVariants}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                aria-hidden={!isOpen}
            >
                <div>
                    <div className="drawer-profile-wrap">
                        <div className="flex justify-end items-center m-0 p-0">
                            <MenuToggle className="!h-auto !w-auto m-1" color="text-secondary" isOpen={isOpen} toggle={() => setIsOpen((v) => !v)} />
                        </div>
                        <Image
                            src={avatar}
                            alt={name}
                            className="candidate-img-drawer mt-25 mb-20 !mx-auto"
                            width={150}
                            height={150}
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

                    <motion.ul className="drawer-navigation" variants={navListVariants}>
                        {navItems.map((item) => (
                            <motion.li key={item.href} variants={itemVariants}>
                                <a
                                    className="drawer-nav-link border-t-(--border)"
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
                </div>

                <div className="drawer-footer mb-5 text-center">
                    <p className="!text-xs mt-10">{name}© 2026.</p>
                </div>
            </motion.nav>
        </>
    )
}

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

