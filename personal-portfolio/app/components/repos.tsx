import Image from 'next/image'
import { repo } from "./types/types"
export default function Repos({ repos }: { repos: Array<repo> }) {
  return (
    <section id="project_sec" className="blog-sec sec-pad-top-sm">
      <h2 className="mb-30">Projects &amp; Work</h2>
      <div id="repo-card" className="row">
        {repos.map((r, i) => <div key={`rcard${i}`} className="col-sm-4 mb-40">
          <div className="card mdl-shadow--2dp !p-0 repo-card">
            <div className="card__title !p-0">
              <Image className="blog-img" alt={r.name} loading="lazy" src={r.banner} width={250} height={150} />
            </div>
            <div className="card__supporting-text relative">
              <span className="blog-cat" style={{ display: r.lang ? 'inline' : 'none' }}>
                <span className="lang" style={{ backgroundColor: r.color }}></span>
                <span>{r.lang}</span>
              </span>
              <a href={r.url}>
                <h4 className="card-title">{r.name}</h4>
              </a>
              <p>{r.description}</p>
              <a href={r.url} className="repo-button repo-js-button repo-button--fab mdl-js-ripple-effect bg-gray mdl-shadow--8dp" data-upgraded="MaterialButton,MaterialRipple">
                <i className="zmdi zmdi-github-alt"></i>
                <span className="repo-button__ripple-container">
                  <span className="mdl-ripple"></span>
                </span>
              </a>
            </div>
            <div className="card__actions border-t-3">
              <span className="blog-post-date inline-block">{r.date}</span>
              <div className="flex justify-end gap-3 items-center">
                <img className="mr-5" src="img/star.svg" />
                <span>{r.stars}</span>
                <img className="mr-5 ml-5" src="img/fork.svg" />
                <span>{r.forks}</span>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </section>
  )
}