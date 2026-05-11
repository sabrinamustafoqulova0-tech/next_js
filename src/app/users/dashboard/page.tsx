"use client";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8">

      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Welcome back 👋 Here is your overview
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-xl bg-black text-white shadow-md hover:bg-gray-800 transition">
            Export
          </button>
          <button className="px-5 py-2 rounded-xl bg-white border border-gray-300 hover:bg-gray-100 transition">
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
          <h2 className="text-gray-500 text-sm">Total Users</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">1,240</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
          <h2 className="text-gray-500 text-sm">Active Sessions</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">320</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
          <h2 className="text-gray-500 text-sm">Revenue</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">$12,430</p>
        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Activity
          </h2>
        </div>

        <div className="divide-y">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between p-5 hover:bg-gray-50 transition"
            >
              <div>
                <p className="font-medium text-gray-800">
                  User updated profile
                </p>
                <p className="text-sm text-gray-500">
                  2 minutes ago
                </p>
              </div>

              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                Success
              </span>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Dashboard;