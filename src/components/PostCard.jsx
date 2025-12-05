import React from 'react'
import likeIcon from '../assets/icons/like.svg'
import commentIcon from '../assets/icons/comment.svg'

function PostCard({name, time, content, imageUrl, postImage, likes, comments}) {
  return (
    <div className='bg-white rounded-2xl p-4 mb-4 shadow-md'>
      {/* Header */}
      <div className="Header flex items-center gap-3">
        <div className='w-10 h-10 bg-gray-200 rounded-full'>{imageUrl}</div>
      
      <div>
        <p className='font-semibold text-text'>{name}</p>
        <p className='text-sm text-gray-500'>{time}</p> 
      </div>
      </div>
      {/* Content */}
      {content && <p className='text-text mb-3'>{content}</p>}

      {/* Post Image */}
      {postImage && (
        <img src={postImage} className="rounded-xl mb-3 w-full object-cover" />
      )}
      {/* Footer */}
      <div className="flex justify-start gap-6 text-sm text-gray-500 pb-3">
       <button className='hover:text-primary'><img src={likeIcon} className='w-5 h-5m inline-block pr-1'></img>{likes}</button>
       <button className='hover:text-primary'><img src={commentIcon} className='w-5 h-5m inline-block pr-1'></img>{comments}</button>

      </div>

    </div>
  )
}

export default PostCard