import Aurora from "./Aurora/Aurora";
import { useState, useEffect } from "react";
import CountUp from "./CountUp/CountUp";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [countDone, setCountDone] = useState(false);
  const [fadeText, setFadeText] = useState(false);
  const [fadeScreen, setFadeScreen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (countDone) {
      // Tampilkan welcome text setelah count selesai
      setShowWelcome(true);

      // Fade teks welcome
      const fadeTextTimer = setTimeout(() => setFadeText(true), 1500);

      // Fade seluruh screen
      const fadeScreenTimer = setTimeout(() => setFadeScreen(true), 2500);

      // Unmount preloader setelah animasi fade selesai
      const hideTimer = setTimeout(() => setLoading(false), 3500);

      return () => {
        clearTimeout(fadeTextTimer);
        clearTimeout(fadeScreenTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [countDone]);

  return (
    loading && (
      <div
        className={`w-screen h-screen fixed flex items-center justify-center bg-black z-[10000] overflow-hidden transition-all duration-1000 ${
          fadeScreen ? "opacity-0 scale-110" : "opacity-100 scale-100"
        }`}
      >
        {/* Enhanced Aurora Background */}
        <div className="absolute inset-0">
          <Aurora
            colorStops={["#7e22ce", "#06b6d4", "#3b82f6", "#8b5cf6"]}
            blend={0.7}
            amplitude={1.2}
            speed={0.3}
          />
        </div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cyan-900/10 to-blue-900/20 animate-pulse"></div>

        {/* Loading Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-8">
          {/* Main Loading Percentage */}
          {!showWelcome ? (
            <div className="text-center">
              <div
                className={`transition-all duration-1000 ${
                  fadeText
                    ? "opacity-0 -translate-y-10 scale-90"
                    : "opacity-100 translate-y-0 scale-100"
                }`}
              >
                {/* Animated Percentage */}
                <div className="flex items-end justify-center gap-2 mb-4">
                  <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={2}
                    easing="easeOutCubic"
                    className="text-8xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                    onEnd={() => setCountDone(true)}
                  />
                  <span className="text-4xl font-bold text-cyan-400 mb-2">
                    %
                  </span>
                </div>

                {/* Loading Bar */}
                <div className="w-80 h-2 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700/50">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-2000 ease-out"
                    style={{
                      width: countDone ? "100%" : "0%",
                      transition: countDone ? "width 1.5s ease-in-out" : "none",
                    }}
                  ></div>
                </div>

                {/* Loading Text */}
                <p className="text-zinc-400 mt-4 text-lg font-light tracking-wider">
                  Loading Portfolio...
                </p>
              </div>
            </div>
          ) : (
            /* Welcome Message */
            <div
              className={`text-center transition-all duration-1000 ${
                fadeText
                  ? "opacity-0 translate-y-10 scale-95"
                  : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              {/* Animated Welcome Text */}
              <div className="mb-6">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  Welcome
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4"></div>
                <p className="text-xl text-zinc-300 font-light tracking-wider">
                  to Diyan's Portfolio
                </p>
              </div>

              {/* Animated Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {[0, 1, 2].map((dot) => (
                  <div
                    key={dot}
                    className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${dot * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* Decorative Elements */}
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="flex gap-4 opacity-50">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) translateX(0) rotate(0deg);
              opacity: 0.3;
            }
            25% {
              transform: translateY(-20px) translateX(10px) rotate(90deg);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-40px) translateX(-10px) rotate(180deg);
              opacity: 0.8;
            }
            75% {
              transform: translateY(-20px) translateX(5px) rotate(270deg);
              opacity: 0.6;
            }
          }
          .animate-float {
            animation: float linear infinite;
          }
        `}</style>
      </div>
    )
  );
};

export default PreLoader;