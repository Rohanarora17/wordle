import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
function GuessResults() {

  const [guess,setGuess] = React.useState([]);
  function handleSubmitGuess(input){
    setGuess([...guess, input]);
  }
  return(
    <>
    <div className="guess-results">
    {guess.map((item, index) =>{
      return (
        <p className="guess" key = {index}> {item}</p>
        
      )
    })}
    <GuessInput
     handleSubmitGuess={handleSubmitGuess}
    >
    </GuessInput>
      
    </div>
    </>
  )
}

export default GuessResults;
