import '@styles/index.sass'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@components/general'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { context } from '@context/index'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={context}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)

