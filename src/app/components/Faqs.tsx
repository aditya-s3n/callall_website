import "../css/landing.css";

function Faqs() {
    return (
        <div className="accordion my-5" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header faq-header">
                <button className="accordion-button collapsed faq-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Is CallAll.AI Worth It?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body faq-body">
                    Absolutely! CallAll.AI is designed to optimize your lead outreach and conversion rates. By automating follow-ups, ensuring consistent engagement, and leveraging advanced AI techniques, it turns potential leads into actual clients, offering significant returns on your investment.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header faq-header">
                <button className="accordion-button collapsed faq-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How does CallAll.AI work?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body faq-body">
                    CallAll.AI uses advanced AI technology to streamline and enhance your lead outreach. It automates the process of making calls, sending texts, and dispatching emails, ensuring consistent and personalized communication with leads. The AI continuously engages with leads through empathetic objection handling and strategic marketing efforts, driving higher engagement and conversions.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header faq-header">
                <button className="accordion-button collapsed faq-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    What is CallAll.AI?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body faq-body">
                    CallAll.AI is a proprietary sales AI that calls, emails, and texts
                    potential prospects. CallAll.AI can be customized to the user&apos;s
                    product, goals, and client-base. Use CallAll.AI to get through
                    100,000+ prospects in a single day. 
                </div>
                </div>
            </div>
            </div>
    )
}

export default Faqs;