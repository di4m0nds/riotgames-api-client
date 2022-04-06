import React from 'react'

const SideWins = ({ games }) => {
  let blueWins = 0
  let redWins = 0
  games?.forEach(match => {
    if (match.par.teamId === 100 && match.par.win) blueWins++
    else if (match.par.teamId === 100 && !match.par.win) blueWins--
    else if (match.par.teamId === 200 && match.par.win) redWins++
    else if (match.par.teamId === 200 && !match.par.win) redWins--
  })

  return blueWins !== redWins && blueWins > redWins ? <li>Wins often blue side</li> : <li>Wins often red side</li>
}

export default SideWins
