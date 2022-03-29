import React from 'react'
import GetChampAssets from '../../GetChampAssets/GetChampAssets'

import chest from './Hextech_Crafting_Chest.webp'

const Content = ({ allChamps, champ, champId, i }) => {
  const getChamp = Object.entries(allChamps).filter(champ => Number(champ[1]?.key) === champId)
  if (getChamp.length === 0) return ''

  return (
    <>
      <GetChampAssets champ={getChamp[0][0]} type='square' />
      <span>#{i + 1}</span>
      <div className='content'>
        {/* <span>{champ.championId}</span><br /> */}
        <span><span>{getChamp[0][0]}</span></span><br />
        <span>Points: <span>{champ?.champPoints}</span></span><br />
        <span>Maestry Level: <span>{champ?.champLevel}</span></span><br />
        {champ.chestGranted && <img src={chest} alt="hi" />}
      </div>
    </>
  )
}

export default Content
