import express from "express"
import upload from "./upload.js";
import postImage from "./controller.js";
const Router = express.Router();

Router.post("/", upload.single("image"), postImage);

export default Router
