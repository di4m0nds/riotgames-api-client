import React, { useContext, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import moment from 'moment'

import ApiContext from '../../../context/ApiContext'

import GetChampAssets from '../../GetChampAssets/GetChampAssets'
import GetItemAssets from '../../GetItemAssets/GetItemAssets'

import './styles.css'

const ShowGames = ({ match, puuid }) => {
  const dataGame = match?.game
  const dataParticipantGame = match?.game?.participants?.filter(player => player.puuid === puuid)
  const blueTeam = []
  const redTeam = []
  dataGame?.participants?.forEach(summoner => {
    if (summoner.teamId === 100) blueTeam.push(summoner)
    if (summoner.teamId === 200) redTeam.push(summoner)
  })
  const summonerLocation = location.pathname.split('/')

  const [summoners, setSummoners] = useState(null)
  const { apiGetSummonerById } = useContext(ApiContext)

  useEffect(() => {
    (async () => {
      console.log(dataParticipantGame)
      const res1 = await apiGetSummonerById(dataParticipantGame[0].summoner1Id)
      const res2 = await apiGetSummonerById(dataParticipantGame[0].summoner2Id)
      setSummoners({
        sum1: `https://ddragon.canisback.com/latest/img/spell/${res1}.png`,
        sum2: `https://ddragon.canisback.com/latest/img/spell/${res2}.png`
      })
      console.log()
    })()
  }, [])

  return (
    <div
      className='app-summonerContent_matches-game'
    >
      {dataParticipantGame?.map((player, i) => (
        <div
          key={i}
          className={`
            app-summonerContent_matches-game_content
            ${(dataGame?.duration / 60) >= 8
              ? player?.win ? 'win' : 'defeat'
              : 'remake'}
          `}
        >
          <Link to={`/${summonerLocation[1]}/summoner/${summonerLocation[3]}/${match?.meta?.matchId}`} className='game-open-link' />
          <div className='game-info'>
            <div className='app-summonerContent_matches-game_content-gameStats'>
              <p>{dataGame?.queue?.description.toLowerCase().includes('ranked') ? 'RANKED' : dataGame?.mode}</p>
              <p>{`${Math.floor(dataGame?.duration / 60)}m ${dataGame?.duration % 60 ? dataGame?.duration % 60 : '00'}s`}</p>
            </div>
            <GetChampAssets champ={player.championName} type={'square'} />
            {summoners && (
              <div className='champ-stats_content-summoners'>
                <img src={summoners.sum1} alt="" />
                <img src={summoners.sum2} alt="" />
              </div>
            )}
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
          <div className='app-summonerContent_matches-game_content-players'>
            <div>
              {blueTeam?.map((summoner, i) => (
                <div key={i}>
                  <img src={`https://ddragon.canisback.com/latest/img/profileicon/${summoner.profileIcon}.png`} alt="" />
                  <p className={`${summoner.summonerName === player.summonerName && 'me'}`}>{summoner.summonerName}</p>
                </div>
              ))}
            </div>
            <div>
              {redTeam?.map((summoner, i) => (
                <div key={i}>
                  <img src={`https://ddragon.canisback.com/latest/img/profileicon/${summoner.profileIcon}.png`} alt="" />
                  <p className={`${summoner.summonerName === player.summonerName && 'me'}`}>{summoner.summonerName}</p>
                </div>
              ))}
            </div>
          </div>
          <p className='app-summonerContent_matches-game_content-moment'>{moment(dataGame?.creation).startOf('ss').fromNow()}</p>
        </div>
      ))}
    </div>
  )
}

export default ShowGames
