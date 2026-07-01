import { skill } from "./types/types"

export default function Skill({ skills }: { skills: Array<skill> }) {
    const half = Math.ceil(skills.length / 2);
    const left = skills.slice(0, half);
    const right = skills.slice(half);

    const groupHtml = (s : skill) => {
        return (
            <div key={`${s.group}`}>
                <div className="skill-group mt-20">
                    <span className="skill-group-label">{s.group}</span>
                    <div className="chips">
                        {s.chips.map((c, i) => <span key={`${s.group}${i}`} className="skill-chip">{c}</span>)}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section id="skills_sec" className="skills-sec sec-pad-top-sm">
            <h2 className="mb-30">Skills</h2>
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <div className="mdl-card" style={{ padding: "28px 24px" }}>
                        <div id="skills-left">
                            {left.map(groupHtml)}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xs-12">
                    <div className="mdl-card" style={{ padding: "28px 24px" }}>
                        <div id="skills-right">
                            {right.map(groupHtml)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}