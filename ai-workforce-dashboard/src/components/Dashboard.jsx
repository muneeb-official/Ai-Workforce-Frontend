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
      <path d="M3 3v18h18" />
      <path d="M18 9l-5 5-4-4-3 3" />
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
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
      <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12" />
      <circle cx="12" cy="12" r="4" />
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4m0-4h.01" />
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
      <path d="M12 1v4m0 14v4m11-11h-4M5 12H1m16.36-5.64l-2.83 2.83M7.46 16.54l-2.83 2.83m12.73 0l-2.83-2.83M7.46 7.46L4.63 4.63" />
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
  robot: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M12 8V5" />
      <circle cx="12" cy="3" r="2" />
      <circle cx="8" cy="14" r="1.5" fill="currentColor" />
      <circle cx="16" cy="14" r="1.5" fill="currentColor" />
      <path d="M9 18h6" />
    </svg>
  ),
  envelope: () => (
    <svg
      width="32"
      height="32"
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
      width="32"
      height="32"
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
      width="32"
      height="32"
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
      width="32"
      height="32"
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
      width="32"
      height="32"
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

// Reusable Components
const StatCard = ({ value, label, iconType }) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
    <div className="text-amber-500">
      <Icon name={iconType} />
    </div>
    <div className="mt-4">
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  </div>
);

const CreditCard = ({ title, used, total }) => (
  <div className="bg-white rounded-xl p-5 border border-gray-100 border-1.5 border-blue-500">
    <div className="text-gray-700 font-medium mb-4">{title}</div>
    <div className="flex items-baseline">
      <span className="text-4xl font-bold text-gray-800">{used}</span>
      <span className="text-gray-500 ml-1">/{total}</span>
    </div>
  </div>
);

const MeetingCard = ({ meeting }) => (
  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex justify-between items-start border-1 border-gray-300">
    <div>
      <h3 className="font-semibold text-gray-800">
        {meeting.company} {meeting.title && `– ${meeting.title}`}
      </h3>
      {meeting.description && (
        <p className="text-sm text-gray-500">{meeting.description}</p>
      )}
      <p className="text-sm text-gray-500 mt-1">{meeting.time}</p>
    </div>
    <button className="text-blue-600 font-medium text-sm hover:underline whitespace-nowrap bg-transparent hover:border-2 transition hover:border-blue-600 rounded-full hover:no-underline">
      {meeting.actionType === "join" ? "Join Meeting" : "Notify Me"}
    </button>
  </div>
);

const NavItem = ({ item, isActive, onClick, showLabel }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all w-full ${
      isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    <Icon name={item.key} />
    {showLabel && <span className="text-sm font-medium">{item.name}</span>}
  </button>
);

// Main Dashboard Component
export default function Dashboard() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [activeNav, setActiveNav] = useState("Analytics");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex w-full">
      {/* Sidebar */}
      <div
        className="bg-white/80 backdrop-blur-sm flex flex-col py-4 px-3 border-r border-gray-100"
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
        style={{
          width: sidebarExpanded ? "200px" : "64px",
          transition: "width 0.2s ease",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-2 mb-6">
          <div className="text-gray-700">
            <Icon name="robot" />
          </div>
          {sidebarExpanded && (
            <div>
              <div className="font-semibold text-sm text-gray-800">
                {appInfo.name}
              </div>
              <div className="text-xs text-gray-500">{appInfo.tagline}</div>
            </div>
          )}
        </div>

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
                onClick={() => setActiveNav(item.name)}
                showLabel={sidebarExpanded}
              />
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="flex justify-end items-center p-2 gap-4">
          <div className="border-2 border-gray-600 flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
            <span className="text-sm font-semibold text-gray-600 mr-2">
              {userData.credits} Credits
            </span>
            <button className="bg-gray-900 text-white text-sm px-4 py-1 rounded-full font-medium">
              Buy Credits
            </button>
          </div>
          <button className="p-2 text-gray-500 hover:bg-white rounded-full bg-transparent">
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

        {/* Dashboard Content */}
        <div className="px-8 pb-8">
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
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 mb-8 border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Your Credits Usage summary, So far!
                </h2>
                <p className="text-sm text-gray-600 font-medium">
                  You have used {userData.creditsUsedPercentage}% of Credits, so
                  far!
                </p>
              </div>
              <button className="text-blue-600 font-medium text-sm hover:underline bg-transparent hover:border-2 transition hover:border-blue-600 rounded-full hover:no-underline">
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
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 mb-8 border border-gray-100">
            <div className="flex gap-8">
              <div className="w-1/3">
                <h2 className="text-xl font-semibold text-gray-800">
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
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-gray-100">
            <div className="flex gap-8">
              <div className="w-1/3">
                <h2 className="text-xl font-semibold text-gray-800">
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
