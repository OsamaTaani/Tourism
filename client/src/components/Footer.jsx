import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer class=" footer bg-blue-900   dark:bg-blue-900 ">
    <div class="w-full mx-auto max-w-screen-xl p-4 flex flex-wrap items-center justify-between ">
      <span class="text-sm text-white sm:text-center dark:text-white">© 2023 Jordan. All Rights Reserved.
    </span>
    <ul className='flex '>
        <li>  <FontAwesomeIcon
        icon={faFacebook}
        className='text-white text-2xl mx-5 ' /> 
        </li>

        <li>
        <FontAwesomeIcon
        icon={faInstagram}
        className='text-white text-2xl' />
        </li>
      
    </ul>
    <ul class="flex md:flex-col  items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">phone : +96966366996</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Email : JordanTrail@gmail.com</a>
        </li>
        
       
    </ul>
    </div>
</footer>

  )
}

export default Footer