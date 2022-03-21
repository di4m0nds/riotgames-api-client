import React, { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LineWave } from 'react-loader-spinner'

// Context
import ApiMatchContext from '../../../context/ApiMatchContext'

import SwitchoTabs from '../ShowGames/SwitchoTabs'

const Main = ({ region, puuid, selectedTab, selectedId }) => {
  const [loading, setLoading] = useState(false)
  const [matchesData, setMatchesData] = useState(null)
  const { apiGetMatches } = useContext(ApiMatchContext)

  useEffect(() => {
    ;(async () => {
      if (region !== undefined && puuid !== undefined) {
        setLoading(true)
        const res = await apiGetMatches({ region: region, puuid: puuid })
        setMatchesData(res)
        setLoading(false)
      }
    })()
  }, [])

  if (loading) return <div className='grid-center'><LineWave height="150" width="150" color='white' ariaLabel='loading' /></div>
  const list = matchesData?.filter((match) => match?.game?.mode === selectedTab.label)

  return (
    <main>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={selectedTab ? selectedTab.label : 'empty'}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.15 }}
        >
          {selectedTab.label === 'ALL GAMES'
            ? <SwitchoTabs tab={selectedTab.label} data={matchesData} puuid={puuid} selectedId={selectedId} />
            : <SwitchoTabs tab={selectedTab.label} data={list} puuid={puuid} selectedId={selectedId} />
          }
        </motion.div>
      </AnimatePresence>
    </main>
  )
}

export default Main
