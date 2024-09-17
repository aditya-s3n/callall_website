import "../css/landing.css"

function Overlay({ title, text, className }: { title: string, text: string, className: string }) {
    return (
        <div className={`overlay-container ${className}`}>
            <p className="fs-5 fw-bold mb-3">{title}</p>

            <p className="header-link nav-link mb-5">{text}</p>

            <a href="https://cal.com/courtneycarroll/test-callall.ai-phone-appoint" className="btn header-btn nav-link">Book a Meeting</a>
        </div>
    )
}

export default Overlay;