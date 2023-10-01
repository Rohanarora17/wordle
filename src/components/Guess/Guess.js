import React from 'react';
 import { range } from '../../utils'


function Guess({value ,classValue}) {
 
  return(
    <p className='guess'>
    {range(5).map((num) =>(

      <span key ={num} className={classValue? 'cell ' +classValue[num].status: 'cell'}>{value? value[num] : undefined}</span>

    ))}
    </p>
    
      

      
      
  );
  
}

export default Guess;
