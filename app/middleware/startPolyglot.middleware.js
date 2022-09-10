"use strict";

import Polyglot from "node-polyglot";
import { myDe, myEn, myEs } from "../i18n/index.js";

const languages = {
  de: myDe,
  en: myEn,
  es: myEs,
};

const getLanguage = (language) => {
  return languages[language] || myDe;
};

const startPolyglot = (req, res, next) => {
  const locale = req.locale.language;

  req.polyglot = new Polyglot();
  req.polyglot.extend(getLanguage(locale));

  next();
};

export { startPolyglot };
