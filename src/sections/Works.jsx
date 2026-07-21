import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type: type || "spring", delay, duration, ease: "easeOut" },
  },
});

const textVariant = (delay = 0) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay },
  },
});

const staggerContainer = (staggerChildren = 0.2, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

const PROJECTS = [
  {
    id: 1,
    title: "EduManage: College Management System",
    description: "A full-stack web application developed using Java Servlets, JSP, JDBC, and MySQL for managing students, faculty, attendance, and result processing.",
    image: "/images/EduManage.png",
    tags: ["Java", "Servlets", "JSP", "JDBC", "MySQL"],
    githubUrl: "https://github.com/Mohtashim-it/EduManage-College-System",
  },
  {
    id: 2,
    title: "Hala-Chat: Real-Time Android Chat Application",
    description: "A real-time Android chat application built with Java, Firebase Authentication, Firestore, and XML featuring secure login, instant messaging, and active user management.",
    image: "/images/HalaChat.jpeg",
    tags: ["Android", "Java", "Firebase", "Firestore", "XML"],
    githubUrl: "https://github.com/Mohtashim-it/HalaChat--Chatting-app",
  },
  {
    id: 3,
    title: "Bank Management System with ATM Simulation",
    description: "A desktop banking application using Java Swing, JDBC, and MySQL with account management, ATM simulation, deposits, withdrawals, and secure database operations.",
    image: "/images/ATM.png",
    tags: ["Java", "Swing", "JDBC", "MySQL"],
    githubUrl: "https://github.com/Mohtashim-it/Bank-Management-System",
  },
];

const ProjectCard = ({ index, title, description, tags, image, githubUrl }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.25, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="flex"
  >
    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02} transitionSpeed={450} className="w-full sm:w-[380px] flex">
      <div className="group bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] rounded-2xl w-full min-h-[415px] border border-zinc-700 hover:border-orange-500/50 shadow-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-300 flex flex-col overflow-hidden">
        
        <div className="relative w-full h-[220px] shrink-0 overflow-hidden rounded-t-2xl">
          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="absolute top-0 right-0 z-20 flex justify-end gap-2 m-4">
            <div onClick={() => window.open(githubUrl, "_blank")} className="bg-black/60 backdrop-blur-md hover:bg-orange-500 transition-colors duration-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/10 hover:border-transparent">
              <img src="/images/github.png" alt="Github" className="w-5 h-5 object-contain brightness-0 invert" />
            </div>
          </div>
        </div>

        <div className="relative z-10 p-6 flex flex-col flex-grow bg-[#141414]">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">{title}</h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">{description}</p>
          </div>
          
          <div className="mt-auto pt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="inline-flex items-center justify-center min-h-[30px] px-4 rounded-full text-xs leading-none font-medium tracking-normal overflow-hidden border border-orange-500/20 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Tilt>
  </motion.div>
);

const Works = () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    id="projects"
    className="w-full min-h-screen flex flex-col justify-center items-center py-24 px-4 relative"
  >
    <div className="container mx-auto max-w-7xl w-full h-full flex flex-col justify-center pt-16">
      <motion.div variants={textVariant()}>
        <h2 className="text-6xl md:text-3xl lg:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-orange-500">Projects</span>
        </h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-center text-gray-400 mb-12 max-w-2xl">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={`project-${project.id}`} index={index} {...project} />
        ))}
      </div>

      <div className="w-full h-24 sm:h-10" />

      <div className="w-full flex justify-center">
        <a
          className="inline-flex items-center justify-center h-12 px-8 rounded-full leading-none font-medium bg-orange-500 hover:bg-orange-600 text-white gap-3 overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Mohtashim-it"
        >
          Explore all projects<ArrowRight size={18} />
        </a>
      </div>
    </div>
  </motion.section>
);

export default Works;