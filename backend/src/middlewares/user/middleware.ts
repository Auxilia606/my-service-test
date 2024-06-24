import { RequestHandler } from "express";

import passport from "passport";

// export const isLoggedIn: RequestHandler<object> = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     next();
//   } else {
//     res.status(403).send("로그인이 필요합니다.");
//   }
// };

// export const isNotLoggedIn: RequestHandler<object> = (req, res, next) => {
//   if (!req.isAuthenticated()) {
//     next();
//   } else {
//     res.redirect("/");
//   }
// };

export const isLoggedIn: RequestHandler<object> = passport.authenticate("jwt", {
  session: false,
});

export const isNotLoggedIn: RequestHandler<object> = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
};
