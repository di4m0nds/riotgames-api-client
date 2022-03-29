import React, { useEffect, useContext, useState } from 'react'

import ApiContext from '../../context/ApiContext'

const GetChampAssets = ({ styleId, perkId }) => {
  const [perk, setPerk] = useState(undefined)
  const [loader, setLoader] = useState(false)
  const { apiGetPerkById, perks } = useContext(ApiContext)

  useEffect(() => {
    ;(async () => {
      setLoader(true)
      if (perks.length === 0) {
        await apiGetPerkById(styleId, perkId)
      }
      if (perks.length > 0) {
        const style = perks?.filter(style => style.id === styleId)[0]
        style.slots?.forEach(slot => slot?.runes?.forEach(rune => {
          if (rune.id === perkId) {
            setPerk(rune.icon)
          }
        }))
        setLoader(false)
      }
    })()
  }, [perks])

  if (loader) return ''
  return <img src={`https://ddragon.canisback.com/img/${perk}`}></img>
}

export default GetChampAssets
