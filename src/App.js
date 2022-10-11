import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './layouts/Main'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [],
    },
    {
      path: '*',
      element: <div className="fs-2 fw-bold text-center">404. NOT FOUND</div>,
    },
  ])
  return (
    <div className="main_container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
