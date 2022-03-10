import React, { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Grid } from 'react-loader-spinner'

import ApiContext from '../../context/ApiContext'

import './style.css'

const GetSummoner = ({ summoner }) => {
  const { data, apiResults, loader, setLoader } = useContext(ApiContext)

  useEffect(() => {
    ;(async () => {
      if (summoner) {
        setLoader(true)
        await apiResults(`summoner/la2&${summoner}`)
      }
    })()
  }, [summoner])

  if (loader) return <div className='grid-center'><Grid height="50" width="50" color='white' ariaLabel='loading' /></div>
  if (data === undefined) return <h1 className='container-box msg-error'>Summoner Name Doesn&apos;t exists!</h1>
  if (data.summoner === undefined) return ''

  return (
    <>
      {data &&
        <div className='grid-center'>
          <motion.a
            href={`/${data.summonerPuuid}`} className='app-summoner'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={data.icon}
              alt="profileicon"
            />
            <h3>{data.summoner}</h3>
            <p>{data.summonerLevel} Level</p>
          </motion.a>
        </div>
      }
    </>
  )
}

export default GetSummoner
