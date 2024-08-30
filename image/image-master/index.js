import express from "express"
import Router from "./routes.js";
import connect from "./connect.js";
const app = express();

connect();

app.use("/", Router);

app.listen(4000, () => {
  console.log("Started");
});
