import React from "react";

const Work = () => {
    const projects = [
        {
            title: "Full-Stack AI Engineer",
            description: "",
            image: "",
            link: "#"
        },
        {
            title: "Cybersecurity Engineer",
            description: "",
            image: "",
            link: "#"
        },
        {
            title: "Eletronic Flight Controls Engineer",
            description: "",
            image: "",
            link: "#"
        },
    ];
    return(
        <section id="work" className="py-32 bg-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-20">
                    <div className="text-sm tracking-[0.3em] text-purple-400 mb-5 uppercase">
                        Portfolio
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold">
                        Featured Work
                    </h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                    {projects.map((project, index)=>(
                        <a key={index} href={project.link}
                        className="group relative overflow-hidden rounded-lg aspect-[4/3] block"
                        >
                            <img src={project.image} alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <h3 className="text-3xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-300">{project.description}</p>
                                <div className="mt-4 items-center text-purple-400">
                                    <span className="mr-2">View Project</span>
                                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transoform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    >  
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 814 4m0 01-4 4m4-4H3"/>

                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );

}

export default Work;