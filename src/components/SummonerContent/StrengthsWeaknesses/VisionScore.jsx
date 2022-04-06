import React, { useContext } from 'react'

import ApiYTContext from '../../../context/ApiYTContext'

const VisionScore = ({ games, videosSection, setVideosSection, setVideosIds }) => {
  const { apiGetYTVideos } = useContext(ApiYTContext)

  let vision = 0
  let classicGames = 0
  games?.forEach(match => {
    vision += match.par.visionScore
    if (match.gameMode === 'CLASSIC') classicGames++
  })

  const handleYtIds = async () => {
    if (!videosSection) {
      const result = await apiGetYTVideos({ search: 'vision guide league of legends' })
      setVideosIds(result)
    }
    setVideosSection(!videosSection)
  }

  return classicGames > 1
    ? vision / classicGames >= 20 ? <li className='good btn' onClick={handleYtIds}>Great vision</li> : <li className='bad btn' onClick={handleYtIds}>Bad vision</li>
    : classicGames === 1 && vision >= 25 ? <li className='good btn' onClick={handleYtIds}>Great vision</li> : <li className='bad btn' onClick={handleYtIds}>Bad vision</li>
}

export default VisionScore
