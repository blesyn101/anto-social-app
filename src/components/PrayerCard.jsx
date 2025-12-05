import { React } from 'react'
import likeIcon from '../assets/icons/like.svg'
import prayIcon from '../assets/icons/pray.png'

function PrayerCard({username, text, prayedCount, likes}) {
  return (
    <div className='bg-white rounded-2xl p-4 mb-4 shadow-md'>
        {/* Username */}
        <p className='text-sm font-semibold text-primary'>{username}</p>
        {/* Prayer Text */}
        <p className='text-text my-2 mt-1'>{text}</p>
        {/* Footer */}
        <div className="flex justify-start gap-6 text-sm text-gray-500 pb-3">
         <button className='hover:text-primary'> <img src={prayIcon} className='w-5 h-5m inline-block pr-1'></img>{prayedCount} People Prayed</button>
         <button className='hover:text-primary'> <img src={likeIcon} className='w-5 h-5m inline-block pr-1'></img>{likes} </button>
        </div>
    </div>
  )
}

export default PrayerCard