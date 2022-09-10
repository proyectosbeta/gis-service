"use strict";

import express from "express";
import { welcome } from "../controllers/main.controller.js";
// import { procErr } from "../middleware/processErrors.middleware.js";

const router = express.Router();

// Main router.
// router.get("/", procErr, welcome);
router.get("/", welcome);

export { router };
