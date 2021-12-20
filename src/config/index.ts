import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config();

const databaseURL = process.env.MONGO_URI;
if (!databaseURL) throw new Error("Enter mongoDB url to ..env.local file");

export default {
  host: "http://localhost",
  port: process.env.PORT || 4000,
  databaseURL: databaseURL,
  api: {
    prefix: "/api",
  },
  cors: {
    origin: true,
  },
};
