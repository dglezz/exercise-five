const express = require("express");
const path = require("path");
const router = express.Router();

// initialize firestore
const firestore = require("firebase/firestore");
// create reference to the databse
const db = firestore.getFirestore();

router.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "../public", "form.html"));
});

router.get("/submit", (request, response) => {
  const { title, postText, author } = request.query;

  // if a value is missing, send warning to the user
  if(!title || !postText || !author) {
    response.send({error: "Invalid Form Submission"})
  }

  const idFromTitle = title.replace(/\s+/g, "-").toLowerCase();

  const setBlogPost = firestore.setDoc(
    firestore.doc(db, "posts", idFromTitle),
    {
      title: title,
      text: postText,
      author: author,
    }
  );

  setBlogPost
    .then((res) => {
      response.sendFile(path.join(__dirname, "../public", "success.html"));
    })

    .catch((error) => {
      response.send(`Error Submitting: ${error.toString()}`);
    });
});

module.exports = router;
