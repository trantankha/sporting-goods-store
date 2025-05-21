const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token không tồn tại, truy cập bị từ chối!' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Phiên đăng nhập đã hết hạn, hãy đăng nhập lại !' });
            }
            return res.status(401).json({ message: 'Truy cập bị từ chối !' });
        }
        req.user = user;
        next();
    });
};
