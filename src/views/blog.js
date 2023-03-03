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
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/322a8992-814f-4e72-aea2-3fcffc1eefec/3d535b5f-2979-46da-8a77-c90cb36e9c4d?org_if_sml=1"
        />
      </Helmet>
      <div className="blog-blog-post-card">
        <a
          href="https://en.wikipedia.org/wiki/Black_History_Month"
          target="_blank"
          rel="noreferrer noopener"
          className="blog-link"
        >
          <img
            alt="image"
            src="/playground_assets/%E2%80%9C.svg"
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="blog-image"
          />
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Black_History_Month"
          target="_blank"
          rel="noreferrer noopener"
          className="blog-link1"
        >
          <div className="blog-container1">
            <div className="blog-container2"></div>
            <h1 className="blog-text">???</h1>
            <span className="blog-text1">
              Black history month is for celebrating the amazing things black
              people did form the past to this date. 
            </span>
            <div className="blog-container3">
              <div className="blog-profile">
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1676461513375-e020fd0746ab?ixid=Mnw5MTMyMXwwfDF8YWxsfDF8fHx8fHwyfHwxNjc2NDcxNDU3&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="blog-image1"
                />
                <span className="blog-text2">GamesPlus</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <Link to="/old-blogs" className="blog-navlink">
        <h1 className="blog-text3">Old Blogs</h1>
      </Link>
      <Link to="/" className="blog-navlink1">
        <h1 className="blog-text4">Back Home</h1>
      </Link>
    </div>
  )
}

export default Blog
