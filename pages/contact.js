import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'
import Banner from '../components/banner'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - City on the Cloud</title>
          <meta property="og:title" content="Contact - City on the Cloud" />
        </Head>
        <div className="contact-top-container">
          <nav data-role="Header" className="contact-navbar">
            <Link href="/">
              <a className="contact-link">
                <div className="contact-container1">
                  <img
                    alt="image"
                    src="/playground_assets/cityonthecloud-logo-200h.png"
                    className="contact-image"
                  />
                </div>
              </a>
            </Link>
            <div className="contact-right-side">
              <div className="contact-links-container">
                <Link href="/solutions">
                  <a className="contact-link1">Solutions</a>
                </Link>
                <Link href="/about-us">
                  <a className="contact-link2">About Us</a>
                </Link>
              </div>
              <Link href="/contact">
                <a className="contact-link3">
                  <SolidButton
                    button="Contact"
                    className="contact-component"
                  ></SolidButton>
                </a>
              </Link>
            </div>
          </nav>
          <div className="contact-links-container1">
            <Link href="/solutions">
              <a className="contact-link4">Solutions</a>
            </Link>
            <Link href="/about-us">
              <a className="contact-link5">About Us</a>
            </Link>
          </div>
          <div className="contact-hero">
            <div className="contact-content-container">
              <h1 className="contact-text heading">Contact Us</h1>
              <span className="contact-text01">
                Let&apos;s discuss your next blockchain or metaverse project.
              </span>
            </div>
          </div>
        </div>
        <div id="main-section" className="contact-main">
          <div className="contact-blog">
            <div className="contact-features">
              <div className="contact-container2">
                <div className="contact-feature-card">
                  <svg viewBox="0 0 1024 1024" className="contact-icon">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="contact-container3">
                    <h3 className="contact-text02">Contact Information</h3>
                    <span>
                      <span>Bobbie Reynolds</span>
                      <br></br>
                      <span>Phone: (719) 839-0767</span>
                      <br></br>
                      <span>Email: mcgee_bobbie@outlook.com</span>
                      <br></br>
                      <span>Location: Denver, CO</span>
                      <br></br>
                      <br></br>
                    </span>
                  </div>
                </div>
                <div className="contact-feature-card1">
                  <svg viewBox="0 0 1024 1024" className="contact-icon2">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="contact-container4">
                    <div className="contact-container5">
                      <h3 className="contact-text13">Book an Appoinment</h3>
                      <span className="contact-text14">
                        Schedule a virtual introduction meeting to discuss your
                        project or idea.
                      </span>
                    </div>
                    <a href="#main-section" className="contact-link6">
                      <SolidButton button="Book on Calendly"></SolidButton>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Banner rootClassName="banner-root-class-name2"></Banner>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-top-container {
            width: 100%;
            height: 50vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: linear-gradient(
                90deg,
                rgb(255, 255, 255) 14%,
                rgba(255, 255, 255, 0.51) 100%
              ),
              url('https://images.unsplash.com/photo-1586767457531-b3eb5538f686?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDkyfHxjaXR5JTIwY2xvdWRzfGVufDB8fHx8MTY2MTM2NjEzNg&ixlib=rb-1.2.1&w=1500');
            background-repeat: top;
            background-position: bottom;
          }
          .contact-navbar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1280px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-link {
            display: contents;
          }
          .contact-container1 {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
          }
          .contact-image {
            width: 225px;
            object-fit: cover;
            margin-right: 0px;
          }
          .contact-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-link1 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .contact-link2 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .contact-link3 {
            display: contents;
          }
          .contact-component {
            text-decoration: none;
          }
          .contact-links-container1 {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-link4 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .contact-link5 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .contact-hero {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .contact-content-container {
            width: 60%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .contact-text01 {
            font-size: 1.6rem;
          }
          .contact-main {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 100px;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: 100px;
            justify-content: flex-start;
          }
          .contact-blog {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .contact-features {
            width: 100%;
            display: flex;
            max-width: 1400px;
            flex-direction: column;
          }
          .contact-container2 {
            width: 100%;
            display: grid;
            grid-gap: 32px;
            grid-template-columns: 1fr 1fr;
          }
          .contact-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .contact-icon {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: 24px;
          }
          .contact-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-text02 {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-feature-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .contact-icon2 {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: 24px;
          }
          .contact-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-container5 {
            width: 360px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact-text13 {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-text14 {
            width: 100%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-link6 {
            display: contents;
          }
          @media (max-width: 991px) {
            .contact-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .contact-top-container {
              height: auto;
            }
            .contact-image {
              width: 180px;
            }
            .contact-hero {
              justify-content: center;
            }
            .contact-content-container {
              width: 100%;
              align-items: flex-start;
            }
            .contact-main {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .contact-blog {
              padding-left: 32px;
              padding-right: 32px;
            }
            .contact-features {
              padding-left: 32px;
              padding-right: 32px;
            }
            .contact-container2 {
              grid-template-columns: 1fr;
            }
            .contact-feature-card {
              flex-direction: row;
            }
            .contact-container3 {
              flex-direction: column;
            }
            .contact-feature-card1 {
              flex-direction: row;
            }
            .contact-container5 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .contact-top-container {
              background-image: linear-gradient(
                  90deg,
                  rgb(255, 255, 255) 32%,
                  rgba(255, 255, 255, 0.56) 99%
                ),
                url('https://images.unsplash.com/photo-1586767457531-b3eb5538f686?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDkyfHxjaXR5JTIwY2xvdWRzfGVufDB8fHx8MTY2MTM2NjEzNg&ixlib=rb-1.2.1&w=1500');
            }
            .contact-image {
              width: 160px;
            }
            .contact-link1 {
              display: none;
            }
            .contact-link2 {
              display: none;
            }
            .contact-links-container1 {
              width: 100%;
              display: flex;
              padding-top: var(--dl-space-space-halfunit);
              border-color: var(--dl-color-gray-700);
              border-width: 1px;
              padding-bottom: var(--dl-space-space-halfunit);
              justify-content: center;
              border-left-width: 0px;
              border-right-width: 0px;
            }
            .contact-hero {
              padding: var(--dl-space-space-doubleunit);
            }
            .contact-blog {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .contact-features {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .contact-container3 {
              flex-direction: column;
            }
            .contact-container5 {
              width: 323px;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
