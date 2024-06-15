import { PropsWithChildren } from "react";

import { PageBody, PageHeader } from "./components";

const Base: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return <div className="flex flex-col">{children}</div>;
};

export const Page = Object.assign(Base, {
  Body: PageBody,
  Header: PageHeader,
});
