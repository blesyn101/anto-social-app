import React, { useEffect, useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import DiscoverCard from '../components/DiscoverCard'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function Profile() {
  const {id} = useParams();
  const [profile, setProfile] = useState()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect (() => {
    async function fetchProfile() {
      try {
        const response = await axios.get(`http://localhost:3000/api/profile/${id}`);
        console.log("Profile Data:", response.data);
         setProfile({ ...response.data, posts: response.data.posts || [] });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile()
  }, [id])
   if (loading) {
    return <p className="text-center mt-4">Loading profile...</p>;
  }
  if (error) {
    return <p className="text-center mt-4">Error loading profile: {error}</p>;
  }
  if (!profile) {
    return <p className="text-center mt-4">Profile not found.</p>;
  }
  return (
    <div>
      <ProfileCard profile={profile} />

      <h3 className="text-lg font-semibold mb-3">Posts</h3>

     <div className="grid grid-cols-1 gap-4">
  {profile.posts.length === 0 ? (
    <p className="text-gray-500">No posts yet.</p>
  ) : (
    profile.posts.map((post) => (
      <DiscoverCard key={post.id} post={post} />
    ))
  )}
</div>
      
    </div>
  )
}

export default Profile