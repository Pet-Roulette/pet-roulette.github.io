import logo from './logo.png';
import './App.css';
import React, { useRef } from 'react';
import LocationFinder from './LocationFinder';

function App() {
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"></link>
  const postalCodeRef = useRef()
  function handlePostalCode(e) {
    const postalCode =  postalCodeRef.current.value
    if (postalCode === '') return
    postalCodeRef.current.value = null
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <LocationFinder />
            <input ref={postalCodeRef} type="text" />
            <button onClick={handlePostalCode}>Search</button>
          </p>
          <a
            className="App-link"
            href="https://www.petfinder.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Petfinder
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
