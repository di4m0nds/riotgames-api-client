import React, { useContext, useEffect } from 'react'

import ApiContext from '../../context/ApiContext'
import { GetChampAssets } from '../'

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
            <GetChampAssets champ={champ[1].id} type={'square'} version={champ[1].version} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetFreeRotation
