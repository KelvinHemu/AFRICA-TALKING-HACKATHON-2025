"use client";

import { useState } from "react";
import { Search, Filter, FileDown, MoreVertical, Plus } from "lucide-react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";

// Sample sub-task data based on the image
const subTasks = [
  {
    id: 1,
    name: "Dig trenches for foundation",
    mainTask: "Foundation Work",
    assignedTo: "John Smith",
    status: "Completed",
    dueDate: "8/10/2023",
  },
  {
    id: 2,
    name: "Pour concrete for foundation",
    mainTask: "Foundation Work",
    assignedTo: "Robert Johnson",
    status: "In Progress",
    dueDate: "8/15/2023",
  },
  {
    id: 3,
    name: "Install floor joists",
    mainTask: "Framing",
    assignedTo: "Maria Garcia",
    status: "Not Started",
    dueDate: "8/30/2023",
  },
  {
    id: 4,
    name: "Frame exterior walls",
    mainTask: "Framing",
    assignedTo: "James Wilson",
    status: "Not Started",
    dueDate: "9/5/2023",
  },
  {
    id: 5,
    name: "Install electrical panels",
    mainTask: "Electrical Wiring",
    assignedTo: "Sarah Lee",
    status: "Not Started",
    dueDate: "9/10/2023",
  },
  {
    id: 6,
    name: "Run wiring for outlets",
    mainTask: "Electrical Wiring",
    assignedTo: "David Brown",
    status: "Not Started",
    dueDate: "9/12/2023",
  },
  {
    id: 7,
    name: "Install water supply lines",
    mainTask: "Plumbing",
    assignedTo: "Michael Davis",
    status: "Not Started",
    dueDate: "9/15/2023",
  },
];

export default function SubTasksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950">
      <DashboardHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold">Sub Tasks</h1>
              <p className="text-neutral-500">Create and assign detailed sub-tasks to artisans</p>
            </div>
            <button
              className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md"
              onClick={() => setShowModal(true)}
            >
              <Plus size={16} />
              <span>Add Sub Task</span>
            </button>
          </div>
          
          <div className="bg-white dark:bg-neutral-900 border rounded-lg shadow-sm">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="relative w-56">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search sub-tasks..." 
                  className="pl-10 pr-4 py-2 w-full border rounded-md text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 border px-3 py-2 rounded-md text-sm">
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
                <div className="relative">
                  <button className="flex items-center gap-2 border px-3 py-2 rounded-md text-sm">
                    <span>Main Task</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <button className="flex items-center gap-2 border px-3 py-2 rounded-md text-sm">
                  <FileDown size={16} />
                  <span>Export</span>
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm border-b">
                    <th className="pl-4 py-3 w-8">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="py-3 font-medium">Sub Task</th>
                    <th className="py-3 font-medium">Main Task</th>
                    <th className="py-3 font-medium">Assigned To</th>
                    <th className="py-3 font-medium">Status</th>
                    <th className="py-3 font-medium">Due Date</th>
                    <th className="py-3 w-8"></th>
                  </tr>
                </thead>
                <tbody>
                  {subTasks.map((task) => (
                    <tr key={task.id} className="border-b hover:bg-neutral-50 dark:hover:bg-neutral-800">
                      <td className="pl-4 py-4">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="py-4 font-medium">{task.name}</td>
                      <td className="py-4">{task.mainTask}</td>
                      <td className="py-4">{task.assignedTo}</td>
                      <td className="py-4">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          task.status === "Completed" 
                            ? "bg-green-100 text-green-800" 
                            : task.status === "In Progress" 
                              ? "bg-yellow-100 text-yellow-800" 
                              : "bg-neutral-100 text-neutral-800"
                        }`}>
                          {task.status}
                        </span>
                      </td>
                      <td className="py-4">{task.dueDate}</td>
                      <td className="py-4 pr-4">
                        <button className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700">
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        {/* Add Sub Task Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-xl max-w-lg w-full p-8 relative">
              <button className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700" onClick={() => setShowModal(false)} aria-label="Close">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
              <h2 className="text-xl font-bold mb-1">Add Sub Task</h2>
              <p className="text-neutral-500 mb-6">Create a new sub task and assign it to an artisan.</p>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="block font-medium mb-1">Main Task</label>
                  <select className="w-full border rounded px-3 py-2">
                    <option>Select main task</option>
                    <option>Foundation Work</option>
                    <option>Framing</option>
                    <option>Electrical Wiring</option>
                    <option>Plumbing</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">Sub Task Title</label>
                  <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter sub task title" />
                </div>
                <div>
                  <label className="block font-medium mb-1">Description</label>
                  <textarea className="w-full border rounded px-3 py-2 min-h-[60px]" placeholder="Enter task description" />
                </div>
                <div>
                  <label className="block font-medium mb-1">Assign To Artisan</label>
                  <select className="w-full border rounded px-3 py-2">
                    <option>Select artisan</option>
                    <option>John Smith</option>
                    <option>Robert Johnson</option>
                    <option>Maria Garcia</option>
                    <option>James Wilson</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block font-medium mb-1">Due Date</label>
                    <input type="date" className="w-full border rounded px-3 py-2" />
                  </div>
                  <div className="flex-1">
                    <label className="block font-medium mb-1">Estimated Hours</label>
                    <input type="number" className="w-full border rounded px-3 py-2" placeholder="" />
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-1">Required Materials</label>
                  <input type="text" className="w-full border rounded px-3 py-2" placeholder="List any required materials" />
                </div>
                <div className="flex justify-end gap-3 mt-2">
                  <button type="button" className="px-5 py-2 rounded bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="button" className="px-5 py-2 rounded bg-black text-white">Create Sub Task</button>
                </div>
              </form>
            </div>
          </div>
        )}
        </main>
      </div>
    </div>
  );
}

