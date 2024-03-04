import { createBrowserRouter } from 'react-router-dom'
import App from './App.js'
import { Home } from './components/Index.js'
import { Underline } from './components/underline-css/index.js'


export const router = createBrowserRouter([
  {
    path: '',
    element: <Home />
  },
  {
    path: 'app',
    element: <App />,
  },
  {
    path: 'under-line',
    element: <Underline />
  }
])