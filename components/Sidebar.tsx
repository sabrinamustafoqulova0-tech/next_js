import Link from "next/link";
import React from "react";

const Sidebar = ({ children }) => {
  return (
    <div className="flex ">

      <div className="w-64  bg-gradient-to-b from-black to-gray-900 text-white p-6 flex h-[150vh] flex-col gap-4 shadow-xl">

        <h2 className="text-xl font-bold mb-8 tracking-wide">
          Menu
        </h2>

        <Link
          href={"/users"}
          className="px-3 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition"
        >
          Users
        </Link>

        <Link
          href={"/users/dashboard"}
          className="px-3 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition"
        >
          Dashboard
        </Link>

        <Link
          href={"/users/settings"}
          className="px-3 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition"
        >
          Settings
        </Link>

      </div>

      <div className="flex-1 bg-gray-100 flex flex-col ">
        <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shadow-sm">

          <h1 className=" text-2xl font-semibold text-gray-800 tracking-tight">
            Zagalovok
          </h1>

          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition shadow-sm">
            Logaut
          </button>

        </nav>

        <main >
          {children}
        </main>

      </div>

    </div>
  );
};

export default Sidebar;