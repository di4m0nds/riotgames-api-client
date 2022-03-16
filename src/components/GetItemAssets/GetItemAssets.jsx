import React from 'react'

const GetItemAssets = ({ imageId }) => {
  if (imageId > 0) {
    return <img className='imgItem' src={`https://ddragon.leagueoflegends.com/cdn/12.5.1/img/item/${imageId}.png`} alt="" />
  } else {
    return <div className='empty-box'></div>
  }
}

export default GetItemAssets
