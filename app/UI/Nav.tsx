"use client";
import Link from "next/link";
import { IoHome, IoFolderOpenOutline } from "react-icons/io5";

import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: IoHome,
      activeColor: "text-[#4831d4]",
      hoverColor: "hover:text-[#4831d4]",
      defaultColor: "text-gray-500",
    },
    {
      name: "Projects",
      href: "/projects",
      icon: IoFolderOpenOutline,
      activeColor: "text-[#4831d4]",
      hoverColor: "hover:text-[#4831d4]",
      defaultColor: "text-gray-500",
    },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-2 py-2 flex space-x-4 shadow-xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                group relative p-3 rounded-full transition-all duration-300 ease-in-out
                ${
                  isActive
                    ? `${item.activeColor} bg-[#ccf381]/20`
                    : `${item.defaultColor} ${item.hoverColor}`
                }
              `}
              aria-label={item.name}
            >
              <Icon
                className={`
                  w-6 h-6 transition-transform 
                  group-hover:scale-110 
                  ${isActive ? "scale-110" : ""}
                `}
              />
              {isActive && (
                <span
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 
                  bg-[#4831d4] text-[#ccf381] text-xs px-2 py-1 rounded-full opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"
                >
                  {item.name}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
