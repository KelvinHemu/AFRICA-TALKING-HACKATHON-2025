"use client";

import { useState } from "react";
import { Search, Filter, FileDown, MoreVertical, Plus, Phone } from "lucide-react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";

// Sample artisan data based on the image
const artisans = [
  { id: "ART001", name: "John Smith", phone: "+254712345678", specialty: "Carpenter", activeTasks: 2, status: "Active" },
  { id: "ART002", name: "Robert Johnson", phone: "+254723456789", specialty: "Mason", activeTasks: 1, status: "Active" },
  { id: "ART003", name: "Maria Garcia", phone: "+254734567890", specialty: "Electrician", activeTasks: 0, status: "Available" },
  { id: "ART004", name: "James Wilson", phone: "+254745678901", specialty: "Plumber", activeTasks: 0, status: "Available" },
  { id: "ART005", name: "Sarah Lee", phone: "+254756789012", specialty: "Painter", activeTasks: 0, status: "On Leave" },
  { id: "ART006", name: "David Brown", phone: "+254767890123", specialty: "Carpenter", activeTasks: 1, status: "Active" },
  { id: "ART007", name: "Michael Davis", phone: "+254778901234", specialty: "Mason", activeTasks: 2, status: "Active" },
];

export default function ArtisansPage() {
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
              <h1 className="text-2xl font-bold">Artisans</h1>
              <p className="text-neutral-500">Manage artisan information and task assignments</p>
            </div>
            <button
              className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md"
              onClick={() => setShowModal(true)}
            >
              <Plus size={16} />
              <span>Add Artisan</span>
            </button>
          </div>
          
          <div className="bg-white dark:bg-neutral-900 border rounded-lg shadow-sm">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="relative w-56">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search artisans..." 
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
                    <th className="py-3 font-medium">ID</th>
                    <th className="py-3 font-medium">Name</th>
                    <th className="py-3 font-medium">Phone</th>
                    <th className="py-3 font-medium">Specialty</th>
                    <th className="py-3 font-medium">Active Tasks</th>
                    <th className="py-3 font-medium">Status</th>
                    <th className="py-3 w-8"></th>
                  </tr>
                </thead>
                <tbody>
                  {artisans.map((artisan) => (
                    <tr key={artisan.id} className="border-b hover:bg-neutral-50 dark:hover:bg-neutral-800">
                      <td className="pl-4 py-4">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="py-4 font-medium">{artisan.id}</td>
                      <td className="py-4 font-semibold">{artisan.name}</td>
                      <td className="py-4 flex items-center gap-2">
                        <Phone size={16} className="text-neutral-400" />
                        {artisan.phone}
                      </td>
                      <td className="py-4">{artisan.specialty}</td>
                      <td className="py-4">{artisan.activeTasks}</td>
                      <td className="py-4">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          artisan.status === "Active"
                            ? "bg-black text-white"
                            : artisan.status === "Available"
                              ? "bg-neutral-100 text-neutral-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {artisan.status}
                        </span>
                      </td>
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
        {/* Add New Artisan Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-xl max-w-lg w-full p-8 relative">
              <button className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700" onClick={() => setShowModal(false)} aria-label="Close">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
              <h2 className="text-xl font-bold mb-1">Add New Artisan</h2>
              <p className="text-neutral-500 mb-6">Register a new artisan to assign tasks via SMS.</p>
              <form className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block font-medium mb-1">First Name</label>
                    <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter first name" />
                  </div>
                  <div className="flex-1">
                    <label className="block font-medium mb-1">Last Name</label>
                    <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter last name" />
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-1">Phone Number</label>
                  <input type="text" className="w-full border rounded px-3 py-2" placeholder="+254XXXXXXXXX" />
                  <div className="text-xs text-neutral-500 mt-1">This number will receive SMS task notifications</div>
                </div>
                <div>
                  <label className="block font-medium mb-1">Artisan ID</label>
                  <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter unique ID for USSD access" />
                  <div className="text-xs text-neutral-500 mt-1">Artisan will use this ID to access tasks via USSD</div>
                </div>
                <div>
                  <label className="block font-medium mb-1">Specialty</label>
                  <select className="w-full border rounded px-3 py-2">
                    <option>Select specialty</option>
                    <option>Carpenter</option>
                    <option>Mason</option>
                    <option>Electrician</option>
                    <option>Plumber</option>
                    <option>Painter</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">Years of Experience</label>
                  <input type="number" className="w-full border rounded px-3 py-2" placeholder="" />
                </div>
                <div className="flex justify-end gap-3 mt-2">
                  <button type="button" className="px-5 py-2 rounded bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="button" className="px-5 py-2 rounded bg-black text-white">Add Artisan</button>
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

