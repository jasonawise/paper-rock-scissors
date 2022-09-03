import * as React from 'react';
import './App.css';
import { Shoot, paperRockScissor } from './utili';

function App() {
  const [playerShot, setPlayerShot] = React.useState(null);
  function handleButtonClick() {
    // eslint-disable-next-line no-console
    console.log(`SHOOT`);
    let _playerShot = Shoot();
    _playerShot -= 1;
    // eslint-disable-next-line no-console
    console.log(_playerShot);
    setPlayerShot(paperRockScissor[_playerShot]);
  }
  return (
    <div className="App">
      <button type="button" onClick={handleButtonClick}>
        Shoot
      </button>
      <p>{playerShot}</p>
    </div>
  );
}

export default App;
