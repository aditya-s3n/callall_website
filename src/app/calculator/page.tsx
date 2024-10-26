"use client";

import Calculator from "../components/Calculator";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/landing.css";

function CalculatorPage() {
    return (
        <div className="body-container text-white">
            <Header />
            
            <div className="text-center my-5">
                <p className="fw-bold fs-2 mb-2">Calculate Potential Earnings of your Leads</p>

                <p className="header-link nav-link fs-5">Plug in a few numbers and gain visibility on the value of your database</p>
            </div>


            <div className="m-auto section-width">
                <Calculator />
            </div>
            

            <Footer />
        </div>
    )
}

export default CalculatorPage;