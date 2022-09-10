"use strict";

import axios from "axios";
import { MAPBOX_ACCESS_TOKEN, MAPBOX_GEOCODING_API } from "../config/index.js";

const forward = async (req, res) => {
  const place = req.params.place;

  // MapBox geocoding API.
  const URL = `${MAPBOX_GEOCODING_API}${place}.json`;

  await axios
    .get(`${URL}?access_token=${MAPBOX_ACCESS_TOKEN}`)
    .then((response) => {
      let success;
      const dataResponse = response.data;
      const features = dataResponse.features;

      if (features && features.length !== 0) {
        const data = {
          features: features.map((feature) => ({
            id: feature.id,
            place_name: feature.place_name,
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
      console.log("Error: ", error);

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

export { forward };
