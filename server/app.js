import express from "express";
import path from "path";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";
import SourceMapSupport from "source-map-support";
import bb from "express-busboy";

import filmRoutes from "./routes/film.server.route";

const app = express();

bb.extend(app, {
  upload: true,
  path: "fileStorage",
  allowedPath: /./
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/directory", {
  useMongoClient: true,
  keepAlive: true,
  keepAliveInitialDelay: 300000,
  socketTimeoutMS: 30000,
  poolSize: 50,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  autoReconnect: true
});

SourceMapSupport.install();

app.use("/api", filmRoutes);

app.get("/", (req, res) => {
  return res.end("Api working");
});

app.use((req, res, next) => {
  res.status(404).send("<h2 align=center>Page Not Found!</h2>");
});

app.listen(port, () => {
  console.log(`App Server Listening at ${port}`);
});
