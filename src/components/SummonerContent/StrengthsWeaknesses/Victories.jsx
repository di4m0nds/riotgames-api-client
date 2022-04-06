import React from 'react'

const Victories = ({ games }) => {
  let victories = 0
  for (const i of games) {
    if (i.par?.win) victories++
    else break
  }

  return victories >= 4 && <li className='good'>Hot Streak</li>
}

export default Victories
