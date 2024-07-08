import { App as ANTDApp } from "antd";

import { QueryProvider, RouterProvider } from "./provider";

import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <QueryProvider>
      <RecoilRoot>
        <ANTDApp>
          <RouterProvider />
        </ANTDApp>
      </RecoilRoot>
    </QueryProvider>
  );
};

export default App;
