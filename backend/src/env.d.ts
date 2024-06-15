declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MONGO_URI: string;
      SESSION_URI: string;
      COOKIE_SECRET: string;
    }
  }
  namespace Express {
    interface User {
      id: string;
      nickname: string;
      password: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
