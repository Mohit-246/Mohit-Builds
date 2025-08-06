import React from "react";
import ExperienceBox from "../elements/ExperienceBox";

function Experience() {

    return (
        <>
            <section id="experience" className="scroll-mt-16 py-20 bg-slate-700/50">
                <div className="items-center justify-center text-center">
                    <h1 className="text-5xl font-extrabold text-white primary-font">Experience and Work</h1>
                    <p className="text-2xl text-gray-300 px-4 secondary-font font-semibold m-4">My professional journey in software development and the impact I've made.</p>
                </div>
                <div className="grid md:grid-cols-3 md:space-x-6 space-y-6 m-6">
                    <ExperienceBox
                        title='Web Development Internship – Summer 2025'
                        company='Remark Skill Eduaction'
                        period='April 2025'
                        location='Remote'
                        description={['Completed Web Development internship (Apr–May 2025) by RemarkSkill Education with FCC, IIT Hyderabad.','Built a Responsive Web Application as a hands-on project.','Gained experience in modern frontend technologies and real-world implementation.','Strengthened teamwork,problem-solving, and result-oriented development skills.']}
                        documents='https://drive.google.com/drive/folders/1FK-YCy6jQVXS5Na-FGU4Gl6AHeJBgPBY?usp=sharing'
                    />
                </div>
            </section>
        </>
    );
}

export default Experience;