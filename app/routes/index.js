"use strict";

import express from "express";
import { router as mainRouter } from "./main.js";
import { router as directionRoutingRouter } from "./direction/v1/routing.js";
import { router as GeocodingForwardRoutingRouter } from "./geocoding/v1/forward.js";

const router = express.Router();

// Main router.
router.use(mainRouter);

// Direction routing service.
router.use(directionRoutingRouter);

// Geocoding forward service.
router.use(GeocodingForwardRoutingRouter);

export { router };
