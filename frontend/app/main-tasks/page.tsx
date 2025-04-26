"use client";

import { useState } from "react";
import { Search, Filter, FileDown, MoreVertical, Plus } from "lucide-react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";

// Sample task data based on the image
const tasks = [
  {
    id: 1,
    name: "Foundation Work",
    description: "Complete all foundation preparation and concrete pouring",
    assignedTo: "Michael Chen",
    status: "In Progress",
    dueDate: "8/15/2023",
  },
  {
    id: 2,
    name: "Framing",
    description: "Complete structural framing for all floors",
    assignedTo: "Emily Rodriguez",
    status: "Not Started",
    dueDate: "8/30/2023",
  },
  {
    id: 3,
    name: "Electrical Wiring",
    description: "Install all electrical systems and wiring",
    assignedTo: "David Kim",
    status: "Not Started",
    dueDate: "9/10/2023",
  },
  {
    id: 4,
    name: "Plumbing",
    description: "Install all plumbing systems",
    assignedTo: "Jessica Taylor",
    status: "Not Started",
    dueDate: "9/15/2023",
  },
  {
    id: 5,
    name: "Roofing",
    description: "Complete roof installation",
    assignedTo: "Michael Chen",
    status: "Not Started",
    dueDate: "9/25/2023",
  },
  {
    id: 6,
    name: "Site Preparation",
    description: "Clear site and prepare for construction",
    assignedTo: "Emily Rodriguez",
    status: "Completed",
    dueDate: "7/30/2023",
  },
  {
    id: 7,
    name: "Interior Finishing",
    description: "Complete all interior finishing work",
    assignedTo: "David Kim",
    status: "Not Started",
    dueDate: "10/15/2023",
  },
];

export default function MainTasksPage() {
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
              <h1 className="text-2xl font-bold">Main Tasks</h1>
              <p className="text-neutral-500">Manage and assign main construction tasks to engineers</p>
            </div>
            <button
              className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md"
              onClick={() => setShowModal(true)}
            >
              <Plus size={16} />
              <span>Add Main Task</span>
            </button>
          </div>
          
          <div className="bg-white dark:bg-neutral-900 border rounded-lg shadow-sm">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="relative w-56">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search tasks..." 
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
                <button className="flex items-center gap-2 border px-3 py-2 rounded-md text-sm">
                  <span>Advanced</span>
                </button>
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
                    <th className="py-3 font-medium">Task</th>
                    <th className="py-3 font-medium">Assigned To</th>
                    <th className="py-3 font-medium">Status</th>
                    <th className="py-3 font-medium">Due Date</th>
                    <th className="py-3 w-8"></th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id} className="border-b hover:bg-neutral-50 dark:hover:bg-neutral-800">
                      <td className="pl-4 py-4">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="py-4">
                        <div className="font-medium">{task.name}</div>
                        <div className="text-sm text-neutral-500">{task.description}</div>
                      </td>
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
        {/* Add Main Task Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-xl max-w-lg w-full p-8 relative">
              <button className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700" onClick={() => setShowModal(false)} aria-label="Close">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
              <h2 className="text-xl font-bold mb-1">Add Main Task</h2>
              <p className="text-neutral-500 mb-6">Create a new main task and assign it to an engineer.</p>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="block font-medium mb-1">Task Title</label>
                  <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter task title" />
                </div>
                <div>
                  <label className="block font-medium mb-1">Description</label>
                  <textarea className="w-full border rounded px-3 py-2 min-h-[60px]" placeholder="Enter task description" />
                </div>
                <div>
                  <label className="block font-medium mb-1">Assign To Engineer</label>
                  <select className="w-full border rounded px-3 py-2">
                    <option>Select engineer</option>
                    <option>Michael Chen</option>
                    <option>Emily Rodriguez</option>
                    <option>David Kim</option>
                    <option>Jessica Taylor</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block font-medium mb-1">Start Date</label>
                    <input type="date" className="w-full border rounded px-3 py-2" />
                  </div>
                  <div className="flex-1">
                    <label className="block font-medium mb-1">Due Date</label>
                    <input type="date" className="w-full border rounded px-3 py-2" />
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-1">Priority</label>
                  <select className="w-full border rounded px-3 py-2">
                    <option>Medium</option>
                    <option>High</option>
                    <option>Low</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3 mt-2">
                  <button type="button" className="px-5 py-2 rounded bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="button" className="px-5 py-2 rounded bg-black text-white">Create Task</button>
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

