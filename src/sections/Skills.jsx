import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const SKILLS = [
  { name: "Java", src: "./images/java.png", imgClass: "w-12 h-12 bg-[#111] p-1 rounded-2xl object-contain" },
  { name: "SQL", src: "./images/SQL.png", imgClass: "w-14 h-14 object-contain" },
  { name: "C++", src: "./images/C++.png", imgClass: "w-28 h-12 object-contain" },
  { name: "C", src: "./images/C.png", imgClass: "w-28 h-12 object-contain" },
  { name: "HTML", src: "./images/html.png", imgClass: "w-12 h-12 object-contain" },
  { name: "CSS", src: "./images/CSS.png", imgClass: "w-12 h-12 object-contain" },
  { name: "JavaScript", src: "./images/JS.png", imgClass: "w-16 h-16 object-contain" },
  { name: "Git", src: "./images/git.png", imgClass: "w-12 h-12 object-contain" },
  { name: "GitHub", src: "./images/github.png", imgClass: "w-12 h-12 object-contain" },
  { name: "Figma", src: "./images/Figma.png", imgClass: "w-12 h-10 bg-[#111] p-1 rounded-2xl object-contain" },
  { name: "Kubernetes", src: "./images/Kubernetes.png", imgClass: "w-12 h-12 object-contain" },
  { name: "Docker", src: "./images/Docker.png", imgClass: "w-16 h-14 bg-[#111] p-1 rounded-2xl object-contain" },
];

const SkillCard = ({ name, src, imgClass, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - left) / width - 0.5);
    y.set((e.clientY - top) / height - 0.5);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, z: -150, scale: 0.5, rotateX: 45 },
        show: { 
          opacity: 1, z: 0, scale: 1, rotateX: 0, 
          transition: { type: "spring", stiffness: 100, damping: 15, delay: index * 0.05 } 
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative w-[165px] h-40 rounded-2xl bg-gradient-to-br from-[#151515] to-[#0a0a0a] border border-white/5 p-6 flex flex-col items-center justify-center gap-6 cursor-pointer"
    >
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "radial-gradient(circle at center, rgba(249,115,22,0.15) 0%, transparent 70%)" }}
      />
      
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-500/40 transition-colors duration-300 shadow-[0_0_0_transparent] group-hover:shadow-[0_20px_50px_-15px_rgba(249,115,22,0.5)] pointer-events-none" />

      <motion.div style={{ transform: "translateZ(80px)" }} className="relative z-10 w-full flex justify-center items-center drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3 + (index % 4) * 0.5, repeat: Infinity, ease: "easeInOut" }}
          className="group-hover:scale-125 transition-transform duration-500"
        >
          <img src={src} alt={name} className={imgClass} />
        </motion.div>
      </motion.div>

      <motion.div style={{ transform: "translateZ(40px)" }} className="relative z-10 bg-[#050505]/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
        <span className="text-sm font-black text-gray-400 uppercase tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-yellow-400 drop-shadow-md">
          {name}
        </span>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => (
  <section id="skills" className="w-full min-h-screen py-16 px-4 md:px-9 bg-[#020202] overflow-hidden relative flex flex-col justify-center items-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.1),transparent_50%)] pointer-events-none" />
    <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

    <div className="w-full h-full max-w-[1400px] relative z-10 [perspective:2000px] flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: -50, rotateX: 30 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        className="flex flex-col items-center justify-center mb-16 w-full"
      >
        <h2 className="text-center text-white font-bold leading-tight text-3xl md:text-4xl lg:text-5xl">
          Key Skillset and{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Proficiencies
            </span>
            <motion.div
              className="absolute inset-0 -z-10 rounded-full bg-orange-500/20 blur-3xl"
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mt-6 px-6 text-center text-gray-400 text-base md:text-lg leading-8"
        >
          Passionate full-stack developer with strong expertise in{" "}
          <span className="text-orange-400 font-semibold">
            Java, Android Development, Java Servlets, JSP, JDBC, and MySQL
          </span>{" "}
          and modern web technologies.
          <br className="hidden md:block" />
          I enjoy solving complex problems, building scalable applications, and delivering clean, efficient, and user-focused digital solutions.
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="flex flex-wrap justify-center items-center gap-8 w-full px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {SKILLS.map((skill, index) => (
          <SkillCard key={skill.name} index={index} {...skill} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;