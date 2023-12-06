import { ReactNode } from "react";

const ContainerLayout = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto w-full max-w-7xl p-5">{children}</div>;
};

export default ContainerLayout;
