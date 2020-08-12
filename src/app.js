import React, { useState } from 'react';
import { Cards } from './components/cards';
import logo from './logo.svg';

function App() {
  const [cardsAreShown, showCards] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-600">
      <header className="text-center">
        <img src={logo} className="App-logo" alt="logo"/>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a className="block" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>


        <button onClick={_e => showCards(true)} className="block my-6 text-4xl text-teal-500">
          Show Material UI Cards
        </button>
      </header>

      <div className={`${cardsAreShown ? 'container mx-auto bg-white' : 'hidden'}`}>
        <Cards/>
      </div>
    </div>
  );
}

export default App;
