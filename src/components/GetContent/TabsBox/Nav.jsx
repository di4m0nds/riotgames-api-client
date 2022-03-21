import React from 'react'

const tabs = [
  { label: 'ALL GAMES' },
  { label: 'CLASSIC' },
  { label: 'ARAM' }
]
const nickmap = {
  CLASSIC: "Summoner's Rift",
  ARAM: 'Howling Abyss'
}

const Nav = ({ setSelectedTab, selectedTab }) => {
  return (
    <nav>
      <ul>
        {tabs.map((item) => (
          <li
            key={item.label}
            className={item === selectedTab ? 'selected' : ''}
            onClick={() => setSelectedTab(item)}
          >
            {`${nickmap[item.label] ? nickmap[item.label] : item.label}`}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
