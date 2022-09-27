import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard4 = (props) => {
  return (
    <>
      <div className={`feature-card4-feature-card ${props.rootClassName} `}>
        <h2 className="feature-card4-text">{props.title}</h2>
        <span className="feature-card4-text1">{props.description}</span>
      </div>
      <style jsx>
        {`
          .feature-card4-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            max-width: 1400px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card4-text {
            font-size: 1.5rem;
            font-family: Poppins;
            font-weight: 700;
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .feature-card4-text1 {
            color: var(--dl-color-gray-black);
          }
          .feature-card4-root-class-name {
            width: 100%;
          }
        `}
      </style>
    </>
  )
}

FeatureCard4.defaultProps = {
  rootClassName: '',
  title: 'Lorem ipsum',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
}

FeatureCard4.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard4
