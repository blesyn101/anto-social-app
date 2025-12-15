import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DiscoverCard from '../components/DiscoverCard.jsx'
import searchIcon from '../assets/icons/search.svg'
import { NavLink } from 'react-router-dom'

function Discover() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Trending', 'New', 'Popular'];

    useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/discover");
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Category filter
  const filterByCategory = (post) => {
    if (category === 'All') return true;
    return post.category === category;
  }

  //Search filter
  const filterBySearch = (post) => {
    return post.caption?.toLowerCase().includes(searchTerm.toLowerCase());
  }

  const filteredPosts = posts.filter (
    (post) => filterByCategory(post) && filterBySearch(post)
  );

  return (
    <div className='p-4 pb-16' >
            {/* Search Bar */}
      <div className="flex items-center mb-4 p-2 border rounded-full gap-2 focus-within:border-primary">
      <input
        type="text"
        placeholder="Search content..."
        className=' focus:outline-none focus:ring-0 grow'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       <NavLink className="search-bar"><img src={searchIcon} className='nav-icon'></img></NavLink>
      </div>
       {/* Categories */}
      <div className="flex gap-2 overflow-x-auto mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1 rounded-full border ${
              category === cat ? "bg-primary text-white" : "bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Grid Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPosts.map((post) => (
          <DiscoverCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Discover