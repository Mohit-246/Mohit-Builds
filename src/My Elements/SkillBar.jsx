import React from "react";

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mb-2 bg-slate-600 p-4 rounded-lg shadow-md">
      <div className="flex justify-between text-white mb-1">
        <span className="text-sm font-semibold">{skill}</span>
        <span className="text-sm ">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
