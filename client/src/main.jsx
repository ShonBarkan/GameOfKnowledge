import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GameArea from './components/GameArea.jsx'
import GameContextProvider from './context/GameContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameContextProvider>
      <GameArea />
    </GameContextProvider>
  </React.StrictMode>,
)
