"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";

const tabs = ["General", "Notifications", "Security"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [companyName, setCompanyName] = useState("Acme Corporation");
  const [companyEmail, setCompanyEmail] = useState("info@acmecorp.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [website, setWebsite] = useState("https://acmecorp.com");
  const [timezone, setTimezone] = useState("ET");
  const [dateFormat, setDateFormat] = useState("MM/DD/YYYY");
  const [autoScheduling, setAutoScheduling] = useState(false);
  const [overtimeAlerts, setOvertimeAlerts] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950">
      <DashboardHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-1">Settings</h1>
          <p className="text-neutral-500 mb-6">Manage your workforce management system settings</p>

          <div className="flex gap-3 mb-6 border-b">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                  activeTab === idx
                    ? "border-black dark:border-white text-black dark:text-white"
                    : "border-transparent text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* General Tab Content */}
          {activeTab === 0 && (
            <div className="max-w-4xl">
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">General Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block mb-1 font-medium">Company Name</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={e => setCompanyName(e.target.value)}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Company Email</label>
                    <input
                      type="email"
                      value={companyEmail}
                      onChange={e => setCompanyEmail(e.target.value)}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Phone Number</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Website</label>
                    <input
                      type="url"
                      value={website}
                      onChange={e => setWebsite(e.target.value)}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-3">System Preferences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block mb-1 font-medium">Default Time Zone</label>
                    <select
                      value={timezone}
                      onChange={e => setTimezone(e.target.value)}
                      className="w-full border rounded px-3 py-2"
                    >
                      <option value="ET">Eastern Time (ET)</option>
                      <option value="CT">Central Time (CT)</option>
                      <option value="PT">Pacific Time (PT)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Date Format</label>
                    <select
                      value={dateFormat}
                      onChange={e => setDateFormat(e.target.value)}
                      className="w-full border rounded px-3 py-2"
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-5 mb-6">
                  <div className="flex items-center gap-3">
                    <label className="font-medium">Auto Scheduling</label>
                    <span className="text-neutral-500 text-sm">Automatically generate schedules based on availability</span>
                    <input
                      type="checkbox"
                      checked={autoScheduling}
                      onChange={e => setAutoScheduling(e.target.checked)}
                      className="ml-auto w-6 h-6 rounded focus:ring-2"
                      style={{ accentColor: '#111' }}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="font-medium">Overtime Alerts</label>
                    <span className="text-neutral-500 text-sm">Send alerts when employees approach overtime thresholds</span>
                    <input
                      type="checkbox"
                      checked={overtimeAlerts}
                      onChange={e => setOvertimeAlerts(e.target.checked)}
                      className="ml-auto w-6 h-6 rounded focus:ring-2"
                      style={{ accentColor: '#111' }}
                    />
                  </div>
                </div>
                <button className="bg-black text-white px-6 py-2 rounded font-medium">Save Changes</button>
              </div>
            </div>
          )}
          {/* Notifications Tab Content */}
          {activeTab === 1 && (
            <div className="max-w-5xl bg-white dark:bg-neutral-900 rounded-lg shadow p-8 mb-8">
              <h2 className="text-xl font-bold mb-1">Notification Settings</h2>
              <p className="text-neutral-500 mb-8">Configure how and when you receive notifications</p>

              {/* Email Notifications */}
              <div className="mb-8">
                <div className="font-semibold mb-2">Email Notifications</div>
                <div className="flex flex-col divide-y">
                  <div className="flex items-center justify-between py-4">
                    <div>
                      <div className="font-medium">Schedule Changes</div>
                      <div className="text-neutral-500 text-sm">Receive notifications when schedules are modified</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={true}
                      className="w-6 h-6 rounded focus:ring-2"
                      style={{ accentColor: '#111' }}
                      readOnly
                    />
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <div>
                      <div className="font-medium">Time Off Requests</div>
                      <div className="text-neutral-500 text-sm">Receive notifications for new time off requests</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={true}
                      className="w-6 h-6 rounded focus:ring-2"
                      style={{ accentColor: '#111' }}
                      readOnly
                    />
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <div>
                      <div className="font-medium">Performance Reports</div>
                      <div className="text-neutral-500 text-sm">Receive weekly performance summary reports</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={false}
                      className="w-6 h-6 rounded focus:ring-2"
                      style={{ accentColor: '#111' }}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              {/* System Notifications */}
              <div className="mb-8">
                <div className="font-semibold mb-2">System Notifications</div>
                <div className="flex flex-col divide-y">
                  <div className="flex items-center justify-between py-4">
                    <div>
                      <div className="font-medium">Desktop Notifications</div>
                      <div className="text-neutral-500 text-sm">Show desktop notifications for important alerts</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={true}
                      className="w-6 h-6 rounded focus:ring-2"
                      style={{ accentColor: '#111' }}
                      readOnly
                    />
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <div>
                      <div className="font-medium">Sound Alerts</div>
                      <div className="text-neutral-500 text-sm">Play sound when notifications are received</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={false}
                      className="w-6 h-6 rounded focus:ring-2"
                      style={{ accentColor: '#111' }}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <button className="bg-black text-white px-6 py-2 rounded font-medium">Save Changes</button>
            </div>
          )}

          {/* Security Tab Content */}
          {activeTab === 2 && (
            <div className="max-w-5xl bg-white dark:bg-neutral-900 rounded-lg shadow p-8 mb-8">
              <h2 className="text-xl font-bold mb-1">Security Settings</h2>
              <p className="text-neutral-500 mb-8">Manage your account security and permissions</p>
              <div className="mb-4 font-semibold">Password</div>
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-medium">Current Password</label>
                    <input type="password" className="border rounded px-3 py-2 w-full" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2 w-full">
                      <label className="font-medium">New Password</label>
                      <input type="password" className="border rounded px-3 py-2 w-full" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label className="font-medium">Confirm New Password</label>
                      <input type="password" className="border rounded px-3 py-2 w-full" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="bg-black text-white px-6 py-2 rounded font-medium w-max mt-2">Update Password</button>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
