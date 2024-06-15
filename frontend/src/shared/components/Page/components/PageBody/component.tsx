import { PageBodyProps } from "./types";

export const PageBody: React.FC<PageBodyProps> = (props) => {
  const { children } = props;

  return <div className="p-4">{children}</div>;
};
