WebApp.connectHandlers.use("/sentinel", function(req, res, next) {
  res.writeHead(200);
  res.end("Hello world from: " + Meteor.release);
}); 
