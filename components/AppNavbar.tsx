"use client";

import { useState } from "react";
import { logout } from "@/lib/auth-actions";
import { Session } from "next-auth";
import Link from "next/link";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export default function AppNavbar({ session }: { session: Session | null }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", link: "/about" },
    { name: "Plan a Trip", link: "/trips" },
    { name: "My Globe", link: "/globe" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <Navbar>
      {/* Desktop Navbar */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        {session ? (
          <NavbarButton as="button" onClick={logout} variant="dark">
            Sign Out
          </NavbarButton>
        ) : (
          <Link href="/login">
            <NavbarButton as="span" variant="dark">
              Sign In
            </NavbarButton>
          </Link>
        )}
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <NavItems
            items={navItems}
            onItemClick={() => setIsOpen(false)}
            mobile
          />
          {session ? (
            <NavbarButton as="button" onClick={logout} variant="dark">
              Sign Out
            </NavbarButton>
          ) : (
            <Link href="/login" onClick={() => setIsOpen(false)} className="w-full">
              <NavbarButton as="span" variant="dark" className="w-full text-center">
                Sign In
              </NavbarButton>
            </Link>
          )}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
