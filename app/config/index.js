"use strict";

import dotenv from "dotenv";

dotenv.config();

const APP_PORT = process.env.APP_PORT;
const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;
const MAPBOX_DIRECTION_API = process.env.MAPBOX_DIRECTION_API;
const MAPBOX_GEOCODING_API = process.env.MAPBOX_GEOCODING_API;

export {
  APP_PORT,
  MAPBOX_ACCESS_TOKEN,
  MAPBOX_DIRECTION_API,
  MAPBOX_GEOCODING_API,
};
