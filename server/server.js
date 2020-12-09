import mongoose from "mongoose";
import config from "../config/config";
import app from "./express";

// DB CONNECTION CONFIG
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to datababase: ${config.mongoUri}`);
});

app.listen(config.port, (err) => {
  if (err) console.log(err);
  console.info(`Server started on port ${config.port}`);
});
