import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Blog from './views/blog'
import Home from './views/home'
import Games from './views/games'
import OldBlogs from './views/old-blogs'
import Partners from './views/partners'
import ComingSoonGames from './views/coming-soon-games'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Blog} exact path="/blog" />
        <Route component={Home} exact path="/" />
        <Route component={Games} exact path="/games" />
        <Route component={OldBlogs} exact path="/old-blogs" />
        <Route component={Partners} exact path="/partners" />
        <Route component={ComingSoonGames} exact path="/coming-soon-games" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
