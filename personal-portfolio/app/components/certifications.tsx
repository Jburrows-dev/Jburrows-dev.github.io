import { certification } from "./types/types"
export default function Certifications({ certifications }: { certifications: Array<certification> }) {
    return (
        <section id="certs_sec" className="certs-sec pt-[50px]">
            <h2 className="mb-30">Certifications</h2>
            <div id="certs-cards" className="row">
                {certifications.map((c, i) =>
                    <div key={`${c.name}`} className="col-md-3 col-sm-6 col-xs-12 mb-30">
                        <div className="mdl-card cert-card text-center">
                            <i className="material-icons cert-icon">verified</i>
                            <div className="cert-name">{c.name}</div>
                            <div className="cert-meta">{c.issuer} &bull; {c.date}</div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}