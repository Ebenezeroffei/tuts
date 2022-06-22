import React from 'react';


const Footer = ({startOver,questionNumber,questionsLenght,dispatch}) => {
    return (
        <>
            <section className='mt-5 text-center'>
                {
                    startOver 
                        ? <button onClick={
                            () => dispatch({type: "STARTOVER"})
                        } className='transition-all duration-150 py-3 bg-blue-500 w-44 rounded shadow hover:shadow-xl'>Start Over</button>
                        : <h1 className='text-md'>{`${questionNumber}/${questionsLenght} Questions Answered`}</h1> 
                }
            </section>
        </>
    );
}

export default Footer;