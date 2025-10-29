import { useState, useEffect } from "react";
import PixelBlast from "./PixelBlast";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const totalDuration = 2500;
    const startTime = Date.now();
    let animationFrameId;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / totalDuration) * 100, 100);

      setProgress(currentProgress);

      if (currentProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setIsComplete(true);
        setTimeout(() => setLoading(false), 600);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const getStatusText = (currentProgress) => {
    if (currentProgress < 25) return "Initializing...";
    if (currentProgress < 50) return "Loading assets...";
    if (currentProgress < 75) return "Building components...";
    if (currentProgress < 95) return "Almost ready...";
    return "Ready!";
  };

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[10000] transition-all duration-500 ${
        isComplete ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* PixelBlast Background */}
      <div className="absolute inset-0">
        <PixelBlast
          variant="circle"
          pixelSize={3}
          color="#8B5CF6"
          patternScale={2.5}
          patternDensity={1.3}
          pixelSizeJitter={0.4}
          enableRipples={true}
          rippleSpeed={0.3}
          rippleThickness={0.1}
          rippleIntensityScale={1.2}
          liquid={true}
          liquidStrength={0.08}
          liquidRadius={1.0}
          liquidWobbleSpeed={4}
          speed={0.4}
          edgeFade={0.15}
          transparent={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Overlay untuk kontras */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 backdrop-blur-sm" />

      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse-slow" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-12 max-w-md mx-auto px-8">
        {/* Logo dengan Foto */}
        <div className="text-center space-y-6">
          <div
            className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg transition-all duration-700 overflow-hidden border-4 border-white/80 ${
              isComplete ? "scale-110 rotate-3" : "scale-100 rotate-0"
            }`}
          >
            {/* Ganti dengan path foto Anda */}
            <img
              src="/assets/diyan.png"
              alt="Diyan"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback jika gambar tidak ditemukan
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Fallback initial jika gambar tidak load */}
            <div className="w-full h-full bg-black flex items-center justify-center hidden">
              <span className="text-2xl font-bold text-white">D</span>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
              Diyan
            </h1>
            <p className="text-gray-700 font-medium bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="w-full space-y-8">
          <div className="text-center space-y-6">
            <div
              className={`text-4xl font-bold text-gray-900 transition-all duration-300 ${
                isComplete ? "scale-110 text-purple-600" : "scale-100"
              }`}
            >
              {Math.round(progress)}%
            </div>

            <div className="space-y-4">
              <div className="w-full h-2.5 bg-white/80 rounded-full overflow-hidden shadow-inner border border-white/50">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full transition-all duration-100 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                </div>
              </div>

              <p
                className={`text-gray-700 text-sm font-medium transition-all duration-300 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full ${
                  isComplete ? "text-purple-600 font-semibold" : ""
                }`}
              >
                {getStatusText(progress)}
              </p>
            </div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex items-center gap-6 text-sm text-gray-700 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                progress > 20 ? "bg-green-500 scale-110" : "bg-gray-400"
              }`}
            />
            <span>System</span>
          </div>

          <div className="w-px h-4 bg-gray-400/50" />

          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                progress > 50 ? "bg-blue-500 scale-110" : "bg-gray-400"
              }`}
            />
            <span>Assets</span>
          </div>

          <div className="w-px h-4 bg-gray-400/50" />

          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                progress > 80 ? "bg-purple-500 scale-110" : "bg-gray-400"
              }`}
            />
            <span>UI</span>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="flex gap-2 opacity-60">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PreLoader;
