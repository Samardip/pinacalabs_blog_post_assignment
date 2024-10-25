import React from 'react'
import SearchBar from '../../common/searchBar/searchBar'
import { Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-5 py-1 fixed top-0 z-10 w-[100%] bg-white border-[1px] border-gray-100'>
      <Link to="/">
        <div className='font-bold text-lg flex gap-2 items-center'>
          <Home />
          Home
        </div>
      </Link>
      <div className='flex lg:w-2/4 w-[100%] justify-end items-center gap-6'>
        <SearchBar filter={true} />
      </div>
    </div>
  )
}
