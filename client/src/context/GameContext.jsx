import React, { createContext } from 'react';
import { useState,useEffect } from 'react';


export const GameContext = createContext()


const GameContextProvider = ({children}) => {
    const [gameScore, setGameScore] = useState(0)

    return ( 
        <GameContext.Provider value={{
            gameScore, setGameScore
        }}>
            {children}
        </GameContext.Provider>
     )
}
 
export default GameContextProvider;
