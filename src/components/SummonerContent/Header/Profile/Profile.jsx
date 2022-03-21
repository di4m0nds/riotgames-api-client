import React from 'react'

const Profile = ({ icon, name, level }) => {
  return (
    <div className='profile-summoner'>
      <img src={icon} alt="profile-summoner" />
      <h3>{name} <span>{level} Level</span></h3>
    </div>
  )
}

export default Profile
