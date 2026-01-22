"use client";

import { JSX, useState } from "react";
import { Home, User, Rocket, Feather, Mail, BadgeCheck, Star } from "lucide-react";

type NavItem = {
  id: string;
  label: string;
  icon: JSX.Element;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: <Home /> },
  { id: "about", label: "About", icon: <User /> },
  { id: "projects", label: "Projects", icon: <Rocket /> },
  { id: "competency", label: "Competency", icon: <Feather /> },
  { id: "certificate", label: "Certificate", icon: <BadgeCheck /> },
  { id: "contact", label: "Contact", icon: <Mail /> },
];

export default function FloatingNavbar() {
  const [active, setActive] = useState("home");

  const handleClick = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-6 px-8 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="group relative flex flex-col items-center"
          >
            {/* Tooltip */}
            <span className="absolute -top-8 scale-0 group-hover:scale-100 transition text-xs text-white bg-black/60 px-2 py-1 rounded">
              {item.label}
            </span>

            {/* Icon */}
            <div
              className={`transition-all duration-300 ${
                active === item.id
                  ? "scale-125 text-black"
                  : "scale-100 text-black/70"
              }`}
            >
              {item.icon}
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
}
