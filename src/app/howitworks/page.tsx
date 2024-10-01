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
        <div className="body-container text-white">
            <Header />

            <div className="border-bottom pb-5 row m-0 row-cols-1 row-cols-md-2">
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
                        text={"CallAll.AI continually improves the more it's used. Symbiotic relationship of refinement."}
                    />
                </div>
            </div>

            <div className="container mb-5 border-bottom">
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
                                                <i className="bi bi-currency-dollar fs-2 header-link nav-link"></i>
                                            </div>
                                            
                                            <p className="mt-4 fs-5 fw-bold">$100s million of converted online leads</p>
                                            <p className="header-link nav-link mt-2">Our AI has helped convert hundreds of millions of dollars in online leads, driving real results for real estate professionals.</p>
                                        </li>
                                        <li className="event" data-date="3">
                                            <div className="text-center">
                                                <i className="bi bi-globe fs-2 header-link nav-link"></i>
                                            </div>
                                            
                                            <p className="mt-4 fs-5 fw-bold">Trained AI integration</p>
                                            <p className="header-link nav-link mt-2">Our AI is specifically trained for seamless integration with your outreach processes, making lead engagement effortless and efficient.</p>
                                        </li>
                                        <li className="event" data-date="4">
                                            <div className="text-center">
                                                <i className="bi bi-bullseye fs-2 header-link nav-link"></i>
                                            </div>
                                            
                                            <p className="mt-4 fs-5 fw-bold">Strategic marketing efforts</p>
                                            <p className="header-link nav-link mt-2">Our AI enhances your outreach with targeted, data-driven marketing strategies designed to maximize lead engagement and conversion.</p>
                                        </li>
                                        <li className="event" data-date="5">
                                            <div className="text-center">
                                                <i className="bi bi-chat-left-heart-fill fs-2 header-link nav-link"></i>
                                            </div>
                                            
                                            <p className="mt-4 fs-5 fw-bold">Taught empathetic objection handling</p>
                                            <p className="header-link nav-link mt-2">Our AI is equipped with empathetic objection handling skills, addressing client concerns with understanding and precision to keep conversations productive and positive.</p>
                                        </li>
                                        <li className="event" data-date="6">
                                            <div className="text-center">
                                                <i className="bi bi-calendar-check-fill fs-2 header-link nav-link"></i>
                                            </div>
                                            
                                            <p className="mt-4 fs-5 fw-bold">Outcome: booked appointments, live transfers, or agent &apos;hotlist&apos;</p>
                                            <p className="header-link nav-link mt-2">Our AI ensures actionable results by securing booked appointments, facilitating live transfers, or adding leads to an agent&apos;s &apos;hotlist&apos; for timely follow-up.</p>
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