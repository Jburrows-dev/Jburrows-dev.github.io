// Copyright (c) 2026 Pt. Prashant Tripathi 

import { experience } from "./types/types"

export default function Experience({ experiences }: { experiences: Array<experience> }) {
    return (
        <section id="experience_sec" className="experience-sec sec-pad-top-sm">
            <h2 className="mb-30">Experience</h2>
            <div id="experience-timeline" className="timeline">
                {experiences.map(e =>
                    <div key={`${e.company}${e.role}`} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="card exp-card">
                            <div className="exp-company">
                                {e.company}{e.current && <span className="exp-badge">Current</span>}
                            </div>
                            <div className="exp-role">{e.role}</div>
                            <div className="exp-meta flex flex-col gap-2 md:flex-row md:gap-4">
                                <span><i className="zmdi zmdi-pin"></i> {e.location}</span>
                                <span><i className="zmdi zmdi-calendar"></i> {e.period}</span>
                            </div>
                            <p>{e.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}