import React from 'react'
import Layout from './Layout'
import { Routes, Route } from 'react-router-dom'


import Feed from './pages/Feed'
import Prayer from './pages/Prayer'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import Post from './pages/Post'
import './App.css'

function App() {
  return (
      <Routes>
        {/* Layout wrapper */}
        <Route element={<Layout />}>
          <Route path='/' element={<Feed />} />
          <Route path='/prayer' element={<Prayer />} />
          <Route path='/post' element={<Post />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/profile/a:id' element={<Profile />} />
        </Route>
      </Routes>
  )
}

export default App