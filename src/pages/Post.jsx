import React, { useState, useRef } from 'react'
import backIcon from '../assets/icons/angle-left.svg'
import { usePosts } from "../context/usePosts";
import { NavLink } from 'react-router-dom'

function Post({onSubmit}) {
  const { addPost } = usePosts();
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const fileInputRef = useRef(null);

  // Handle image upload
  const handleImageChange = (e) =>{
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!text.trim() && !image) return;

    const newPost = {
      id: Date.now(),
      content: text,
      name: "Blessing Agharese",       // I will replace when auth comes
      imageUrl: "", // user profile picture
      likes:0,
      // time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
       time: new Date().toLocaleString([], { 
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  }),
      postImage: preview, // main post image for PostCard component
    }

    if (onSubmit) onSubmit(newPost);

    // CLEAR FORM
    setText("");
    setImage(null);
    setPreview(null);

    // clear file input value using ref
    addPost(newPost);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  }
  return (
    <div className='p-4 pb-24'>
    {/* Header */}
    <div className="Header flex items-center mb-4 px-1">
      <NavLink className="back-link"><img src={backIcon} className='nav-icon-sm'></img></NavLink>
      <div className="logo-text font-bold text-center mb-3"><h2>Post</h2></div>
    </div>

    <h2 className='font-semibold mb-2'>Create a Post</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <textarea 
          type='text'
          placeholder='Share your thoughts...'
          className='w-full h-40 focus:outline-none p-3 border border-gray-300 rounded-lg resize-none'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        
         {/* Image Upload */}
        <label className='block'>
          <span className='text-sm font-medium'>Add an image</span>
          <input 
            type='file'
            accept='image/*'
            ref={fileInputRef}
            onChange={handleImageChange}
            className='mt-1 cursor-pointer'
          />
        </label>

         {/* Image Preview */}
         {preview && (
          <div className="mt-3">
            <img src={preview} alt="preview" className="w-full max-h-72 object-cover rounded-xl " />
          </div>
         )}

         {/* Submit Button */}
         <button className="bg-primary text-white w-full py-3 rounded-xl font-medium shadow cursor-pointer">Post</button>
      </form>
    </div>
  )
}

export default Post