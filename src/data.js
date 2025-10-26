import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Kotlin",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProyek = [
  {
    id: 1,
    image: "https://picsum.photos/800/600?random=1",
    title: "E-Commerce Platform",
    subtitle: "Full-stack e-commerce solution with modern UI/UX",
    fullDescription:
      "A complete e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. The platform offers responsive design, fast loading times, and secure transactions for both customers and administrators.",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #3B82F6)",
    url: "#",
    dad: "100",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
  },
  {
    id: 2,
    image: "https://picsum.photos/800/600?random=2",
    title: "Task Management App",
    subtitle: "Collaborative project management tool",
    fullDescription:
      "A feature-rich task management application that enables teams to collaborate effectively. Includes real-time updates, file sharing, progress tracking, and team communication features. Built with modern web technologies to ensure scalability and excellent user experience across all devices.",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(145deg, #06B6D4, #0EA5E9)",
    url: "#",
    dad: "200",
    technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL", "Redis"],
  },
  {
    id: 3,
    image: "https://picsum.photos/800/600?random=3",
    title: "Weather Dashboard",
    subtitle: "Real-time weather information application",
    fullDescription:
      "A beautiful weather dashboard that provides real-time weather data, forecasts, and interactive maps. Features location-based services, weather alerts, and customizable widgets. The app focuses on clean design and intuitive user interface while handling complex data visualization.",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #10B981, #059669)",
    url: "#",
    dad: "300",
    technologies: ["React", "Chart.js", "Weather API", "Geolocation", "PWA"],
  },
  {
    id: 4,
    image: "https://picsum.photos/800/600?random=4",
    title: "Social Media Analytics",
    subtitle: "Data visualization for social media metrics",
    fullDescription:
      "A comprehensive analytics dashboard that tracks and visualizes social media performance across multiple platforms. Provides insights into engagement, audience growth, content performance, and competitor analysis. Features interactive charts, export functionality, and automated reporting.",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #D97706)",
    url: "#",
    dad: "400",
    technologies: ["Next.js", "D3.js", "REST APIs", "Firebase", "Material-UI"],
  },
  {
    id: 5,
    image: "https://picsum.photos/800/600?random=5",
    title: "Fitness Tracking App",
    subtitle: "Mobile fitness and workout companion",
    fullDescription:
      "A mobile-first fitness application that helps users track workouts, set goals, and monitor progress. Includes exercise libraries, workout plans, progress photos, and social features. The app integrates with health APIs and provides personalized recommendations based on user activity.",
    borderColor: "#EF4444",
    gradient: "linear-gradient(145deg, #EF4444, #DC2626)",
    url: "#",
    dad: "500",
    technologies: ["React Native", "Firebase", "Health APIs", "Redux", "Expo"],
  },
  {
    id: 6,
    image: "https://picsum.photos/800/600?random=6",
    title: "Learning Management System",
    subtitle: "Online education platform",
    fullDescription:
      "A comprehensive learning management system that enables educators to create courses, manage students, and track progress. Features include video streaming, quizzes, assignments, discussion forums, and progress analytics. Built with scalability in mind to support large numbers of concurrent users.",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #7C3AED)",
    url: "#",
    dad: "600",
    technologies: ["MERN Stack", "Video Streaming", "WebRTC", "AWS S3", "JWT"],
  }
];