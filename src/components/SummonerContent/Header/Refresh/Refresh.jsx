import React, { useState, useContext } from 'react'
import { Oval } from 'react-loader-spinner'

import ApiSummonerContext from '../../../../context/ApiSummonerContext'

const Refresh = ({ region, name }) => {
  const [loader, setLoader] = useState(false)
  const { apiClearKey } = useContext(ApiSummonerContext)

  const handleRefresh = async (e) => {
    setLoader(true)
    const res = await apiClearKey({ region: region, name: name })
    if (res?.clear === 'ok') {
      location.reload(false)
      setLoader(false)
    }
  }

  return (
    <div className='do-refresh'>
      {loader && <span><Oval height="25" width="25" color='white' ariaLabel='loading' /></span>}
      <button onClick={handleRefresh} className='refresh-data'>
        <span>Refresh</span>
      </button>
    </div>
  )
}

export default Refresh
