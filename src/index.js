import React from 'react'
import ReactDOM from 'react-dom'
import 'tailwindcss/tailwind.css'
import 'remixicon/fonts/remixicon.css'
import AOS from 'aos'
import App from './App'
import 'aos/dist/aos.css'

import reportWebVitals from './reportWebVitals' // You can also use <link> for styles
// ..
AOS.init()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
