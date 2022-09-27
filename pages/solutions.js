import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'
import Banner from '../components/banner'
import Footer from '../components/footer'

const Solutions = (props) => {
  return (
    <>
      <div className="solutions-container">
        <Head>
          <title>Solutions - City on the Cloud</title>
          <meta property="og:title" content="Solutions - City on the Cloud" />
        </Head>
        <div className="solutions-top-container">
          <nav data-role="Header" className="solutions-navbar">
            <Link href="/">
              <a className="solutions-link">
                <div className="solutions-container01">
                  <img
                    alt="image"
                    src="/playground_assets/cityonthecloud-logo-200h.png"
                    className="solutions-image"
                  />
                </div>
              </a>
            </Link>
            <div className="solutions-right-side">
              <div className="solutions-links-container">
                <Link href="/solutions">
                  <a className="solutions-link1">Solutions</a>
                </Link>
                <Link href="/about-us">
                  <a className="solutions-link2">About Us</a>
                </Link>
              </div>
              <Link href="/contact">
                <a className="solutions-link3">
                  <SolidButton
                    button="Contact"
                    className="solutions-component"
                  ></SolidButton>
                </a>
              </Link>
            </div>
          </nav>
          <div className="solutions-links-container1">
            <Link href="/solutions">
              <a className="solutions-link4">Solutions</a>
            </Link>
            <Link href="/about-us">
              <a className="solutions-link5">About Us</a>
            </Link>
          </div>
          <div className="solutions-hero">
            <div className="solutions-content-container">
              <h1 className="solutions-text subheading">Our Solutions</h1>
              <span className="solutions-text01">
                Expert blockchain and metaverse technology solutions delivered
                to the real estate industry.
              </span>
            </div>
          </div>
        </div>
        <div className="solutions-blog">
          <div className="solutions-container02">
            <div className="solutions-blog-post-card">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                className="solutions-image1"
              />
              <div className="solutions-container03">
                <h2 className="solutions-text02 subheading">Education</h2>
                <div className="solutions-container04">
                  <span className="solutions-text03">
                    Join us at one of our events to learn about the blockchain
                    and metaverse and how it is impacting the real estate
                    industry. Join our newsletter to receive event updates and
                    schedules.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="solutions-container05">
            <div className="solutions-blog-post-card1">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1573167582108-000d05b2faad?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1469&amp;q=80"
                className="solutions-image2"
              />
              <div className="solutions-container06">
                <h2 className="solutions-text04 subheading">Consulting</h2>
                <div className="solutions-container07">
                  <span className="solutions-text05">
                    No sure where to start? We&apos;ll help you plan and execute
                    a blockchain or metaverse strategy for your real estate
                    company. From NFT development to smart contract management,
                    we can help you modernize your business.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="solutions-container08">
            <div className="solutions-blog-post-card2">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                className="solutions-image3"
              />
              <div className="solutions-container09">
                <h2 className="solutions-text06 subheading">Management</h2>
                <div className="solutions-container10">
                  <span className="solutions-text07">
                    Do you own, or are you looking to buy metaverse digital
                    assets? We can help you buy, manage, promote, or sell your
                    assets. We work with the major metaverse platforms.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="solutions-container11">
            <div className="solutions-blog-post-card3">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1472&amp;q=80"
                className="solutions-image4"
              />
              <div className="solutions-container12">
                <h2 className="solutions-text08 subheading">Smart Contracts</h2>
                <div className="solutions-container13">
                  <span className="solutions-text09">
                    We can provide custom smart contract development to suit
                    your business needs. From NFTs to ledger technology, our
                    team of experts can help you execute your vision.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Banner rootClassName="banner-root-class-name1"></Banner>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .solutions-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .solutions-top-container {
            width: 100%;
            height: 50vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: linear-gradient(
                90deg,
                rgb(255, 255, 255) 18%,
                rgba(255, 255, 255, 0.37) 100%
              ),
              url('https://images.unsplash.com/photo-1521843021-0ee9f5c9f8a7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ0fHxjaXR5JTIwY2xvdWR8ZW58MHx8fHwxNjYxMzcwMDc3&ixlib=rb-1.2.1&w=1500');
            background-repeat: repeat, no-repeat;
            background-position: top, center;
          }
          .solutions-navbar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1280px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .solutions-link {
            display: contents;
          }
          .solutions-container01 {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
          }
          .solutions-image {
            width: 225px;
            object-fit: cover;
            margin-right: 0px;
          }
          .solutions-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .solutions-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .solutions-link1 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .solutions-link2 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .solutions-link3 {
            display: contents;
          }
          .solutions-component {
            text-decoration: none;
          }
          .solutions-links-container1 {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .solutions-link4 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .solutions-link5 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .solutions-hero {
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
          .solutions-content-container {
            width: 60%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .solutions-text {
            color: var(--dl-color-gray-black);
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: px;
          }
          .solutions-text01 {
            font-size: 1.6rem;
          }
          .solutions-blog {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-top: 100px;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: 100px;
            justify-content: space-between;
          }
          .solutions-container02 {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solutions-blog-post-card {
            width: 100%;
            display: flex;
            max-width: 1400px;
            flex-direction: row;
            justify-content: center;
          }
          .solutions-image1 {
            width: 500px;
            object-fit: cover;
          }
          .solutions-container03 {
            flex: 1;
            display: flex;
            padding: 32px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .solutions-text02 {
            color: var(--dl-color-primary-100);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .solutions-container04 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .solutions-text03 {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .solutions-container05 {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solutions-blog-post-card1 {
            width: 100%;
            display: flex;
            max-width: 1400px;
            flex-direction: row;
            justify-content: center;
          }
          .solutions-image2 {
            width: 500px;
            object-fit: cover;
          }
          .solutions-container06 {
            flex: 1;
            display: flex;
            padding: 32px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .solutions-text04 {
            color: var(--dl-color-primary-100);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .solutions-container07 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .solutions-text05 {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .solutions-container08 {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solutions-blog-post-card2 {
            width: 100%;
            display: flex;
            max-width: 1400px;
            flex-direction: row;
            justify-content: center;
          }
          .solutions-image3 {
            width: 500px;
            object-fit: cover;
          }
          .solutions-container09 {
            flex: 1;
            display: flex;
            padding: 32px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .solutions-text06 {
            color: var(--dl-color-primary-100);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .solutions-container10 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .solutions-text07 {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .solutions-container11 {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .solutions-blog-post-card3 {
            width: 100%;
            display: flex;
            max-width: 1400px;
            flex-direction: row;
            justify-content: center;
          }
          .solutions-image4 {
            width: 500px;
            object-fit: cover;
          }
          .solutions-container12 {
            flex: 1;
            display: flex;
            padding: 32px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .solutions-text08 {
            color: var(--dl-color-primary-100);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .solutions-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .solutions-text09 {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          @media (max-width: 991px) {
            .solutions-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .solutions-image1 {
              width: 50%;
            }
            .solutions-image2 {
              width: 50%;
            }
            .solutions-image3 {
              width: 50%;
            }
            .solutions-image4 {
              width: 50%;
            }
          }
          @media (max-width: 767px) {
            .solutions-top-container {
              height: auto;
            }
            .solutions-image {
              width: 180px;
            }
            .solutions-hero {
              justify-content: center;
            }
            .solutions-content-container {
              width: 100%;
              align-items: center;
            }
            .solutions-text {
              align-self: flex-start;
            }
            .solutions-blog {
              padding-left: 32px;
              padding-right: 32px;
            }
            .solutions-blog-post-card {
              flex-direction: column;
              justify-content: space-between;
            }
            .solutions-image1 {
              width: 100%;
            }
            .solutions-container03 {
              width: 100%;
            }
            .solutions-text02 {
              margin-bottom: 32px;
            }
            .solutions-container04 {
              margin-bottom: 32px;
            }
            .solutions-blog-post-card1 {
              flex-direction: column;
              justify-content: space-between;
            }
            .solutions-image2 {
              width: 100%;
            }
            .solutions-container06 {
              width: 100%;
            }
            .solutions-text04 {
              margin-bottom: 32px;
            }
            .solutions-container07 {
              margin-bottom: 32px;
            }
            .solutions-blog-post-card2 {
              flex-direction: column;
              justify-content: space-between;
            }
            .solutions-image3 {
              width: 100%;
            }
            .solutions-container09 {
              width: 100%;
            }
            .solutions-text06 {
              margin-bottom: 32px;
            }
            .solutions-container10 {
              margin-bottom: 32px;
            }
            .solutions-blog-post-card3 {
              flex-direction: column;
              justify-content: space-between;
            }
            .solutions-image4 {
              width: 100%;
            }
            .solutions-container12 {
              width: 100%;
            }
            .solutions-text08 {
              margin-bottom: 32px;
            }
            .solutions-container13 {
              margin-bottom: 32px;
            }
          }
          @media (max-width: 479px) {
            .solutions-image {
              width: 160px;
            }
            .solutions-link1 {
              display: none;
            }
            .solutions-link2 {
              display: none;
            }
            .solutions-links-container1 {
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
            .solutions-hero {
              padding: var(--dl-space-space-doubleunit);
            }
            .solutions-blog {
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

export default Solutions
