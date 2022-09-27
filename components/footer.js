import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-menu">
          <div className="footer-container">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="footer-image"
            />
          </div>
          <div className="footer-links-container">
            <div className="footer-container1">
              <Link href="/solutions">
                <a className="footer-link">{props.text1}</a>
              </Link>
              <Link href="/about-us">
                <a className="footer-link01">{props.text2}</a>
              </Link>
              <Link href="/contact">
                <a className="footer-link03">{props.Link}</a>
              </Link>
            </div>
            <div className="footer-container2">
              <a
                href={props.link_text2}
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link04"
              >
                {props.text3}
              </a>
              <a
                href={props.link_text3}
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link05"
              >
                {props.text4}
              </a>
              <a
                href={props.link_text4}
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link06"
              >
                {props.text5}
              </a>
            </div>
          </div>
          <div className="footer-follow-container">
            <span className="footer-text">{props.text}</span>
            <div className="footer-icons-container">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link07"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-icon"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link08"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="footer-icon2"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link09"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="footer-icon4"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: 1280px;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: center;
          }
          .footer-menu {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .footer-image {
            width: 225px;
            object-fit: cover;
            margin-right: 0px;
          }
          .footer-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container1 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .footer-link {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link01 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link03 {
            color: var(--dl-color-gray-black);
            text-decoration: none;
          }
          .footer-container2 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .footer-link04 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link05 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link06 {
            color: var(--dl-color-gray-black);
            text-decoration: none;
          }
          .footer-follow-container {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .footer-text {
            color: var(--dl-color-gray-black);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .footer-icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link07 {
            display: contents;
          }
          .footer-icon {
            fill: var(--dl-color-gray-black);
            width: 24px;
            height: 24px;
          }
          .footer-link08 {
            display: contents;
          }
          .footer-icon2 {
            fill: var(--dl-color-gray-black);
            width: 24px;
            height: 24px;
          }
          .footer-link09 {
            display: contents;
          }
          .footer-icon4 {
            fill: var(--dl-color-gray-black);
            width: 24px;
            height: 24px;
          }

          @media (max-width: 767px) {
            .footer-menu {
              flex-direction: column;
            }
            .footer-links-container {
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: space-between;
            }
            .footer-container1 {
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .footer-links-container {
              margin-top: var(--dl-space-space-doubleunit);
              align-items: flex-start;
              justify-content: flex-start;
            }
            .footer-link {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .footer-link01 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .footer-link03 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .footer-container2 {
              height: 100%;
              align-items: flex-start;
              margin-left: 50px;
            }
            .footer-link04 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .footer-link05 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .footer-link06 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .footer-follow-container {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  link_text3: 'https://example.com',
  link_text2: 'https://example.com',
  text2: 'About Us',
  image_alt: 'image',
  text3: 'Privacy Policy',
  text5: 'Terms of Service',
  link_Link: 'https://example.com',
  link_text: 'https://example.com',
  link_text4: 'https://example.com',
  Link: 'Contact',
  text1: 'Solutions',
  link_text1: 'https://example.com',
  image_src: '/playground_assets/cityonthecloud-logo-200h.png',
  text: 'Follow us on ',
  rootClassName: '',
  text4: 'Disclaimer',
}

Footer.propTypes = {
  link_text3: PropTypes.string,
  link_text2: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  link_Link: PropTypes.string,
  link_text: PropTypes.string,
  link_text4: PropTypes.string,
  Link: PropTypes.string,
  text1: PropTypes.string,
  link_text1: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
}

export default Footer
