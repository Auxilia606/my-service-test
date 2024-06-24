import { PageSectionProps } from "./types";

import { twMerge } from "tailwind-merge";

export const PageSection = (props: PageSectionProps) => {
  const { children, className } = props;

  return (
    <section
      className={twMerge("bg-slate-200 mx-4 rounded-md shadow-md", className)}
    >
      {children}
    </section>
  );
};
