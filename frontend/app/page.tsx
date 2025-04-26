import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardStats from "../components/DashboardStats";
import DashboardTabs from "../components/DashboardTabs";
import TaskCompletion from "../components/TaskCompletion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950">
      <DashboardHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="mb-2">
            <h2 className="text-2xl font-bold mb-1">Dashboard</h2>
            <p className="text-neutral-500">Welcome back! Here's an overview of your construction tasks.</p>
          </div>
          <DashboardStats />
          <DashboardTabs />
          <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-900 rounded-lg shadow p-8">
  <h2 className="text-2xl font-bold mb-1">Task Completion</h2>
  <p className="text-neutral-500 mb-6">Weekly task completion rates by category</p>
  <div className="flex flex-col gap-4">
    {/* Task 1 */}
    <div className="flex gap-3 items-start border-b pb-4">
      <span className="mt-1 text-green-500">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold">Foundation Work</span>
          <span className="bg-neutral-100 dark:bg-neutral-800 text-xs px-2 py-1 rounded font-medium">Main Task</span>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 text-sm mb-1">Completed all foundation preparation and concrete pouring</div>
        <div className="text-neutral-400 text-xs">Completed by: Michael Chen &nbsp; Date: Aug 15, 2023</div>
      </div>
    </div>
    {/* Task 2 */}
    <div className="flex gap-3 items-start border-b pb-4">
      <span className="mt-1 text-green-500">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold">Site Preparation</span>
          <span className="bg-neutral-100 dark:bg-neutral-800 text-xs px-2 py-1 rounded font-medium">Main Task</span>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 text-sm mb-1">Cleared site and prepared for construction</div>
        <div className="text-neutral-400 text-xs">Completed by: Emily Rodriguez &nbsp; Date: Jul 30, 2023</div>
      </div>
    </div>
    {/* Task 3 */}
    <div className="flex gap-3 items-start border-b pb-4">
      <span className="mt-1 text-green-500">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold">Dig trenches for foundation</span>
          <span className="bg-neutral-100 dark:bg-neutral-800 text-xs px-2 py-1 rounded font-medium">Sub Task</span>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 text-sm mb-1">Excavated trenches according to blueprint specifications</div>
        <div className="text-neutral-400 text-xs">Completed by: John Smith &nbsp; Date: Aug 10, 2023</div>
      </div>
    </div>
    {/* Task 4 */}
    <div className="flex gap-3 items-start border-b pb-4">
      <span className="mt-1 text-green-500">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold">Pour concrete for foundation</span>
          <span className="bg-neutral-100 dark:bg-neutral-800 text-xs px-2 py-1 rounded font-medium">Sub Task</span>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 text-sm mb-1">Poured and leveled concrete for the main building foundation</div>
        <div className="text-neutral-400 text-xs">Completed by: John Smith &nbsp; Date: Aug 10, 2023</div>
      </div>
    </div>
    {/* Task 5 - Sample Completed Task */}
    <div className="flex gap-3 items-start">
      <span className="mt-1 text-green-500">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold">Install scaffolding</span>
          <span className="bg-neutral-100 dark:bg-neutral-800 text-xs px-2 py-1 rounded font-medium">Main Task</span>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 text-sm mb-1">Set up scaffolding around the building perimeter for exterior work</div>
        <div className="text-neutral-400 text-xs">Completed by: Sarah Lee &nbsp; Date: Aug 18, 2023</div>
      </div>
    </div>
  </div>
</div>
        </main>
      </div>
    </div>
  );
}
