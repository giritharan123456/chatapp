// Import React library
import React, { useContext } from 'react'

// Import Routes and Route from React Router
import { Routes, Route } from 'react-router-dom'

// Import page components
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import {Toaster} from 'react-hot-toast'
import { AuthContext } from '../context/AuthContext'

// Create App component
const App = () => {
      const{authUser}=useContext(AuthContext)

  return (

    // Main div with background image and background sizing
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain">
      <Toaster/>

      {/* Routes contains all application routes */}
      <Routes>

        {/* When URL is "/", display HomePage */}
        <Route path="/" element={authUser? <HomePage />: <Navigate to ="/login"/>} />

        {/* When URL is "/Login", display LoginPage */}
        <Route path="/Login" element={!authUser? <LoginPage /> :<Navigate to="/"/>} />

        {/* When URL is "/Profile", display ProfilePage */}
        <Route path="/Profile" element={authUser ? <ProfilePage />: <Navigate to ="/login"/>} />

      </Routes>

    </div>
  )
}

// Export App component
export default App