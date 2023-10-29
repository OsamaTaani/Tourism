import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Blogs from './Blogs';


const Home = () => {

  const [isBlogFormOpen, setIsBlogFormOpen] = useState(false);
  const [isNameDisplay, setIsNameDisplay] = useState(false);
  const [formData, setFormData] = useState({
    "title": '',
    "description": '',
    "name": '',
  });
  const [data, setData] = useState([]);

  //   handel the Add Blog btn to open blog form 
  const blogFormOpen = () => {
    setIsBlogFormOpen(!isBlogFormOpen);
  };
  const NameDisplay = () => {
    setIsNameDisplay(!isNameDisplay);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/blogs')
      .then((response) => {
        setData(response.data.blogs);
        console.log(response.data.blogs);
        console.log(response.status)
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, []);


  const handleSubmit = async () => {
    try {
      console.log(formData)
      const response = await axios.post('http://localhost:3001/addBlogs', formData);
        alert("data added")

        setFormData({
          "title": '',
          "description": '',
          "name": '',
        });
        setIsBlogFormOpen(false);
       
        
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  return (
    <div>

      {/* Hero section */}
      <div
        className='bg-cover bg-center h-80 md:h-[35rem] p-10 '
        style={{
          backgroundImage:
            'url(https://charlieswanderings.com/wp-content/uploads/2018/10/PETRA-JORDAN-23-1000x500.jpg)',
        }}
      >
        <h1 className='pt-10 md:pt-40 pb-10 font-bold text-white md:text-5xl text-center'>WELCOME TO JORDAN TRAIL BLOGS </h1>
        <div className='flex justify-center'>
          <button onClick={blogFormOpen} className='bg-blue-700 font-bold text-white rounded-lg p-3 mb-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            ADD BLOG
          </button>
        </div>
        {/* END Hero section */}

        {/* Blog Form */}
        {isBlogFormOpen && (
          <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-1 '>
            <div className='bg-blue-900 text-white mx-8 px-4 md:px-20 py-5 rounded-xl w-full max-w-lg '>
              <h1 className='font-bold text-white md:text-2xl text-center mb-4'> Blog Form </h1>

              <FontAwesomeIcon
                icon={faTimes}
                className='text-white cursor-pointer text-2xl absolute mb-4  ml-80 '
                onClick={blogFormOpen}
              />
              <div className='my-8 mx-4 '>
                <label htmlFor='name' className='m-2'>
                  Author
                </label>
                <input
                  type='text'
                  className='text-black w-full'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

              </div>
              <div className='my-8 mx-4'>
                <label htmlFor='title' className='m-2'>
                  Title
                </label>
                <input
                  type='text'
                  className='text-black w-full'
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
              </div>
              <div className='my-8 mx-4'>
                <label htmlFor='description' className='m-2'>
                  Description
                </label>
                <input
                  type='text'
                  id='description'
                  className='h-14 text-black w-full'
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
              </div>
              {/* <div className='my-8 mx-4'>
                <label htmlFor='image' className='m-2'>
                  Image
                </label>
                <input
                 type='file'
                 value={formData.image}
                 onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
              </div> */}
              <button
                type='submit'
                onClick={handleSubmit}
                className='  border border-white text-white rounded p-2 ml-[40%]  mt-4'
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {/* END Blog Form */}
      </div>

      {/* Blog cards */}
      <div>
        <Blogs data={data} />

      </div>
      {/* END Blog cards */}


    </div>
  );
};

export default Home;
