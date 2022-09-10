"use strict";

import express from "express";
import { isValidProfile } from "../../../middleware/profileDirection.middleware.js";
import { isValidateDirection } from "../../../middleware/validationDirection.middleware.js";
import { routing } from "../../../controllers/serviceDirection.controller.js";

const router = express.Router();

// Services.
router.get(
  "/direction/v1/:profile/:longitude1/:latitude1/:longitude2/:latitude2",
  [isValidProfile, isValidateDirection],
  routing
);

export { router };
