"use client";
import { useState } from "react";
import { Search, Settings, Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      {/* Bouton Menu (pour Sidebar) */}
      <Menu 
        className="text-gray-400 cursor-pointer md:hidden" 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
      />

      {/* Barre de recherche */}
      <div className="flex items-center bg-gray-800 p-2 rounded-lg w-1/3">
        <Search className="text-gray-400 mr-2" />
        <input 
          type="text" 
          placeholder="Search for psychologists or students" 
          className="bg-transparent text-white w-full outline-none" 
        />
      </div>

      {/* Icônes de paramètres */}
      <div className="flex gap-4">
        <Settings className="text-gray-400 cursor-pointer" />
      </div>

      {/* Sidebar Mobile */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-gray-800 p-6 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}>
        <div className="text-xl font-bold mb-6">Admin Panel</div>
        <div className="flex flex-col space-y-4">
          <Link href="/components/ui/manage-users">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Manage Users</button>
          </Link>
          <Link href="./components/ui/settings">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Activate/Deactivate Accounts</button>
          </Link>
          <Link href="./components/ui/consultation">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Consult Psychologist Activity</button>
          </Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Other Features</button>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
