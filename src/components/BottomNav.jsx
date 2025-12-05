import React from 'react'
import homeIcon from '../assets/icons/home.svg'
import prayerIcon from '../assets/icons/pray.png'
import plusIcon from '../assets/icons/plus.svg'
import searchIcon from '../assets/icons/search.svg'
import userIcon from '../assets/icons/user.svg'
import { NavLink } from 'react-router-dom'

function BottomNav() {
  return (
    <nav className='fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center h-12 max-w-[430px] mx-auto shadow-lg-gray-300'>
        <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}><img src={homeIcon} className='nav-icon'/></NavLink>
        <NavLink to="/prayer" className={({ isActive }) => (isActive ? "active" : "")}><img src={prayerIcon} className='nav-icon'/></NavLink>
        <NavLink to="/post" className={({ isActive }) => (isActive ? "active" : "")}><img src={plusIcon} className='nav-icon'/></NavLink>
        <NavLink to="/discover" className={({ isActive }) => (isActive ? "active" : "")}><img src={searchIcon} className='nav-icon'/></NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}><img src={userIcon} className='nav-icon'/></NavLink>
    </nav>
  )
}

export default BottomNav