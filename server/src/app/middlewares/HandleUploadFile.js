const fs = require('fs');
const multer = require('multer');
const path = require('path');

const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname
        const filePath = path.join(uploadDir, fileName);
        if (fs.existsSync(filePath)) {
            cb(null, fileName);
        } else {
            cb(null, fileName);
        }
    }
})
const upload = multer({ storage: storage });

module.exports = upload;

