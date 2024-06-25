import { QueryProvider, RouterProvider } from "./provider";

import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <QueryProvider>
      <RecoilRoot>
        <RouterProvider />
      </RecoilRoot>
    </QueryProvider>
  );
};

export default App;
