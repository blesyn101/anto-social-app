import React, { useState } from 'react'
import PrayerCard from '../components/PrayerCard.jsx'
import SubmitPrayerForm from '../components/SubmitPrayerForm.jsx'
import { NavLink } from 'react-router-dom'
import backIcon from '../assets/icons/angle-left.svg'

function Prayer() {
  const [prayers, setPrayers] = useState([
    {id: 1, username: 'BlessingA', text: 'Pray for my family', prayedCount: 10, likes: 5},
    {id: 2, username: 'Uware', text: 'Need strength for exams', prayedCount: 20, likes: 15},
    {id: 3, username: 'Talesbyemmy', text: 'mercy of God', prayedCount: 20, likes: 15},
  ]);

     // Add new prayer to state
   const addPrayer = (newPrayer) => {
    setPrayers([newPrayer, ...prayers]); // newest at the top
   }

  return (
    
    
    <div className='p-4 pb-24'>
    {/* Header */}
    <div className="Header flex items-center mb-4 px-1">
      <NavLink className="back-link"><img src={backIcon} className='nav-icon-sm'></img></NavLink>
      <div className="logo-text font-bold text-center mb-3"><h2>🕊️PRAYER WALL</h2></div>
    </div>
        
    {/* Submit Form Component */}
    <SubmitPrayerForm onSubmit={addPrayer} />
   
   {/* Divider */}
   <hr className='my-4 border-gray-300'/>

   
    {/* Prayer Cards */}
    
    {prayers.map((p) => (
      <PrayerCard key={p.id} 
        username={p.username}
        text={p.text}
        prayedCount={p.prayedCount}
        likes={p.likes}
        {...p}
      />
    ))}</div>
  )
}

export default Prayer