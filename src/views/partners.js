import React from 'react'

import { Helmet } from 'react-helmet'

import './partners.css'

const Partners = (props) => {
  return (
    <div className="partners-container">
      <Helmet>
        <title>Partners - GamesPlusRetro</title>
        <meta
          name="description"
          content="GamesPlus has gone retro this year so hop in and play! READY PLAYER 1!"
        />
        <meta property="og:title" content="Partners - GamesPlusRetro" />
        <meta
          property="og:description"
          content="GamesPlus is doing a blast from the past starting 2023!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/322a8992-814f-4e72-aea2-3fcffc1eefec/3d535b5f-2979-46da-8a77-c90cb36e9c4d?org_if_sml=1"
        />
      </Helmet>
      <div className="partners-blog">
        <div className="partners-container1">
          <div className="partners-blog-post-card"></div>
        </div>
        <div className="partners-container2">
          <div className="partners-blog-post-card1">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="partners-image"
            />
            <div className="partners-container3">
              <span className="partners-text">THANK-YOU</span>
              <a
                href="https://guzuv.ml"
                target="_blank"
                rel="noreferrer noopener"
                className="partners-link"
              >
                guzuv.ml
              </a>
              <span className="partners-text1">
                We thank  guzuv.ml so much for teaching us and helping us get to
                the point we are today. Also thank-you for getting our domain!
              </span>
              <div className="partners-container4">
                <div className="partners-profile">
                  <span className="partners-text2">GamesPlus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="partners-container5">
          <div className="partners-blog-post-card2"></div>
        </div>
      </div>
    </div>
  )
}

export default Partners
