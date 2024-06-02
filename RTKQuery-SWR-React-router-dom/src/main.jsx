import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider as ReduxProvider} from 'react-redux';
import store from '../store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ReduxProvider store={store}>
    <App />
    </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
