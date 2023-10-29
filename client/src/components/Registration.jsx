
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import RegValidate from './RegValidate';

const Registration = () => {

const [values,setValues]=useState({ firstname:'' , lastname:'' , email:'', password:''});
const [error,setError]=useState({});

// Handle the change in inputs
const handleInputs=(e)=>{
    setValues({...values, [e.target.name]: e.target.value}) ;       
   
}

// Handle submit for the form 
const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = RegValidate(values);
    setError(errors);

    // Check if there are any validation errors before sending the data
  if (Object.keys(errors).length === 0) {
    try {
      // Make a POST request to your API endpoint
      const response = await axios.post('http://localhost:3001/register', values);

      // Check the response status code and handle it accordingly
      if (response.status === 200) {
        // Registration was successful
        console.log('Registration successful:', response.data);
      } else {
        // Handle other status codes or error scenarios
        console.error('Registration failed:', response.data);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Registration error:', error);
    }
  }
}

  return (
    < div className='h-[50rem] bg-gray-100'>
    <h1 className='pt-10 pb-10  font-bold text-blue-900 md:text-4xl text-center'>Registration </h1>
    <div className='flex justify-center  mx-10'>
    <form action='' onSubmit={handleSubmit} className='bg-white text-black px-20 py-5 rounded-xl w-full max-w-lg border border-gray-300 '>
    
      <div className='m-4'>
        <label htmlFor='author'  className='m-2 font-semibold'>
          First-Name
        </label>
        <input type='text'  name='firstname' onChange={handleInputs} className='text-black w-full border border-gray-300 ' required/>
      </div>
      <div className='m-4'>
        <label htmlFor='author' className='m-2 font-semibold'>
        Last-Name
        </label>

        
        <input type='text'   name='lastname' onChange={handleInputs} className='text-black w-full border border-gray-300' required/>
      </div>
      <div className='m-4'>
        <label htmlFor='author' className='m-2 font-semibold'>
          Email
        </label>
        <input type='text'  name='email' onChange={handleInputs} className='text-black w-full border border-gray-300' required/>
         {error.email && <p style={{color:"red"}}>{error.email}</p>}
      </div>
      <div className='m-4'>
        <label htmlFor='title' className='m-2 font-semibold'>
          Password
        </label>
        <input type='text'  name='password' onChange={handleInputs} className='text-black w-full border border-gray-300' required/>
        {error.password && <p style={{color:"red"}} >{error.password}</p>}
      </div>
      <div className='m-4'>
        <label htmlFor='title' className='m-2 font-semibold'>
          Confirm-Password
        </label>
        <input type='text'  name='confirmPassword'  onChange={handleInputs} className='text-black w-full border border-gray-300' required/>
        {error.confirmPassword && <p style={{color:"red"}}>{error.confirmPassword}</p>}
      </div>
      
      <button
        type='submit'
        className='bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  p-2  ml-[30%]  mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'

      >
       Create account
      </button>
    </form>
    </div>
    </div>
  )
}

export default Registration