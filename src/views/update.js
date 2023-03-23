import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './update.css'

const UPDATE = (props) => {
  return (
    <div className="update-container">
      <Helmet>
        <title>UPDATE - GamesPlusRetro</title>
        <meta
          name="description"
          content="GamesPlus has gone retro this year so hop in and play! READY PLAYER 1!"
        />
        <meta property="og:title" content="UPDATE - GamesPlusRetro" />
        <meta
          property="og:description"
          content="GamesPlus is doing a blast from the past starting 2023!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/322a8992-814f-4e72-aea2-3fcffc1eefec/3d535b5f-2979-46da-8a77-c90cb36e9c4d?org_if_sml=1"
        />
      </Helmet>
      <div className="update-hero">
        <div className="update-container1">
          <h1 className="update-text">We are leaving soon.</h1>
          <span className="update-text1">
            A sad event is coming soon... Gamesplus.ml is shutting down. We are
            very sad about this but from current events we can not put full
            effort on this site. We are so sorry. Thank-you to all our
            supporters.
          </span>
          <div className="update-btn-group">
            <Link to="/games" className="update-navlink button">
              Games for the last time :(
            </Link>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/71uylyogvvl._ac_sl1500_-1100w.jpg"
          className="update-image"
        />
      </div>
    </div>
  )
}

export default UPDATE
