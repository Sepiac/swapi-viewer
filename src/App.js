import React from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SwapiTabView } from './Components'

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={new QueryClient()}>
        <SwapiTabView />
      </QueryClientProvider>
    </div>
  )
}

export default App
