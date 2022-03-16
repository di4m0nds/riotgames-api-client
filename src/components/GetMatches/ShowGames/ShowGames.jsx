import React from 'react'

import GetChampAssets from '../../GetChampAssets/GetChampAssets'
import GetItemAssets from '../../GetItemAssets/GetItemAssets'

import './style.css'

const ShowGames = ({ match, puuid }) => {
  const dataGames = match.info?.participants?.filter(player => player.puuid === puuid)

  return (
    <div className='app-summonerContent_matches-game' >
      {dataGames.map((player, i) => (
        <div
          key={i}
          className={`app-summonerContent_matches-game_content ${player.win ? 'win' : 'defeat'}`}
        >
          {/* <div
            className={
              `app-summonerContent_matches-game_content-team
              ${player.teamId === 100 ? 'blueteam' : 'redteam'}`
            }
          >team</div> */}
          <GetChampAssets champ={player.championName} type={'square'} />
          <div className='app-summonerContent_matches-game_content-items'>
            <GetItemAssets imageId={player.item0} />
            <GetItemAssets imageId={player.item1} />
            <GetItemAssets imageId={player.item2} />
            <GetItemAssets imageId={player.item3} />
            <GetItemAssets imageId={player.item4} />
            <GetItemAssets imageId={player.item5} />
          </div>
          <GetItemAssets imageId={player.item6} />
          <p className='app-summonerContent_matches-game_content-kda'>
            KDA <span>{player?.kills}/{player?.deaths}/{player?.assists}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default ShowGames
