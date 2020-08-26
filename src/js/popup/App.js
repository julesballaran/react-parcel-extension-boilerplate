/*global chrome*/
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to popupasdasdasd
        </p>
        <p>
          Edit <code>src/popup/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactasda
        </a>
        <button
          onClick={() => {
            chrome.tabs.query({
              active: true,
              currentWindow: true,
            }, (tabs) => {
              // Send message to script file
              chrome.tabs.sendMessage(
                tabs[0].id,
                { injectApp: true },
                // response => window.close()
              );
            });
          }}
        >click</button>
      </header>
    </div>
  );
}

export default App;
