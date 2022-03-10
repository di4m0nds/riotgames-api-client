import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Search, GetSummoner } from '../'

const HandleRoutes = ({ summoner, setSummoner }) => {
  const summonerLocation = location.pathname.split('/')[1]

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <>
            <Search setSummoner={setSummoner} />
            <GetSummoner summoner={summoner} />
          </>
        } />
        <Route exact path={`/${summonerLocation}`} element={<></>} />
      </Routes>
    </Router>
  )
}

export default HandleRoutes
