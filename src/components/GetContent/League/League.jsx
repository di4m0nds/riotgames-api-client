import React from 'react'

import './styles.css'

import provisional from '../../../assets/Season_2013_Provisional.png'
import iron from '../../../assets/Season_2022_Iron.png'
import bronze from '../../../assets/Season_2022_Bronze.png'
import silver from '../../../assets/Season_2022_Silver.png'
import gold from '../../../assets/Season_2022_Gold.png'
import platinum from '../../../assets/Season_2022_Platinum.png'
import diamond from '../../../assets/Season_2022_Diamond.png'
import master from '../../../assets/Season_2022_Master.png'
import grandmaster from '../../../assets/Season_2022_Grandmaster.png'
import challenger from '../../../assets/Season_2022_Challenger.png'

const leagues = { iron, bronze, silver, gold, platinum, diamond, master, grandmaster, challenger }

const League = ({ leagueData }) => {
  return (
    <div className='app-summonerContent_stats-content'>
      <div className='app-summonerContent_stats-content_league' >
        {leagueData.length > 0
          ? leagueData?.map((league, i) => (
            <div key={i} className={`app-summonerContent_stats-content_league-content ${league?.tier.toLowerCase()}`}>
              <h4>{league?.type?.replace('_', ' ')}</h4>
              <div className='league-stats'>
                <span>{league?.tier} {league?.rank}</span>
                <img
                  src={leagues[league?.tier?.toLowerCase()] ? leagues[league?.tier.toLowerCase()] : provisional}
                  alt="tier"
                />
                <div>
                  <p>losses<span>{league?.losses}</span></p>
                  <p>wins<span>{league?.wins}</span></p>
                  <p>lp<span>{league?.lp}</span></p>
                </div>
              </div>
            </div>
          ))
          : (
            <div className='app-summonerContent_stats-content_league-content'>
              <div className='league-stats'>
                <h4>UNRANKED</h4>
                <img
                  src={provisional}
                  alt="tier"
                />
              </div>
            </div>
            )
          }
      </div>
    </div>
  )
}

export default League
