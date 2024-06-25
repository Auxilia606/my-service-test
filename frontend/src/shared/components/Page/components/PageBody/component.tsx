import { PageBodyProps } from "./types";

export const PageBody = (props: PageBodyProps) => {
  const { children } = props;

  return <div className="p-4">{children}</div>;
};
