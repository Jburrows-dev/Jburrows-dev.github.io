// Copyright (c) 2026 Pt. Prashant Tripathi 

import { certification } from "./types/types"
import VerifiedIcon from '@mui/icons-material/Verified';

export default function Certifications({ certifications }: { certifications: Array<certification> }) {
    return (
        <section id="certs_sec" className="certs-sec pt-[50px]">
            <h2 className="mb-30">Certifications</h2>
            <div className="flex flex-col gap-[16px] lg:flex-row lg:gap-[30px] justify-center items-stretch w-full">
                {certifications.map((c, i) =>
                    <div key={`${c.name}`} className="p-[20px] cert-card text-center lg:flex-1">
                        <VerifiedIcon sx={{ fontSize: 60 }} color="primary" />
                        <div className="cert-name">{c.name}</div>
                        <div className="cert-meta">{c.issuer} &bull; {c.date}</div>
                    </div>
                )}
            </div>
        </section>
    )
}