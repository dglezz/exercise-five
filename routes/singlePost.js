// import express
const express = require("express");
// define a router
const router = express.Router();
// initialize firestore
const firestore = require("firebase/firestore");
// create a reference to the database
const db = firestore.getFirestore();

router.get("/", (request, response) => {
  response.send("Please include a post ID");
});

router.get("/:postId", (request, response) => {
  //get post id from params
  const postId = request.params.postId;
  // get reference to firestore collection with postId as a argument
  const postQuery = firestore.getDoc(firestore.doc(db, "posts", postId));

  // Query data by the post and send it to the browser
  postQuery
    .then((res) => {
      const post = res.data();
      if (!post) response.send("Data does not exist");
      response.send(post);
    })
    .catch((error) => {
      console.log(error);
      return response.send(error);
    });

  //   response.send("Post: ");
});

module.exports = router;
