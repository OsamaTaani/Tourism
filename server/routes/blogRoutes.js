const db = require('../db');

const addBlogToDB = async (title, description, name) => {
  try {
    // Insert new blog into the database
    const result = await db.query(
      'INSERT INTO Blogs(title, description, name) VALUES($1, $2, $3) RETURNING *',
      [title, description, name]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Error adding blog to database:', error);
    throw error;
  }
};

const getAllBlogsFromDB = async () => {
  try {
    // Retrieve all blogs from the database
    const result = await db.query('SELECT * FROM Blogs ORDER BY created_at DESC');
    return result.rows;
  } catch (error) {
    console.error('Error getting all blogs from database:', error);
    throw error;
  }
};

const getBlogByIdFromDB = async (blogId) => {
  try {
    // Retrieve a specific blog from the database based on its ID
    const result = await db.query('SELECT * FROM Blogs WHERE id = $1', [blogId]);

    if (result.rows.length === 0) {
      throw new Error('Blog not found');
    }

    return result.rows[0];
  } catch (error) {
    console.error('Error getting blog by ID from database:', error);
    throw error;
  }
};

module.exports = {
  addBlogToDB,
  getAllBlogsFromDB,
  getBlogByIdFromDB,
};
