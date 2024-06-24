import { PropsWithChildren } from "react";

export const PageSection = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <section className="bg-slate-200 mx-4 rounded-md shadow-md">
      {children}
    </section>
  );
};
