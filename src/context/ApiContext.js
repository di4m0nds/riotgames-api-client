import React, { useState } from 'react'
import axios from 'axios'

const Context = React.createContext({})
const baseUrl = 'http://localhost:6969/api/'

export function ApiLolContextProvider ({ children }) {
  const [summonerData, setSummonerData] = useState({})
  const [freeChampsRotation, setFreeChampsRotation] = useState({})
  const [matchesData, setMatchesData] = useState([])
  const [championMasteryData, setChampionMasteryData] = useState([])
  const [perks, setPerks] = useState([])

  const apiGetSummoner = async (extUrl) => {
    let result = {}
    result = await axios.get(`${baseUrl}summoner/${extUrl}`)
      .then(response => response)
      .catch(e => {
        setSummonerData(undefined)
      })
    if (result?.data?.puuid === undefined) {
      setSummonerData(undefined)
      return
    }

    const response = await axios.get(`${baseUrl}summoner/icon/${result?.data?.profileIconId}`)
    setSummonerData({
      summonerPuuid: result?.data?.puuid,
      summonerId: result?.data?.id,
      summoner: result?.data?.name,
      summonerLevel: result?.data?.summonerLevel,
      icon: response?.data?.iconUrl
    })
  }

  const apiGetMatches = async (extUrl) => {
    await axios.get(`${baseUrl}matches/${extUrl}`)
      .then(res => {
        setMatchesData(res.data)
      })
      .catch(err => console.error(err))
  }

  const apiGetChamps = async () => {
    const result = await axios.get(`${baseUrl}champions/all`)
    return result.data.data
  }

  const apiGetChampData = async (champ) => {
    const result = await axios.get(`${baseUrl}champions/champ/${champ}`)
      .catch(err => console.log(err))
    return result?.data
  }

  const apiGetChampionMastery = async (region, summonerId) => {
    const result = await axios.get(`${baseUrl}summoner/CM/${region}&${summonerId}`)
      .catch(err => console.log(err))
    if (championMasteryData.length === 0) {
      setChampionMasteryData(result?.data)
    }
  }

  const getFirstChampMastery = async (championsMastery) => {
    if (championsMastery?.length > 0) {
      const champs = await apiGetChamps()
      const champData = Object.values(champs).filter(champ => Number(champ?.key) === championsMastery[0]?.champId)
      const allInfoChamp = await apiGetChampData(champData[0]?.id)
      return allInfoChamp
    }
    return {}
  }

  const apiGetFreeRotation = async (region) => {
    const response = await axios.get(`${baseUrl}champions/free/${region}`)
    const results = response.data?.freeChampionIdsForNewPlayers
    const allFreeChamps = {}

    Object.values(await apiGetChamps()).forEach(el => {
      if (results[el.key] !== undefined) {
        allFreeChamps[el.name] = el
      }
    })

    setFreeChampsRotation(allFreeChamps)
  }

  const apiGetPerkById = async () => {
    if (perks.length === 0) {
      const response = await axios.get('https://ddragon.canisback.com/latest/data/en_US/runesReforged.json')
      setPerks(response?.data)
    }
  }

  const apiGetSummonerById = async (id) => {
    const response = await axios.get('https://ddragon.canisback.com/latest/data/en_US/summoner.json')
    let result
    Object.values(response?.data?.data).forEach(summoner => {
      if (Number(summoner.key) === Number(id)) result = summoner.id
    })
    return result
  }

  const apiClear = async () => {
    await axios.get('http://localhost:6969/srv/clear')
  }

  return (
   <Context.Provider
    value={{
      summonerData,
      apiGetSummoner,
      apiGetMatches,
      matchesData,
      apiGetChamps,
      apiGetFreeRotation,
      freeChampsRotation,
      apiGetChampData,
      apiGetChampionMastery,
      championMasteryData,
      getFirstChampMastery,
      apiClear,
      apiGetPerkById,
      perks,
      apiGetSummonerById
    }}
   >
      {children}
    </Context.Provider>
  )
}

export default Context
