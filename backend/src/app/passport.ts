import bcrypt from "bcrypt";
import passport from "passport";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
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
      },
      async (id, password, done) => {
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

  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromHeader("authorization"),
        secretOrKey: process.env.COOKIE_SECRET,
      },
      async (payload, done) => {
        const { id } = payload;

        try {
          const user = await User.findOne({ id });

          if (user) {
            return done(null, user);
          }

          done(null, false, { reason: "올바르지 않은 인증정보입니다." });
        } catch (error) {
          done(error);
        }
      }
    )
  );
};
