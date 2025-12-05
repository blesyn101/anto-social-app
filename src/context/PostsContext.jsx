import {createContext, useState} from 'react'

const PostsContext = createContext();

//Provider component

export function PostsProvider({children}) {
    const [posts, setPosts] = useState ([]);

    const addPost = (newPost) => {
        setPosts([newPost, ...posts]);
    }
  return (
    <PostsContext.Provider value={{posts, addPost}}>
        {children}
    </PostsContext.Provider>
  )
}
    
export default PostsContext;

