import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import App from "./App"
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.min.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <div className='flex flex-col h-screen bg-green-50'>
    <App />
    <ToastContainer />
  </div>
);