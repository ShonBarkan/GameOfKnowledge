import React, { useContext, useEffect, useState } from 'react';
import Question from './Question/Question';
import { QuestionContext } from '../context/QuestionContext';
import { GameContext } from '../context/GameContext';
import squaredQuestions from '../questionsBank/squareds/squared.json'
// question for test


const GameArea = () => {
    const {gameScore} = useContext(GameContext)
    const {setQuestion, questionNumber} = useContext(QuestionContext)
    const [questionsList, setQuestionsList] = useState([]);
    
    useEffect(() => {
        if (squaredQuestions.length >= 10) {
          const randomData = squaredQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
          setQuestionsList(randomData);
        } else {
          // Handle the case when there are fewer than 10 elements
          setQuestionsList(squaredQuestions);
        }
      }, []);
      
    useEffect(() => {
        setQuestion(questionsList[questionNumber])
    }, [questionNumber,questionsList]);
    return (
        <>
            <div>Score : {gameScore}</div>
            <Question/>
        </>
    );
}

export default GameArea;
