
import React from "react";
import Button from "./components/button";
const btn_val = [
                  '/', '7', '8', '9', '*',
                  '4', '5', '6', '-',
                  '1', '2', '3', '+',
                  '0', '.'];


export default function App(){
  
  const [result, setRes] = React.useState('');
  function handleClick(e){
    setRes(result.concat(e.target.id));
  }

  function handleClear(e){
    setRes('');
  }

  function handleC(){
    setRes(result.slice(0, result.length - 1))
  }

  function handleEqual(){
    try{
      setRes(eval(result.toString()))
    }
    catch{
      setRes('Error')
    }
    
  }

  return(
      <div className="wrapper">
      <header>
        Calculator
      </header>
      <div className="app">
      <div className="screen">
        <input type = 'text' value={result}/>
      </div>
      <div className="keypad">
        <button className="btn" id="clear" onClick={handleClear}>AC</button>
        <button className="btn" id='C' onClick={handleC}>C</button>
        {btn_val.map((val, i) => (<Button val={val} handleClick={handleClick} key={i}/>))}
        <button className="btn" onClick={handleEqual}>=</button>
      </div>
    </div>   
    </div> 
  );
}