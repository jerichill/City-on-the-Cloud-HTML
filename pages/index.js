import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'
import FeatureCard4 from '../components/feature-card4'
import Banner from '../components/banner'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>City on the Cloud</title>
          <meta property="og:title" content="City on the Cloud" />
        </Head>
        <div className="home-top-container">
          <nav data-role="Header" className="home-navbar">
            <Link href="/">
              <a className="home-link">
                <div className="home-container1">
                  <img
                    id="logo"
                    alt="City On The Cloud Logo"
                    src="/playground_assets/cityonthecloud-logo-200h.png"
                    className="home-image"
                  />
                </div>
              </a>
            </Link>
            <div className="home-right-side">
              <div className="home-links-container">
                <Link href="/solutions">
                  <a className="home-link1">Solutions</a>
                </Link>
                <Link href="/about-us">
                  <a className="home-link2">About Us</a>
                </Link>
              </div>
              <Link href="/contact">
                <a className="home-link3">
                  <SolidButton
                    button="Contact"
                    className="home-component"
                  ></SolidButton>
                </a>
              </Link>
            </div>
          </nav>
          <div className="home-links-container1">
            <Link href="/solutions">
              <a className="home-link4">Solutions</a>
            </Link>
            <Link href="/about-us">
              <a className="home-link5">About Us</a>
            </Link>
          </div>
          <div className="home-hero">
            <div className="home-content-container">
              <h1 className="home-text">
                Blockchain &amp; Metaverse Services for the Real Estate Industry
              </h1>
              <span className="home-text1">
                We help real estate professionals bridge the gap between the
                metaverse and physical world.
              </span>
              <Link href="/solutions">
                <a className="home-link6">
                  <SolidButton
                    button="Solutions"
                    rootClassName="solid-button-root-class-name"
                    className="home-component1"
                  ></SolidButton>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div id="main-section" className="home-main">
          <div className="home-features">
            <div className="home-container2">
              <div className="home-container3">
                <FeatureCard4
                  title="Education"
                  description="Join one of our local events to learn more about blockchain and metaverse for real estate."
                  rootClassName="rootClassName1"
                ></FeatureCard4>
                <FeatureCard4
                  title="Consulting"
                  description="Let us help you build a blockchain or metaverse integration plan for your real estate brokerage."
                  rootClassName="rootClassName4"
                ></FeatureCard4>
                <FeatureCard4
                  title="Management"
                  description="We can help you manage and maintain your blockchain and metaverse platforms and assets."
                  rootClassName="rootClassName3"
                ></FeatureCard4>
                <FeatureCard4
                  title="Smart Contracts"
                  description="Expert technical services to help you design, develop, and deploy  your custom smart contracts."
                  rootClassName="rootClassName2"
                ></FeatureCard4>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1627645835237-0743e52b991f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGN5YmVyJTIwcHVua3xlbnwwfHx8fDE2NjEzNjgwMDY&amp;ixlib=rb-1.2.1&amp;w=400"
                className="home-image1"
              />
            </div>
          </div>
        </div>
        <Banner></Banner>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-top-container {
            width: 100%;
            height: 70vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: linear-gradient(
                90deg,
                rgb(255, 255, 255) 0%,
                rgba(255, 255, 255, 0.3) 100%
              ),
              url('https://images.unsplash.com/photo-1462121594302-c1ed6b9ab32d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNpdHklMjBjbG91ZHN8ZW58MHx8fHwxNjYxMzY1OTY1&ixlib=rb-1.2.1&w=1500');
            background-position: top left, center;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1280px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link {
            display: contents;
          }
          .home-container1 {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
          }
          .home-image {
            width: 225px;
            object-fit: cover;
            margin-right: 0px;
          }
          .home-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link1 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link2 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link3 {
            display: contents;
          }
          .home-component {
            text-decoration: none;
          }
          .home-links-container1 {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link4 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-link5 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .home-hero {
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
          .home-content-container {
            width: 75%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            color: var(--dl-color-gray-black);
            font-size: 2.75rem;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .home-text1 {
            font-size: 1.6rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-link6 {
            display: contents;
          }
          .home-component1 {
            text-decoration: none;
          }
          .home-main {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-top: 100px;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: 100px;
            justify-content: flex-start;
          }
          .home-features {
            width: 100%;
            display: flex;
            max-width: 1280px;
            flex-direction: column;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1280;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container3 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .home-image1 {
            width: 400px;
            height: 400px;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: 64px;
            border-radius: var(--dl-radius-radius-radius8);
            object-position: left;
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-features {
              align-items: center;
            }
            .home-container2 {
              flex-direction: column;
            }
            .home-image1 {
              width: 300px;
              height: 300px;
              margin-top: 32px;
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-top-container {
              height: auto;
            }
            .home-image {
              width: 200px;
            }
            .home-hero {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              justify-content: center;
            }
            .home-content-container {
              width: 100%;
              align-items: center;
            }
            .home-main {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-features {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-container2 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .home-top-container {
              background-image: linear-gradient(
                  90deg,
                  rgb(255, 255, 255) 0%,
                  rgba(255, 255, 255, 0.71) 100%
                ),
                url('https://images.unsplash.com/photo-1462121594302-c1ed6b9ab32d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNpdHklMjBjbG91ZHN8ZW58MHx8fHwxNjYxMzY1OTY1&ixlib=rb-1.2.1&w=1500');
            }
            .home-image {
              width: 160px;
            }
            .home-link1 {
              display: none;
            }
            .home-link2 {
              display: none;
            }
            .home-links-container1 {
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
            .home-hero {
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .home-content-container {
              width: 100%;
            }
            .home-text {
              font-size: 2.25rem;
            }
            .home-features {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-container3 {
              grid-template-columns: 1fr;
            }
            .home-image1 {
              width: 250px;
              height: 250px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
