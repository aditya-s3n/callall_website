"use client";

import Calculator from "../components/Calculator_GCI";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/landing.css";

function CalculatorPage() {
    return (
        <div className="body-container text-white">
            
            <div className="m-auto section-width">
                <Calculator />
            </div>
            
        </div>
    )
}

export default CalculatorPage;