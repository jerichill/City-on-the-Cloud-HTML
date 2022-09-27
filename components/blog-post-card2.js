import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard2 = (props) => {
  return (
    <>
      <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="blog-post-card2-image"
        />
        <div className="blog-post-card2-container">
          <h2 className="blog-post-card2-text subheading">{props.title}</h2>
          <span className="blog-post-card2-text1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card2-blog-post-card {
            width: 100%;
            display: flex;
            max-width: 1400px;
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card2-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card2-image {
            width: 400px;
            height: 100%;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: 0px;
          }
          .blog-post-card2-container {
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: 32px;
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .blog-post-card2-text {
            color: var(--dl-color-primary-100);
            margin-bottom: 32px;
          }
          .blog-post-card2-text1 {
            color: var(--dl-color-gray-500);
            font-size: 1rem;
            margin-bottom: 32px;
          }

          @media (max-width: 991px) {
            .blog-post-card2-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card2-blog-post-card {
              flex-direction: column;
            }
            .blog-post-card2-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard2.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1500',
  image_alt: 'image',
  title: 'Lorem ipsum dolor sit amet',
}

BlogPostCard2.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
}

export default BlogPostCard2
