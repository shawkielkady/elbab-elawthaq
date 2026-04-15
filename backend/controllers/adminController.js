import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import process from 'process';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secret123', {
    expiresIn: '30d',
  });
};

// @desc    Auth admin & get token
// @route   POST /api/admin/login
// @access  Public
export const authAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (admin && (await bcrypt.compare(password, admin.password))) {
      res.json({
        _id: admin._id,
        username: admin.username,
        token: generateToken(admin._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Register a new admin (Used just to set up initial admin, could be disabled later)
// @route   POST /api/admin/register
// @access  Public
export const registerAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const adminExists = await Admin.findOne({ username });

    if (adminExists) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = await Admin.create({
      username,
      password: hashedPassword,
    });

    if (admin) {
      res.status(201).json({
        _id: admin._id,
        username: admin.username,
        token: generateToken(admin._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid admin data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
