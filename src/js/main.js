import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button';

const App = () => {
  return (
    <div> 
      1Your App injected to 1DOM correctly! 
      <Button />
    </div>
  )
}

// Message Listener function
chrome.runtime.onMessage.addListener((request, sender, response) => {
  // If message is injectApp
  if(request.injectApp) {
    // Inject our app to DOM and send response
    injectApp();
    response({
      startedExtension: true,
    });
  }
});

function injectApp() {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "chromeExtensionReactApp");
  document.querySelector(".container").appendChild(newDiv);
  ReactDOM.render(<App />, newDiv);
}

injectApp()



