"use client";

import Image from 'next/image';
import "./css/landing.css"
import Header from './components/Header';

import logo from "./imgs/logo.png"

import React, { useState } from 'react';
import Footer from './components/Footer';
import Chat from './components/Chat';
import Faqs from './components/Faqs';

export default function Home() {

  const [playMedia, setPlayMedia] = useState(false);

  function play() {
    setPlayMedia(!playMedia)
  }

  return (
    <div className="">
      <Header />
      
      <div className='mb-5'>
          <div className="row m-0">
              <div className="col mt-5 pt-3 d-flex justify-content-center align-items-center">
                  <Image 
                      className=''
                      src={logo}
                      width={350}
                      height={350}
                      alt="Logo"
                  />
              </div>

              <div className="col py-5 px-5 mt-5">
                  <p className="title-txt fw-semibold">AI Driven.</p>
                  <p className="title-txt fw-semibold">Outbound. Inbound.</p>

                  <p className="sub-title-txt mt-2 mb-5">Because AIs Don&apos;t Make Excuses</p>

                  <a href='https://cal.com/courtneycarroll/test-callall.ai-phone-appoint'><button className="btn header-btn large-btn">Book a Meeting</button></a>
              </div>
          </div>
      </div>
   

      <div className='border-top outline-header section-width m-auto'>
        <div>
          <p className='section-header'>So human, you can&apos;t tell...</p>
        </div>

        <div>
          <div className="circle-container my-5">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
          </div>
        </div>

        <div className='row m-0 mb-4'>
          <div className='col d-flex justify-content-end align-items-center'>
            <button onClick={play}>
              {playMedia ?
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pause-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
                </svg>
          
              :

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                </svg> 
              }
            </button>
          </div>

          <div className='col'>
            <p>Call All talking to a client</p>
            <span className='header-link'>00:00 / 02:47</span>
          </div>
        </div>
      </div>

      <div className='border-top outline-header section-width m-auto'>
        <div>
          <p className='section-header mb-4'>Why Call All?</p>
        </div>

        <div className='row m-0 mb-3'>
          <div className='col my-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-house-heart-fill m-auto" viewBox="0 0 16 16">
                <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z"/>
                <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018"/>
              </svg>
              <p className='fs-5 mt-3 text-center'>
                Free up countless valuable hours. <br></br>
                Focus on what you do best and love
              </p>
          </div>

          <div className='col my-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-cash-coin m-auto secondary-color" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
              </svg>
              <p className='fs-5 mt-3 text-center secondary-color'>
                <a href='/pricing' className=''><u>Costs 1 Deal a Year</u> <i className="bi bi-box-arrow-up-right secondary-color ms-2"></i></a>
              </p>
              
          </div>

          <div className='col my-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-boxes m-auto" viewBox="0 0 16 16">
                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
              </svg>
              <p className='fs-5 mt-3 text-center'>
                Do you have 1000s of leads that you&apos;ve paid for, just sitting there
              </p>
          </div>
        </div>
      </div>

      <div className='border-top outline-header section-width m-auto'>
        <div>
          <p className='section-header'>Speak to the Call All Chat</p>
        </div>

        <div className='row m-0'>
          <div className='col ps-5'>
              <p className='fs-4 my-5 pt-5'>Call All will automate 15,000+ prospects</p>

              <p className='fs-4'>via</p>

              <ul style={{ listStyleType: 'disc', marginLeft: 40 }}>
                <li className='fs-4'>Phone</li>
                <li className='fs-4'>Email</li>
                <li  className='fs-4'>Text</li>
              </ul>
          </div>

          <div className='col-8'>
              <Chat />
          </div>
        </div>
      </div>

      <div className='border-top outline-header section-width m-auto'>
        <div>
          <p className='section-header'>Need more Reasons?</p>
        </div>

        <div className='row m-0 mb-3'>
          <div className='col my-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-houses-fill m-auto" viewBox="0 0 16 16">
                  <path d="M7.207 1a1 1 0 0 0-1.414 0L.146 6.646a.5.5 0 0 0 .708.708L1 7.207V12.5A1.5 1.5 0 0 0 2.5 14h.55a2.5 2.5 0 0 1-.05-.5V9.415a1.5 1.5 0 0 1-.56-2.475l5.353-5.354z"/>
                  <path d="M8.793 2a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708z"/>
                </svg>
              <p className='fs-5 mt-3 text-center'>
                1 in 10 people move every year, $100,000s of potential
              </p>
          </div>

          <div className='col my-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-cash-stack m-auto secondary-color" viewBox="0 0 16 16">
                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z"/>
              </svg>
              <p className='fs-5 mt-3 text-center secondary-color'>
                <a href='/pricing' className=''>12x-15x ROI <i className="bi bi-box-arrow-up-right secondary-color ms-2"></i></a> <br></br>
                <a href='/pricing' className=''><u>More time. More money. Less work.</u></a>
              </p>
              
          </div>

          <div className='col my-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-archive-fill m-auto" viewBox="0 0 16 16">
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z"/>
              </svg>
              <p className='fs-5 mt-3 text-center'>
                Re-dial old numbers and prospects. <br></br>
                Convert old leads to clients.
              </p>
          </div>
        </div>
      </div>

      <div className='border-top outline-header section-width m-auto'>
        <div>
          <p className='section-header'>FAQs</p>
        </div>

        <div className='row m-0'>
          <div className='col-5'>
              <p className='fw-bold fs-5 mt-5'>Need some Answers?</p>
              <p className='header-link nav-link'>We&apos;re here to help</p>

              <p className='header-link nav-link mt-4'>Contact us via phone or email.</p>
              <p className='header-link nav-link'>9AM - 5PM EST</p>

              <p className='mt-4'><u>Email:</u> support@callall.ai</p>
              <p className='mb-4'><u>Phone:</u> (111)-111-1111</p>
          </div>

          <div className='col'>
              <Faqs />
          </div>
        </div>
      </div>

      <div className='border-top outline-header section-width m-auto text-center'>
        <Image 
            className='m-auto mt-5'
            src={logo}
            width={200}
            height={200}
            alt="Logo"
        />

        <h1 className='fw-bold fs-3 mb-4'>Because AIs Don&apos;t Make Excuses</h1>

        <a href='https://cal.com/courtneycarroll/test-callall.ai-phone-appoint'><button className="btn header-btn large-btn w-50 py-2">Book a Meeting</button></a>

      </div>

      <Footer />
    </div>
  );
}
