const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const upload = require("../helpers/filestorage");

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    let fp = path.join(__dirname, "../public/uploads/" + req.file.filename);
    setTimeout(() => {
      fs.unlink(fp, (e, r) => {
        if (e) console.log(e);
        console.log("File Deleted successfully after 5 secs");
      });
    }, 5000);
    return res
      .status(200)
      .send({ message: "File uploaded successfully", file: req.file });
  } catch (error) {
    console.log({ error });
    return res.status(400).send("Failed to upload the file");
  }
});

module.exports = router;
