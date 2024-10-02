import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Route.jsx'
function App() {

  return (
    <>
      <div className='max-w-screen-3xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
