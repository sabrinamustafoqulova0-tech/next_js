"use client";
import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8">

      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Settings
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your account preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Profile Settings
          </h2>

          <div className="space-y-4">

            <div>
              <label className="text-sm text-gray-500">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-gray-300 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-gray-300 outline-none transition"
              />
            </div>

          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Security
          </h2>

          <div className="space-y-4">

            <div>
              <label className="text-sm text-gray-500">New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-gray-300 outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-gray-300 outline-none transition"
              />
            </div>

          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Notifications
          </h2>

          <div className="flex items-center justify-between py-3 border-b">
            <span className="text-gray-700">Email Notifications</span>
            <input type="checkbox" className="w-5 h-5" />
          </div>

          <div className="flex items-center justify-between py-3 border-b">
            <span className="text-gray-700">Push Notifications</span>
            <input type="checkbox" className="w-5 h-5" />
          </div>

          <div className="flex items-center justify-between py-3">
            <span className="text-gray-700">SMS Alerts</span>
            <input type="checkbox" className="w-5 h-5" />
          </div>

        </div>

      </div>

      <div className="mt-8 flex justify-end">
        <button className="px-6 py-3 rounded-xl bg-black text-white font-medium shadow-md hover:bg-gray-800 transition">
          Save Changes
        </button>
      </div>

    </div>
  );
};

export default Settings;