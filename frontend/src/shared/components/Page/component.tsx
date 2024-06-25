import { PropsWithChildren } from "react";

import { PageBody, PageHeader, PageSection } from "./components";

const Base = (props: PropsWithChildren) => {
  const { children } = props;

  return <div className="relative flex flex-col gap-4">{children}</div>;
};

export const Page = Object.assign(Base, {
  Body: PageBody,
  Header: PageHeader,
  Section: PageSection,
});
