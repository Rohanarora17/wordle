import React from 'react';

function GuessInput() {
  const [input, setInput] = React.useState('');

  function handleItems(item){
    item = item.toUpperCase();
    if(item.length!=5){
      window.alert('word should be of 5 letters');
      return;


    }
    console.log(item);
      
    
    
  }
  return <div>
    <form class="guess-input-wrapper"  
    onSubmit={(e) => {
      e.preventDefault();
      {handleItems(input)};
      setInput('');
    }} 
    >
    <label for="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" 
    onChange={(e)=> {
      setInput(e.target.value);
    }}
    value ={input}
    />
  </form>
  
  </div>;
}

export default GuessInput;
