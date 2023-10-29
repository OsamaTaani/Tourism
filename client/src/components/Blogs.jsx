

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const Blogs = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

   // Show all items on a single page
  const itemsPerPage = 10;


  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {currentItems.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <div className="m-4">
              <div className="max-w-sm p-10 h-120 w-80 m-10 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img src="https://i.pinimg.com/564x/7c/3e/3f/7c3e3ffc38cc516eb1d8562f6400b858.jpg"alt={blog.title} className="w-full h-60 " />
                <div className="p-4">
                  <h1 className="text-xl font-semibold h-20 w-60">{blog.title}</h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {data.length > itemsPerPage && (
  <Pagination
    currentPage={currentPage}
    totalItems={data.length}
    itemsPerPage={itemsPerPage}
    onPageChange={onPageChange}
  />
)}


    </div>
  );
};

export default Blogs;
