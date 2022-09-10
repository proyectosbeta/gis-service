"use strict";

import validator from "express-validator";
import fromEntries from "object.fromentries";

const { validationResult } = validator;

const translateMessages = (errObj, req) => {
  const errArr = Object.entries(errObj);

  errArr.forEach((err) => {
    Object.keys(req.polyglot.phrases).forEach((phrase) => {
      if (phrase == err[1].msg) {
        err[1].msg = req.polyglot.t(phrase);
      }
    });
  });

  return fromEntries(errArr);
};

const procErr = (req, res, next) => {
  // Verifies if there were validation errors added to the request
  const validationErrors = validationResult(req);

  // If there were errors in the validation
  if (!validationErrors.isEmpty()) {
    return res
      .status(400)
      .send(translateMessages(validationErrors.mapped(), req));
  } else {
    // If no errors, go!
    next();
  }
};

export { procErr };
