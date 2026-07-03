import Image from 'next/image'
import Link from 'next/link'
import resume from '../data/data.json'

export default function About() {
    const about = resume.about;
    const social = about.social;
    const details = about.details;

    return (
        <section id="body" className="card about-sec !mt-36 !sm:mt-30 mb-30">
            <div className="flex flex-col justify-around items-center">
                <Image id="about-img" className="candidate-img !mb-3" src={about.avatar} alt={about.name} width={250} height={250} />
                <ul id="about-social" className="social-icons">
                    {social.map(s =>
                        <li key={s.id}>
                            <Link className={s.class} href={s.url}>
                                <div className="group relative inline-block">
                                    <i id={s.id} className={`zmdi ${s.icon}`}></i>

                                    <div className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 scale-90 opacity-0 pointer-events-none transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100">
                                        <div className="relative bg-slate-900 text-white text-xs rounded px-3 py-1.5 shadow-xl">
                                            {s.label}
                                            <div className="absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 bg-slate-900 rotate-45"></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className="flex flex-col justify-around">
                <div className="info-wrap">
                    <h1 id="about-name">{about.name}</h1>
                    <h5 id="about-tagline" className="mt-20 font-grey">{about.tagline}</h5>
                    <div className="flex flex-row justify-center lg:justify-start items-center gap-2">
                        <Link id="download_cv"
                            className="about-button button-raised bg-(--secondary) font-white !mr-2"
                            href={about.resume} download>Download Resume</Link>
                        <Link className="about-button  button-raised bg-(--primary) font-white"
                            href={about.email} data-scroll>Email</Link>
                    </div>
                </div>
                <ul id="about-details" className="profile-wrap mt-50">
                    {about.details.map(d =>
                        <li key={d.label}>
                            <div className="profile-title">{d.emoji} {d.label} :
                            </div> {d.value}
                        </li>
                    )}
                </ul>
            </div>
        </section >
    );
}