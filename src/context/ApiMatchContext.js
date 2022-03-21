import React, { createContext, useState } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:6969/srv/lol/api/v2/matches'

const MatchContext = createContext({})

export const ApiMatchContextProvider = ({ children }) => {
  const [matchState, setMatchState] = useState([])
  // Get Matches of Summoner
  const apiGetMatches = async ({ region, puuid }) => {
    const result = await axios(`${BASE_URL}/${region}&${puuid}&8`)
      .catch(err => console.log(err))
    setMatchState(result?.data)
    return result?.data
  }

  const apiGetChamps = async () => {
    return await axios.get('http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json')
      .then(res => res.data.data)
      .catch(err => console.log(err))
  }

  return (
    <MatchContext.Provider
      value={{
        matchState,
        apiGetMatches,
        apiGetChamps
      }}
    >{ children }</MatchContext.Provider>
  )
}

export default MatchContext
