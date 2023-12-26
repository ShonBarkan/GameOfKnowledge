import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GameArea from './components/GameArea.jsx'
import GameContextProvider from './context/GameContext.jsx'
import QuestionContextProvider from './context/QuestionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameContextProvider>
      <QuestionContextProvider>
        <GameArea />
      </QuestionContextProvider>
    </GameContextProvider>
  </React.StrictMode>,
)
