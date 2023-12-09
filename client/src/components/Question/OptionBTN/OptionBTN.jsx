import React, { useContext, useState } from 'react';
import "./OptionBTN.css"
import { GameContext } from '../../../context/GameContext';

const OptionBTN = ({option}) => {
    const {setGameScore} = useContext(GameContext)

    const [showColor , setShowColor] = useState(false)
    const handleOptionClick = () => {
        setShowColor(true)
        setGameScore(prev=> option.isCorrect? prev + 10 : prev - 5)
    };

    return (
        <button
          onClick={handleOptionClick}
          style={{backgroundColor:showColor? option.isCorrect? 'green': 'red' : ''}}
        >
            {option.option}
        </button>
    );
}

export default OptionBTN;
