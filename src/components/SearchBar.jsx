import React from 'react'
import searchIcon from '../assets/icons/search.svg'

function SearchBar({value, onChange, placeholder = "Search..."}) {
  return (
    <div className=" flex items-center border rounded-full gap-2 px-5 h-9 focus-within:border-primary">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="focus:ring-0 focus:outline-none w-full bg-transparent "
      />
      <img src={searchIcon} alt="Search" className=" w-5 h-5 cursor-pointer flex-shrink-0" />
    </div>
  )
}

export default SearchBar