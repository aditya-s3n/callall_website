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
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis ornare dolor, sed tincidunt urna feugiat pulvinar. Nulla facilisi. Donec ornare congue dapibus. In ac accumsan sapien, sed augue. Aenean vitae sempernt faucibus urna in libero "}
                            icon={"bi-journals"}
                        />
                    </div>

                    <div className="col">
                        <Card 
                            title={"Make old leads new again"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis ornare dolor, sed tincidunt urna feugiat pulvinar. Nulla facilisi. Donec ornare congue dapibus. In ac accumsan sapien, sed augue. Aenean vitae sempernt faucibus urna in libero "}
                            icon={"bi-journals"}
                        />
                    </div>

                    <div className="col">
                        <Card 
                            title={"Make old leads new again"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis ornare dolor, sed tincidunt urna feugiat pulvinar. Nulla facilisi. Donec ornare congue dapibus. In ac accumsan sapien, sed augue. Aenean vitae sempernt faucibus urna in libero "}
                            icon={"bi-journals"}
                        />
                    </div>
                </div>

                <div className="row m-0">
                    <div className="col">
                        <Card 
                            title={"Make old leads new again"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis ornare dolor, sed tincidunt urna feugiat pulvinar. Nulla facilisi. Donec ornare congue dapibus. In ac accumsan sapien, sed augue. Aenean vitae sempernt faucibus urna in libero "}
                            icon={"bi-journals"}
                        />
                    </div>

                    <div className="col">
                        <Card 
                            title={"Make old leads new again"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis ornare dolor, sed tincidunt urna feugiat pulvinar. Nulla facilisi. Donec ornare congue dapibus. In ac accumsan sapien, sed augue. Aenean vitae sempernt faucibus urna in libero "}
                            icon={"bi-journals"}
                        />
                    </div>

                    <div className="col">
                        <Card 
                            title={"Make old leads new again"}
                            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis ornare dolor, sed tincidunt urna feugiat pulvinar. Nulla facilisi. Donec ornare congue dapibus. In ac accumsan sapien, sed augue. Aenean vitae sempernt faucibus urna in libero "}
                            icon={"bi-journals"}
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