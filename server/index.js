const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/api/v1/movies", (req, res) => {
    res.json({ message: "Hello, world" });
  });

  // send file as response
  // server.get("/faq", (req, res) => {
  //   res.send("<html><head><body><h1>FAQ</h1></body></head></html>");
  // });

  // we are handling all of the request comming to our server
  server.get("*", (req, res) => {
    // next.js is handling requests and providing pages where we are navigating to
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log("> Ready on port " + PORT);
  });
});
