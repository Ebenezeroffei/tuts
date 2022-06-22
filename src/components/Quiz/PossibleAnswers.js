import React from 'react';

const PossibleAnswer = ({possibleAnswerText,dispatch,questionAnswer}) => {
    let dispatchText = possibleAnswerText.toLowerCase() === questionAnswer.toLowerCase()? "CORRECT" : "WRONG";
    return (
        <>
            <section onClick={() => dispatch({
                type: dispatchText,
            })} className='possible-answer max-w-xl mx-auto capitalize transition-all duration-150 relative border text-center py-3 text-sm text-semibold shadow rounded-lg cursor-pointer mb-4'>
                <span className='border-2 border-gray-500 inline-block w-4 h-4 bg-white rounded-full absolute top-1 left-1'></span>
                {possibleAnswerText}
            </section>
        </>
    );
}

export default PossibleAnswer;