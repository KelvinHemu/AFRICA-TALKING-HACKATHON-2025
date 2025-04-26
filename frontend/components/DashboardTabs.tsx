"use client";

import { useState } from "react";

const tabs = ["Activity", "Analytics", "Reports"];

export default function DashboardTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex gap-4 border-b mb-4">
      {tabs.map((tab, idx) => (
        <button
          key={tab}
          onClick={() => setActive(idx)}
          className={`px-4 py-2 font-medium border-b-2 transition-colors ${
            active === idx
              ? "border-black dark:border-white text-black dark:text-white"
              : "border-transparent text-neutral-400 hover:text-black dark:hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
