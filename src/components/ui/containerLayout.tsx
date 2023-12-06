import { ReactNode } from "react";

const ContainerLayout = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto w-full max-w-7xl px-5">{children}</div>;
};

export default ContainerLayout;
