import React from "react";
import SkillBar from "./SkillBar";

function SkillTab({skillcategory, skills}) {
    return (
        <>
            <div className="bg-slate-700 w-full px-6 py-8 rounded-lg border border-slate-600 hover:border-blue-500/50 hover:scale-105 transition-all duration-300">
                <h2 className="text-white text-2xl font-bold text-center mb-6">
                    {skillcategory}
                </h2>
                <div className="space-y-4">
                    {skills.map((skill, index) => (
                        <SkillBar key={index} skill={skill.name} percentage={skill.percentage}
                        />
                    ))}
                </div>
            </div>
        </>

    );

}

export default SkillTab;