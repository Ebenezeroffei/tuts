import React from 'react';

const Question = ({questionText}) => {
    return (
        <>
            <h1 className='font-semibold text-lg text-gray-800 mb-4'>{questionText}</h1>
        </>
    );
}

export default Question;