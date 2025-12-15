import React, { useEffect, useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function Profile() {
  const {id} = useParams();
  const [profile, setProfile] = useState()

  useEffect (() => {
    async function fetchProfile() {
      const res = await axios.get(`http://localhost:3000/api/profile/${id}`)
      setProfile(res.data)
    }
    fetchProfile()
  }, [id])
   if (!profile) {
    return <p className="text-center mt-4">Loading profile...</p>;
  }
  return (
    <div>
      <ProfileCard profile={profile} />

      <h3 className="text-lg font-semibold mb-3">Posts</h3>

      <div className="grid grid-cols-1 gap-4">
        {profile.posts.map((post) => (
          <DiscoverCard key={post.id} post={post} />
        ))}
      </div>
      
    </div>
  )
}

export default Profile