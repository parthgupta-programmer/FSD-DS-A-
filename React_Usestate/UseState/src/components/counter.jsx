import React,{useState} from 'react'

const counter = () => {

  const [count,setCount]=useState(0);
  function increment(){
    if (count<10){
        setCount(count+1);
    }
    else{
        alert('Maximum no. reached.')
    }
  }
  function decrement(){
    if (count<10){
        setCount(count-1);
    }
    else{
        alert('Count cannot be negative.')
    }
  }
  return (
    <div>
      <h3>Counter App</h3>

      <br></br>
      <button onClick={increment}>+</button>
      <span> {count} </span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default counter
