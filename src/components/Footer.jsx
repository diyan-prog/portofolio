import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount, VscMail } from "react-icons/vsc";

const Footer = () => {
  const dockItems = [
    {
      icon: <VscHome size={20} />,
      label: "Home",
      onClick: () =>
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscAccount size={20} />,
      label: "About",
      onClick: () =>
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscArchive size={20} />,
      label: "Projects",
      onClick: () =>
        document
          .getElementById("project")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscMail size={20} />,
      label: "Contact",
      onClick: () =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  const socialLinks = [
    {
      icon: "ri-github-fill",
      url: "https://github.com/diyan-prog",
      color: "hover:text-purple-400",
      label: "GitHub",
    },
    {
      icon: "ri-instagram-fill",
      url: "https://www.instagram.com/d1yan.26?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      color: "hover:text-pink-400",
      label: "Instagram",
    },
    {
      icon: "ri-youtube-fill",
      url: "",
      color: "hover:text-red-400",
      label: "YouTube",
    },
    {
      icon: "ri-linkedin-fill",
      url: "",
      color: "hover:text-blue-400",
      label: "LinkedIn",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 sm:mt-32 pb-6 sm:pb-8 relative z-10 border-t border-zinc-800/50 pt-8 sm:pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section - Left */}
          <div className="text-center lg:text-left lg:col-span-1">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              Diyan Portfolio
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Crafting digital experiences with passion and innovation through
              modern web technologies.
            </p>
          </div>

          {/* Dock Navigation - Center */}
          <div className="flex justify-center items-center lg:col-span-1">
            <div className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 rounded-2xl px-4 sm:px-6 py-3 w-full max-w-md">
              <Dock
                items={dockItems}
                panelHeight={32}
                baseItemSize={55}
                magnification={90}
                className="justify-center"
              />
            </div>
          </div>

          {/* Social Links - Right */}
          <div className="flex justify-center lg:justify-end items-center lg:col-span-1">
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`text-zinc-400 ${social.color} transition-all duration-300 transform hover:scale-110 text-xl sm:text-2xl p-2 sm:p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 border border-zinc-700/50 hover:border-zinc-600/50`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-zinc-800/50 pt-6 sm:pt-8">
          {/* Copyright & Made With Love */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-6">
            <p className="text-zinc-500 text-sm sm:text-base">
              © {currentYear} Diyan. All rights reserved.
            </p>
            <div className="hidden sm:flex items-center gap-2 text-zinc-600">
              <span>•</span>
              <span className="flex items-center gap-1">
                <span>Made with</span>
                <span className="text-red-400 animate-pulse">❤️</span>
                <span>using React & Tailwind</span>
              </span>
            </div>
          </div>

          {/* Made With Love - Mobile */}
          <div className="sm:hidden flex items-center justify-center gap-1 text-zinc-600 text-sm mb-4">
            <span>Made with</span>
            <span className="text-red-400 animate-pulse">❤️</span>
            <span>using React & Tailwind</span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a
              href="#home"
              className="text-zinc-400 hover:text-purple-400 transition-colors duration-300 px-2 py-1 rounded hover:bg-purple-400/10"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-zinc-400 hover:text-cyan-400 transition-colors duration-300 px-2 py-1 rounded hover:bg-cyan-400/10"
            >
              About
            </a>
            <a
              href="#project"
              className="text-zinc-400 hover:text-purple-400 transition-colors duration-300 px-2 py-1 rounded hover:bg-purple-400/10"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-zinc-400 hover:text-cyan-400 transition-colors duration-300 px-2 py-1 rounded hover:bg-cyan-400/10"
            >
              Contact
            </a>
            <a
              href="./assets/CV.pdf"
              download
              className="text-zinc-400 hover:text-purple-400 transition-colors duration-300 px-2 py-1 rounded hover:bg-purple-400/10"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-900/30 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
