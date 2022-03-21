import React, { useContext, useEffect, useState } from 'react'
import { LineWave } from 'react-loader-spinner'

// Context
import ApiMatchContext from '../../../context/ApiMatchContext'

// Component
import TopChamps from './TopChamps'

const ChampionMastery = ({ topChampionMastery }) => {
  const [allChamps, setAllChamps] = useState(null)
  const [loading, setLoading] = useState(true)
  const { apiGetChamps } = useContext(ApiMatchContext)

  useEffect(() => {
    ;(async () => {
      if (!allChamps) {
        const data = await apiGetChamps()
        setAllChamps(data)
        setLoading(false)
      }
    })()
  }, [])
  if (loading) return <div className='container-box'><LineWave height="100" width="100" color='gray' ariaLabel='loading' /></div>

  return (
    <div className='app-summonerContent_stats-content'>
      <TopChamps allChamps={allChamps} topChampionMastery={topChampionMastery} />
    </div>
  )
}

export default ChampionMastery
