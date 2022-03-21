import React from 'react'

// Components
import ChampionMastery from './ChampionMastery/ChampionMastery'
import TabsBox from './TabsBox/TabsBox'
import League from './League/League'

import './styles.css'

const GetContent = ({ region, puuid, leagueData, topChampionMastery, selectedId }) => {
  return (
    <div className='app-summonerContent_stats'>
      <aside>
        {leagueData && (
            <League leagueData={leagueData} />
        )}
        {topChampionMastery && (
            <ChampionMastery topChampionMastery={topChampionMastery} />
        )}
      </aside>
      <TabsBox region={region} puuid={puuid} selectedId={selectedId} />
    </div>
  )
}

export default GetContent
