import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
const App = lazy(()=> import("./App.jsx"))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
)
