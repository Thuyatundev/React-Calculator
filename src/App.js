import Output from './component/Output';
import Input from './component/Input';
import Button from './component/Button';
import './App.css';
import { useState } from 'react';

function App() {
  const [output, setOutput] = useState(0);
  const [input, setInput] = useState(0);

  function clickEvent(value) {
    if (value === 'C') {
      setInput(0);
      setOutput(0);
    } else if (value === 'Back') {
      if (input !== 0) {
        input.length === 1 ? setInput(0) : setInput(input.slice(0, input.length - 1));
      }
    } else if (value === '=') {
      setOutput(eval(input));
      setInput(0);
    } else {
      input === 0 ? setInput(value) : setInput(input + value);
    }
  }
  return (
    <div className="App">
      <Output output={output} />
      <Input input={input} />
      <Button clickEvent={clickEvent} />
    </div>
  );
}

export default App;
