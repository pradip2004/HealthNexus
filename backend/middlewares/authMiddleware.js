import jwt from 'jsonwebtoken';
import Patient from '../models/patientModel.js';

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.patient = await Patient.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

export const isAdmin = (req, res, next) => {
  try {
      const token = req.cookies.token;
      if (!token) {
          return res.status(401).json({ message: 'Unauthorized, no token' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded && decoded.isAdmin) {
          next();
      } else {
          return res.status(403).json({ message: 'Access denied, admin only' });
      }
  } catch (error) {
      return res.status(401).json({ message: 'Invalid token', error });
  }
};
