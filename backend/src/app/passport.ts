import bcrypt from "bcrypt";
import passport from "passport";
import { default as LocalStrategy } from "passport-local";

import { User } from "@models/user";

export const passportConfig = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ id });

      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  passport.use(
    new LocalStrategy.Strategy(
      {
        usernameField: "id",
        passwordField: "password",
        session: true,
        passReqToCallback: true,
      },
      async (req, id, password, done) => {
        try {
          const user = await User.findOne({ id });

          if (!user) {
            return done(null, false, { message: "아이디를 찾을 수 없습니다" });
          }

          const result = await bcrypt.compare(password, user.password);

          if (!result) {
            return done(null, false, {
              message: "비밀번호가 일치하지 않습니다",
            });
          }

          return done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );
};
