"use client";

import { useState } from "react";
import { login, logout } from "@/lib/auth-actions";
import { Session } from "next-auth";

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
    { name: "Plan a Trip", link: "/trips" },
    { name: "My Globe", link: "/globe" },
    { name: "Dream Board", link: "/dream-board" },
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
          <NavbarButton as="button" onClick={login} variant="dark">
            Sign In
          </NavbarButton>
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
            <NavbarButton as="button" onClick={login} variant="dark">
              Sign In
            </NavbarButton>
          )}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
