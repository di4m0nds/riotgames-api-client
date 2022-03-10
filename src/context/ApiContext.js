import React, { useState } from 'react'
import axios from 'axios'

const Context = React.createContext({})
const baseUrl = 'http://localhost:6969/'

export function ApiLolContextProvider ({ children }) {
  const [data, setData] = useState({})
  const [loader, setLoader] = useState(false)

  const apiResults = async (extUrl) => {
    const result = await axios.get(`${baseUrl}${extUrl}`)

    if (result?.data?.puuid === undefined) {
      setLoader(false)
      setData(undefined)
      return
    }

    const response = await axios.get(`${baseUrl}summoner/icon/${result?.data?.profileIconId}`)

    setData({
      summonerPuuid: result?.data?.puuid,
      summoner: result?.data?.name,
      summonerLevel: result?.data?.summonerLevel,
      icon: response?.data?.iconUrl
    })

    setLoader(false)
  }

  return (
   <Context.Provider value={{ data, setData, apiResults, loader, setLoader }}>
      {children}
    </Context.Provider>
  )
}

export default Context
