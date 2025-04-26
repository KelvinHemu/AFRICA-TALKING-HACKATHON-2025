import { Bell, CircleUserRound } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between w-full px-8 py-4 border-b bg-white dark:bg-neutral-900 dark:border-neutral-800">
      <h1 className="text-xl font-bold">Construction Task Manager</h1>
      <div className="flex items-center gap-6">
        <button className="relative p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
          <Bell className="w-6 h-6" />
        </button>
        <CircleUserRound className="w-8 h-8" />
      </div>
    </header>
  );
}
