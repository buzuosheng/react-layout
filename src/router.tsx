import { createBrowserRouter } from 'react-router-dom'
import App from './App.js'
import { Underline } from './components/underline-css/index.js'


export const router = createBrowserRouter([
  {
    path: '',
    element: <App />
  },
  {
    path: 'app',
    element: <App />,
  },
  {
    path: 'unde',
    element: <Underline />
  }
])