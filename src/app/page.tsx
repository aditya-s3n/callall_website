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
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-cash-coin m-auto" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
              </svg>
              <p className='fs-5 mt-3 text-center'>
                <u>Costs 1 Deal a Year</u>
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
                <u>Costs 1 Deal a Year</u>
                <i className="bi bi-box-arrow-up-right secondary-color ms-2"></i>
              </p>
              
          </div>

          <div className='col my-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-cash-coin m-auto" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
              </svg>
              <p className='fs-5 mt-3 text-center'>
                <u>Costs 1 Deal a Year</u>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-cash-coin m-auto" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
              </svg>
              <p className='fs-5 mt-3 text-center'>
                <u>Costs 1 Deal a Year</u>
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
                <u>Costs 1 Deal a Year</u>
                <i className="bi bi-box-arrow-up-right secondary-color ms-2"></i>
              </p>
              
          </div>

          <div className='col my-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-cash-coin m-auto" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
              </svg>
              <p className='fs-5 mt-3 text-center'>
                <u>Costs 1 Deal a Year</u>
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
