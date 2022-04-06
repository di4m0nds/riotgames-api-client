import React from 'react'

const Deaths = ({ games }) => {
  let deathsAverage = 0
  let countGames = 0
  games?.forEach(match => {
    if (match.gameMode === 'CLASSIC') {
      deathsAverage += match.par.deaths
      countGames++
    }
  })

  return deathsAverage / countGames > 6 && <li className='bad'>Die many times</li>
}

export default Deaths
