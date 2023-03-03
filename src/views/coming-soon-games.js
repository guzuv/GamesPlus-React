import React from 'react'

import { Helmet } from 'react-helmet'

import './coming-soon-games.css'

const ComingSoonGames = (props) => {
  return (
    <div className="coming-soon-games-container">
      <Helmet>
        <title>Coming-soon-games - GamesPlusRetro</title>
        <meta
          name="description"
          content="GamesPlus has gone retro this year so hop in and play! READY PLAYER 1!"
        />
        <meta
          property="og:title"
          content="Coming-soon-games - GamesPlusRetro"
        />
        <meta
          property="og:description"
          content="GamesPlus is doing a blast from the past starting 2023!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/322a8992-814f-4e72-aea2-3fcffc1eefec/3d535b5f-2979-46da-8a77-c90cb36e9c4d?org_if_sml=1"
        />
      </Helmet>
      <div className="coming-soon-games-features">
        <h1 className="coming-soon-games-text">
          Games that will come in the future!
        </h1>
        <div className="coming-soon-games-container1">
          <div className="coming-soon-games-feature-card">
            <div className="coming-soon-games-container2">
              <h2 className="coming-soon-games-text1">
                The legend of zelda: Ocarina of time
              </h2>
            </div>
          </div>
          <div className="coming-soon-games-feature-card1">
            <div className="coming-soon-games-container3">
              <h2 className="coming-soon-games-text2">
                The legend of zelda: Majora&apos;s Mask
              </h2>
            </div>
          </div>
          <div className="coming-soon-games-feature-card2">
            <div className="coming-soon-games-container4">
              <h2 className="coming-soon-games-text3">Banjo-Kazooie</h2>
            </div>
          </div>
          <div className="coming-soon-games-feature-card3">
            <div className="coming-soon-games-container5">
              <h2 className="coming-soon-games-text4">Paper Mario</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoonGames
