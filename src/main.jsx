import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AnimatedCursor from "react-animated-cursor"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          background: 'linear-gradient(194deg, rgba(185,178,189,1) 0%, rgba(85,82,80,1) 50%, rgba(152,145,134,1) 100%)'
        }}
        // outerStyle={{
        //   background: 'linear-gradient(194deg, rgba(185,178,189,1) 0%, rgba(85,82,80,1) 50%, rgba(152,145,134,1) 100%)',
        //   border: 'none'
        // }}
        />
  </React.StrictMode>,
)
