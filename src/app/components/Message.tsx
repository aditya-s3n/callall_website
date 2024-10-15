import "../css/message.css"
import "../css/landing.css"

function Message() {
    return (
        <div className="row m-0 mx-5 pb-5 row-cols-1 row-cols-md-2">

            <div className="col">

                <div className="mt-5">
                    <p className="fs-2 fw-bold">Talk to our team.</p>

                    <p className="mt-5 info-text">
                        <span className="info-header"><i className="bi bi-telephone me-2"></i> Get a demo. </span>
                        To see the value of CallAll.AI.<br />
                        The next addition to your sales team.
                    </p>

                    <p className="mt-4 info-text">
                        <span className="info-header"><i className="bi bi-shop me-2"></i> Find out about our pricing. </span>
                        Create a custom plan. <br />
                        We&apos;re here to support your needs and business.
                    </p>
                </div>

            </div>


            <div className="col mt-3 mt-md-3">

                <div className="form-container">
                    <div>
                        <p className="message-header">Company Email</p>

                        <div className="input-group flex-nowrap">
                            <input type="text" className="form-control email" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
                        </div>
                    </div>

                    <div>
                        <p className="message-header mt-4">Message</p>

                        <div className="input-group">
                            <textarea className="form-control email message" placeholder="Type your message.." aria-label="With textarea"></textarea>
                        </div>
                    </div>

                    <div className="row m-0 mt-4 row-cols-1 row-cols-md-2 ">
                        <div className="col col-md-7 ">
                            <p className="policy">By submitting the form, I confirm<br /> to agree to the terms and privacy policy.</p>
                        </div>

                        <div className="col col-md-5 p-0 mt-2 mt-md-0">
                            <button className="btn header-btn nav-link w-100">Submit</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Message;