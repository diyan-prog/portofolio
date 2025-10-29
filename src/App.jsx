import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import PixelBlast from "./components/PixelBlast";
import AOS from "aos";
import ChatRoom from "./components/ChatRoom";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    // Handle page reload
    const isReload = performance.navigation?.type === 1;

    if (isReload) {
      const baseUrl = window.location.origin + window.location.pathname;
      window.history.replaceState(null, "", baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      const images = ["./assets/diyan.png", "./assets/CV.pdf"];

      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();

    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-zinc-400">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Enhanced Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <PixelBlast
          variant="circle"
          pixelSize={4}
          color="#8B5CF6"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples={true}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={true}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent={true}
          style={{ width: "100%", height: "100%" }}
          className="pixel-blast-background"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cyan-900/10 to-blue-900/20"></div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Hero Section - Enhanced */}
        <section className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-8 gap-6 min-h-[80vh]">
          <div className="animate__animated animate__fadeInUp">
            {/* Quote Card - Enhanced */}
            <div className="flex items-center gap-3 mb-8 bg-gradient-to-r from-zinc-800 to-zinc-900/80 backdrop-blur-sm w-fit p-4 rounded-2xl border border-zinc-700/50 shadow-lg">
              <img
                src="./assets/diyan.png"
                alt="Diyan"
                className="w-12 h-12 rounded-lg border-2 border-purple-500/30"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <q className="text-zinc-200 font-medium italic">
                I don't just code — I create experiences that speak.
              </q>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8">
              <ShinyText
                text="Hi I'm Diyan"
                disabled={false}
                speed={3}
                className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
              />
            </h1>

            <BlurText
              text="A passionate application and web developer dedicated to crafting modern, high-performance digital experiences through innovative and user-friendly solutions."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-6 md:mb-8"
            />

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <a
                href="./assets/CV.pdf"
                download="Diyan_CV.pdf"
                className="font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 py-3 px-6 rounded-full border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-white text-center"
              >
                Download CV
              </a>

              <a
                href="#project"
                className="font-semibold bg-zinc-800/80 backdrop-blur-sm py-3 px-6 rounded-full border border-zinc-700 hover:bg-zinc-700/80 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-white text-center"
              >
                Explore My Projects
              </a>
            </div>
          </div>

          {/* Profile Card Section */}
          <div className="md:ml-auto flex justify-center">
            <ProfileCard
              name="Diyan"
              title="Web Developer"
              handle="d1yan.26"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/diyan.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </section>

        {/* About Section - Enhanced */}
        <section
          ref={aboutRef}
          className="mt-20 md:mt-32 mx-auto w-full rounded-3xl border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.3)] bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-800/80 backdrop-blur-sm p-6 md:p-8"
          id="about"
        >
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 pt-4"
            data-aos="fade-up"
          >
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-purple-500/20 pb-8 md:pb-0">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  About{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Me
                  </span>
                </h2>

                <BlurText
                  text="I'm Diyan, a passionate web developer and Software Engineering student at Politeknik Negeri Indramayu. I love creating modern, responsive, and high-quality web applications that combine clean design with powerful functionality. I'm constantly learning and exploring new technologies to build efficient, user-friendly digital solutions. My goal is to keep improving my skills and contribute to impactful projects that make technology more accessible and meaningful for everyone."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-8 text-zinc-300"
                />

                {/* Stats - Enhanced */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8">
                  {[
                    {
                      number: "5+",
                      label: "Projects Finished",
                      color: "from-purple-400 to-pink-400",
                    },
                    {
                      number: "3+",
                      label: "Years Experience",
                      color: "from-cyan-400 to-blue-400",
                    },
                    {
                      number: "***",
                      label: "GPA Score",
                      color: "from-green-400 to-emerald-400",
                    },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <h3 className="text-2xl md:text-4xl font-bold mb-2">
                        <span
                          className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                        >
                          {stat.number}
                        </span>
                      </h3>
                      <p className="text-zinc-400 text-sm md:text-base">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-lg text-purple-400 font-light italic"
                />
              </div>
            </div>

            {/* Lanyard Section */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden flex justify-center">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </section>

        {/* Tools & Technologies - Enhanced */}
        <section className="tools mt-20 md:mt-32">
          <div className="text-center mb-12 md:mb-16">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
              data-aos="fade-up"
            >
              Tools &{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>
            <p
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              My professional toolkit for crafting exceptional digital
              experiences
            </p>
          </div>

          <div className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-delay={tool.dad}
                className="flex items-center gap-3 md:gap-4 p-4 md:p-6 border border-zinc-700/50 rounded-xl md:rounded-2xl bg-zinc-900/40 backdrop-blur-sm hover:bg-zinc-800/60 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain bg-zinc-800 p-2 md:p-3 rounded-lg md:rounded-xl group-hover:bg-zinc-700 transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-lg md:rounded-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <span className="text-base md:text-lg font-semibold text-white">
                      {tool.nama}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-400 truncate mt-1">
                    {tool.ket}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section - Enhanced */}
        <section className="proyek mt-20 md:mt-32 py-8 md:py-12" id="project">
          <div className="text-center mb-12 md:mb-16">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
              data-aos="fade-up"
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p
              className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Showcasing a selection of projects that reflect my skills,
              creativity, and passion for building meaningful digital
              experiences.
            </p>
          </div>

          <div className="proyek-box">
            <div
              style={{ height: "auto", position: "relative" }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <ChromaGrid
                items={listProyek}
                onItemClick={handleProjectClick}
                radius={400}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </div>
        </section>

        {/* Contact Section - Enhanced */}
        <section className="kontak mt-20 md:mt-32 py-8 md:py-12" id="contact">
          <div className="text-center mb-12 md:mb-16">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
              data-aos="fade-up"
            >
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Let's discuss your project or just say hello. I'm always open to
              new opportunities and conversations.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Chat Room - Enhanced */}
            <div className="flex-1" data-aos="fade-up" data-aos-delay="300">
              <ChatRoom />
            </div>

            {/* Contact Form - Enhanced */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/rissoppa21@gmail.com"
                method="POST"
                className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-700/50 p-6 md:p-8 lg:p-12 rounded-2xl shadow-2xl"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Message!"
                />

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <label className="font-semibold text-white text-base md:text-lg">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name..."
                      className="border border-zinc-600 bg-zinc-800/50 text-white p-3 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 placeholder-zinc-400"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="font-semibold text-white text-base md:text-lg">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="border border-zinc-600 bg-zinc-800/50 text-white p-3 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 placeholder-zinc-400"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="font-semibold text-white text-base md:text-lg">
                      Message
                    </label>
                    <textarea
                      name="message"
                      cols="45"
                      rows="6"
                      placeholder="Tell me about your project or just say hello..."
                      className="border border-zinc-600 bg-zinc-800/50 text-white p-3 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 placeholder-zinc-400 resize-none"
                      required
                    ></textarea>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      className="font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 py-3 md:py-4 px-8 rounded-full w-full cursor-pointer border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-white text-base md:text-lg"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
