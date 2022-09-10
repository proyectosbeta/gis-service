"use strict";

import validator from "validator";

const isValidateDirection = function (req, res, next) {
  const longitude1 = req.params.longitude1;
  const latitude1 = req.params.latitude1;
  const longitude2 = req.params.longitude2;
  const latitude2 = req.params.latitude2;
  const latLng1 = `${latitude1},${longitude1}`;
  const latLng2 = `${latitude2},${longitude2}`;

  //@todo validate all req.params.

  if (isValidateLatLog(latLng1) && isValidateLatLog(latLng2)) {
    res.status(422).send({
      success: false,
      message: req.polyglot.t("coordinatesInvalid"),
    });
  }
  next();
};

// Validation latitude and longitude.
function isValidateLatLog(latLng) {
  if (validator.isLatLong(latLng)) {
    return false;
  }
  return true;
}

export { isValidateDirection };
