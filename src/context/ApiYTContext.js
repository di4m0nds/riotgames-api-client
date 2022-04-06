import React, { createContext } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:6969/srv/lol/api/v2/yt'

const YTContext = createContext({})

export const ApiYTContextProvider = ({ children }) => {
  // Get Matches of Summoner
  const apiGetYTVideos = async ({ search }) => {
    const result = await axios(`${BASE_URL}/${search}`)
      .catch(err => console.log(err))
    return result?.data?.videosIds
  }

  const apiGetYTLives = async ({ search }) => {
    const result = await axios(`${BASE_URL}/lives/${search}`)
      .catch(err => console.log(err))
    return result?.data?.videosIds
  }

  return (
    <YTContext.Provider
      value={{
        apiGetYTVideos,
        apiGetYTLives
      }}
    >{ children }</YTContext.Provider>
  )
}

export default YTContext
