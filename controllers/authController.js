const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// Temporary in-memory storage for users
const users = [];

// Sign Up
const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { name, email, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully', token: generateToken(email) });
};

// Login
const login = async (req, res) => {
    const { email, password } = req.body;

    // Find user
    const user = users.find(user => user.email === email);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.json({ message: 'Login successful', token: generateToken(email) });
};

module.exports = { signUp, login };
