import React, { useContext, useEffect } from 'react'

import { GetMatches } from '../'
import ApiContext from '../../context/ApiContext'

import './style.css'

const SummonerContent = ({ summonerRegion, summonerName }) => {
  const { apiGetSummoner, summonerData } = useContext(ApiContext)

  useEffect(() => {
    const champion = 'Fiora'
    setTimeout(() => {
      document.getElementById('BgHeader').style.backgroundImage = `
        url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_5.jpg)
      `
    }, 1500)
  }, [])

  useEffect(() => {
    ;(async () => {
      if (summonerName !== undefined && summonerRegion !== undefined) {
        await apiGetSummoner(`${summonerRegion}&${summonerName}`)
      }
    })()
  }, [summonerName, summonerRegion])

  if (!summonerData?.summoner) {
    return <h3 className='container-box msg-error'>Not Found Player</h3>
  }

  return (
    <section className='app-summonerContent'>
      <header className='app-summonerContent_header' id='BgHeader'>
        <div className='app-summonerContent_header-summoner'>
          <img src={summonerData?.icon} alt="profile-summoner" />
          <h3>{summonerData?.summoner} <span>{summonerData?.summonerLevel} Level</span></h3>
        </div>
      </header>
      <GetMatches region={summonerRegion} puuid={summonerData?.summonerPuuid} />
    </section>
  )
}

export default SummonerContent
