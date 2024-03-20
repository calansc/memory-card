import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/Header.jsx"
import App from "./components/App.jsx"
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
