import React from 'react';

const Scores = ({score,scoreText,scoreColor}) => {
    return (
        <>
            <section className='text-center'>
                <h1 className='text-lg font-light'>{scoreText}</h1>
                <h2 className={`text-6xl ${scoreColor}`}>{score}</h2>
            </section>
        </>
    );
}

export default Scores;