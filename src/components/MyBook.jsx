import React from "react";
import bookImg from '../assets/my-book.jpeg';

const MyBook = () => {
    return(
        <section id="book" className="py-32 bg-white text-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-20 text-center">
                    <div className="text-sm tracking-[0.3em] text-black mb-6 uppercase">
                        Published Work
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold text-black">
                        My Book
                    </h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="aspect-[2/3] max-w-md mx-auto rounded-lg shadow-2xl p-12 flex flex-col justify-between">
                            <img
                                src={bookImg}
                                className="w-full h-full object-cover"
                            />
                        </div>
        
                    </div>
                <div className="mb-12 py-8 border-t border-b border-gray-200">
                <div>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
                <p>
                    In today's world, understanding data analytics, data science, and artificial intelligence is not just an advantage but a necessity. 
                    This book is your thorough guide to learning these innovative fields. It is designed to make learning these topics practical and engaging.
                </p>
            </div>
                <div className="text-4xl font-bold mb-2">2024</div>
                <div className="text-sm text-gray-600">Published</div>
            </div>
            <a
                href="https://www.amazon.com/Essential-Data-Analytics-Science-Data-Driven/dp/B0DGK4VPJM"
                className="mt-2 inline-block px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors rounded-md"
            
            >Get the Book</a>
            </div>

        </div>         
    </div>
</section>
    );

}

export default MyBook;