const express = require("express");
const app = express();
const port = 3000;

const indexRoute = require("./routes/index.js");
const createPostRoute = require("./routes/createPost.js");
const singlePostRoute = require("./routes/singlePost.js");

app.use("/", indexRoute);
app.use("/about", createPostRoute);
app.use("/post", singlePostRoute);

app.listen(port, () => {
  console.log(`Exercise Five app listening on port ${port}`);
});
