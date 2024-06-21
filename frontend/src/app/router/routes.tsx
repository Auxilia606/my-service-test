import { createBrowserRouter } from "react-router-dom";

import { CreatePost } from "@pages/CreatePost";
import { FindId } from "@pages/FindId";
import { FindPassword } from "@pages/FindPassword";
import { Login } from "@pages/Login";
import { Main } from "@pages/Main";
import { Post } from "@pages/Post";
import { SignUp } from "@pages/SignUp";

import { ProtectedRouter } from "./ProtectedRouter";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <ProtectedRouter />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/post", element: <Post /> },
        { path: "/create-post", element: <CreatePost /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    { path: "/find-id", element: <FindId /> },
    { path: "/find-password", element: <FindPassword /> },
  ],
  { basename: "/" }
);
