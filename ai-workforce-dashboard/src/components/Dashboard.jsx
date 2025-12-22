import { useState } from "react";
import {
  navItems,
  statsCards,
  creditCards,
  todayMeetings,
  weekMeetings,
  userData,
  appInfo,
} from "../data/mockData";
import logo from "../assets/Logo.png";

import { useNavigate } from "react-router-dom";

// Icon Components
const icons = {
  analytics: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  sales: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path
        d="M7 12h2v5H7zM11 8h2v9h-2zM15 10h2v7h-2z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  ),
  marketing: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 8.5L12 13 2 8.5" />
      <path d="M2 8.5v7l10 4.5 10-4.5v-7" />
      <path d="M12 13v7" />
    </svg>
  ),
  support: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  ),
  train: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  integration: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  settings: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  bell: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  envelope: () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 6L2 7" />
    </svg>
  ),
  inbox: () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 14h6l2 2h4l2-2h6" />
    </svg>
  ),
  percent: () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="1.5" fill="currentColor" />
      <circle cx="15" cy="15" r="1.5" fill="currentColor" />
      <path d="M16 8l-8 8" />
    </svg>
  ),
  phone: () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  duration: () => (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
};

const Icon = ({ name, className = "" }) => {
  const IconComponent = icons[name];
  return IconComponent ? (
    <span className={className}>
      <IconComponent />
    </span>
  ) : null;
};

// Stat Card Component
const StatCard = ({ value, label, iconType }) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm">
    <div className="text-amber-500">
      <Icon name={iconType} />
    </div>
    <div className="mt-3">
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  </div>
);

// Credit Card Component
const CreditCard = ({ title, used, total }) => (
  <div className="bg-white rounded-xl p-5 border-2 border-blue-100">
    <div className="text-gray-600 font-medium mb-3">{title}</div>
    <div className="flex items-baseline">
      <span className="text-5xl font-bold text-gray-800">{used}</span>
      <span className="text-gray-400 text-lg ml-1">/{total}</span>
    </div>
  </div>
);

// Meeting Card Component
const MeetingCard = ({ meeting }) => (
  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex justify-between items-start">
    <div className="flex-1">
      <h3 className="font-semibold text-gray-800">
        {meeting.company}
        {meeting.title && ` – ${meeting.title}`}
      </h3>
      {meeting.description && (
        <p className="text-sm text-gray-500 mt-0.5">{meeting.description}</p>
      )}
      <p className="text-sm text-gray-400 mt-1">{meeting.time}</p>
    </div>
    <button className="text-blue-600 font-medium text-sm whitespace-nowrap ml-4 px-3 py-1 rounded-full border border-transparent hover:border-blue-600 transition-all duration-200">
      {meeting.actionType === "join" ? "Join Meeting" : "Notify Me"}
    </button>
  </div>
);

// Nav Item Component
const NavItem = ({ item, isActive, onClick, isExpanded }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 w-full group
      ${
        isActive ? "bg-gray-900 text-white" : "text-gray-500 hover:bg-gray-100"
      }`}
  >
    <span
      className={`flex-shrink-0 ${
        isActive ? "text-white" : "text-gray-500 group-hover:text-gray-700"
      }`}
    >
      <Icon name={item.key} />
    </span>
    <span
      className={`text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-200
        ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"}`}
    >
      {item.name}
    </span>
  </button>
);

// Main Dashboard Component
export default function Dashboard() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [activeNav, setActiveNav] = useState("Analytics");
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-br from-[#EFFCF1] via-[#C4D6F1] to-[#FEF7E4] flex flex-col overflow-hidden">
      {/* Fixed Full-Width Header */}
      <div className="bg-[#DFE3F5] flex justify-between items-center px-6 py-1 flex-shrink-0 z-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-16 h-16" />
          <div>
            <div className="font-bold text-md text-gray-800">
              {appInfo.name}
            </div>
            <div className="text-sm text-gray-500">{appInfo.tagline}</div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
            <span className="text-sm font-semibold text-gray-600 mr-3">
              {userData.credits} Credits
            </span>
            <button className="bg-gray-900 text-white text-sm px-4 py-1.5 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Buy Credits
            </button>
          </div>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-all">
            <Icon name="bell" />
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img
              src={userData.avatar}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content Area Below Navbar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar */}
        <div
          className="bg-[#DFE3F5] flex flex-col py-4 px-3 border border-gray-100 rounded-full flex-shrink-0 transition-all duration-200 ease-in-out"
          onMouseEnter={() => setSidebarExpanded(true)}
          onMouseLeave={() => setSidebarExpanded(false)}
          style={{ width: sidebarExpanded ? "200px" : "64px" }}
        >
          {/* Navigation */}
          <nav className="flex flex-col gap-1 flex-1">
            {navItems.map((item, idx) => (
              <div
                key={item.key}
                style={{ marginTop: idx === navItems.length - 1 ? "auto" : 0 }}
              >
                <NavItem
                  item={item}
                  isActive={activeNav === item.name}
                  onClick={() => navigate("/sales")}
                  isExpanded={sidebarExpanded}
                />
              </div>
            ))}
          </nav>
        </div>

        {/* Scrollable Content */}
        <div className="bg-gradient flex-1 overflow-auto px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Hello {userData.name}, below are your insights
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-5 gap-4 mb-8">
            {statsCards.map((card, idx) => (
              <StatCard key={idx} {...card} />
            ))}
          </div>

          {/* Credits Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 mb-8">
            <div className="flex justify-between items-start mb-5">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Your Credits Usage summary, So far!
                </h2>
                <p className="text-sm text-gray-600 font-medium mt-1">
                  You have used {userData.creditsUsedPercentage}% of Credits, so
                  far!
                </p>
              </div>
              <button className="text-blue-600 font-medium text-sm px-4 py-1.5 rounded-full border border-transparent hover:border-blue-600 transition-all duration-200">
                Get More Credits
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {creditCards.map((card, idx) => (
                <CreditCard key={idx} {...card} />
              ))}
            </div>
          </div>

          {/* Meetings Today */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 mb-8">
            <div className="flex gap-8">
              <div className="w-1/3">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {todayMeetings.length} Meetings Schedule Today
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Here is a list for this week meetings.
                </p>
              </div>
              <div className="flex-1 space-y-3">
                {todayMeetings.map((meeting) => (
                  <MeetingCard key={meeting.id} meeting={meeting} />
                ))}
              </div>
            </div>
          </div>

          {/* Meetings This Week */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6">
            <div className="flex gap-8">
              <div className="w-1/3">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Meetings Schedule This Week
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Here is a list for this week meetings.
                </p>
              </div>
              <div className="flex-1 space-y-3">
                {weekMeetings.map((meeting) => (
                  <MeetingCard key={meeting.id} meeting={meeting} />
                ))}
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                View Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
