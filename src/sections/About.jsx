import { motion } from "framer-motion";

const STATS = [
  { label: "Location", value: "Indore, MP" },
  { label: "Focus", value: "Java & DSA" },
  { label: "Education", value: "B.Tech @ SDBCE" },
];

const FADE_ANIMATION = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const About = () => (
  <section id="about" className="min-h-screen py-24 md:py-32 px-6 md:px-12 bg-[#020202] overflow-hidden relative flex items-center justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.12),transparent_50%)] pointer-events-none" />
    
    <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col items-center justify-center gap-16">
      
      <motion.div
        {...FADE_ANIMATION}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="flex flex-col items-center text-center w-full"
      >
        <div className="inline-flex items-center justify-center gap-3 mb-6">
          <div className="h-[2px] w-8 md:w-12 bg-orange-500" />
          <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm">Know More</span>
          <div className="h-[2px] w-8 md:w-12 bg-orange-500" />
        </div>

        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-center">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 relative">
            Me
            <motion.span 
              className="absolute -inset-2 bg-orange-500/20 blur-3xl -z-10 rounded-full"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </h2>

        <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-8 text-center">
          Hi, I'm Mohtashim Khan.
        </h3>

        <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto text-center">
          <p>
            I am a Java Developer and a 6th-semester B.Tech student based in Indore, MP. I am passionate about building robust applications and translating complex logic into scalable, efficient, and user-centric software.
          </p>
          <p>
            Currently, I am actively focusing on mastering Data Structures and Algorithms (DSA) to continuously sharpen my problem-solving skills and write highly optimized code.
          </p>
        </div>
      </motion.div>

      <motion.div
        {...FADE_ANIMATION}
        transition={{ duration: 0.8, type: "spring", delay: 0.2, bounce: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto"
      >
        {STATS.map(({ label, value }) => (
          <motion.div
            key={label}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#151515] to-[#0a0a0a] border border-white/5 hover:border-orange-500/30 transition-all duration-300 group cursor-default shadow-lg flex flex-col items-center justify-center text-center h-full min-h-[140px]"
          >
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-orange-400 group-hover:to-yellow-500 transition-all duration-300 mb-2">
              {value}
            </div>
            <div className="text-gray-500 text-sm font-medium tracking-wider uppercase">
              {label}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default About;