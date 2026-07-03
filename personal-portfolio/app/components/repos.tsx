// Copyright (c) 2026 Pt. Prashant Tripathi 

import Image from 'next/image'
import { repo } from "./types/types"

export default function Repos({ repos }: { repos: Array<repo> }) {
  return (
    <section id="project_sec" className="blog-sec sec-pad-top-sm">
      <h2 className="mb-30">Projects &amp; Work</h2>
      <div id="repo-cards" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {repos.map((r, i) =>
          <div
            key={`rcard-${r.name}-${i}`}
            className="card !p-0 repo-card"
          >
            <div className="card__title !p-0">
              <Image
                className="blog-img"
                alt={r.name}
                loading="lazy"
                src={r.banner}
                width={350}
                height={180}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            <div className="card__supporting-text relative">
              <span className="blog-cat" style={{ display: r.lang ? 'inline-flex' : 'none', alignItems: 'center' }}>
                <span className="lang" style={{ backgroundColor: r.color }}></span>
                <span>{r.lang}</span>
              </span>
              <a href={r.url}>
                <h4 className="card-title">{r.name}</h4>
              </a>
              <p>{r.description}</p>
              <a href={r.url} className="repo-button repo-js-button repo-button--fab bg-gray mdl-shadow--8dp">
                <i className="zmdi zmdi-github-alt"></i>
              </a>
            </div>

            <div className="card__actions">
              <span className="blog-post-date">{r.date}</span>
              <div className="repo-stats-wrap">
                <div className="stat-item">
                  <Image src="img/star.svg" height={14} width={14} alt="star" />
                  <span>{r.stars}</span>
                </div>
                <div className="stat-item">
                  <Image src="img/fork.svg" height={14} width={14} alt="fork" />
                  <span>{r.forks}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}