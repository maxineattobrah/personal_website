import React from "react";

const Contact = () => {
    return(
        <section id = "contact" className="py-32 bg-black">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
                <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-white">
                    Let's Build Together
                </h2>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                    Open to collaborations, interesting problelms, and conversations about AI, design, and engineering.
                </p>
                <div className="flex flex-wrap justify-center gap-8 mb-16 text-white">
                    <a href="https://www.linkedin.com/in/maxineattobrah/" className="hover:text-purple-400 transition-colors">LinkedIn</a>
                    <a href="https://github.com/maxineattobrah" className="hover:text-purple-400 transition-colors">Github</a>
                    <a href="https://medium.com/@maxineattobrah" className="hover:text-purple-400 transition-colors">Medium</a>
                    <a href="https://www.kaggle.com/maxineattobrah" className="hover:text-purple-400 transition-colors">Kaggle</a>
                    <a href="https://huggingface.co/maxineattobrah" className="hover:text-purple-400 transition-colors">HuggingFace</a>
                </div>
                <div className="pt-12 border-t border-white/10 text-sm text-gray-600">
                    © 2026 Maxine Attobrah. Crafted with code, creativity, and love.
                </div>

            </div>
        </section>
    );

}

export default Contact;