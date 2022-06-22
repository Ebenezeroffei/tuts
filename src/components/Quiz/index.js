import React,{useReducer} from 'react';
import questions from './data';
import { reducer } from './misc';
import Navbar from './Navbar';
import Question from './Question';
import PossibleAnswer from './PossibleAnswers';
import './index.css';
import Scores from './Scores';
import Footer from './Footer';


const Quiz = () => {

    const defaultState = {
        startOver: false,
        wrongAnswers: 0,
        correctAnswers: 0,
        questionIndex: 0,
        questionsLenght: questions.length,
    };

    const [state,dispatch] = useReducer(reducer,defaultState);

    return (
        <>
            <Navbar/>
            <main className='p-3 select-none'>
                <Question questionText={questions[state.questionIndex].questionText}/>
                {
                    questions[state.questionIndex].answers.map(
                        (answer) => <PossibleAnswer possibleAnswerText={answer} dispatch={dispatch} questionAnswer={questions[state.questionIndex].answer}/>
                    )
                }
                <div className='flex mt-10 justify-evenly'>
                    <Scores score={state.wrongAnswers} scoreText={"Wrong Answers"} scoreColor={'text-red-500'}/>
                    <Scores score={state.correctAnswers} scoreText={"Correct Answers"} scoreColor={'text-green-500'}/>
                </div>
                <Footer dispatch={dispatch} startOver={state.startOver} questionNumber={state.questionIndex + 1} questionsLenght={questions.length}/>
            </main>
        </>
    );
}

export default Quiz;