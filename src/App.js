import React, { useState } from 'react'

// Contexts
import { ApiLolContextProvider } from './context/ApiContext'
import { ApiSummonerContextProvider } from './context/ApiSummonerContext'
import { ApiMatchContextProvider } from './context/ApiMatchContext'

// Components
import { Navbar, Search, HandleRoutes } from './components'

const App = () => {
  const [summoner, setSummoner] = useState('')

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Search setSummoner={setSummoner} />
      <ApiSummonerContextProvider>
        <ApiLolContextProvider>
          <ApiMatchContextProvider>
            <HandleRoutes summoner={summoner} />
          </ApiMatchContextProvider>
        </ApiLolContextProvider>
      </ApiSummonerContextProvider>
    </>
  )
}

export default App
