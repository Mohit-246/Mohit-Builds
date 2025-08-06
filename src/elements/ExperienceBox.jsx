import React from "react";
import { MapPin, Calendar } from "lucide-react";

function ExperienceBox({ title, company, period, location, description,documents }) {
    return (
        <>
            <div className=" rounded-lg bg-slate-700  border border-slate-400 hover:border-sky-600 hover:scale-105 hover:shadow-sky-600 transform duration-300">
                <div className=" space-y-5 p-8 bg-slate-800/50 rounded-lg">
                    <div className="space-y-2">
                        <div className="flex sm: justify-between space-x-4">
                            <h2 className="text-3xl primary-font font-bold">{title}</h2>
                            <p className="inline-flex items-center secondary-font font-semibold text-gray-300"><Calendar className="m-2" size={35} />{period}</p>
                        </div>
                        <div className="flex items-center justify-between space-x-6">
                            <span className="font-nuinto font-bold text-xl text-gray-300">{company}</span>
                            <span className="inline-flex items-center secondary-font font-semibold text-gray-300"><MapPin className="m-2" size={20} />{location}</span>
                        </div>
                    </div>
                    <ul className="space-y-2 mt-4 ">
                        {description.map((lines, index) => (
                            <li key={index} className="flex items-center font-semibold secondary-font text-slate-300"><span className="mr-2 ">●</span>
                                {lines}
                            </li>
                        ))}
                    </ul>
                    <a href={documents} target="_blank" rel="noopenner noreferrer" className='px-4 py-2 border border-slate-600 rounded-full text-slate-300 font-semibold hover:text-white hover:border-slate-500 hover:scale-105 hover:bg-slate-700 transition-all duration-300 '>View Documents</a>
                </div>
            </div>

        </>
    );
}

export default ExperienceBox;