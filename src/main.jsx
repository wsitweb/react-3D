import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Preloader from './components/Preloader'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <Preloader />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </>
)
