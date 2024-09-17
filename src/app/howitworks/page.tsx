import Footer from "../components/Footer";
import Header from "../components/Header";
import Message from "../components/Message";

import Overlay from "../components/Overlay";
import Image from "next/image";
import logo from "../imgs/logo.png";

import "./howitworks.css";
import "../css/landing.css";

function HowItWorks() {
    return (
        <div>
            <Header />

            <div className="border-bottom pb-5 row m-0">
                <div className="col">
                    <Image 
                        className='m-auto'
                        src={logo}
                        width={300}
                        height={300}
                        alt="Logo"
                    />
                </div>

                <div className="col">
                    <Overlay 
                        className={"m-auto"}
                        title={"Next Gen AI is here."}
                        text={"Call All continually improves the more it's used. Symbiotic relationship of refinement."}
                    />
                </div>
            </div>

            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card timeline-bg">
                            <div className="card-body p-0">
                                <div id="content">
                                    <ul className="timeline">
                                        <li className="event" data-date="1">
                                            <div className="text-center">
                                                <i className="bi bi-journal-arrow-up fs-2 header-link nav-link"></i>
                                            </div>
                                            
                                            <p className="mt-4 fs-5 fw-bold">Proven Methods from 7 Years of sales experience.</p>
                                            <p className="header-link nav-link mt-2">Hundreds of Thousands of emails, calls, and texts</p>
                                        </li>
                                        <li className="event" data-date="2">
                                            <div className="text-center">
                                                <i className="bi bi-journal-arrow-up fs-2 header-link nav-link"></i>
                                            </div>
                                            
                                            <p className="mt-4 fs-5 fw-bold">Proven Methods from 7 Years of sales experience.</p>
                                            <p className="header-link nav-link mt-2">Hundreds of Thousands of emails, calls, and texts</p>
                                        </li>
                                        <li className="event" data-date="3">
                                            <div className="text-center">
                                                <i className="bi bi-journal-arrow-up fs-2 header-link nav-link"></i>
                                            </div>
                                            
                                            <p className="mt-4 fs-5 fw-bold">Proven Methods from 7 Years of sales experience.</p>
                                            <p className="header-link nav-link mt-2">Hundreds of Thousands of emails, calls, and texts</p>
                                        </li>
                                        <li className="event" data-date="4">
                                            <div className="text-center">
                                                <i className="bi bi-journal-arrow-up fs-2 header-link nav-link"></i>
                                            </div>
                                            
                                            <p className="mt-4 fs-5 fw-bold">Proven Methods from 7 Years of sales experience.</p>
                                            <p className="header-link nav-link mt-2">Hundreds of Thousands of emails, calls, and texts</p>
                                        </li>
                                        <li className="event" data-date="5">
                                            <div className="text-center">
                                                <i className="bi bi-journal-arrow-up fs-2 header-link nav-link"></i>
                                            </div>
                                            
                                            <p className="mt-4 fs-5 fw-bold">Proven Methods from 7 Years of sales experience.</p>
                                            <p className="header-link nav-link mt-2">Hundreds of Thousands of emails, calls, and texts</p>
                                        </li>
                                        <li className="event" data-date="6">
                                            <div className="text-center">
                                                <i className="bi bi-journal-arrow-up fs-2 header-link nav-link"></i>
                                            </div>
                                            
                                            <p className="mt-4 fs-5 fw-bold">Proven Methods from 7 Years of sales experience.</p>
                                            <p className="header-link nav-link mt-2">Hundreds of Thousands of emails, calls, and texts</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Message />

            <Footer />
        </div>
    )
}

export default HowItWorks;