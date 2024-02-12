import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState(null);

  const appendValue = (value) => {
    setDisplay(display + value);
  };

  const handleOperation = (op) => {
 
    if (op == "%") {
      if(display.split('%').length == 1){
      appendValue(op);
     }
  
    } else if (op === '=') {
      calculate();
    } else {
      appendValue(op);
    }
  };

  const calculate = () => {
    let tokens = display.split(/([+\-×÷%])/).filter(Boolean);
    let computedResult = 0;
    let currentOp = '+';

    tokens.forEach(token => {
      if (['+', '-', '×', '÷',"%"].includes(token)) {
        currentOp = token;
       
      } else {
        switch (currentOp) {
          
          case '+': computedResult += parseFloat(token); break;
          case '-': computedResult -= parseFloat(token); break;
          case '×': computedResult *= parseFloat(token); break;
          case '÷': computedResult /= parseFloat(token); break;
          case '%': computedResult = (display.split('%')[0]/100)*display.split('%')[1]; break;
          default: break;
        }
      }
    });

    setDisplay(computedResult.toString());
    setResult(computedResult); 
  };

  const clearAll = () => {
    setDisplay('');
    setResult(null);
  };

  return (
  <>

<div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
  <h1 className="text-4xl font-light text-white mb-8">ReactJs Calculator</h1>
      <div className="w-80 bg-gray-800 rounded-xl shadow-2xl">
      <div className="p-4 text-white text-3xl text-right bg-gray-700 rounded-t-xl overflow-auto min-h-[5rem]">
  {display || result}
</div>
        <div className="grid grid-cols-4 p-4 gap-2">
        <button className="col-span-2 bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={clearAll}>AC</button>
  <button className="bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={() => handleOperation('%')}>%</button>
  <button className="bg-orange-500 hover:bg-orange-600 rounded p-2" onClick={() => handleOperation('÷')}>÷</button>
  <button className="bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={() => appendValue('7')}>7</button>
  <button className="bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={() => appendValue('8')}>8</button>
  <button className="bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={() => appendValue('9')}>9</button>
  <button className="bg-orange-500 hover:bg-orange-600 rounded p-2" onClick={() => handleOperation('×')}>×</button>
  <button className="bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={() => appendValue('4')}>4</button>
  <button className="bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={() => appendValue('5')}>5</button>
  <button className="bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={() => appendValue('6')}>6</button>
  <button className="bg-orange-500 hover:bg-orange-600 rounded p-2" onClick={() => handleOperation('-')}>-</button>
  <button className="bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={() => appendValue('1')}>1</button>
  <button className="bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={() => appendValue('2')}>2</button>
  <button className="bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={() => appendValue('3')}>3</button>
  <button className="bg-orange-500 hover:bg-orange-600 rounded p-2" onClick={() => handleOperation('+')}>+</button>
  <button className="col-span-2 bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={() => appendValue('0')}>0</button>
  <button className="bg-blue-500 hover:bg-blue-600 rounded p-2" onClick={() => appendValue('.')}>.</button>
          <button className="bg-orange-500 hover:bg-orange-600 rounded p-2" onClick={() => calculate()}>=</button>
        </div>
      </div>
    </div>
    </>);
};




export default Calculator;
