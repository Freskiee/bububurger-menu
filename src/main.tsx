import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterWrapper from './RouterWrapper'
import './index.css'
import './i18n/config'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterWrapper />
  </React.StrictMode>,
)
