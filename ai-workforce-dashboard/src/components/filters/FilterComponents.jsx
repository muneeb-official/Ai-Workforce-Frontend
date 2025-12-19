import { useState } from "react";
import { ChevronRight, ChevronDown, SettingsIcon } from "../icons/SalesIcons";

// Collapsible Filter Section
export const FilterSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-1 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-800">{title}</span>
        {isOpen ? (
          <ChevronDown className="text-gray-400" />
        ) : (
          <ChevronRight className="text-gray-400 rotate-0" />
        )}
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};

// Text Input Filter
export const TextInput = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
  />
);

// Select Dropdown
export const SelectInput = ({ options, value, onChange }) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 appearance-none bg-white pr-8"
    >
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>{opt}</option>
      ))}
    </select>
    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
  </div>
);

// Expandable List Item with Checkbox
export const ExpandableListItem = ({ item, onToggle, isSelected }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div>
      <div className="flex items-center gap-2 py-1.5 hover:bg-gray-50 rounded px-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-0.5 hover:bg-gray-100 rounded"
        >
          <ChevronRight className={`text-gray-400 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
        </button>
        <label className="flex items-center gap-2 flex-1 cursor-pointer">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onToggle(item.name)}
            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">
            {item.name} {item.count && <span className="text-gray-400">({item.count})</span>}
          </span>
        </label>
        <button className="p-1 hover:bg-gray-100 rounded">
          <SettingsIcon className="text-gray-400" />
        </button>
      </div>
      {isExpanded && item.children && (
        <div className="ml-8 mt-1 space-y-1">
          {item.children.map((child, idx) => (
            <label key={idx} className="flex items-center gap-2 py-1 px-2 hover:bg-gray-50 rounded cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">{child}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

// Simple Checkbox List Item
export const CheckboxListItem = ({ item, onToggle, isSelected }) => (
  <div className="flex items-center gap-2 py-1.5 hover:bg-gray-50 rounded px-1">
    <label className="flex items-center gap-2 flex-1 cursor-pointer">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggle(item.name)}
        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <span className="text-sm text-gray-700">{item.name}</span>
    </label>
    <button className="p-1 hover:bg-gray-100 rounded">
      <SettingsIcon className="text-gray-400" />
    </button>
  </div>
);

// Radius Slider
export const RadiusSlider = ({ value, onChange }) => {
  const marks = [0, 25, 50, 75, 100];
  
  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium text-gray-700">Radius (mi)</span>
        <span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-400 cursor-help">?</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
      <div className="flex justify-between mt-1">
        {marks.map((mark) => (
          <span key={mark} className="text-xs text-gray-400">{mark}</span>
        ))}
      </div>
    </div>
  );
};