// This two libraries are used to manipulate Web DOM
import React from 'react'
import ReactDOM from 'react-dom/client' //Implimentation of React for Web. (For mobile applications we use React Native)

import App from './App.jsx'//components

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
