import React from 'react'
import Content from './Content'

import './TopChamps.css'

const TopChamps = ({ allChamps, topChampionMastery }) => {
  const top10 = topChampionMastery
  top10.length = 5

  return (
    <div className='topchamps'>
      <h3>Scores</h3>
      <div className='listTopChamps'>
        {top10?.map((champ, i) =>
          <div key={i} className='champStats'>
            <Content allChamps={allChamps} champ={champ} champId={champ?.champId} i={i} />
          </div>
        )}
      </div>
    </div>
  )
}

export default TopChamps
