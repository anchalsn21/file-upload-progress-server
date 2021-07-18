const fs = require("fs");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "./public/uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true }, (err) => {});
    }
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname.replace(/\s/g, ""));
  },
});

var upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 10,
    fieldNameSize: 200,
    fileSize: 1024 * 1024 * 50,
  },
});

module.exports = upload;
