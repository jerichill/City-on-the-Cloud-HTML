import React from 'react'

import PropTypes from 'prop-types'

const Banner = (props) => {
  return (
    <>
      <div className={`banner-banner ${props.rootClassName} `}>
        <h2 className="banner-text subheading">{props.heading}</h2>
        <span className="banner-text1">{props.text}</span>
        <div className="banner-container">
          <a
            href="http://eepurl.com/h_4Jj9"
            target="_blank"
            rel="noreferrer noopener"
            className="banner-link button"
          >
            {props.button}
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .banner-banner {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 100px;
            padding-left: 48px;
            padding-right: 48px;
            flex-direction: column;
            padding-bottom: 100px;
            background-size: cover;
            justify-content: space-between;
            background-image: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.27) 1%,
                rgba(255, 255, 255, 0.44) 49%,
                rgba(255, 255, 255, 0.29) 100%
              ),
              url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fHx8MTYyNjE4NDA0Mg&ixlib=rb-1.2.1&w=1500');
            background-position: center;
          }
          .banner-text {
            text-align: center;
          }
          .banner-text1 {
            max-width: 1400px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .banner-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .banner-link {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }

          @media (max-width: 991px) {
            .banner-text1 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .banner-banner {
              padding-left: 32px;
              padding-right: 32px;
            }
            .banner-text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .banner-banner {
              padding-top: 48px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 48px;
            }
            .banner-container {
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Banner.defaultProps = {
  text: 'Join our newsletter to receive updates and news about City on a Cloud.\n',
  rootClassName: '',
  heading: 'Metaverse Newsletter',
  button: 'Subscribe Now',
}

Banner.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.string,
}

export default Banner
