"use client";

import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import { usePathname } from "next/navigation";
import PFLogoIcon from "@/public/printforge-logo-icon.svg";
import PFLogo from "@/public/printforge-logo.svg";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between items-center px-6 py-4">
        <Link href="/" className="relative cursor-pointer">
          {/* Desktop Logo */}
          <img
            src={PFLogo.src}
            alt="PrintForge Logo"
            className="w-[200px] h-auto hidden md:block"
          />
          {/* Mobile Logo */}
          <img
            src={PFLogoIcon.src}
            alt="PrintForge Icon"
            className="w-[40px] h-auto block md:hidden"
          />
        </Link>

        <ul className="flex items-center space-x-6">
          <li>
            <NavLink
              href="/3d-models"
              isActive={pathname.startsWith("/3d-models")}
            >
              3D Models
            </NavLink>
          </li>
          <li>
            <NavLink href="/about" isActive={pathname === "/about"}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
