const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public"))
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + path.extname(file.originalname);
        const fileUrl = `${process.env.IMAGE_URL}/${fileName}`

        cb(null, fileName);
        req.fileUrl = fileUrl;
    }
})

const uploadPhoto = multer({ storage: storage });

module.exports = uploadPhoto;