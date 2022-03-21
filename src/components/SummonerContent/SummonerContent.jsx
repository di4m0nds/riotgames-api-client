import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LineWave } from 'react-loader-spinner'

// Contexts
import ApiSummonerContext from '../../context/ApiSummonerContext'

import { GetContent, Game } from '../'
import Header from './Header/Header'
import { AnimatePresence } from 'framer-motion'

import './style.css'

const SummonerContent = ({ summonerRegion, summonerName }) => {
  const { apiGetExtData } = useContext(ApiSummonerContext)
  const [extData, setExtData] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    ;(async () => {
      if (summonerName !== undefined && summonerRegion !== undefined) {
        setLoading(true)
        const res = await apiGetExtData({ region: summonerRegion, name: summonerName })
        setExtData(res)
        setLoading(false)
      }
    })()
  }, [])

  if (loading) return <div className='container-box'><LineWave height="100" width="100" color='gray' ariaLabel='loading' /></div>
  if (extData?.error) return <h3 className='container-box msg-error'>Not Player Found</h3>

  return (
    <>
      <section className='app-summonerContent'>
        <Header
          icon={extData?.profileIcon}
          name={extData?.name}
          level={extData?.summonerLevel}
          championsMastery={extData?.topChampionMastery}
          region={summonerRegion}
        />
        <GetContent
          region={summonerRegion}
          puuid={extData?.puuid}
          topChampionMastery={extData?.topChampionMastery}
          leagueData={extData?.leagueData}
          selectedId={id}
        />
      </section>
      <AnimatePresence>
        {id && <Game id={id} />}
      </AnimatePresence>
    </>
  )
}

export default SummonerContent
