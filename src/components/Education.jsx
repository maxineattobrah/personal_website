import React from "react";

const Education = () => {
    const education = [
        {
            degree: "M.S. Electrical and Computer Engineering",
            school: "Carnegie Mellon University",
            years: "",
            description: "",
            featured: true
        },
        {
            degree: "M.S. Engineering and Technology Innovation Management",
            school: "Carnegie Mellon University",
            years: "",
            description: "",
            featured: true
        },
        {
            degree: "B.S. Electrical Engineering",
            school: "University of Massachusetts - Amherst",
            year: "",
            description: "",
            featured: false
        },
    ];

    return (
        <section id="education" className="py-32 bg-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-20">
                    <div className="text-sm tracking-[0.3em] text-purple-400 mb-6 uppercase">
                        Education
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold">
                        Academic Background
                    </h2>
                </div>
                {/* timeline */}
                <div className="relative pl-8 max-w-4xl">
                    {/* timeline line */}
                    <div className=" absolute left-2 top-2 bottom-8 w-0.5 bg-white/20"></div>
                    {education.map((item, index) =>(
                        <div key={index} className="relative pb-12 last:pb-0">
                            <div
                                className={`absolute -left-6 top-1 w-3 h-3 rounded-full border-2 ${
                                    item.featured ? 'bg-purple-500 border-purple-400':'bg-zinc-950 border-white/30'
                                }`}
                            ></div>

                            {/* content */}
                            <div>
                                <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                                    <h3 className="text-2xl font-bold text-white">{item.degree}</h3>
                                    <span className="text-sm text-gray-400 whitespace-nowrap">{item.year}</span>
                                </div>
                                <p className="text-purple-400 mb-2">{item.school}</p>
                            </div>

                        </div>
                    ))}

                    </div>

                </div>

        </section>
    );
}

export default Education;