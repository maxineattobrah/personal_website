import React from "react";

const Hero = () =>{
    return(
        <section className="relative h-screen flex items-center">
            {/* background image with overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent z-10"></div>
                <img
                src={heroImg}
                    className="w-full h-full object-cover opacity-40"
                />
            </div>
            <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-4xl">
                    <div className="text-sm tracking-[0.3em] text-grey-400 mb-6 uppercase">
                        AI Engineer
                    </div>
                    <h1 className="text-6xl lg:text-8xl font-bold leading-none mb-8">
                        Maxine<br/>
                        Attobrah
                    </h1>
                    <p className="text-xl lg:text-2xl text-grey-300 max-w-2xl mb-12 leading-relaxed">
                        Building intelligent systems
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {/* <a 
                        href="#work"
                        className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                            View My Work
                        </a> */}
                        <a href="#contact"
                        className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                            Get In Touch</a>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="flex flex-col items-center">
                    <div className="text-xs tracking-wider text-grey-400 mb-2">SCROLL</div>
                    <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
                </div>

            </div>

        </section>
    );
}

export default Hero;