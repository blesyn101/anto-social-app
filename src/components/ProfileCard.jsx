import React from 'react'

function ProfileCard({ profile }) {
      if (!profile) return null; // prevents crashing

  return (
    <div className='bg-white rounded-xl p-4 mb-6 shadow'>
        {/* Top with image */}
        <div className='flex items-center gap-4'>
            <img
                src={profile.profilePic}
                className='rounded-full object-cover w-16'
            />
            <div>
                <h2 className='text-xl font-semibold'>{profile.username}</h2>
                <p className='text-gray-500 text-sm'>{profile.bio}</p>
            </div>
        </div>

        {/* STATS */}
      <div className="flex justify-between mt-4">
        <div className="text-center">
          <p className="font-bold">{profile.followers}</p>
          <span className="text-gray-500 text-sm">Followers</span>
        </div>
        <div className="text-center">
          <p className="font-bold">{profile.following}</p>
          <span className="text-gray-500 text-sm">Following</span>
        </div>
        <div className="text-center">
          <p className="font-bold">{profile.posts.length}</p>
          <span className="text-gray-500 text-sm">Posts</span>
        </div>
      </div>

      {/* FUTURE BUTTON ZONE */}
      <div className="mt-4 flex gap-2">
        <button className="bg-primary text-white px-4 py-1 rounded-full">
          Follow
        </button>

        {/* Future: Crypto Wallet Button */}
        {/* <button className="bg-gray-100 px-4 py-1 rounded-full">
          Wallet
        </button> */}
      </div>
    </div>
  )
}

export default ProfileCard