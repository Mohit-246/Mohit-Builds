import React from "react";
import SkillTab from "../My Elements/SkillTab";

function Skill() {
    return (
        <>
            <section id="skill" className="scroll-mt-16 py-20 bg-slate-800/50">
                 <div className="items-center justify-center text-center">
                    <h1 className="text-5xl font-extrabold text-white primary-font">Skills & Expertise</h1>
                    <p className="text-2xl text-gray-300 px-4 secondary-font font-semibold m-4">A comprehensive toolkit built through years of hands-on experience and continuous learning.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 p-8">
                    <SkillTab 
                        skillcategory="Frontend Development"
                        skills={[
                            { name: "React", percentage: 90 },
                            { name: "Tailwind CSS", percentage: 85 },
                            { name: "JavaScript", percentage: 80 },
                            { name: "Node JS", percentage: 75 }
                        ]}  />
                    <SkillTab 
                        skillcategory="Backend Development"
                        skills={[
                            { name: "Express js", percentage: 83 },
                            { name: "Mongo BD", percentage: 92 },
                            { name: "MySQL", percentage: 78 },
                            { name: "Python", percentage: 84 }
                        ]}  />
                </div>
            </section>

        </>
    )
}

export default Skill;