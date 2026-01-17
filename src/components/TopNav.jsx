import React from 'react'
import homeIcon from '../assets/icons/home.svg'
import prayerIcon from '../assets/icons/pray.png'
import plusIcon from '../assets/icons/plus.svg'
import searchIcon from '../assets/icons/search.svg'
import userIcon from '../assets/icons/user.svg'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import SearchBar from './SearchBar'

function TopNav() {
  const {currentUser} = useAuth();
  return (
    <nav className='hidden md:flex fixed top-0 left-0 right-0 bg-white border-t justify-around items-center h-12  mx-auto shadow-lg-gray-300'>
     <div className='flex items-center gap-3'>
             {/* Left: Logo */}
       <h2 className="logo-text font-bold">ANTO</h2>
       {/* Center: Search */}
      <div className="flex-1 max-w-md">
        <SearchBar placeholder="Search..." compact />
      </div>
        </div>
        
        <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}><img src={homeIcon} className='nav-icon'/></NavLink>
        <NavLink to="/prayer" className={({ isActive }) => (isActive ? "active" : "")}><img src={prayerIcon} className='nav-icon'/></NavLink>
        <NavLink to="/post" className={({ isActive }) => (isActive ? "active" : "")}><img src={plusIcon} className='nav-icon'/></NavLink>
        <NavLink to="/discover" className={({ isActive }) => (isActive ? "active" : "")}><img src={searchIcon} className='nav-icon'/></NavLink>
        {/* <NavLink to="/profile/:id" className={({ isActive }) => (isActive ? "active" : "")}><img src={userIcon} className='nav-icon'/></NavLink> */}
        <NavLink to={`/profile/${currentUser.id}`} className={({ isActive }) => (isActive ? "active" : "")}><img src={userIcon} className='nav-icon'/></NavLink>
        <div className='w-8'></div>
    </nav>
  )
}

export default TopNav