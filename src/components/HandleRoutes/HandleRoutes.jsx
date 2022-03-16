import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { GetSummoner, GetFreeRotation, SummonerContent } from '../'

const HandleRoutes = ({ summoner }) => {
  const summonerLocation = location.pathname.split('/')

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <>
            <GetSummoner summoner={summoner} />
            <GetFreeRotation summoner={summoner} />
          </>
        } />
        <Route exact path={`/${summonerLocation[1]}/summoner/${summonerLocation[3]}`}
          element={
            <SummonerContent summonerRegion={summonerLocation[1]} summonerName={summonerLocation[3]} />
          }
        />
      </Routes>
    </Router>
  )
}

export default HandleRoutes
