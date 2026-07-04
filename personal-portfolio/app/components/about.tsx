// Copyright (c) 2026 Pt. Prashant Tripathi 

import Image from 'next/image'
import Link from 'next/link'
import resume from '../data/data.json'

export default function About() {
    const about = resume.about;
    const social = about.social;
    const details = about.details;

    return (
        <section id="body" className="card about-sec p-[12px] !mt-36 !sm:mt-30 mb-30">
            <div className="flex flex-col justify-around items-center">
                <Image id="about-img" className="candidate-img !mb-3" src={about.avatar} alt={about.name} width={250} height={250} />
                <ul id="about-social" className="social-icons">
                    {social.map(s =>
                        <li key={s.id}>
                            <Link href={s.url}>

                                <svg
                                    width={36}
                                    height={36}
                                    viewBox="0 0 24 24"
                                    className={`social-svg md:h-[30px] md:w-[30px] fill-(--text-secondary) ${s.hoverColor}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d={s.svgPath} />
                                </svg>


                                <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 scale-90 opacity-0 pointer-events-none transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100">
                                    <div className="relative bg-slate-900 text-white text-xs rounded px-3 py-1.5 shadow-xl">
                                        {s.label}
                                        <div className="absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 bg-slate-900 rotate-45"></div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )}
                </ul>
            </div >
            <div className="flex flex-col justify-around">
                <div className="info-wrap">
                    <h1 id="about-name">{about.name}</h1>
                    <h5 id="about-tagline" className="!lg:mt-20 font-(--text-secondary)">{about.tagline}</h5>
                    <div className="flex flex-row md:justify-start items-center gap-2">
                        <Link id="download_cv"
                            className="about-button button-raised bg-(--secondary) hover:bg-(--accent) font-white !mr-2"
                            href={about.resume} download>Resume</Link>
                        <Link className="about-button  button-raised bg-(--primary) hover:bg-(--primary-light) font-white"
                            href={about.email} data-scroll>Contact</Link>
                    </div>
                </div>
                <ul id="about-details" className="profile-wrap mt-50">
                    {about.details.map(d =>
                        <li key={d.label}>
                            <div className="profile-title">
                                <span className={d.iconClass}></span> {d.label} : {d.value}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </section >
    );
}