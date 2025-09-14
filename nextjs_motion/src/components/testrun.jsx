"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 relative">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <div key={index} className="relative pb-1">
            <Link
              href={link.path}
              className={`capitalize font-medium transition-colors ${
                isActive ? "text-accent" : "hover:text-accent"
              }`}
            >
              {link.name}
            </Link>

            {isActive && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-accent rounded-full"
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Nav;
