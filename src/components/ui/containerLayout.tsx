import { ReactNode } from "react";

interface ContainerLayoutProps {
  children: ReactNode;
  className?: string;
}

const ContainerLayout = ({ children, className }: ContainerLayoutProps) => {
  return (
    <div className={`mx-auto w-full max-w-7xl p-5 ${className}`}>
      {children}
    </div>
  );
};

export default ContainerLayout;
