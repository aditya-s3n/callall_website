"use client";

import Calculator from "../components/Calculator_GCI";
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