import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - GamesPlusRetro</title>
        <meta
          name="description"
          content="GamesPlus has gone retro this year so hop in and play! READY PLAYER 1!"
        />
        <meta property="og:title" content="Blog - GamesPlusRetro" />
        <meta
          property="og:description"
          content="GamesPlus is doing a blast from the past starting 2023!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/322a8992-814f-4e72-aea2-3fcffc1eefec/b3613c49-f16f-4ab4-9fcf-10f964b4b0d0?org_if_sml=1"
        />
      </Helmet>
      <div className="blog-blog-post-card">
        <img
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="blog-image"
        />
        <div className="blog-container1">
          <div className="blog-container2"></div>
          <h1 className="blog-text">...</h1>
          <span className="blog-text1">...</span>
          <div className="blog-container3">
            <div className="blog-profile">
              <img
                alt="profile"
                src="/playground_assets/study%20%232-200h.png"
                className="blog-image1"
              />
              <span className="blog-text2">GamesPlus</span>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="blog-navlink">
        <h1 className="blog-text3">Back Home</h1>
      </Link>
      <Link to="/old-blogs" className="blog-navlink1">
        <h1 className="blog-text4">Old Blogs</h1>
      </Link>
    </div>
  )
}

export default Blog
