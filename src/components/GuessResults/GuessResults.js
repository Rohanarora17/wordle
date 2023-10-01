import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GuessResults({answer}) {
  

  const [guess,setGuess] = React.useState([]);
  function handleSubmitGuess(input){
    setGuess([...guess, input]);
  }
  return(
    <>
    <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((num) =>{
      
      
      return (
        
        <Guess key ={num} value= {guess[num]} classValue={checkGuess(guess[num], answer)}/>
        
        
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
