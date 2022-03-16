import React, { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Grid } from 'react-loader-spinner'

import ApiContext from '../../context/ApiContext'

import './style.css'

const GetSummoner = ({ summoner }) => {
  const { summonerData, apiGetSummoner, loader, setLoader } = useContext(ApiContext)

  useEffect(() => {
    ;(async () => {
      if (summoner) {
        setLoader(true)
        await apiGetSummoner(`${summoner.region}&${summoner.name}`)
      }
    })()
  }, [summoner])

  if (loader) return <div className='grid-center height-150'><Grid height="50" width="50" color='white' ariaLabel='loading' /></div>
  if (summonerData === undefined) return <h1 className='height-150 container-box msg-error'>Summoner name doesn&apos;t exists!</h1>
  if (summonerData.summoner === undefined) return <div className='height-150'></div>

  return (
    <div className='height-150'>
      {summonerData &&
        <div className='grid-center'>
          <motion.a
            href={`/${summoner.region}/summoner/${summonerData.summoner.replace(' ', '').toLowerCase()}`} className='app-summoner'
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={summonerData.icon}
              alt="profileicon"
            />
            <h3>{summonerData.summoner}</h3>
            <p>{summonerData.summonerLevel} Level</p>
          </motion.a>
        </div>
      }
    </div>
  )
}

export default GetSummoner
