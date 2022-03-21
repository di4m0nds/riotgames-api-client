import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import GetChampAssets from '../../GetChampAssets/GetChampAssets'
import GetItemAssets from '../../GetItemAssets/GetItemAssets'

import './styles.css'

const ShowGames = ({ match, puuid }) => {
  const dataGame = match?.game
  const dataParticipantGame = match?.game?.participants?.filter(player => player.puuid === puuid)
  const gameDuration = moment.duration({ hours: 0, minutes: 0, seconds: dataGame?.duration, milliseconds: 0 }).humanize().replace('minutes', 'min')
  const gameDurationNumber = gameDuration.split(' ')[0] - 1
  const summonerLocation = location.pathname.split('/')

  return (
    <div className='app-summonerContent_matches-game' >
      {dataParticipantGame?.map((player, i) => (
        <div
          key={i}
          className={`
            app-summonerContent_matches-game_content
            ${gameDurationNumber >= 8
              ? player?.win ? 'win' : 'defeat'
              : 'remake'}
          `}
        >
          <Link
            to={`/${summonerLocation[1]}/summoner/${summonerLocation[3]}/${match?.meta?.matchId}`}
            className='game-open-link'
          />
          <div className='game-info'>
            <div className='app-summonerContent_matches-game_content-gameStats'>
              <p>{dataGame?.mode}</p>
              <p>{gameDuration}</p>
            </div>
            <GetChampAssets champ={player.championName} type={'square'} />
            <div className='app-summonerContent_matches-game_content-stats'>
              <p>{player?.kills}/{player?.deaths}/{player?.assists}</p>
              <p><span>{Math.round((player?.challenges?.kda + Number.EPSILON) * 100) / 100}</span> KDA</p>
            </div>
            <div className='app-summonerContent_matches-game_content-items'>
              <GetItemAssets imageId={player?.item0} />
              <GetItemAssets imageId={player?.item1} />
              <GetItemAssets imageId={player?.item2} />
              <GetItemAssets imageId={player?.item3} />
              <GetItemAssets imageId={player?.item4} />
              <GetItemAssets imageId={player?.item5} />
            </div>
            <GetItemAssets imageId={player?.item6} />
          </div>
          <p className='app-summonerContent_matches-game_content-moment'>{moment(dataGame?.creation).startOf('ss').fromNow()}</p>
        </div>
      ))}
    </div>
  )
}

export default ShowGames
