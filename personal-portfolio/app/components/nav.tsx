// Copyright (c) 2026 Pt. Prashant Tripathi 

import React from 'react'
import Link from "next/link"
import MenuToggle from './menuToggle'
import Toggle from './toggle'

type NavProps = {
    name: string,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Nav({ name, isOpen, setIsOpen }: NavProps) {
    return (
        <nav className="top-nav flex justify-between h-12 lg:h-16">
            <div className="flex items-center justify-left gap-2 ">
                <MenuToggle isOpen={isOpen} toggle={() => setIsOpen((v) => !v)} />
                <Link href="/">
                    <span className="title">{name}</span>
                </Link>
            </div>
            <div className="flex justify-right items-center gap-8 self-stretch">
                <ul className="nav-links flex gap-2">
                    <li><Link className="nav-link" data-scroll href="#body">About</Link></li>
                    <li><Link className="nav-link" data-scroll href="#portfolio_sec">What I Do</Link></li>
                    <li><Link className="nav-link" data-scroll href="#experience_sec">Experience</Link></li>
                    <li><Link className="nav-link" data-scroll href="#skills_sec">Skills</Link></li>
                    <li><Link className="nav-link" data-scroll href="#certs_sec">Certifications</Link></li>
                    <li><Link className="nav-link" data-scroll href="#project_sec">Projects</Link></li>
                </ul>
                <Toggle />
            </div>
        </nav>
    )
}