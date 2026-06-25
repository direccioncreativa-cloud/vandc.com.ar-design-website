import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function Section({ children, className = "", innerClassName = "" }: SectionProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className={`mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-14 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
