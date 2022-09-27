import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'
import BlogPostCard2 from '../components/blog-post-card2'
import FeatureCard2 from '../components/feature-card2'
import Banner from '../components/banner'
import Footer from '../components/footer'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>About-Us - City on the Cloud</title>
          <meta property="og:title" content="About-Us - City on the Cloud" />
        </Head>
        <div className="about-us-top-container">
          <nav data-role="Header" className="about-us-navbar">
            <Link href="/">
              <a className="about-us-link">
                <div className="about-us-container1">
                  <img
                    alt="image"
                    src="/playground_assets/cityonthecloud-logo-200h.png"
                    className="about-us-image"
                  />
                </div>
              </a>
            </Link>
            <div className="about-us-right-side">
              <div className="about-us-links-container">
                <Link href="/solutions">
                  <a className="about-us-link1">Solutions</a>
                </Link>
                <Link href="/about-us">
                  <a className="about-us-link2">About Us</a>
                </Link>
              </div>
              <Link href="/contact">
                <a className="about-us-link3">
                  <SolidButton
                    button="Contact"
                    className="about-us-component"
                  ></SolidButton>
                </a>
              </Link>
            </div>
          </nav>
          <div className="about-us-links-container1">
            <Link href="/solutions">
              <a className="about-us-link4">Solutions</a>
            </Link>
            <Link href="/about-us">
              <a className="about-us-link5">About Us</a>
            </Link>
          </div>
          <div className="about-us-hero">
            <div className="about-us-content-container">
              <h1 className="about-us-text heading">About Us</h1>
              <span className="about-us-text1">
                We&apos;re on a mission to bridge the gap between virtual and
                physical assets.
              </span>
            </div>
          </div>
        </div>
        <div id="main-section" className="about-us-main">
          <div className="about-us-blog">
            <div className="about-us-container2">
              <BlogPostCard2
                label="Founder"
                title="Bobbie Reynolds"
                image_src="/playground_assets/1603073700916-1500w.jpg"
                description="Veteran, Licensed Real Estate Broker and 1031 Exchange Specialist. I’ve dabbled in Real Estate investing for over 20 years in Colorado and recently, Bozeman Montana. I work within both the Commercial/Residential arena. I’m a United States Air Force, Colorado Air National Guard Veteran, award winning photojournalist with a demonstrated successful history of working in the public relations industry and joint military operations. Skilled in Problem Solving, Leadership, Team Building, Organization Skills, Problem Solving and Military Operations."
                profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName3"
              ></BlogPostCard2>
            </div>
            <div className="about-us-container3"></div>
            <div className="about-us-features">
              <h2 className="about-us-text2 subheading">Our Company</h2>
              <div className="about-us-container4">
                <FeatureCard2
                  title="Mission"
                  description="Become the leading company to provide a platform for investing in virtual space, education, opportunity and creation for people, who are interested in smart contract packages, advertising, purchasing, leasing, selling, designing and conducting transactions within the Blockchain economy, as well as offer all services to purchase and invest in traditional brick-and-mortar real estate, while making people feel secure about the process and the future of their short and long-term investments."
                  rootClassName="rootClassName"
                ></FeatureCard2>
                <FeatureCard2
                  title="Vision"
                  description="Every single person is going to touch real estate at some point in time and everyone needs to be financially literate with new technology and investment opportunities. The hope is by using this milestone as an opportunity to teach people about virtual real estate transacting, whether leasing or purchasing, designing, commercial or residential, to teach people how and why they should invest in real estate in a new way. We want to help them get a head of the curve, before it they need to."
                  rootClassName="rootClassName2"
                ></FeatureCard2>
              </div>
            </div>
          </div>
        </div>
        <Banner rootClassName="banner-root-class-name"></Banner>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .about-us-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about-us-top-container {
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
          .about-us-navbar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1280px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-link {
            display: contents;
          }
          .about-us-container1 {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
          }
          .about-us-image {
            width: 225px;
            object-fit: cover;
            margin-right: 0px;
          }
          .about-us-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-link1 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .about-us-link2 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .about-us-link3 {
            display: contents;
          }
          .about-us-component {
            text-decoration: none;
          }
          .about-us-links-container1 {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-link4 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .about-us-link5 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .about-us-hero {
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
          .about-us-content-container {
            width: 60%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-text {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .about-us-text1 {
            font-size: 1.6rem;
          }
          .about-us-main {
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
          .about-us-blog {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-container2 {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-container3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-us-features {
            width: 100%;
            display: flex;
            max-width: 1400px;
            flex-direction: column;
          }
          .about-us-text2 {
            color: var(--dl-color-primary-100);
            line-height: 1.55;
            margin-bottom: 48px;
            letter-spacing: px;
          }
          .about-us-container4 {
            width: 100%;
            display: grid;
            grid-gap: 32px;
            grid-template-columns: 1fr 1fr;
          }
          @media (max-width: 991px) {
            .about-us-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .about-us-top-container {
              height: auto;
            }
            .about-us-image {
              width: 180px;
            }
            .about-us-hero {
              justify-content: center;
            }
            .about-us-content-container {
              width: 100%;
              align-items: flex-start;
            }
            .about-us-main {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-us-blog {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-us-features {
              padding-left: 32px;
              padding-right: 32px;
            }
            .about-us-container4 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .about-us-top-container {
              background-image: linear-gradient(
                  90deg,
                  rgb(255, 255, 255) 32%,
                  rgba(255, 255, 255, 0.56) 99%
                ),
                url('https://images.unsplash.com/photo-1586767457531-b3eb5538f686?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDkyfHxjaXR5JTIwY2xvdWRzfGVufDB8fHx8MTY2MTM2NjEzNg&ixlib=rb-1.2.1&w=1500');
            }
            .about-us-image {
              width: 160px;
            }
            .about-us-link1 {
              display: none;
            }
            .about-us-link2 {
              display: none;
            }
            .about-us-links-container1 {
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
            .about-us-hero {
              padding: var(--dl-space-space-doubleunit);
            }
            .about-us-blog {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .about-us-features {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
