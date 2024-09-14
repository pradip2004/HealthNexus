// middlewares/adminAuth.js
const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {
    const token = req.cookies.adminToken;

    if (!token) {
        return res.status(403).json({ message: 'Unauthorized: No token provided' });
    }

    // Verify the token
    jwt.verify(token, 'your_jwt_secret_key', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Unauthorized: Invalid token' });
        }

        // Token is valid, proceed with request
        req.adminEmail = decoded.email; // Attach admin info to request object
        next();
    });
};

module.exports = adminAuth;
