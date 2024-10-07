import logo from "../imgs/logo_header.png"
import Image from "next/image";
import "../css/landing.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top py-3 mb-4 border-bottom outline-header pe-2 header-background">
            <div className="container-fluid">
                <a href="/" className="navbar-brand d-flex align-items-center  mt-2 mb-3 mb-sm-2 me-md-auto link-body-emphasis text-decoration-none">
                    
                    <Image 
                        className="ms-3 position-absolute"
                        src={logo}
                        width={50}
                        height={50}
                        alt="Logo"
                    />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse me-2" id="navbarSupportedContent">
                    <ul className="nav nav-pills navbar-nav ms-auto d-flext">
                        <li className="nav-item"><a href="/whatwedo" className="nav-link header-link" aria-current="page">What We Do</a></li>
                        <li className="nav-item"><a href="/howitworks" className="nav-link header-link">How It Works</a></li>
                        <li className="nav-item"><a href="/calculator" className="nav-link header-link">Calculator</a></li>
                        <li className="nav-item"><a href="/pricing" className="nav-link header-link me-3">Pricing</a></li>
                        <li className="nav-item"><a href="https://cal.com/courtneycarroll/test-callall.ai-phone-appoint" className="btn header-btn nav-link">Book a Meeting</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;