"use strict";

import express from "express";
import { forward } from "../../../controllers/serviceGeocoding.controller.js";

const router = express.Router();

// Services.
router.get(
  "/geocoding/v1/forward/:place",
  forward
);

export { router };
