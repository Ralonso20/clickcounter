import './App.css';
import clickCounterLogo from './images/clickcounter-logo.svg';
import Button from './components/Button'
import Counter from './components/Counter';
import {useState} from 'react';

function App() {

  const [clicksNumber, setClicksNumeber] = useState(0); 
  const clickManage = () => { setClicksNumeber(clicksNumber + 1);}
  const resetCounter = () => { setClicksNumeber(0); }

  return (
    <div className='App'>
      <div className='clickcounter-logo-container'>
        <img
          className='clickcounter-logo'
          src={clickCounterLogo}
          alt='Click Counter Logo'
        />
      </div>
      <Counter clicksNumber={clicksNumber}/>

      <div className='main-container'>
        <Button
          text='Click'
          clickButton={true}
          clickManage={clickManage}
        />

        <Button
          text='Reset'
          clickButton={false}
          clickManage={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
