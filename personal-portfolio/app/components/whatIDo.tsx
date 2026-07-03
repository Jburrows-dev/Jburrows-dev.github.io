// Copyright (c) 2026 Pt. Prashant Tripathi 

import { attribute } from './types/types'

export default function WhatIDo({ attributes }: { attributes: Array<attribute> }) {
    return (
        <section id="portfolio_sec" className="profile-sec sec-pad-top-sm">
            <h2>What I Do</h2>
            <div id="whatido-cards">
                {attributes.map(a =>
                    <div key={`${a.title}`} className="card mdl-shadow--2dp text-center">
                        <i className={`zmdi ${a.icon} ${a.iconColor} profile-icon`}></i>
                        <h4 className="mb-15">{a.title}</h4>
                        <p>{a.description}</p>
                    </div>
                )}
            </div>
        </section>
    )
}