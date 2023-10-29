import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import LogValidate from './LogValidate';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const navigate=useNavigate();
    const [values,setValues]=useState({ email:'', password:''});
    const [error,setError]=useState({});
    
    // Handle the change in inputs
    const handleInputs=(e)=>{
        setValues({...values, [e.target.name]: e.target.value}) ;       
       
    }
   // Handle submit for the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = LogValidate(values);
    setError(errors);

    // Check if there are any validation errors before sending the data
    if (Object.keys(errors).length === 0) {
      try {
        // Make a POST request to your API endpoint
        const response = await axios.post('http://localhost:3001/login', values);

        // Check the response status code and handle it accordingly
        if (response.status === 200) {
          // Login was successful
          console.log('Login successful:', response.data);
          navigate("/");
          // You can redirect the user or perform other actions here
        } else {
          // Handle other status codes or error scenarios
          console.error('Login failed:', response.data);
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Login error:', error);
      }
    }
  };


  return (
    < div className='h-[50rem] bg-gray-100'>
    <h1 className='pt-10 pb-10  font-bold text-blue-900 md:text-4xl text-center'>Login </h1>
    <div className='flex justify-center  mx-10'>
    <form action='' onSubmit={handleSubmit} className='bg-white text-black px-20 py-5 rounded-xl w-full max-w-lg border border-gray-300 '>
    
      <div className='m-4'>
        <label htmlFor='author' className='m-2 font-semibold text-blue-900'>
          Email
        </label>
        <input type='text' name='email' onChange={handleInputs} className=' text-black w-full border border-gray-300' required/>
        {error.email && <p style={{color:"red"}}>{error.email}</p>}
      </div>
      <div className='m-4'>
        <label htmlFor='title' className='m-2 font-semibold text-blue-900'>
          Password
        </label>
        <input type='text' name='password' onChange={handleInputs} className=' text-black w-full border border-gray-300' required/>
        {error.password && <p style={{color:"red"}} >{error.password}</p>}
      
      </div>
      
      <button
        type='submit'
        className='bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  p-2  ml-10 md:ml-32 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
>Login
      </button>
    </form>
    </div>
    </div>
  )
}

export default Login