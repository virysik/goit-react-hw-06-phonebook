import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
