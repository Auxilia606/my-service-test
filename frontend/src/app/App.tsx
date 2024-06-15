import React from "react";

import { QueryProvider, RouterProvider } from "./provider";

import { RecoilRoot } from "recoil";

const App: React.FC = () => {
  return (
    <QueryProvider>
      <RecoilRoot>
        <RouterProvider />
      </RecoilRoot>
    </QueryProvider>
  );
};

export default App;
