import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

const variants = {
  primary:
    "border border-[#e8c7c8]/70 text-[#e8c7c8] hover:bg-[#e8c7c8] hover:text-[#120f12]",
  secondary:
    "border border-[#b89050]/70 text-[#b89050] hover:bg-[#b89050] hover:text-[#120f12]",
  dark:
    "border border-[#120f12] bg-[#120f12] text-[#f4efe7] hover:bg-[#8d5960] hover:border-[#8d5960]"
};

export function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      className={`editorial-kicker inline-flex items-center justify-center px-8 py-5 text-xs transition ${variants[variant]} ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}
