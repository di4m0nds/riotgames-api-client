import React, { createContext } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:6969/srv/lol/api/v2/summoner'

const SummonerContext = createContext({})

export const ApiSummonerContextProvider = ({ children }) => {
  // Get Simple/Short/Small data of summoner
  const apiGetSData = async ({ region, name }) => {
    const result = await axios(`${BASE_URL}/sdata/${region}&${name}`)
      .catch(err => console.log(err))
    if (result.data) return result.data
    return { error: true }
  }

  // Get Extense Data of Summoner
  const apiGetExtData = async ({ region, name }) => {
    const result = await axios(`${BASE_URL}/extdata/${region}&${name}`)
      .catch(err => console.log(err))
    if (result.data) return result.data
    return { error: true }
  }

  // Clear data of summoner
  const apiClearKey = async ({ region, name }) => {
    const result = await axios.get(`${BASE_URL}/clear/${region}&${name}`)
    return result?.data
  }

  return (
    <SummonerContext.Provider
      value={{
        apiGetSData,
        apiGetExtData,
        apiClearKey
      }}
    >{ children }</SummonerContext.Provider>
  )
}

export default SummonerContext
