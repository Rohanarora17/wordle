import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import WinBanner from '../WinBanner/WinBanner';
import LoseBanner from '../LoseBanner/LoseBanner';

function GuessResults({answer}) {
  

  const [guess,setGuess] = React.useState([]);
  const [status,setStatus] = React.useState('running');
  function handleSubmitGuess(input){
    const nextGuess = [...guess, input];
    setGuess(nextGuess);
    console.log(status);
    if(input === answer){
      setStatus('won');
    }
    else if(nextGuess.length>=NUM_OF_GUESSES_ALLOWED){
      setStatus("lost");
      

    }
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
     gameStatus={status}
    >
    </GuessInput>

    {status === 'lost' && (
      <LoseBanner 
      answer = {answer}></LoseBanner>

    )}

    {status === 'won' && (
      <WinBanner 
      numOfGuesses ={guess.length}
      ></WinBanner>

    )}
      
    </div>
    </>
  )
}

export default GuessResults;
