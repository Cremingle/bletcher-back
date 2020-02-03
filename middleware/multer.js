const multer = require("multer");
const path = require("path");
const fs = require("fs");

/* code for uploading profile img */
fs.readdir("uploads", error => {
  if (error) {
    console.error("Create Upload folder");
    fs.mkdirSync("uploads");
  }
});
const p = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(
        null,
        path.basename(file.originalname, ext) + new Date().valueOf() + ext
      );
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 }
});

const multerMiddleware = p.single("img");

module.exports = multerMiddleware;