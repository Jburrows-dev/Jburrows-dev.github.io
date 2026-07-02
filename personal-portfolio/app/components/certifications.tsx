import { certification } from "./types/types"
import VerifiedIcon from '@mui/icons-material/Verified';

export default function Certifications({ certifications }: { certifications: Array<certification> }) {
    return (
        <section id="certs_sec" className="certs-sec pt-[50px]">
            <h2 className="mb-30">Certifications</h2>
            <div id="certs-cards" className="row">
                {certifications.map((c, i) =>
                    <div key={`${c.name}`} className="mb-30">
                        <div className="cert-card text-center">
                            <VerifiedIcon color="primary"/>
                            <div className="cert-name">{c.name}</div>
                            <div className="cert-meta">{c.issuer} &bull; {c.date}</div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}