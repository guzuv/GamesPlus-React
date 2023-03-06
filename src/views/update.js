import React from 'react'

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
      <h1>
        <span>         OUR WEBSITE IS HAVING A UPDATE</span>
        <br></br>
        <span>PLEASE BE PATIENT THANK-YOU IN ADVANCED</span>
        <br></br>
      </h1>
    </div>
  )
}

export default UPDATE
