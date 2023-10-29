const db = require('../db');

const registerUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  console.log('Request Body:', req.body);

  try {
    // Check if the username is already taken
    const existingUser = await db.query('SELECT * FROM Users WHERE email = $1', [email]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user in the database
    const result = await db.query(
      'INSERT INTO Users(firstname, lastname, email, password) VALUES($1, $2, $3, $4) RETURNING *',
      [firstname, lastname, email, password]
    );

    const newUser = result.rows[0];
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// User Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the username and password match
    const result = await db.query('SELECT * FROM Users WHERE email = $1 AND password = $2', [
      email,
      password,
    ]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = result.rows[0];
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
