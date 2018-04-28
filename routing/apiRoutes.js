//This links our friends data in
var friends = require("../app/data/friends");

//Exports our requests
module.exports = function(app) {
  // API GET Request. Displays current friend data as JSON.

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  // API POST Request. Pushes new data into our friends array.
  app.post("/api/friends", function(req, res) {
      friends.push(req.body);
      console.log(friends)
  });
};
