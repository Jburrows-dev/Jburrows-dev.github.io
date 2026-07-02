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
        <nav className="">
            <div className="flex items-center justify-left gap-2 ">
                <MenuToggle isOpen={isOpen} toggle={() => setIsOpen((v) => !v)} />
                <Link href="/">
                    <span className="title font-bold">{name}</span>
                </Link>
            </div>
            <div className="mdl-layout-spacer"></div>
            <ul className="nav-links">
                <li><Link className="nav_link" data-scroll href="#body">about</Link></li>
                <li><Link className="nav_link" data-scroll href="#portfolio_sec">what i do</Link></li>
                <li><Link className="nav_link" data-scroll href="#experience_sec">experience</Link></li>
                <li><Link className="nav_link" data-scroll href="#skills_sec">skills</Link></li>
                <li><Link className="nav_link" data-scroll href="#certs_sec">certifications</Link></li>
                <li><Link className="nav_link" data-scroll href="#project_sec">projects</Link></li>
                <li><Link className="nav_link" data-scroll href="#contact_sec">contact</Link></li>
            </ul>
            <Toggle />
        </nav>
    )
}