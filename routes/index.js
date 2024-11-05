const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.send("Index Route Route");
});

module.exports = router;
