import { ClipboardList, ListTodo, Users, PercentCircle } from "lucide-react";

const stats = [
  {
    label: "Main Tasks",
    value: 24,
    change: "+12%",
    changeNote: "from last month",
    icon: ClipboardList,
    up: true,
  },
  {
    label: "Sub Tasks",
    value: 142,
    change: "+4%",
    changeNote: "from last week",
    icon: ListTodo,
    up: true,
  },
  {
    label: "Artisans",
    value: 38,
    change: "+7%",
    changeNote: "from last month",
    icon: Users,
    up: true,
  },
  {
    label: "Completion Rate",
    value: "78%",
    change: "-3%",
    changeNote: "from last month",
    icon: PercentCircle,
    up: false,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-lg border bg-white dark:bg-neutral-900 dark:border-neutral-800 p-4 flex flex-col gap-2 min-w-[180px]">
          <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200">
            <stat.icon className="w-5 h-5" />
            <span className="font-semibold">{stat.label}</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold">{stat.value}</span>
            <span className={`text-xs font-medium ${stat.up ? "text-green-600" : "text-red-600"}`}>{stat.change}</span>
          </div>
          <div className="text-xs text-neutral-500">{stat.changeNote}</div>
        </div>
      ))}
    </div>
  );
}
