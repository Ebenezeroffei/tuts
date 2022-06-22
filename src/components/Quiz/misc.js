const reducer = (state,action) => {
    let {questionIndex,correctAnswers,wrongAnswers,startOver,questionsLenght} = state;
    const {type} = action;
    if(type === "CORRECT"){
        if(questionIndex === questionsLenght - 1 && startOver === false){
            correctAnswers++
            startOver = true;
        }else if(questionIndex < questionsLenght - 1){
            questionIndex++;
            correctAnswers++
        }
    }
    else if(type === "WRONG"){
        if(questionIndex === questionsLenght - 1 && startOver === false){
            wrongAnswers++
            startOver = true;
        }else if(questionIndex < questionsLenght - 1){
            questionIndex++;
            wrongAnswers++;
        }
    }
    else if(type === "STARTOVER"){
        questionIndex = 0;
        correctAnswers = 0;
        wrongAnswers = 0;
        startOver = false;
    }
    return {
        ...state,
        questionIndex: questionIndex,
        correctAnswers: correctAnswers,
        wrongAnswers: wrongAnswers,
        startOver: startOver,
    }
}

export {reducer};