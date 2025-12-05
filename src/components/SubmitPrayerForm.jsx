import React, { useState } from 'react'

function SubmitPrayerForm({onSubmit}) {
  const [username, setUsername] = useState ("");
  const [text, setText] = useState ("");
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    if (!username.trim() || !text.trim()) return;
    
    onSubmit({
      id: Date.now(),
      username,
      text,
      prayedCount: 0,
      likes: 0
    });

    // this will clear the fields after submission
    setUsername("");
    setText("");
  }
  return (
    <form onSubmit={handleSubmit} className='mb-5 bg-primary/10 p-4 rounded-xl'>
      <h2 className='font-semibold mb-2'>Submit your prayer request</h2>

      {/* Username*/}
      
      <input 
        type='text'
        placeholder='Your username'
        className='w-full p-2 mb-2 rounded border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
        value={username}
        onChange={(e) => setUsername (e.target.value)}
      />

      <textarea 
        type='text'
        placeholder='What should we pray about?'
        className='w-full bg-primary/90 text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary'
        rows="3"
        value={text}
        onChange={(e) => setText (e.target.value)}
      />

        <button 
        type='submit'
        className='bg-primary hover:cursor-pointer text-white px-4 py-2 rounded-lg text-sm w-full text-left'

         >Submit Prayer request</button>
    </form>
  )
}

export default SubmitPrayerForm