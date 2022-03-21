import React, { useState } from 'react'
import { motion } from 'framer-motion'

import './style.css'

const Search = ({ setSummoner }) => {
  const [message, setMessage] = useState({ active: false })
  const [select, setSelect] = useState(location.pathname.includes('summoner') ? location.pathname.split('/')[1] : '')

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const region = e.target[1].value
    if (name === '') {
      setMessage({ active: true, msg: 'You trying to send empty string!' })
    } else if (name.includes('/') || name.includes('\\') || name.includes('?') || name.includes('=')) {
      setMessage({ active: true, msg: "You can't write special characters!" })
    } else {
      setSummoner({ region, name })
      setMessage({ active: false })

      if (location.pathname.includes('summoner')) {
        location.href = `http://localhost:3000/${region}/summoner/${name.replace(' ', '').toLowerCase()}`
      }
    }
  }

  const handleSelect = (e) => {
    const value = e.target.value
    const loc = location.pathname.split('/')[1]
    if (location.pathname.includes('summoner')) {
      if (loc !== value) setSelect(value)
      else setSelect(loc)
    } else {
      setSelect(value)
    }
  }

  return (
    <>
      <div className='app-search container-box'>
        <form onSubmit={e => handleSubmit(e)} className='app-search_form'>
          <input placeholder='Summoner Name . . .' id="summonerName" type="text" />
          <select
            name="region"
            id="region"
            value={select}
            onChange={handleSelect}
          >
            <option value="euw">EUWest</option>
            <option value="eune">EUNordic&East</option>
            <option value="na">NA</option>
            <option value="las">LAS</option>
            <option value="lan">LAN</option>
            <option value="kr">KR</option>
            <option value="br">BR</option>
            <option value="ru">RU</option>
            <option value="tr">TR</option>
            <option value="jp">JP</option>
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
      {message.active && (
        <div className='grid-center msg-error'>
          <h3>{message.msg}</h3>
        </div>
      )}
    </>
  )
}

export default Search
