import React from "react";
const interests = [
    {
        icon: "🧱",
        title: "Legos",
        description: ""
    },
    {
        icon: "🏋🏾‍♀️",
        title: "Working Out",
        description: ""
    },
    {
        icon: "🚘",
        title: "ATV Riding",
        description: ""
    }
    ,
    {
        icon: "🖼️ 🎨",
        title: "Art",
        description: ""
    }
    ,
    {
        icon: "👥",
        title: "Community",
        description: ""
    }
    ,
    {
        icon: "🎮",
        title: "Video Games",
        description: ""
    }
];

const Interests = () => {
    return(
        <section className="py-32 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-20 text-center">
                    <div className="text-sm tracking-[0.3em] text-purple-400 mb-6 uppercase">
                        Beyond Code
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold text-white">
                        What Drives Me
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                    {interests.map((item, index)=>(
                        <div key={index} 
                        className="p-8 border border-white/10 hover:border-purple-400 transition-colors group">
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white p-1">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>

                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    );

}

export default Interests;