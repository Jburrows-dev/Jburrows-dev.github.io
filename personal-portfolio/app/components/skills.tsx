// Copyright (c) 2026 Pt. Prashant Tripathi 

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
                        {s.chips.map((c, i) =>
                            <span key={`${s.group}${i}`} className="skill-chip !px-3 !py-2 !md:px-4 !md:py-3">
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox={c.viewBox ? `0 0 ${c.viewBox.width} ${c.viewBox.height}` : "0 0 24 24"}
                                    className={`social-svg mr-2 md:h-[20px] md:w-[20px] fill-(--primary)`}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d={c.svgPath} />
                                </svg>
                                {c.label}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section id="skills_sec" className="skills-sec sec-pad-top-sm">
            <h2>Skills</h2>
            <div className="flex flex-col gap-0 lg:flex-row md:gap-4">
                <div className="card !md:rounded-xs !md:m-0 h-full md:!pb-[45px] !border-none !shadow-none !rounded-[8px_0_0_0] !pb-0">
                    {left.map(groupHtml)}
                </div>
                <div className="card !border-none !shadow-none !rounded-[0_0_8px_0] !pt-0 !md:rounded-xs !md:m-0 h-full md:!pt-[45px]">
                    {right.map(groupHtml)}
                </div>
            </div>
        </section>
    )
}