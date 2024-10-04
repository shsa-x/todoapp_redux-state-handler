import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Handler } from 'redux-state-handler'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Handler>
      <App />
    </Handler>
  </React.StrictMode>,
)
