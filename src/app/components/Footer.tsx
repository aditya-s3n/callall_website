import logo from "../imgs/logo.png"
import Image from "next/image";

import "../css/landing.css"

function Footer() {
    return (
        <footer className="row pt-5 mt-5 border-top m-0">
            <div className="col-6 my-3">
                <a href="/" className="d-flex align-items-center mb-3 mt-5 ms-5">
                    <Image 
                        className="ms-3 position-absolute"
                        src={logo}
                        width={150}
                        height={150}
                        alt="Logo"
                    />
                </a>
            </div>


            <div className="col mb-3">
                <h5 className="mb-3">Product</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-decoration-underline header-link">Phone</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-decoration-underline header-link">Email</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-decoration-underline header-link">What we do</a></li>
                </ul>
            </div>

            <div className="col mb-3">
                <h5 className="mb-3">Resources</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-decoration-underline header-link">About us</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-decoration-underline header-link">Pricing</a></li>
                </ul>
            </div>

            <div className="col mb-5">
                <h5 className="mb-3">Social</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 header-link "><i className="bi bi-twitter header-link"></i>  Twitter</a></li>
                </ul>
            </div>

            <div className="mt-5 mb-3 d-flex justify-content-center">
            <a href="#" className="nav-link p-0 header-link me-2">Terms</a> | <a href="#" className="ms-2 nav-link p-0 header-link">Privacy Policy</a>
            </div>
        </footer>
    )
}

export default Footer;