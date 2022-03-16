import React, { useState } from 'react'

// Contexts
import { ApiLolContextProvider } from './context/ApiContext'

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
      <ApiLolContextProvider>
        <HandleRoutes summoner={summoner} setSummoner={setSummoner} />
      </ApiLolContextProvider>
    </>
  )
}

export default App
