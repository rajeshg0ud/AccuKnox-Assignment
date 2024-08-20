import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className='flex justify-between items-center py-3 bg-gray-100 shadow-md'>
      <div className='flex ml-8 font-bold text-sky-900 text-lg'> 
        <p>Dashboard V2</p>
      </div>

      <div className='flex items-center border border-gray-300 bg-slate-200 rounded-md focus:outline-none'>
        <button className='px-3 py-0  rounded-r-md'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          type='text'
          placeholder='Search anything...'
          className='px-3 py-1 bg-slate-200 focus:outline-none'
        />
      </div>

      <div className='flex items-center mr-10 text-sky-900'>
        <FontAwesomeIcon icon={faUser} className='text-xl' />
        <span className='ml-2'>Account</span>
      </div>
    </div>
  );
}

export default Header;
