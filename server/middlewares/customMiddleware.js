// // middleware/customMiddleware.js
// const db = require('../db');

// const checkUserExistence = async (req, res, next) => {
//   const { id } = req.body;

//   try {
//     // Check if the user exists in the database
//     const existingUser = await db.query('SELECT * FROM Users WHERE id = $1', [id]);

//     if (existingUser.rows.length === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     next(); // Continue to the next middleware or route handler
//   } catch (error) {
//     console.error('Error checking user existence:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// const handleErrors = (err, req, res, next) => {
//   console.error('Error:', err);

//   if (res.headersSent) {
//     return next(err);
//   }

//   res.status(500).json({ message: 'Internal server error' });
// };

// module.exports = {
//   checkUserExistence,
//   handleErrors,
//   // Add other existing middleware functions if any
// };
