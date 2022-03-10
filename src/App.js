import React, { useState } from 'react'

// Contexts
import { ApiLolContextProvider } from './context/ApiContext'

// Components
import { Navbar, BgAnimated, HandleRoutes } from './components'

const App = () => {
  const [summoner, setSummoner] = useState('')

  return (
    <>
      <BgAnimated />
      <header>
        <Navbar />
      </header>
      <ApiLolContextProvider>
        <HandleRoutes summoner={summoner} setSummoner={setSummoner} />
      </ApiLolContextProvider>
    </>
  )
}

export default App
