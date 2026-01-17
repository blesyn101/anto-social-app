import React from 'react'
import { Outlet } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import TopNav from './components/TopNav'
import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSideBar'

function Layout() {
  return (
    <div className='bg-[#F4F2EE] shadow-lg-gray-300 min-h-screen lg:mt-12'>
         {/* Top Nav - always visible */}
         <TopNav />

           {/* Main container */}
           <div className='mx-auto px-4 lg:px-8 flex flex-col lg:flex lg:flex-row gap-4 max-w-[1200px] mt-4 lg:mt-8' >
                {/* Left Sidebar - visible on large screens */}
                <div className='hidden lg:block lg:w-1/4 bg-primary rounded-2xl p-4 mt-3.5'>
                    <LeftSideBar />
                </div>
                {/* Main Content Area */}
                <main className='w-full lg:w-1/2 lg:mx-4'>
                    <Outlet />
                </main>
                {/* Right Sidebar - visible on large screens */}
                <div className='hidden lg:block lg:w-1/4 bg-primary rounded-2xl p-4 mt-3.5'>
                    <RightSideBar />
                </div>
           </div>
              {/* Bottom Nav - only visible on small screens */}
             <BottomNav />
    </div>
  )
}

export default Layout