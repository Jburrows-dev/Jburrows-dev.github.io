import { skill } from "./types/types"

export default function Skill({ skills }: { skills: Array<skill> }) {
    const half = Math.ceil(skills.length / 2);
    const left = skills.slice(0, half);
    const right = skills.slice(half);

    const groupHtml = (s: skill) => {
        return (
            <div key={`${s.group}`}>
                <div className="skill-group mt-20">
                    <span className="skill-group-label">{s.group}</span>
                    <div className="chips">
                        {s.chips.map((c, i) => <span key={`${s.group}${i}`} className="skill-chip !px-2 !py-1 !md:px-4 !md:py-3">{c}</span>)}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section id="skills_sec" className="skills-sec sec-pad-top-sm">
            <h2>Skills</h2>
            <div className="flex flex-col gap-0 md:flex-row md:gap-4">
                <div className="card !md:m-0 h-full" style={{ padding: "28px 24px" }}>
                    {left.map(groupHtml)}
                </div>
                <div className="card !md:m-0 h-full" style={{ padding: "28px 24px" }}>
                    {right.map(groupHtml)}
                </div>
            </div>
        </section>
    )
}