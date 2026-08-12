import React, { useState } from 'react';

function Calculator() {
  const [num, setNum] = useState('');

  function addNum(val) {
    setNum(num + val);
  }

  function clearAll() {
    setNum('');
  }

  function calc() {
    try {
      setNum(eval(num).toString());
    } catch {
      setNum('Error');
    }
  }

  return (
    <div style={{ padding: '20px', maxWidth: '250px', margin: 'auto' }}>
      <div style={{ border: '1px solid black', padding: '10px', fontSize: '24px', textAlign: 'right', marginBottom: '10px' }}>
        {num || '0'}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
        <button onClick={() => addNum('7')}>7</button>
        <button onClick={() => addNum('8')}>8</button>
        <button onClick={() => addNum('9')}>9</button>
        <button onClick={() => addNum('/')}>/</button>

        <button onClick={() => addNum('4')}>4</button>
        <button onClick={() => addNum('5')}>5</button>
        <button onClick={() => addNum('6')}>6</button>
        <button onClick={() => addNum('*')}>*</button>

        <button onClick={() => addNum('1')}>1</button>
        <button onClick={() => addNum('2')}>2</button>
        <button onClick={() => addNum('3')}>3</button>
        <button onClick={() => addNum('-')}>-</button>

        <button onClick={() => addNum('0')}>0</button>
        <button onClick={() => addNum('.')}>.</button>
        <button onClick={calc}>=</button>
        <button onClick={() => addNum('+')}>+</button>

        <button onClick={clearAll} style={{ gridColumn: 'span 4' }}>Clear</button>
      </div>
    </div>
  );
}

export default Calculator;
