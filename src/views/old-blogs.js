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
          <span className="old-blogs-text01">
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
              <span className="old-blogs-text02">Games Plus</span>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="old-blogs-navlink">
        <h1 className="old-blogs-text03">Back Home</h1>
      </Link>
      <div className="old-blogs-blog-post-card1">
        <img
          alt="image"
          src="data:image/png;base64,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"
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="old-blogs-image2"
        />
        <div className="old-blogs-container4">
          <div className="old-blogs-container5"></div>
          <h1 className="old-blogs-text04">Happy Valentines day!</h1>
          <span className="old-blogs-text05">
            <span>
              I hope you ask that special someone out this valentines day ;)!
            </span>
            <br></br>
            <span>And remember to stay safe and happy!</span>
            <br></br>
          </span>
          <div className="old-blogs-container6">
            <div className="old-blogs-profile1">
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1200"
                className="old-blogs-image3"
              />
              <span className="old-blogs-text10">
                <span>Games Plus</span>
                <br></br>
              </span>
            </div>
            <span className="old-blogs-text13">Read More -&gt;</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OldBlogs
