import React, { useState } from 'react'

import Nav from './Nav'
import Main from './Main'

const TabsBox = ({ region, puuid, selectedId }) => {
  const [selectedTab, setSelectedTab] = useState({ label: 'ALL GAMES' })

  return (
    <section className="app-summonerContent_matches">
      <Nav setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      <Main region={region} puuid={puuid} selectedTab={selectedTab} selectedId={selectedId} />
    </section>
  )
}

export default TabsBox
