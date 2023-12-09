import React, { useContext, useEffect, useState } from 'react';
import Question from './Question/Question';
import QuestionContextProvider from '../context/QuestionContext';
import { GameContext } from '../context/GameContext';
// question for test


const GameArea = () => {
    const {gameScore} = useContext(GameContext)

    return (
        <>
            <div>Score : {gameScore}</div>
            <QuestionContextProvider>
                <Question/>
            </QuestionContextProvider>
        </>
    );
}

export default GameArea;
