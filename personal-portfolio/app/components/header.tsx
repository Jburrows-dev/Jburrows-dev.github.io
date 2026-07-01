import Link from "next/link"
import Toggle from './toggle'

export default function Header({ name }: { name: string }) {
    return (
        <nav className="mdl-layout__header">
            <div className="mdl-layout__header-row mdl-scroll-spy-1">
                <Link href="/">
                    <span className="mdl-layout-title font-bold">{name}</span>
                </Link>
                <div className="mdl-layout-spacer"></div>
                <ul className="nav mdl-navigation mdl-layout--large-screen-only">
                    <li><Link className="mdl-navigation__link" data-scroll href="#body">about</Link></li>
                    <li><Link className="mdl-navigation__link" data-scroll href="#portfolio_sec">what i do</Link></li>
                    <li><Link className="mdl-navigation__link" data-scroll href="#experience_sec">experience</Link></li>
                    <li><Link className="mdl-navigation__link" data-scroll href="#skills_sec">skills</Link></li>
                    <li><Link className="mdl-navigation__link" data-scroll href="#certs_sec">certifications</Link></li>
                    <li><Link className="mdl-navigation__link" data-scroll href="#project_sec">projects</Link></li>
                    <li><Link className="mdl-navigation__link" data-scroll href="#contact_sec">contact</Link></li>
                </ul>
                <Toggle />
            </div>
        </nav>
    )
}