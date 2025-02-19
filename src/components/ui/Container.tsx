import React, { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string | null;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`border-debug-dashed container mx-auto py-10 md:py-24 lg:px-20 print:py-0 print:px-0 ${className}`}
    >545545
      {children}
    </div>
  );
}
