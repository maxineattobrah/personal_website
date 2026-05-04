import React, {useState, useEffect} from "react";

const Loader = ({onComplete}) => {
    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            setProgress((prev) => {
                if(prev>=100){
                    clearInterval(interval);
                    setTimeout(() => onComplete(), 300);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);

    },[onComplete]);

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="text-center">
                {/* animated logo */}
                <div className="mb-8">
                    <h1 className="text-6xl font-bold tracking-tight mb-4 text-white"
                        style={{
                            opacity: progress/100,
                            transform: `translateY(${20-(progress/5)}px)`
                        }}
                    >
                        MA
                    </h1>
                </div>
                {/* progress bar */}
                <div className="w-64 h-0.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                    style={{
                        width: `${progress}%`
                    }}></div>
                </div>
                {/* loading text */}
                <p className="mt-4 text-sm text-gray-400 tracking-wider" style={{
                    opacity: progress/100
                }}>
                    LOADING {progress}%
                </p>

            </div>
        </div>
    );

}

export default Loader;