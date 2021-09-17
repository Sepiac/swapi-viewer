import React from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SwapiTabView, SwapiNavBar } from './Components'

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={new QueryClient()}>
        <SwapiNavBar />
        <SwapiTabView />
      </QueryClientProvider>
    </div>
  )
}

export default App
