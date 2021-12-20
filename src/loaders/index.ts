import mongooseLoader from "./mongoose";
import expressLoader from "./express";
import { Express } from "express";

export default async (expressApp: Express) => {
  await mongooseLoader();
  console.info("    🚀 DB loaded and connected!");

  await expressLoader(expressApp);
  console.info("    🚀 Express loaded");
};
