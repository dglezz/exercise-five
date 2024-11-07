const express = require("express");
const firebase = require("firebase/app");
const app = express();
const port = 3000;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "dg-exercise-five-fall-2024.firebaseapp.com",
  projectId: "dg-exercise-five-fall-2024",
  storageBucket: "dg-exercise-five-fall-2024.firebasestorage.app",
  messagingSenderId: "63670923104",
  appId: "1:63670923104:web:a47f0e2fbc886ccd46f805",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");
const createPostRoute = require("./routes/createPost.js");
const singlePostRoute = require("./routes/singlePost.js");

app.use(express.static("public"));

app.use("/", indexRoute);
app.use("/create", createPostRoute);
app.use("/post", singlePostRoute);

app.listen(port, () => {
  console.log(`Exercise Five app listening on port ${port}`);
});
