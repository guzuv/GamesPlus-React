import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './old-blogs.css'

const OldBlogs = (props) => {
  return (
    <div className="old-blogs-container">
      <Helmet>
        <title>Old-Blogs - GamesPlusRetro</title>
        <meta
          name="description"
          content="GamesPlus has gone retro this year so hop in and play! READY PLAYER 1!"
        />
        <meta property="og:title" content="Old-Blogs - GamesPlusRetro" />
        <meta
          property="og:description"
          content="GamesPlus is doing a blast from the past starting 2023!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/322a8992-814f-4e72-aea2-3fcffc1eefec/b3613c49-f16f-4ab4-9fcf-10f964b4b0d0?org_if_sml=1"
        />
      </Helmet>
      <div className="old-blogs-blog-post-card">
        <img
          alt="image"
          src="/playground_assets/happy-mew-year-cat-1400w.gif"
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="old-blogs-image"
        />
        <div className="old-blogs-container1">
          <div className="old-blogs-container2"></div>
          <h1 className="old-blogs-text">Happy New Year</h1>
          <span className="old-blogs-text1">
            Happy new year to you all. Over the time of this new year GamesPlus
            has had a major update where now we only have retro games. We hope
            you had a happy and safe new years with people you love!
          </span>
          <div className="old-blogs-container3">
            <div className="old-blogs-profile">
              <img
                alt="profile"
                src="/playground_assets/study%20%232-200h.png"
                className="old-blogs-image1"
              />
              <span className="old-blogs-text2">Games Plus</span>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="old-blogs-navlink">
        <h1 className="old-blogs-text3">Back Home</h1>
      </Link>
    </div>
  )
}

export default OldBlogs
