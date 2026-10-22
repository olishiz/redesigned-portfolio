"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "about" },
  { href: "/experience/", label: "work" },
  { href: "/projects/", label: "projects" },
  { href: "/contact/", label: "contact" },
];

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="navigation" aria-label="Main navigation">
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} aria-current={pathname === href || `${pathname}/` === href ? "page" : undefined}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
