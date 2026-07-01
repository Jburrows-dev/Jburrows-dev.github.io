import Link from "next/link"
import Image from "next/image"
import { social } from "./types/types"
type DrawerProps = {
    name: string,
    avatar: string,
    social: Array<social>
}

export default function Drawer({ name, avatar, social }: DrawerProps) {
    return (
        <div className="mdl-layout__drawer">
            <div className="nicescroll-bar">
                <div className="drawer-profile-wrap">
                    <Image src={avatar} alt={name} className="candidate-img-drawer mt-25 mb-20" width={250} height={250}/>
                    <span className="candidate-name block mb-10 text-center">{name}</span>
                    <ul className="social-icons mb-30">
                        {social.map(s =>
                            <li key={`${s.id}`}>
                                <Link className={s.class} href={s.url}>
                                    <i id="tt11" className={`zmdi zmdi-${s.label}`}></i>
                                    <div className="mdl-tooltip" data-mdl-for="tt11">{s.label}</div>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="mdl-scroll-spy-2">
                    <ul className="mdl-navigation">
                        <li><a className="mdl-navigation__link border-t-(--border)" data-scroll href="#body"><i className="zmdi zmdi-border-color pr-15"></i><span className="capitalize">about</span></a></li>
                        <li><a className="mdl-navigation__link border-t-(--border)" data-scroll href="#portfolio_sec"><i className="zmdi zmdi-case pr-15"></i><span className="capitalize">what i do</span></a></li>
                        <li><a className="mdl-navigation__link border-t-(--border)" data-scroll href="#experience_sec"><i className="zmdi zmdi-time-restore pr-15"></i><span className="capitalize">experience</span></a></li>
                        <li><a className="mdl-navigation__link border-t-(--border)" data-scroll href="#skills_sec"><i className="zmdi zmdi-flash pr-15"></i><span className="capitalize">skills</span></a></li>
                        <li><a className="mdl-navigation__link border-t-(--border)" data-scroll href="#certs_sec"><i className="zmdi zmdi-badge-check pr-15"></i><span className="capitalize">certifications</span></a></li>
                        <li><a className="mdl-navigation__link border-t-(--border)" data-scroll href="#interest_sec"><i className="zmdi zmdi-coffee pr-15"></i><span className="capitalize">interests</span></a></li>
                        <li><a className="mdl-navigation__link border-t-(--border)" data-scroll href="#project_sec"><i className="zmdi zmdi-code pr-15"></i><span className="capitalize">projects</span></a></li>
                        <li><a className="mdl-navigation__link border-t-(--border) border-b-(--border)" data-scroll href="#contact_sec"><i className="zmdi zmdi-email pr-15"></i><span className="capitalize">contact</span></a></li>
                    </ul>
                </div>
                <div className="drawer-footer mt-50 mb-30 text-center">
                    <p className="text-xs mt-10">{name}&copy; 2026.</p>
                </div>
            </div>
        </div>
    )
}