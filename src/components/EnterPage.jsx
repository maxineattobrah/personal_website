import React, {useState} from "react";
import enterPageImg from '../assets/enterPageImg.png'
import enterPageImgMobile from '../assets/enterPageImgMobile2.png'
const EnterPage = ({onEnter}) => {
    const [isHovering, setIsHovering] = useState(false);

    return(
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* full background image */}
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover md:hidden"
                    src={enterPageImgMobile}
                />
                <img
                    className="w-full h-full object-cover hidden md:block"
                    src={enterPageImg}
                />
                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            {/* content */}
            <div className="relative min-h-full flex flex-col items-center justify-center text-center px-6 py-12">
                {/* title */}
                <div className="mb-12">
                    <h1 className="text-7xl lg:text-9xl font-bold mb-6 tracking-tight text-white">
                        Maxine<br/>Attobrah
                    </h1>
                    <span className="text-sm text-gray-300 uppercase">The Greatest</span>
                    <p className="text-xl lg:text-2xl text-gray-300 tracking-widest uppercase">
                        AI Engineer x Innovator x Entrepreneur
                    </p>
                </div>
                {/* Enter button */}
                <button 
                onClick={onEnter}
                onMouseEnter={()=>setIsHovering(true)}
                onMouseLeave={()=>setIsHovering(false)}
                className="group relative px-12 py-5 border-2 border-white text-white font-semibold tracking-wider text-lg overflow-hidden transition-all duration-500 hover:scale-105"
                >
                    {/* button background animation */}
                    <div className="absolute inset-0 bg-white transition-all duration-500"
                    style={{
                        transform: isHovering? 'translateY(0)':'translateY(100%)'
                    }}
                    ></div>
                    <span className={`relative z-10 transition-colors duration-500 ${isHovering?'text-black':'text-white'}`}>
                        ENTER
                    </span>

                </button>
            </div>

        </div>
    );

}

export default EnterPage;