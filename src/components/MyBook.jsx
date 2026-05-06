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
                        <div className="aspect-[2/3] max-w-md mx-auto rounded-lg shadow-2xl p-12 flex flex-col justify-between overflow-hidden">
                            <img
                                src={bookImg}
                                className="w-full h-full object-contain"
                            />
                        </div>
        
                    </div>
                <div className="mb-12 py-8 border-t border-b border-gray-200">
                <div>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
                <p>
                    In today's world, understanding data analytics, data science, and artificial intelligence is not just an advantage but a necessity. 
                    This book is your thorough guide to learning these innovative fields. It is designed to make learning these topics practical and engaging by
                    offering real-world examples and code you can experiment with on your own.
                </p>
            <div className="mb-8 p-4 bg-amber-50 border-1-4 border-amber-500 rounded">
                <p className="text-sm text-gray-700">
                    <span className="font-semibold text-amber-700">🏆 Amazon Bestseller</span>
                    <p  className="mt-1 ml-6">
                    Featured on Amazon's bestseller lists 3 times in:
                    </p>
                    <ul className="ml-8 list-disc list-inside">
                        <li>Artificial Intelligence</li>
                        <li>Database Storage & Design</li>
                        <li>Statistics</li>
                    </ul>
                </p>
            </div>
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