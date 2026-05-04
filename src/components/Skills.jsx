import React from "react";

const TechnicalSkills = () => {
    const skillCategories = [
        {
            title: "AI & Machine Learning",
            acronym: "AI",
            bgColor: "bg-blue-500/10",
            textColor: "text-blue-400",
            skills: ["Python","scikit-learn", "Hugging Face", "LangChain", "Pytorch","Tensorflow", "Ollama","GPT4All","Model Evaluation"]

        },
        {
            title: "Frontend Development",
            acronym: "FD",
            bgColor: "bg-green-500/10",
            textColor: "text-green-400",
            skills: ["React", "Tailwind CSS", "ElectronJS","Figma","Balsamiq"]

        },
        {
            title: "Backend Development",
            acronym: "BD",
            bgColor: "bg-amber-500/10",
            textColor: "text-amber-400",
            skills: ["FastAPI", "Docker", "AWS", "Flask", "MongoDB","SQLite", "Architeture Design"]

        }
    ];

    return(
        <section id="skills" className="py-32 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-20 text-center">
                    <div className="text-sm tracking-[0.3em] text-purple-400 mb-6 uppercase">
                        Technical Skills
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold text-white">
                        Expertise
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index)=>(
                        <div key={index} className="bg-zinc-900 border border-white/10 rounded-lg p-6 hover:border-purple-400 transition colors group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 ${category.bgColor} rounded-lg flrx items-center justify-center ${category.textColor} font-bold text-sm pl-2 pt-1`}>
                                    {category.acronym}
                                </div>
                                <h3 className="text-lg font-bold text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={index}
                                        className="bg-black border border-white/10 px-3 py-1.5 rounded-md text-sm text-white/50"
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );

}

export default TechnicalSkills;