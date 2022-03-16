import React, { useContext, useEffect, useState } from 'react'
import { Grid } from 'react-loader-spinner'
import { motion, AnimatePresence } from 'framer-motion'

import ApiContext from '../../context/ApiContext'
// import ShowGames from './ShowGames/ShowGames'
import SwitchoTabs from './ShowGames/SwitchoTabs'

import './styles.css'

const tabs = [
  { label: 'ALL GAMES' },
  { label: 'CLASSIC' },
  { label: 'ARAM' }
]

const GetMatches = ({ region, puuid }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const { apiGetMatches, matchesData, loader, setLoader } = useContext(ApiContext)

  useEffect(() => {
    ;(async () => {
      if (region !== undefined && puuid !== undefined) {
        setLoader(true)
        apiGetMatches(`${region}&${puuid}&8`)
      }
    })()
  }, [region, puuid])

  if (loader) return <div className='container-box'><Grid height="50" width="50" color='white' ariaLabel='loading' /></div>

  const list = matchesData?.filter((match) => match?.info?.gameMode === selectedTab.label)

  return (
    <div className='app-summonerContent_stats'>
      <div className='app-summonerContent_stats-content'><h1>hi there</h1></div>
      <section className="app-summonerContent_matches">
        <nav>
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? 'selected' : ''}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.label === 'CLASSIC' ? "Summoner's Rift" : item.label}`}
              </li>
            ))}
          </ul>
        </nav>
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
                ? <SwitchoTabs tab={selectedTab.label} data={matchesData} puuid={puuid} />
                : <SwitchoTabs tab={selectedTab.label} data={list} puuid={puuid} />
              }
            </motion.div>
          </AnimatePresence>
        </main>
      </section>
    </div>
  )
}

export default GetMatches
