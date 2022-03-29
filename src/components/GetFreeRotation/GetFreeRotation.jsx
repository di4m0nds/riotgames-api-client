import React, { useContext, useEffect } from 'react'

import ApiContext from '../../context/ApiContext'

import './style.css'

const GetFreeRotation = ({ summoner }) => {
  const { apiGetFreeRotation, freeChampsRotation } = useContext(ApiContext)

  useEffect(() => {
    ;(async () => {
      if (summoner) await apiGetFreeRotation(summoner.region)
      else await apiGetFreeRotation('euw1')
    })()
  }, [summoner])

  return (
    <div className='app-freerotation'>
      <h2 className='app-freerotation_title grid-center'>Free Rotation Champs</h2>
      <div className='app-freerotation_champs' >
        {Object.entries(freeChampsRotation).map((champ, i) => (
          <div
            key={i}
            className='app-freerotation_champ'
          >
            <p style={{ color: 'white' }}>{champ[0]}</p>
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ[1].id}_0.jpg`} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetFreeRotation
