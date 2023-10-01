import React from 'react';

function GuessInput({handleSubmitGuess}) {
  const [input, setInput] = React.useState([]);

  function handleItems(event){
    event.preventDefault();
    
    if(input.length!=5){
      window.alert('word should be of 5 letters');
      return;


    }
    handleSubmitGuess(input);
    setInput('');
      
    
    
  }
  return <div>
    <form className="guess-input-wrapper"  
    onSubmit={handleItems}
    >
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" 
    required
    minLength={5}
    maxLength={5}
    onChange={(e)=> {
      setInput(e.target.value.toUpperCase());
    }}
    value ={input}
    />
  </form>
  
  </div>;
}

export default GuessInput;
