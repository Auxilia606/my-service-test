import { PageBodyProps } from "./types";

import { twMerge } from "tailwind-merge";

export const PageBody = (props: PageBodyProps) => {
  const { children, className } = props;

  return <div className={twMerge("mx-4", className)}>{children}</div>;
};
