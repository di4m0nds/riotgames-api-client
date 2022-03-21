import React, { useContext, useEffect, useState } from 'react'
import { DoughnutChart } from '../../../'

import ApiMatchContext from '../../../../context/ApiMatchContext'

const WinRate = ({ name }) => {
  const { matchState } = useContext(ApiMatchContext)
  const [countWins, setCountWins] = useState(null)
  const [countDefeat, setCountDefeat] = useState(null)
  let cw = 0
  let cd = 0

  useEffect(() => {
    if (matchState) {
      matchState.forEach(match => {
        for (const i in match?.game?.participants) {
          if (match?.game?.participants[i]?.summonerName === name) {
            if (match?.game?.participants[i]?.win) cw++
            else cd++
          }
        }
      })
      setCountWins(cw)
      setCountDefeat(cd)
    }
  }, [matchState])

  return (
    <div className='profile-summoner'>
      <h3 style={{ marginRight: '20px' }}>Total Rate:</h3>
      <div style={{ width: '100px', height: '100px' }}>
        <DoughnutChart labels={['WIN', 'DEFEAT']} data={[countWins, countDefeat]} />
      </div>
    </div>
  )
}

export default WinRate
