import { useState } from "react";
import SalesAgentSidebar from "../components/sales/SalesAgentSidebar";
import SearchFiltersPanel from "../components/sales/SearchFiltersPanel";
import { SearchIcon, RobotIcon } from "../components/icons/SalesIcons";
import { footerLinks } from "../data/salesAgentData";

import logo from "../assets/Logo.png";

export default function SalesAgent() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("b2c");
  const [searchType, setSearchType] = useState("individual");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col overflow-hidden">
      {/* Fixed Header */}
      <header className="bg-white flex justify-between items-center px-6 py-3 flex-shrink-0 border-b border-gray-100 z-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-7 h-7 object-contain" />
          <div>
            <div className="font-semibold text-sm text-gray-800">AI workforce</div>
            <div className="text-xs text-gray-500">Create an AI employee</div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
            <span className="text-sm font-semibold text-gray-600 mr-3">3000 Credits</span>
            <button className="bg-gray-900 text-white text-sm px-4 py-1.5 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Buy Credits
            </button>
          </div>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sales Agent Sidebar */}
        <SalesAgentSidebar
          isExpanded={sidebarExpanded}
          onToggle={() => setSidebarExpanded(!sidebarExpanded)}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />

        {/* Filter Panel */}
        <div className="flex flex-col bg-white border-r border-gray-100">
          {/* Search Type Toggle */}
          <div className="p-4 border-b border-gray-100">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setSearchType("individual")}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  searchType === "individual"
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Individual Search
              </button>
              <button
                onClick={() => setSearchType("bulk")}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  searchType === "bulk"
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Bulk Search
              </button>
            </div>
          </div>
          
          <SearchFiltersPanel searchType={searchType} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Search Content */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center max-w-xl">
              {/* Logo */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <RobotIcon className="text-gray-700" />
                <div className="text-left">
                  <div className="font-bold text-2xl text-gray-800">AI workforce</div>
                  <div className="text-gray-500">Create an AI employee</div>
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Tell us what you are looking for
              </h1>

              {/* Search Bar */}
              <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-200 overflow-hidden">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='e.g. LinkedIn URL, Job Title, Location, Skills, Years of Experience, Company etc."'
                  className="flex-1 px-6 py-4 text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
                />
                <button className="bg-gray-900 text-white p-4 m-1 rounded-full hover:bg-gray-800 transition-colors">
                  <SearchIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-100 bg-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <img src={logo} alt="Logo" className="w-5 h-5 object-contain" />
              <span>© 2025 aiworkforce.co.uk</span>
            </div>
            <nav className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
}