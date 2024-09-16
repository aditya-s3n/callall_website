import Footer from "../components/Footer";
import Header from "../components/Header";
import Message from "../components/Message";

import "../css/landing.css"
import "./pricing.css"

function Pricing() {
    return (
        <div>
            <Header />

            <div className="text-center my-5">
                <p className="fw-bold fs-2 mb-2">Find a plan that works for your team</p>

                <p className="header-link nav-link fs-5">From 10 to 100,000 prospects</p>
            </div>

            <div className="row m-0 container-pricing w-75 m-auto my-5">
                <div className="col my-4 mx-4 border-divider">
                    <p className="fs-3 fw-bold">Pro</p>

                    <p className="text-detail mt-3">Call All’s complete package.</p>
                    <p className="text-detail">Ready to take on thousands of prospects</p>
                    <p>$XX / month.</p>

                    <ul className="my-5">
                        <li className="text-detail nav-link"><i className="bi bi-envelope-fill"></i> Unlimited Emails</li>
                        <li className="text-detail nav-link my-2"><i className="bi bi-telephone-fill"></i> Unlimited Calls</li>
                        <li className="text-detail nav-link"><i className="bi bi-chat-left-fill"></i> Unlimited Texts</li>
                        <li className="text-detail nav-link my-2"><i className="bi bi-chat-dots-fill"></i> AI Chat bot</li>
                    </ul>

                    <button className="btn header-btn nav-link m-auto w-50">Start Today</button>
                </div>

                <div className="col my-4 mx-4">
                    <p className="fs-3 fw-bold">Enterpise</p>

                    <p className="text-detail mt-3">Everything in Pro, plus more.</p>
                    <p className="text-detail">Tailored for your own business needs.</p>
                    <p>Pay as you go.</p>

                    <ul className="my-5">
                        <li className="text-detail nav-link"><i className="bi bi-envelope-fill"></i> Unlimited Emails</li>
                        <li className="text-detail nav-link my-2"><i className="bi bi-telephone-fill"></i> Unlimited Calls</li>
                        <li className="text-detail nav-link"><i className="bi bi-chat-left-fill"></i> Unlimited Texts</li>
                        <li className="text-detail nav-link my-2"><i className="bi bi-chat-dots-fill"></i> AI Chat bot</li>
                    </ul>

                    <button className="btn header-btn nav-link m-auto w-50">Contact Sales</button>
                </div>
            </div>
            

            <Message />

            <Footer />
        </div>
    )
}

export default Pricing;