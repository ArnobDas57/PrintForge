import Link from "next/link";
import type { NavLinkProps } from "@/app/types";

export default function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 transition-colors text-sm font-medium uppercase tracking-wide rounded-md hover:text-orange-accent ${
        isActive ? "text-orange-accent" : "text-gray-800"
      }`}
    >
      {children}
    </Link>
  );
}
