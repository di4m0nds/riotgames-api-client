import React from 'react'

import ShowGames from './ShowGames'

const SwitchoTabs = ({ tab, data, puuid }) => {
  const switcho = {
    'ALL GAMES': (data) => (
      data.length > 0 &&
        data?.map((match, i) => (
          <ShowGames key={i} mode={tab} match={match} puuid={puuid} />
        ))
    ),
    CLASSIC: (data) => (
      data.length > 0 &&
        data?.map((match, i) => (
          <ShowGames key={i} mode={tab} match={match} puuid={puuid} />
        ))
    ),
    ARAM: (data) => (
      data.length > 0 &&
        data?.map((match, i) => (
          <ShowGames key={i} mode={tab} match={match} puuid={puuid} />
        ))
    )
  }

  if (data <= 0) return <h3 className='grid-center app-summonerContent_matches-notgames'>Not found games</h3>

  return switcho[tab](data)
}

export default SwitchoTabs
