import { experience } from "./types/types"

export default function Experience({ experiences }: { experiences: Array<experience> }) {
    return (
        <section id="experience_sec" className="experience-sec sec-pad-top-sm">
            <h2 className="mb-30">Experience</h2>
            <div className="row">
                <div className="col-lg-12">
                    <div id="experience-timeline" className="timeline">
                        {experiences.map(e =>
                            <div key={`${e.company}${e.role}`} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="mdl-card exp-card">
                                    <div className="exp-company">
                                        {e.company}{e.current && <span className="exp-badge ml-5">Current</span>}
                                    </div>
                                    <div className="exp-role">{e.role}</div>
                                    <div className="exp-meta">
                                        <span><i className="zmdi zmdi-pin"></i> {e.location}</span>
                                        <span><i className="zmdi zmdi-calendar"></i> {e.period}</span>
                                    </div>
                                    <p>{e.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}