import React, { useContext, useEffect, useState } from 'react'

import ApiContext from '../../context/ApiContext'

import GetChampAssets from '../GetChampAssets/GetChampAssets'
import GetPerksAssets from '../GetPerksAssets/GetPerksAssets'
import GetItemAssets from '../GetItemAssets/GetItemAssets'

import './styles.css'

const ShowChampStats = ({ player }) => {
  const [summoners, setSummoners] = useState(null)
  const { apiGetSummonerById } = useContext(ApiContext)

  useEffect(() => {
    (async () => {
      const res1 = await apiGetSummonerById(player.summoner1Id)
      const res2 = await apiGetSummonerById(player.summoner2Id)
      setSummoners({
        sum1: `https://ddragon.canisback.com/latest/img/spell/${res1}.png`,
        sum2: `https://ddragon.canisback.com/latest/img/spell/${res2}.png`
      })
      console.log()
    })()
  }, [])

  return (
    <>
      <div className='champ-stats_imgLevel'>
        <GetChampAssets champ={player?.championName} type='square' />
        <p>{player?.champLevel}</p>
      </div>
      {summoners && (
        <div className='champ-stats_content-summoners'>
          <img src={summoners.sum1} alt="" />
          <img src={summoners.sum2} alt="" />
        </div>
      )}
      <div className='champ-stats_content'>
        <div className='champ-stats_content-up'>
          <div className='stats'>
            <p className='kda prop-graph'><span>{player?.kills}/{player?.deaths}/{player?.assists}</span></p>
            <p className='kdaAverage prop-graph'><span>{Math.round((player?.challenges?.kda + Number.EPSILON) * 100) / 100}</span> KDA</p>
            <p className='cs prop-graph'><span>{player.totalMinionsKilled + player.neutralMinionsKilled}</span> CS</p>
            <p className='visionscore prop-graph'><span>{player.visionScore}</span> Vision</p>
            <p className='damage prop-graph'><span>{player.totalDamageDealtToChampions}</span> Damage</p>
            <p className='gold prop-graph'><span>{player.goldEarned}</span> Gold</p>
          </div>
          <div className='app-summonerContent_matches-game_content-items' style={{ width: '182px' }}>
            <GetItemAssets imageId={player?.item0} />
            <GetItemAssets imageId={player?.item1} />
            <GetItemAssets imageId={player?.item2} />
            <GetItemAssets imageId={player?.item3} />
            <GetItemAssets imageId={player?.item4} />
            <GetItemAssets imageId={player?.item5} />
            <GetItemAssets imageId={player?.item6} />
          </div>
        </div>
        <div className='champ-stats_content-down'>
          <div className='champ-stats_content-down_primary'>
            <GetPerksAssets
              styleId={player?.perks?.styles[0]?.style}
              perkId={player?.perks?.styles[0]?.selections[0]?.perk}
            />
            <GetPerksAssets
              styleId={player?.perks?.styles[0]?.style}
              perkId={player?.perks?.styles[0]?.selections[1]?.perk}
            />
            <GetPerksAssets
              styleId={player?.perks?.styles[0]?.style}
              perkId={player?.perks?.styles[0]?.selections[2]?.perk}
            />
            <GetPerksAssets
              styleId={player?.perks?.styles[0]?.style}
              perkId={player?.perks?.styles[0]?.selections[3]?.perk}
            />
          </div>
          <div className='champ-stats_content-down_secundary'>
            <GetPerksAssets
              styleId={player?.perks?.styles[1]?.style}
              perkId={player?.perks?.styles[1]?.selections[0]?.perk}
            />
            <GetPerksAssets
              styleId={player?.perks?.styles[1]?.style}
              perkId={player?.perks?.styles[1]?.selections[1]?.perk}
            />
          </div>
        </div>
        <a href={`/las/summoner/${player.summonerName.replace(' ', '').toLowerCase()}`}>
          <img src={`https://ddragon.canisback.com/latest/img/profileicon/${player.profileIcon}.png`} alt="" />
          {player.summonerName}
        </a>
      </div>
    </>
  )
}

export default ShowChampStats
