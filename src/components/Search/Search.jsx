import React, { useState } from 'react'
import { motion } from 'framer-motion'

import './style.css'

const Search = ({ setSummoner }) => {
  const [message, setMessage] = useState({ active: false })

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const region = e.target[1].value
    if (name === '') {
      setMessage({ active: true, msg: 'You trying to send empty string!' })
    } else if (name.includes('/') || name.includes('\\') || name.includes('?') || name.includes('=')) {
      setMessage({ active: true, msg: "You can't write special characters!" })
    } else {
      setSummoner({ name, region })
      setMessage({ active: false })

      if (location.pathname.includes('summoner')) {
        location.href = `http://localhost:3000/${region}/summoner/${name.replace(' ', '').toLowerCase()}`
      }
    }
  }

  return (
    <>
      {message.active && (
        <div className='grid-center msg-error'>
          <h3>{message.msg}</h3>
        </div>
      )}
      <div className='app-search container-box'>
        <form onSubmit={e => handleSubmit(e)} className='app-search_form'>
          <input placeholder='Summoner Name . . .' id="summonerName" type="text" />
          <select name="region" id="region">
            <option value="euw1">Europe West</option>
            <option value="eun1">Europe Nordic & East</option>
            <option value="na1">North America</option>
            <option value="la1">LAN</option>
            <option value="la2">LAS</option>
            <option value="kr">Korean</option>
            <option value="br1">Brazil</option>
            <option value="ru">Russia</option>
            <option value="tr1">Turkey</option>
            <option value="jp1">Japan</option>
          </select>
          <button type='submit'>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              src="https://img.icons8.com/small/24/ffffff/search--v1.png"
            />
          </button>
        </form>
      </div>
    </>
  )
}

export default Search
