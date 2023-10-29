
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/blogs/${id}`)
      .then((response) => {
        setBlogPost(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
    <div className=" max-w p-10 m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid grid-cols-2 gap-2">
      <img className="rounded-lg mt-40 md:m-20 h-40 md:h-80 md:w-80" src='https://i.pinimg.com/564x/7c/3e/3f/7c3e3ffc38cc516eb1d8562f6400b858.jpg' />
      <div className="col-span-1 mt-20">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blogPost.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blogPost.description}</p>
      </div>
    </div>
  </div>
  
  );
};

export default BlogDetail;
