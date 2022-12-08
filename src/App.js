import React, { useState } from 'react'
import './App.css';

const operands = [
  {operand:'+',title:'add'},
  {operand:'-',title:'subtract'},
  {operand:'/',title:'divide'},
  {operand:'*',title:'multiply'},
];
const clear = 

 {action:'',title:'AC'};

const decimal = 

 {operand:'.',title:'decimal'};

const equals = 

 {operand:'=',title:'equals'};

const numbers =[
  {number:0,title:'zero'},
  {number:1,title:'one'},
  {number:2,title:'two'},
  {number:3,title:'three'},
  {number:4,title:'four'},
  {number:5,title:'five'},
  {number:6,title:'six'},
  {number:7,title:'seven'},
  {number:8,title:'eight'},
  {number:9,title:'nine'},
]

function App() {
  const [currentOperand,setCurrentOperand] = useState({operand:''})
  const [total,setTotal] = useState({total:''})
  const [currentNumber,setCurrentNumber] = useState({number:''})
  const [usesNegative,setUsesNegative] = useState(false)

  function handleNumber(number){
    if(currentNumber.number === number){

    } else if((total.total !== '') && (!currentOperand.operand)){

    setCurrentNumber({number:number});
    setTotal({total:''})
    setCurrentOperand(''); 

   } else if (currentNumber.number !== '' && (number !== '.' || !(currentNumber.number.toString().includes('.')))){

    setCurrentNumber({number: currentNumber.number +''+ number})

    } else if (number !== '.' || !(currentNumber.number.toString().includes('.'))){
      
    setCurrentNumber({number:number})
    }
  }

  function handleClear(value){
    setCurrentNumber({number:value});
    setCurrentOperand({operand:value});
    setTotal({total:value})
    setUsesNegative(false)
  }

  function handleOperand(operand){
    if(currentOperand.operand && currentNumber.number && total.total){
      handleEqual();
      setCurrentOperand({operand:operand})
    } else if(!currentOperand.operand && total.total === ''){
      setTotal({total:currentNumber.number});
      setCurrentNumber({number:''})
      setCurrentOperand({operand:operand})
    } else if(currentOperand.operand && operand ==='-'){ 
      setUsesNegative(true);
    } else {
      setCurrentOperand({operand:operand})
      setUsesNegative(false)
    }
  }

  function handleEqual(){
    let sumTotal = Number.parseFloat(total.total);
    let current = Number.parseFloat(currentNumber.number);
    switch(currentOperand.operand){
      case '-': 
      setTotal({total: sumTotal - ((usesNegative ?  -1 * current : current  ))}); 
      setCurrentNumber({number:''}); 
      setCurrentOperand(''); break;
      case '+': 
      setTotal({total: sumTotal + ((usesNegative ?  -1 * current : current  ))}); 
      setCurrentNumber({number:''});
      setCurrentOperand(''); break;
      case '/': 
      setTotal({total: sumTotal/ ((usesNegative ?  -1 * current : current  ))}); 
      setCurrentNumber({number:''}); 
      setCurrentOperand(''); break;
      case '*': 
      
      setTotal({total: sumTotal * ((usesNegative ?  -1 * current : current  ))});
       setCurrentNumber({number:''});
       setCurrentOperand(''); break;
      default: console.log(`The total was ${total.total} your current operand is ${currentOperand.operand} and your current number is ${currentNumber.number}`)
    }
    setUsesNegative(false)
    }
  
  

  return (
    <div className="App">
      <header className="App-header">
      <div className='calculator'>
          <div id='display' className='display'>
          <p id='display' className='total-screen'>{`${total.total? total.total: (currentNumber.number ? '': 0)}${currentOperand.operand ? currentOperand.operand :''}${usesNegative ? '-':''}${currentNumber.number ? currentNumber.number:''}`}</p>
        
          </div>
          <div className='buttons'>
          <div className='numbers'>
              {numbers.map((obj)=>{
                return(
                <div id={obj.title} className='number' onClick={() => handleNumber(obj.number)}>{obj.number}</div>
              )})}
          </div>
          <div className='operands'>
              {operands.map((obj) => {
                return(
                <div id={obj.title} className='operand' onClick={()=> handleOperand(obj.operand)}>{obj.operand}</div> 
                )
              })}
               <div id={decimal.title} className='decimal' onClick={()=>handleNumber('.')}>{decimal.operand}</div>
               <div id={'clear'} className='clear' onClick={()=>handleClear(clear.action)}>{clear.title}</div>  
          </div>
      <div id={equals.title} className='equal' onClick={()=>handleEqual()}>{equals.operand}</div>
      </div>
      </div>
      </header>
    </div>
  );
}

export default App;
