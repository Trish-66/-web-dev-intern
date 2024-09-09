import React, {useState} from 'react'

function Counter() {
    //Initializing state
    const [count, setCount] = useState(0);

    const increment = () => { setCount(count + 1);}
    
    const decrement = () => { setCount(count - 1);}

  return (
    <div style={{ textAlign: 'center' }}>
    <h1>COUNTER: {count} </h1>
    <button onClick={increment}style={{ marginRight: '10px'}}>INCREMENT</button>
    <button onClick={decrement}>DECREMENT</button>
    </div>
  );
}

export default Counter;