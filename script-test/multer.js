const express = require('express')
const app = express()
const multer = require('multer')
const bodyParser = require('body-parser')
///const upload = multer()

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             console.log("==================");
//             cb(null, "uploads");
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//         }
//     })
// }).single("user_file");
// app.post('/upload',upload,function (req, res) {
//     console.log(upload)
//     // req.body contains the text fields
//     res.send("file upload");
// })
// const upload = multer({dest:'uploads/'}).single("demo_image");
// app.post("/image", (req, res) => {
//     upload(req, res, (err) => {
//      if(err) {
//        res.status(400).send("Something went wrong!");
//      }
//      res.send(req.file);
//    });
//  });

const upload = multer({ dest: "uploads/" });
app.post("/upload_files", upload.array("files"), uploadFiles);
function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
}
app.listen(2000);