var express = require('express');
var router = express.Router();

// Define the "computation" route
router.get('/computation', function(req, res, next) {
  // Get the value of the query parameter "x" or generate a random number if not provided
  var x = parseFloat(req.query.x) || (Math.random() * 10); // Generates a random number between 0 and 10

  // Calculate the base-2 logarithm using Math.log2
  var log2Value = Math.log2(x);

  // Format the response string
  var responseString = `Math.log2 applied to ${x} is ${log2Value}`;

  // Send the response
  res.send(responseString);
});

module.exports = router;