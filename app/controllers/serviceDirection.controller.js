"use strict";

import axios from "axios";
import { MAPBOX_ACCESS_TOKEN, MAPBOX_DIRECTION_API } from "../config/index.js";

const routing = async (req, res) => {
  const profile = req.params.profile;
  const longitude1 = req.params.longitude1;
  const latitude1 = req.params.latitude1;
  const longitude2 = req.params.longitude2;
  const latitude2 = req.params.latitude2;
  const latLng1 = `${latitude1},${longitude1}`;
  const latLng2 = `${latitude2},${longitude2}`;

  // MapBox direction API.
  const URL = `${MAPBOX_DIRECTION_API}${profile}`;

  await axios
    .get(`${URL}/${latLng1};${latLng2}?access_token=${MAPBOX_ACCESS_TOKEN}`)
    .then((response) => {
      let success;
      const dataResponse = response.data;
      const routes = dataResponse.routes;

      if (routes && routes.length !== 0) {
        const waypoints = dataResponse.waypoints;
        const data = {
          routes: routes.map((route) => ({
            duration: route.duration,
            distance: route.distance,
            legs: route.legs.map((leg) => ({
              duration: leg.duration,
              distance: leg.distance,
            })),
          })),
          waypoints: waypoints.map((waypoint) => ({
            distance: waypoint.distance,
            name: waypoint.name,
            location: waypoint.location,
          })),
        };

        // Send response.
        success = data ? true : false;

        res.status(200).json({
          success: success,
          data,
        });
      } else {
        // Send response.
        const message = dataResponse.message;
        res.status(200).json({
          success: false,
          message: message,
        });
      }
    })
    .catch((error) => {
      if (error.code) {
        res.status(422).json({
          success: false,
          message: error.code,
        });
      }
      const response = error.response;
      const statusCode = response.status;
      const message = response.data.message;

      res.status(statusCode).json({
        success: false,
        message: message,
      });
    });
};

export { routing };
