// Copyright (c) 2026 Pt. Prashant Tripathi 

export default function Footer({ name }: { name: string }) {
    return (
        <footer className="footer-sec sec-pad-top-sm sec-pad-bottom text-center">
            <h4>Thank you for visiting.</h4>
            <p>{name} &copy; 2026 All rights reserved.</p>
        </footer>
    )
}