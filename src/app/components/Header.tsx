import logo from "../imgs/logo_header.png"
import Image from "next/image";

function Header() {
    return (
        <header className="sticky-top d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom outline-header pe-2 header-background">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                
                <Image 
                    className="ms-3 position-absolute"
                    src={logo}
                    width={50}
                    height={50}
                    alt="Logo"
                />
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><a href="/whatwedo" className="nav-link header-link" aria-current="page">What we do</a></li>
                <li className="nav-item"><a href="/howitworks" className="nav-link header-link">How it works</a></li>
                <li className="nav-item"><a href="/pricing" className="nav-link header-link me-3">Pricing</a></li>
                <li className="nav-item"><a href="#" className="btn header-btn nav-link">Book a Meeting</a></li>
            </ul>
        </header>
    )
}

export default Header;