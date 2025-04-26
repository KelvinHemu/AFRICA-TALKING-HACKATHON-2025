"use client";

import { ReactNode } from "react";
import { Home, ListChecks, ListTodo, Users, Settings, User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", icon: Home, href: "/" },
  { label: "Main Tasks", icon: ListChecks, href: "/main-tasks" },
  { label: "Sub Tasks", icon: ListTodo, href: "/sub-tasks" },
  { label: "Artisans", icon: Users, href: "/artisans" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="flex flex-col justify-between h-full w-64 bg-white border-r px-4 py-6 dark:bg-neutral-900 dark:border-neutral-800">
      <div>
        <div className="mb-8">
          <div className="font-bold text-lg">Role: <span className="font-normal">Project Manager</span></div>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.label} 
                href={item.href} 
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? "bg-neutral-200 dark:bg-neutral-800" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"}`}
              > 
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-3 p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg mt-8">
        <User2 className="w-8 h-8 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <div>
          <div className="font-semibold text-sm">John Doe</div>
          <div className="text-xs text-neutral-500">Project Manager</div>
        </div>
      </div>
    </aside>
  );
}
