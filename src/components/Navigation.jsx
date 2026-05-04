import React, {useState, useEffect} from "react";

const Navigation = () =>{
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold tracking-tight text-white">MA</div>

                        {/* desktop nav */}
                        <div className="hidden md:flex space-x-12 text-sm text-white">
                            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
                            <a href="#book" className="hover:text-purple-400 transition-colors">Book</a>
                            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
                        </div>

                        {/* mobile menu button */}
                        <button className="md:hidden text-white"
                        onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox ="0 0 24 24">
                                {
                                    isMobileMenuOpen?(
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>

                                    ):(
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                                    )
                                }

                            </svg>

                        </button>
                    </div>

                    {/* mobile menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden pt-4 pb-2 ">
                            <div className="flex flex-col space-y-4 text-sm text-white">
                                <a href="#about" className="hover:text-purple-400 transition-colors" onClick={()=> setIsMobileMenuOpen(false)}>About</a>
                                <a href="#skills" className="hover:text-purple-400 transition-colors" onClick={()=> setIsMobileMenuOpen(false)}>Skills</a>
                                <a href="#book" className="hover:text-purple-400 transition-colors" onClick={()=> setIsMobileMenuOpen(false)}>Book</a>
                                <a href="#contact" className="hover:text-purple-400 transition-colors" onClick={()=> setIsMobileMenuOpen(false)}>Contact</a>
                            </div>

                        </div>
                    )}
                </div>
        </nav>
    );


}

export default Navigation;