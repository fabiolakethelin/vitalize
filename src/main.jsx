import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StateProvider } from './utils/StateProvider'
import reducer, { initial } from './utils/Reducer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initial={initial} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);