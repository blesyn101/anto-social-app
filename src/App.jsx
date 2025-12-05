import React from 'react'
import BottomNav from './components/BottomNav'
import { Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import Prayer from './pages/Prayer'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import Post from './pages/Post'
import './App.css'

function App() {
  return (
    <div className='container bg-primary '>
    <div className=" max-w-[430px] mx-auto min-h-screen bg-white shadow-lg-gray-300">
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/prayer' element={<Prayer />} />
        <Route path='/post' element={<Post />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <BottomNav />
    </div>
    </div>
  )
}

export default App