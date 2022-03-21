import React, { useEffect, useContext } from 'react'

import ApiContext from '../../../context/ApiContext'
import Profile from './Profile/Profile'
import Refresh from './Refresh/Refresh'
import WinRate from './WinRate/WinRate'

const Header = ({ icon, name, level, championsMastery, region }) => {
  const { getFirstChampMastery } = useContext(ApiContext)

  useEffect(() => {
    ;(async () => {
      const data = await getFirstChampMastery(championsMastery)
      if (data && data?.data !== undefined) {
        const champSkins = Object.entries(data?.data)[0][1].skins
        const randomSkin = Math.round(Math.random() * (champSkins.length - 1))
        const lastSkinNum = champSkins[randomSkin].num
        const champion = Object.entries(data?.data)[0][0]
        document.getElementById('BgHeader').style.backgroundImage = `
          url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${lastSkinNum}.jpg)
        `
      }
    })()
  }, [])

  return (
    <header className='app-summonerContent_header' id='BgHeader'>
      <div className='app-summonerContent_header-summoner'>
        <Refresh region={region} name={name} />
        <Profile icon={icon} name={name} level={level} />
        <WinRate name={name} />
      </div>
    </header>
  )
}

export default Header
