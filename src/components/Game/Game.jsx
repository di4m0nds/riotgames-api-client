import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import GameContent from './GameContent/GameContent'

import './styles.css'

const Game = ({ id }) => {
  const summonerLocation = location.pathname.split('/')

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        className='overlay'
      >
        <Link to={`/${summonerLocation[1]}/summoner/${summonerLocation[3]}`} />
      </motion.div>
      <div className='game-content-container open'>
        <motion.div className='game-content' layoutId={`game-container-${id}`}>
          <motion.div className='content-container' animate>
            <GameContent id={id} />
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Game
