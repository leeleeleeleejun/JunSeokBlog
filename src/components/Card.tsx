import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`origin-center rounded-xl border border-gray-200 bg-white transition-transform duration-300 ease-out hover:scale-[1.02] ${className}`}
    >
      {children}
    </div>
  );
}
