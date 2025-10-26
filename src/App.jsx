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
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import ChatRoom from "./components/ChatRoom";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
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
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Enhanced Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#7e22ce", "#06b6d4", "#3b82f6", "#8b5cf6"]}
          blend={0.7}
          amplitude={1.2}
          speed={0.3}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-cyan-900/5 to-blue-900/10"></div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Enhanced */}
        <div className="hero grid md:grid-cols-2 items-center pt-20 xl:gap-8 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            {/* Quote Card - Enhanced */}
            <div className="flex items-center gap-3 mb-8 bg-gradient-to-r from-zinc-800 to-zinc-900/80 backdrop-blur-sm w-fit p-4 rounded-2xl border border-zinc-700/50 shadow-lg">
              <img
                src="./assets/diyan.png"
                className="w-12 h-12 rounded-lg border-2 border-purple-500/30"
              />
              <q className="text-zinc-200 font-medium italic">
                I don’t just code — I create experiences that speak.
              </q>
            </div>

            <h1 className="text-6xl font-bold mb-8">
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
              className="text-xl text-zinc-300 leading-relaxed mb-8"
            />

            {/* CTA Buttons - Enhanced */}
            <div className="flex items-center sm:gap-6 gap-4 flex-wrap">
              <a
                href="./assets/CV.pdf"
                download="Faris_Edrik_Prayoga_CV.pdf"
                className="font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 p-4 px-8 rounded-full border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <ShinyText
                  text="Download CV"
                  disabled={false}
                  speed={3}
                  className="text-white"
                />
              </a>

              <a
                href="#project"
                className="font-semibold bg-zinc-800/80 backdrop-blur-sm p-4 px-8 rounded-full border border-zinc-700 hover:bg-zinc-700/80 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <ShinyText
                  text="Explore My Projects"
                  disabled={false}
                  speed={3}
                  className="text-white"
                />
              </a>
            </div>
          </div>

          {/* Profile Card Section */}
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s flex justify-center">
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
        </div>

        {/* About Section - Enhanced */}
        <div
          className="mt-32 mx-auto w-full max-w-[1600px] rounded-3xl border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.3)] bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-800/80 backdrop-blur-sm p-8"
          id="about"
        >
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-12 pt-4 px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="basis-full md:basis-7/12 pr-0 md:pr-12 border-b md:border-b-0 md:border-r border-purple-500/20 pb-8 md:pb-0">
              <div className="flex-1 text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  About{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Me
                  </span>
                </h2>

                <BlurText
                  text="I'm Diyan, a passionate web developer and Software Engineering student at Politeknik Negeri Indramayu. I love creating modern, responsive, and high-quality web applications that combine clean design with powerful functionality. I’m constantly learning and exploring new technologies to build efficient, user-friendly digital solutions. My goal is to keep improving my skills and contribute to impactful projects that make technology more accessible and meaningful for everyone."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-lg md:text-xl leading-relaxed mb-12 text-zinc-300"
                />

                {/* Stats - Enhanced */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-8 sm:gap-4 mb-8 w-full">
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
                      <h1 className="text-4xl md:text-5xl font-bold mb-2">
                        <span
                          className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                        >
                          {stat.number}
                        </span>
                      </h1>
                      <p className="text-zinc-400 font-medium">{stat.label}</p>
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
            <div className="basis-full md:basis-5/12 pl-0 md:pl-12 overflow-hidden max-w-full flex justify-center">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* Tools & Technologies - Enhanced */}
        <div className="tools mt-32">
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Tools &{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>
            <p
              className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
            >
              My professional toolkit for crafting exceptional digital
              experiences
            </p>
          </div>

          <div className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
                className="flex items-center gap-4 p-6 border border-zinc-700/50 rounded-2xl bg-zinc-900/40 backdrop-blur-sm hover:bg-zinc-800/60 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={tool.gambar}
                    alt="Tools Image"
                    className="w-16 h-16 object-contain bg-zinc-800 p-3 rounded-xl group-hover:bg-zinc-700 transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block text-white"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate mt-1">
                    {tool.ket}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section - Enhanced */}
        <div className="proyek mt-32 py-12" id="project">
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p
              className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
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
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <ChromaGrid
                items={listProyek}
                onItemClick={handleProjectClick}
                radius={500}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </div>
        </div>

        {/* Contact Section - Enhanced */}
        <div className="kontak mt-32 py-12" id="contact">
          <div className="text-center mb-16">
            <h1
              className="text-5xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p
              className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
            >
              Let's discuss your project or just say hello. I'm always open to
              new opportunities and conversations.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            {/* Chat Room - Enhanced */}
            <div
              className="flex-1"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <ChatRoom />
            </div>

            {/* Contact Form - Enhanced */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/rissoppa21@gmail.com"
                method="POST"
                className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-700/50 p-8 lg:p-12 rounded-2xl shadow-2xl"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="font-semibold text-white text-lg">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Your full name..."
                      className="border border-zinc-600 bg-zinc-800/50 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 placeholder-zinc-400"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="font-semibold text-white text-lg">
                      Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="your.email@example.com"
                      className="border border-zinc-600 bg-zinc-800/50 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 placeholder-zinc-400"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="message"
                      className="font-semibold text-white text-lg"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="6"
                      placeholder="Tell me about your project or just say hello..."
                      className="border border-zinc-600 bg-zinc-800/50 text-white p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 placeholder-zinc-400 resize-none"
                      required
                    ></textarea>
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 p-4 px-8 rounded-full w-full cursor-pointer border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-white text-lg"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
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