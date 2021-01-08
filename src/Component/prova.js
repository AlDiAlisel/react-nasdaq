import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState({});
  const[numTrue, setNumTrue] = useState(0);
 /* const [name, setName] = useState('')
  const [check,setCheck] = useState(false);*/
  useInterval(() => {
    // Your custom logic here
    for (const [key, value] of Object.entries(isRunning)) {
      console.log('ciao ' + value)
      console.log(`${key}: ${value}`);
    }
    setCount(count + 1);
    
  }, numTrue> 0? delay:null);

  
  function handleDelayChange(e) {
    
    setDelay(Number(e.target.value));
  }
 

  function handleIsRunningChange(e) {
  let summ= [];
  
  setIsRunning({...isRunning,[e.target.name]:false})
  console.log(e.target.name)
  let nome=e.target.name;
  let check =e.target.checked;
  console.log(check);
  setIsRunning({...isRunning,[nome]:check});
  let a = isRunning[nome];
  setNumTrue((!a? prevNumTrue => prevNumTrue+1:  prevNumTrue =>prevNumTrue-1));
 console.log(a +'a');
  console.log(isRunning);
  }
  useEffect(()=>{
    console.log(numTrue);
    console.log(isRunning);
  })

  return (
    <>
      <h1>{count}</h1>
      <input name='uno' type="checkbox" checked={isRunning.uno} onChange={handleIsRunningChange} /> Running
      <br />
      <input value={delay} name='ciao' onChange={handleDelayChange} />
      <br />
      <input name='due' type='checkbox' checked={isRunning.due} onChange={handleIsRunningChange} />
    </>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
