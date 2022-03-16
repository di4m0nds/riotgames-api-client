import React from 'react'

const GetChampAssets = ({ champ, type, version = '12.5.1' }) => {
  const ASSET = {
    splash: (champ) => `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg`,
    loading: (champ) => `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ}_0.jpg`,
    square: (champ) => `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ}.png`,
    passive: (champ) => `http://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${champ}_P.png`
  }

  return <img src={ASSET[type](champ)} />
}

export default GetChampAssets
