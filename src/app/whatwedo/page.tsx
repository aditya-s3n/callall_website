import Footer from "../components/Footer";
import Header from "../components/Header";
import Message from "../components/Message";
import Overlay from "../components/Overlay";

import Image from "next/image";

import logo from "../imgs/logo.png"
import Card from "../components/Card";

function WhatWeDo() {
    return (
        <div>
            <Header />

            <div className="border-bottom pb-5 row m-0">
                <div className="col">
                    <Overlay 
                        className={"ms-5"}
                        title={"Turn leads into clients."}
                        text={"Call All is able to separate and identify bad, good, and great prospects"}
                    />
                </div>

                <div className="col">
                    <Image 
                        className=''
                        src={logo}
                        width={300}
                        height={300}
                        alt="Logo"
                    />
                </div>
            </div>


            <div className="p-5">
                <div className="row m-0">
                    <div className="col">
                        <Card 
                            title={"Make old leads new again"}
                            text={"Don't let potential clients slip away! With our AI-powered outreach, reconnect with old leads and reignite their interest. Through personalized messages and follow-ups, our system turns cold leads into warm prospects, giving you a second chance to close the deal."}
                            icon={"bi-journals"}
                        />
                    </div>

                    <div className="col">
                        <Card 
                            title={"Home search starts online"}
                            text={"With 97% of homebuyers starting their search online, it's crucial to meet them where they are. Our AI helps you engage these digital-savvy buyers by delivering targeted emails, texts, and calls, ensuring you stay top of mind during their search."}
                            icon={"bi-house-door-fill"}
                        />
                    </div>

                    <div className="col">
                        <Card 
                            title={"Call All is persistent"}
                            text={"When potential buyers register on websites, agents often make a few calls before giving up. Our AI ensures consistent follow-up by reaching out multiple times through calls, texts, and emails, increasing your chances of turning a lead into a client."}
                            icon={"bi-telephone-forward-fill"}
                        />
                    </div>
                </div>

                <div className="row m-0">
                    <div className="col">
                        <Card 
                            title={"Maximize outreach at minimal cost"}
                            text={"With our AI, you can reach out to hundreds of potential clients for just pennies per lead. Our automated system ensures efficient, cost-effective follow-up, allowing you to engage more leads without breaking the bank."}
                            icon={"bi-credit-card-fill"}
                        />
                    </div>

                    <div className="col">
                        <Card 
                            title={"Don't let leads wither away"}
                            text={"Leads left unattended often go cold. Our AI ensures that no opportunity is missed by continuously engaging leads through personalized outreach, keeping them active and interested until they're ready to take the next step."}
                            icon={"bi-archive-fill"}
                        />
                    </div>

                    <div className="col">
                        <Card 
                            title={"Capitalize on every opted-in lead"}
                            text={"You've invested in generating leads, and they've opted in. 1 in 10 will buy each year. Our AI ensures you stay connected with all leads through regular, personalized outreach, maximizing your chances of closing more deals annually."}
                            icon={"bi-person-lines-fill"}
                        />
                    </div>
                </div>
            </div>

            <Message />

            <Footer />
        </div>
    )
}

export default WhatWeDo;