// utils/generateToken.js
import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
  const jwtSecret = process.env.JWT_SECRET;

  console.log('JWT_SECRET in generateToken:', jwtSecret);

  if (!jwtSecret) {
    throw new Error('JWT_SECRET is not defined in the environment variables');
  }

  return jwt.sign({ id: userId }, jwtSecret, { expiresIn: '1h' });
};

export default generateToken;