import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
const [isDropDownOpen,setIsDropDowOpen]=useState(false);
    const toggleMenu=()=>{
     setIsDropDowOpen(!isDropDownOpen);
    }
  return (
    
<nav class="bg-white text-blue-900 border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
  <Link to="/" class="flex items-center">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jordan Trail</span>
  </Link>
  <div class="flex md:order-2">
     <Link to="/login"> <button type="button" class="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button></Link>
     <Link to="/registration"> <button type="button" class="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registration</button></Link>
      <button onClick={toggleMenu} data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
       aria-controls="navbar-cta" 
       aria-expanded={isDropDownOpen}>
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" 
        aria-hidden={!isDropDownOpen}
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class={ `w-full md:block md:w-auto  ${isDropDownOpen ? 'block':'hidden'}`}>
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/" class="block py-2 pl-3 pr-4 text-blue-900 bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
      </li>
      <li>
        <Link href="/" class="block py-2 pl-3 pr-4 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</Link>
      </li>
      <li>
        <Link href="/" class="block py-2 pl-3 pr-4 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About us </Link>
      </li>
      <li>
        <Link href="/" class="block py-2 pl-3 pr-4 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default Header