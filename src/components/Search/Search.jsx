import React, { useState } from 'react'

import './style.css'

const Search = ({ setSummoner }) => {
  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target[0].value
    if (value.includes('/') || value.includes('\\') || value.includes('?')) {
      setMessage(true)
    } else {
      setSummoner(value)
      setMessage(false)
    }
  }

  return (
    <>
      {message && (
        <div className='grid-center msg-error'>
          <h3>You can&apos;t write special characters!</h3>
        </div>
      )}
      <div className='app-search container-box'>
        <form onSubmit={e => handleSubmit(e)} className='app-search_form'>
          <input placeholder='Summoner Name . . .' id="summonerName" type="text" />
          <button type='submit'>
            <img src="https://img.icons8.com/small/24/ffffff/search--v1.png"/>
          </button>
        </form>
      </div>
    </>
  )
}

export default Search
