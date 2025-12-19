import { useState } from "react";
import { ChevronLeft } from "../icons/SalesIcons";
import { salesAgentNavItems } from "../../data/salesAgentData";
import { OrganicIcon, CampaignIcon, CalendarIcon, InboxIcon, CallLogsIcon } from "../icons/SalesIcons";

const getIcon = (key) => {
  const icons = {
    organic: OrganicIcon,
    campaign: CampaignIcon,
    calendar: CalendarIcon,
    inbox: InboxIcon,
    callLogs: CallLogsIcon,
  };
  return icons[key] || null;
};

const SalesNavItem = ({ item, isActive, onClick, isExpanded }) => {
  const IconComponent = getIcon(item.icon);
  const hasShortName = item.shortName;
  
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 w-full group
        ${isActive 
          ? "bg-gray-900 text-white" 
          : "text-gray-500 hover:bg-gray-100"
        }`}
    >
      {hasShortName ? (
        <span className={`flex-shrink-0 text-xs font-semibold px-1.5 py-0.5 rounded ${
          isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
        }`}>
          {item.shortName}
        </span>
      ) : (
        IconComponent && (
          <span className={`flex-shrink-0 ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-700"}`}>
            <IconComponent />
          </span>
        )
      )}
      <span 
        className={`text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-200
          ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"}`}
      >
        {item.name}
      </span>
    </button>
  );
};

export default function SalesAgentSidebar({ isExpanded, onToggle, activeItem, setActiveItem }) {
  return (
    <div
      className="bg-white flex flex-col py-4 px-3 border-r border-gray-100 flex-shrink-0 transition-all duration-200 ease-in-out"
      style={{ width: isExpanded ? "220px" : "64px" }}
    >
      {/* Back Button */}
      <button 
        onClick={onToggle}
        className="flex items-center gap-2 px-2 py-2 mb-4 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <ChevronLeft className="flex-shrink-0" />
        {isExpanded && <span className="text-sm font-medium">Sales Agent</span>}
      </button>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 flex-1">
        {salesAgentNavItems.map((item) => (
          <SalesNavItem
            key={item.key}
            item={item}
            isActive={activeItem === item.key}
            onClick={() => setActiveItem(item.key)}
            isExpanded={isExpanded}
          />
        ))}
      </nav>
    </div>
  );
}