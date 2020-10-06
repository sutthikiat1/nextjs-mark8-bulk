const express = require("express");
const next = require("next");

// const dev = process.env.NODE_ENV !== "production";
const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 8080;
app
  .prepare()
  .then(() => {
    const server = express();
    // server.get("/detail", (req, res) => {
    //   const actualPage = "/post";
    //   const queryParams = { title: req.params.id };
    //   console.log("in");
    //   app.render(req, res, actualPage, queryParams);
    // });
    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(port, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:8080");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
