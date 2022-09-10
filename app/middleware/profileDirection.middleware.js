"use strict";

const profiles = {
  "driving-traffic": true,
  driving: true,
  walking: true,
  cycling: true,
};

function getProfile(profile) {
  return profiles[profile] || false;
}

function existProfile(profile) {
  return profile ? true : false;
}

const isValidProfile = function (req, res, next) {
  const profile = req.params.profile;

  if (!existProfile(profile)) {
    return res.status(400).json({
      success: false,
      message: req.polyglot.t("profileRequired"),
    });
  }

  if (!getProfile(profile)) {
    return res.status(403).json({
      success: false,
      message: req.polyglot.t("profileInvalid"),
    });
  }
  next();
};

export { isValidProfile };
