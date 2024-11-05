const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.send("Single Post Route");
});

module.exports = router;
