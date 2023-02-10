import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>GamesPlusRetro</title>
        <meta
          name="description"
          content="GamesPlus has gone retro this year so hop in and play! READY PLAYER 1!"
        />
        <meta property="og:title" content="GamesPlusRetro" />
        <meta
          property="og:description"
          content="GamesPlus is doing a blast from the past starting 2023!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/322a8992-814f-4e72-aea2-3fcffc1eefec/b3613c49-f16f-4ab4-9fcf-10f964b4b0d0?org_if_sml=1"
        />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <span className="home-text">GamesPlus</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <div id="Hotbar top" className="home-right">
                <div className="home-links">
                  <a href="#Game" className="home-link navLink">
                    Games
                  </a>
                  <Link to="/blog" className="home-link01 navLink">
                    Blog
                  </Link>
                  <a href="#Contact" className="home-link02 navLink">
                    contact
                  </a>
                </div>
                <div className="home-button">
                  <Link to="/games" className="home-work-with-us button">
                    <span className="home-text01">Games</span>
                    <img
                      alt="image"
                      src="/playground_assets/hamburger.svg"
                      className="home-image"
                    />
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-work-with-us1 button">
              <span className="home-text02">work with us</span>
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="home-image01"
              />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <span className="home-text03">hola studio</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-middle"
              >
                <div className="home-links1">
                  <span className="navLink">work</span>
                  <span className="navLink">services</span>
                  <span className="navLink">contact</span>
                </div>
                <button className="home-work-with-us2 button">
                  <span className="home-text04">work with us</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-header">
          <h1 className="home-text05">
            A Retro website for retro gamers or your kids to watch them suffer
            like you did!
          </h1>
        </div>
        <div className="home-hero-image">
          <img
            alt="image"
            src="/playground_assets/71uylyogvvl._ac_sl1500_-600h.jpg"
            className="home-image02"
          />
        </div>
      </div>
      <div className="home-who">
        <div id="Game" className="home-header1">
          <div className="home-heading">
            <h2 id="Better game" className="home-text06 Riesling1">
              Get into the retro world!
            </h2>
            <span className="home-text07">
              GamesPlus has gone retro with our games!
            </span>
          </div>
          <Link to="/games" className="home-navlink button">
            PLAY HERE
          </Link>
        </div>
        <div className="home-preview">
          <div className="home-video">
            <video className="home-video1"></video>
          </div>
        </div>
      </div>
      <div className="home-information">
        <div id="About" className="home-purpose">
          <span className="home-caption">What we do</span>
          <span className="home-description">
            <span className="home-text08">
              We have tons of retro games for you to play! If you want a retro
              game please E-mail
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text09">
              helpline@gamesplus.ml
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Also if there is not safe content please email us!</span>
          </span>
        </div>
      </div>
      <div id="Contact" className="home-book">
        <div className="home-content">
          <div className="home-left">
            <h2 className="home-text11">
              <span>Ask us for any retro game here</span>
              <br></br>
            </h2>
            <a
              href="mailto:helpline@gamesplus.ml?subject=Add game!"
              className="home-link06 button"
            >
              <span className="home-text14">Email</span>
            </a>
          </div>
          <img
            alt="image"
            src="/playground_assets/message.svg"
            className="home-image03"
          />
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-header2">
          <span className="home-branding2">GamesPlus</span>
        </div>
        <div className="home-content1">
          <div className="home-contact">
            <span className="home-email">helpline@gamesplus.ml</span>
          </div>
          <div className="home-links-row">
            <div className="home-links-column">
              <a href="#About" className="home-link07">
                About
              </a>
              <a href="#Game" className="home-link08">
                Games
              </a>
              <Link to="/blog" className="home-link09">
                Blog
              </Link>
              <a
                href="https://guzuv.ml"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                Partners
              </a>
            </div>
          </div>
        </div>
        <div className="home-socials">
          <div className="home-row">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/playground_assets/facebook%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/playground_assets/twitter%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/playground_assets/dribbble%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/playground_assets/instagram%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
          <div className="home-row1">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/playground_assets/linkedin%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/playground_assets/youtube%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/playground_assets/telegram%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/playground_assets/medium%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
