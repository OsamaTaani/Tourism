const { Pool } = require('pg');
const db = require('../db');

const addBlog = async (req, res) => {
  const { title, description, name } = req.body;

  try {
    // Insert new blog into the database
    const result = await db.query(
      'INSERT INTO Blogs(title, description, name) VALUES($1, $2, $3) RETURNING *',
      [title, description, name]
    );

    const newBlog = result.rows[0];
    res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getBlogs = async (req, res) => {
  try {
    // Retrieve all blogs from the database
    const result = await db.query('SELECT * FROM Blogs ORDER BY created_at DESC');
    const blogs = result.rows;

    res.status(200).json({ blogs });
  } catch (error) {
    console.error('Error retrieving blogs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getBlogById = async (req, res) => {
  const blogId = req.params.id;

  try {
    // Retrieve a specific blog from the database based on its ID
    const result = await db.query('SELECT * FROM Blogs WHERE id = $1', [blogId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    const blog = result.rows[0];
    res.status(200).json( blog );
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
};

module.exports = {
  addBlog,
  getBlogs,
  getBlogById,
};
