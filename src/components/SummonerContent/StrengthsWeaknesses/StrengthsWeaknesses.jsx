import React, { useContext, useEffect, useState } from 'react'

import ApiMatchContext from '../../../context/ApiMatchContext'

import SideWins from './SideWins'
import VisionScore from './VisionScore'
import Victories from './Victories'
import Deaths from './Deaths'

import './styles.css'
import Content from './Content'

const StrengthsWeaknesses = ({ puuid }) => {
  const [games, setGames] = useState(null)
  const [videosIds, setVideosIds] = useState(null)
  const [videosSection, setVideosSection] = useState(false)
  const { matchState } = useContext(ApiMatchContext)

  useEffect(() => {
    const playerMatches = []
    matchState?.forEach(match => {
      playerMatches.push({
        par: match?.game?.participants?.filter(player => player.puuid === puuid)[0],
        gameMode: match?.game?.mode
      })
    })
    setGames(playerMatches)
  }, [matchState])

  if (!games) return 'Loading...'

  return (
    <>
      <ul className='app-summonerContent_properties'>
        <VisionScore games={games} videosSection={videosSection} setVideosSection={setVideosSection} setVideosIds={setVideosIds} />
        <SideWins games={games} />
        <Victories games={games} />
        <Deaths games={games} />
      </ul>

      {videosSection && <Content videosIds={videosIds} />}
    </>
  )
}

export default StrengthsWeaknesses
