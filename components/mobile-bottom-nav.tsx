"use client";

import Link from "next/link";
import { Home, Menu, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export const MobileBottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Menu",
      href: "/menu/",
      icon: Menu,
    },
    {
      name: "Contact",
      href: "/contact/",
      icon: Phone,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-white/10 md:hidden">
      <nav className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center pt-3 flex-1 ${
                isActive
                  ? "text-amber-200"
                  : "text-white/80 hover:text-amber-200"
              }`}
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium pb-3">{item.name}</span>
              {isActive && <span className=" h-0.5 w-10 bg-amber-200 "></span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
