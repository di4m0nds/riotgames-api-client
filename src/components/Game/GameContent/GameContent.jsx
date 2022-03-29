import React, { useContext } from 'react'

import ShowChampStats from '../../ShowChampStats/ShowChampStats'
import ApiMatchContext from '../../../context/ApiMatchContext'

import './styles.css'

const GameContent = ({ id }) => {
  const { matchState } = useContext(ApiMatchContext)
  const mainGame = matchState?.filter(game => game?.meta?.matchId === id)[0]
  const redTeam = mainGame?.game?.participants?.filter(player => player?.teamId === 200)
  const blueTeam = mainGame?.game?.participants?.filter(player => player?.teamId === 100)

  return (
    <div className='modal_game-content'>
      <header>
        <p>Blue Team - <span>{mainGame?.game?.participants[0]?.win ? 'WIN' : 'DEFEAT'}</span></p>
        <p>Map <span>{mainGame?.game?.queue?.description.replace('games', '')}</span></p>
        <p>Red Team - <span>{mainGame?.game?.participants[mainGame?.game?.participants.length - 1]?.win ? 'WIN' : 'DEFEAT'}</span></p>
      </header>
      <section className='modal_game-content_teams'>
        <div className='modal_game-content_teams-blue'>
          {blueTeam?.map((player, i) => (
            <div
              key={i}
              className={`
                modal_game-content_teams-blue_player player-content
                ${player.win ? 'win' : 'defeat'}
                ${encodeURI(player.summonerName.replace(' ', '').toLowerCase()) === location.pathname.split('/')[3] ? 'meStats' : ''}
              `}
            >
              <ShowChampStats player={player} />
            </div>
          ))}
        </div>
        <div className='modal_game-content_teams-red'>
          {redTeam?.map((player, i) => (
            <div
              key={i}
              className={`
                modal_game-content_teams-red_player player-content
                ${player.win ? 'win' : 'defeat'}
                ${encodeURI(player.summonerName.replace(' ', '').toLowerCase()) === location.pathname.split('/')[3] ? 'meStats' : ''}
              `}
            >
              <ShowChampStats player={player} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GameContent
