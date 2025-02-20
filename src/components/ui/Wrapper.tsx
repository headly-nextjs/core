import React, { ReactNode } from "react";

export interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div className={`${className || ""} border-debug px-2 md:px-6 bg-red-500 text-red-500`}>
      {children}
    </div>
  );
}
