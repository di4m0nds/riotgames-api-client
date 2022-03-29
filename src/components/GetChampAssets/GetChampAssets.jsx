import React from 'react'

const GetChampAssets = ({ champ, type, version = '12.5.1' }) => {
  const ASSET = {
    splash: () => `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg`,
    loading: () => `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_0.jpg`,
    square: () => `https://ddragon.canisback.com/img/champion/tiles/${champ}_0.jpg`,
    passive: () => `http://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${champ}_P.png`
  }

  return <img src={ASSET[type]()} className='champImg' />
}

export default GetChampAssets
