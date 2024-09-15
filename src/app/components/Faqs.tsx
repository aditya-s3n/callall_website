import "../css/landing.css";

function Faqs() {
    return (
        <div className="accordion my-5" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header faq-header">
                <button className="accordion-button collapsed faq-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Is Call All Worth It?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body faq-body">
                    Example text
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header faq-header">
                <button className="accordion-button collapsed faq-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How does Call All work?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body faq-body">
                    example text
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header faq-header">
                <button className="accordion-button collapsed faq-title" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    What is Call All?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body faq-body">
                    Call All is a proprietary sales AI that calls, emails, and texts
                    potential prospects. Call All can be customized to the user’s
                    product, goals, and client-base. Use Call All to get through
                    100,000+ prospects in a single day. 
                </div>
                </div>
            </div>
            </div>
    )
}

export default Faqs;