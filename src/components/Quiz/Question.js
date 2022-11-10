import React from 'react';

const Question = ({questionText}) => {
    return (
        <>
            <h1 className='font-semibold text-2xl text-center text-gray-800 my-5'>{questionText}</h1>
        </>
    );
}

export default Question;