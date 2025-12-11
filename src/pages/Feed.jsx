import React from 'react'
import PostCard from '../components/PostCard'
import searchIcon from '../assets/icons/search.svg'
import userIcon from '../assets/icons/user.svg'
import { usePosts } from "../context/usePosts";
import { NavLink } from 'react-router-dom'
import DailyVerse from '../components/DailyVerse';

function Feed() {
  const { posts } = usePosts();
  
  return (
    <div className='p-4 pb-24'>
    {/* Header */}
    <div className="Header flex items-center mb-4 px-1">
      <NavLink className="search-bar"><img src={searchIcon} className='nav-icon'></img></NavLink>
      <div className="logo-text font-bold text-center"><h2>ANTO</h2></div>
      <NavLink className="userIcon"><img src={userIcon} className='nav-icon'></img></NavLink>
    </div>
       
       {/* Daily Scriptures */}
       <DailyVerse />

       {/* Main Feed */}
      {posts.map((post) => (
        <PostCard 
          key={post.id}
          name={post.name}
          time={post.time}
          content={post.content}
          postImage={post.postImage}
          likes={post.likes}
          comments={post.comments}
          imageUrl={post.imageUrl}
          />
      )
      )}
    </div>
  )
}

export default Feed