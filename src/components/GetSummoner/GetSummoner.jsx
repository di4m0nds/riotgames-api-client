import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LineWave } from 'react-loader-spinner'

// Context
import SummmonerContext from '../../context/ApiSummonerContext'

// Styles
import './style.css'

const GetSummoner = ({ summoner }) => {
  const [loading, setLoading] = useState(false)
  const [sData, setSData] = useState(null)
  const { apiGetSData } = useContext(SummmonerContext)

  useEffect(() => {
    ;(async () => {
      if (summoner) {
        setLoading(true)
        const result = await apiGetSData({ region: summoner.region, name: summoner.name })
        setSData(result)
        setLoading(false)
      }
    })()
  }, [summoner])

  if (loading) return <div className='grid-center height-150'><LineWave height="150" width="150" color='white' ariaLabel='loading' /></div>
  if (sData?.error) return <h1 className='height-150 container-box msg-error'>Summoner name doesn&apos;t exists!</h1>

  return (
    <div className='height-150'>
      {sData &&
        <div className='grid-center'>
          <motion.a
            href={`/${summoner.region}/summoner/${sData?.name.replace(' ', '').toLowerCase()}`} className='app-summoner'
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={sData?.profileIcon}
              alt="profileicon"
            />
            <h3>{sData?.name}</h3>
            <p>{sData?.summonerLevel} Level</p>
          </motion.a>
        </div>
      }
    </div>
  )
}

export default GetSummoner
