import React from "react";
import profileImg from '../assets/profileImage.jpg';

const About = () => {
    return (
        <section id="about" className="py-32 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="text-sm tracking-[0.3em] text-purple-400 mb-6 uppercase">
                            About Me
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading tight text-white">
                            I create the digital future.
                        </h2>
                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                            <p>
                                Hello! I am Maxine, a full-stack AI/ML engineer with a passion for creating
                                aesthetically pleasing, intelligent systems. My journey began in the aviation
                                industry developing and testing flight controls algorithms to make it 
                                easier for pilots to fly military helicopters.
                            </p>
                            <p>
                                Today, I build production-ready AI applications for consumers and government agencies
                                that combine technical excellence with exceptional user experience. I believe the future of
                                AI is not just about powerful models, but about interfaces that feel intuitive and tools that are ethical.
                            </p>
                            <p>
                                With Maxine being the feminine form of Maximus, meaning “greatest”, “bright”, or “noble” in Roman, I was born into a declaration of greatness that I am dedicated to fulfilling.
                            </p>
                        </div>
                    </div>
                    <div className="relative order-1 lg:order-2">
                        <div className="aspect-square rounded-lg overflow-hidden">
                            <img
                                src={profileImg}
                                className="w-full h-full object-cover"

                                // className="w-full h-full object-cover mix-blend-luminosity"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;