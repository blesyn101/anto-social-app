import React from 'react'

function DiscoverCard({post}) {
 return (
    <div className="bg-white rounded-xl p-4 shadow-md">

      {/* USER DETAILS */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={post.profilePic}
          alt="pfp"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <h4 className="font-semibold">{post.username}</h4>
          <span className="text-xs text-gray-500">{new Date(post.time).toLocaleDateString()}</span>
        </div>
      </div>

      {/* TEXT */}
      {post.caption && (
        <p className="text-gray-800 text-sm mb-3">{post.caption}</p>
      )}

      {/* IMAGES */}
      {post.images && post.images.length > 0 && (
        <div className="grid grid-cols-1 gap-2 mb-3">
          {post.images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="rounded-lg w-full object-cover"
              alt="post media"
            />
          ))}
        </div>
      )}

      {/* VIDEO */}
      {post.video && (
        <video controls className="w-full rounded-lg mb-3">
          <source src={post.video} type="video/mp4" />
        </video>
      )}

      {/* AUDIO */}
      {post.audio && (
        <audio controls className="w-full mb-3">
          <source src={post.audio} type="audio/mp3" />
        </audio>
      )}
    </div>
  );
}

export default DiscoverCard