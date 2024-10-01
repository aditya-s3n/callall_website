import Footer from "../components/Footer";
import Header from "../components/Header";
import Message from "../components/Message";

import "../css/landing.css"
import "./pricing.css"

function Pricing() {
    return (
        <div className="body-cointainer text-white">
            <Header />

            <div className="text-center my-5">
                <p className="fw-bold fs-2 mb-2">Find a plan that works for your team</p>

                <p className="header-link nav-link fs-5">From 10 to 100,000 prospects</p>
            </div>

            <div className="row m-0 container-pricing w-75 m-auto my-5">
                <div className="col my-4 mx-4 border-divider">
                    <p className="fs-3 fw-bold">Pro</p>

                    <p className="text-detail mt-3">CallAll.AI&apos;s complete package.</p>
                    <p className="text-detail">Ready to take on thousands of prospects.</p>
                    <p className="text-detail">Tailored AI Agent.</p>
                    <p>$899 / month.</p>

                    <ul className="my-5">
                        <li className="text-detail nav-link"><i className="bi bi-envelope-fill"></i> Unlimited Emails</li>
                        <li className="text-detail nav-link my-2"><i className="bi bi-telephone-fill"></i> Unlimited Calls</li>
                        <li className="text-detail nav-link"><i className="bi bi-chat-left-fill"></i> Unlimited Texts</li>
                        <li className="text-detail nav-link my-2"><i className="bi bi-chat-dots-fill"></i> AI Chat bot</li>
                    </ul>

                    <a href="https://cal.com/courtneycarroll/test-callall.ai-phone-appoint"><button className="btn header-btn nav-link m-auto w-50">Start Today</button></a>
                </div>

                <div className="col my-4 mx-4">
                    <p className="fs-3 fw-bold">Enterpise</p>

                    <p className="text-detail mt-3">Everything in Pro, plus more.</p>
                    <p className="text-detail">Tailored for your own business needs.</p>
                    <p className="text-detail">Tailored AI Agent(s).</p>
                    <p>Pay as you go.</p>

                    <ul className="my-5">
                        <li className="text-detail nav-link"><i className="bi bi-box-arrow-right"></i> Custom campaigns</li>
                        <li className="text-detail nav-link my-2"><i className="bi bi-telephone-plus-fill"></i> Live support</li>
                        <li className="text-detail nav-link"><i className="bi bi-tools"></i> Up to Three Tailored AI Agent</li>
                        <li className="text-detail nav-link my-2"><i className="bi bi-plus-circle-fill"></i> Much more...</li>
                    </ul>

                    <a href="https://cal.com/courtneycarroll/test-callall.ai-phone-appoint"><button className="btn header-btn nav-link m-auto w-75">Book Appointment For Pricing</button></a>
                </div>
            </div>
            

            <Message />

            <Footer />
        </div>
    )
}

export default Pricing;