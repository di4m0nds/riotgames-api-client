import React, { useState } from 'react'

// Contexts
import { ApiLolContextProvider } from './context/ApiContext'
import { ApiSummonerContextProvider } from './context/ApiSummonerContext'
import { ApiMatchContextProvider } from './context/ApiMatchContext'
import { ApiYTContextProvider } from './context/ApiYTContext'

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
            <ApiYTContextProvider>
              <HandleRoutes summoner={summoner} />
            </ApiYTContextProvider>
          </ApiMatchContextProvider>
        </ApiLolContextProvider>
      </ApiSummonerContextProvider>
    </>
  )
}

export default App
