import React from 'react'

import ShowGames from './ShowGames'

const SwitchoTabs = ({ tab, data, puuid, selectedId }) => {
  const switcho = {
    'ALL GAMES': (data) => (
      data?.length > 0 &&
        data?.map(match => (
          <ShowGames
            key={match?.meta?.matchId}
            mode={tab}
            match={match}
            puuid={puuid}
            isSelected={match?.meta?.matchId === selectedId} />
        ))
    ),
    CLASSIC: (data) => (
      data.length > 0 &&
        data?.map(match => (
          <ShowGames
            key={match?.meta?.matchId}
            mode={tab}
            match={match}
            puuid={puuid}
            isSelected={match?.meta?.matchId === selectedId} />
        ))
    ),
    ARAM: (data) => (
      data.length > 0 &&
        data?.map(match => (
          <ShowGames
            key={match?.meta?.matchId}
            mode={tab}
            match={match}
            puuid={puuid}
            isSelected={match?.meta?.matchId === selectedId} />
        ))
    )
  }

  if (data <= 0) return <h3 className='grid-center app-summonerContent_matches-notgames'>NOT GAMES FOUND</h3>

  return switcho[tab](data)
}

export default SwitchoTabs
