import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.


function Game() {
  return(
    <>
      <GuessResults 
      answer = {answer}>
      </GuessResults>
  
      
  </>


  )
  
}

export default Game;
