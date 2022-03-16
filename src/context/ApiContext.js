import React, { useState } from 'react'
import axios from 'axios'

const Context = React.createContext({})
const baseUrl = 'http://localhost:6969/'

export function ApiLolContextProvider ({ children }) {
  const [loader, setLoader] = useState(false)

  const [summonerData, setSummonerData] = useState({})
  const [freeChampsRotation, setFreeChampsRotation] = useState({})
  const [matchesData, setMatchesData] = useState([])

  const apiGetSummoner = async (extUrl) => {
    let result = {}
    result = await axios.get(`${baseUrl}summoner/${extUrl}`)
      .then(response => response)
      .catch(e => {
        setLoader(false)
        setSummonerData(undefined)
      })

    if (result?.data?.puuid === undefined) {
      setLoader(false)
      setSummonerData(undefined)
      return
    }

    const response = await axios.get(`${baseUrl}summoner/icon/${result?.data?.profileIconId}`)

    setSummonerData({
      summonerPuuid: result?.data?.puuid,
      summoner: result?.data?.name,
      summonerLevel: result?.data?.summonerLevel,
      icon: response?.data?.iconUrl
    })

    setLoader(false)
  }

  const apiGetMatches = async (extUrl) => {
    await axios.get(`${baseUrl}matches/${extUrl}`)
      .then(res => {
        setMatchesData(res.data)
        setLoader(false)
      })
      .catch(err => console.error(err))
  }

  const apiGetChamps = async () => {
    const result = await axios.get('http://localhost:6969/champions/all')
    return result.data.data
  }

  const apiGetFreeRotation = async (region) => {
    const response = await axios.get(`http://localhost:6969/champions/free/${region}`)
    const results = response.data?.freeChampionIdsForNewPlayers
    const allFreeChamps = {}

    Object.values(await apiGetChamps()).forEach(el => {
      if (results[el.key] !== undefined) {
        allFreeChamps[el.name] = el
      }
    })

    setFreeChampsRotation(allFreeChamps)
  }

  return (
   <Context.Provider
    value={{
      summonerData,
      apiGetSummoner,
      loader,
      setLoader,
      apiGetMatches,
      matchesData,
      apiGetChamps,
      apiGetFreeRotation,
      freeChampsRotation
    }}
   >
      {children}
    </Context.Provider>
  )
}

export default Context
