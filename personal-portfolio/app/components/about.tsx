import Image from 'next/image'
import Link from 'next/link'
import resume from '../data/data.json'

export default function About() {
    const about = resume.about;
    const social = about.social;
    const details = about.details;

    return (
        <section id="body" className="about-sec mt-180 mt-sm-120 mb-30" >
            <div className="row">
                <div className="col-lg-12">
                    <div className="mdl-card mdl-shadow--2dp">
                        <div className="row">
                            <div className="col-md-5 col-xs-12 mb-30">
                                <Image id="about-img" className="candidate-img mb-35" src={about.avatar} alt={about.name} width={250} height={250} />
                                <ul id="about-social" className="social-icons">
                                    {social.map(s =>
                                        <li key={s.id}>
                                            <Link className={s.class} href={s.url}>
                                                <i id={s.id} className={`zmdi ${s.icon}`}></i>
                                                <div className="mdl-tooltip" data-mdl-for={s.id}>{s.label}</div>
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div className="col-md-7 col-xs-12">
                                <div className="info-wrap">
                                    <h1 id="about-name">{about.name}</h1>
                                    <h5 id="about-tagline" className="mt-20 font-grey">{about.tagline}</h5>
                                    <div className="mt-30">
                                        <Link id="download_cv"
                                            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect bg-(--secondary) font-white mr-10"
                                            href={about.resume} download>Download Resume</Link>
                                        <Link className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect bg-(--primary) font-white"
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
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}