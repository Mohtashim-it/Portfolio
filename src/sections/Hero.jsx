import { motion } from "framer-motion";

const TECH_ICONS = [
  { src: "/images/SQL.png", alt: "SQL", className: "w-12 h-12 object-contain" },
  { src: "/images/java.png", alt: "Java", className: "w-12 h-12 bg-[#111] p-1 rounded-2xl object-contain" },
  { src: "/images/C++.png", alt: "C++", className: "w-28 h-12 object-contain" },
  { src: "/images/C.png", alt: "C", className: "w-28 h-12 object-contain" },
  { src: "/images/JS.png", alt: "javascript", className: "w-20 h-20 object-contain" },
  { src: "/images/CSS.png", alt: "css", className: "w-12 h-12 object-contain" },
  { src: "/images/html.png", alt: "html", className: "w-12 h-12 object-contain" },
  { src: "/images/git.png", alt: "Git", className: "w-12 h-12 object-contain" },
  { src: "/images/github.png", alt: "Github", className: "w-12 h-12 object-contain" },
  { src: "/images/figma1.png", alt: "Figma", className: "w-16 h-14 bg-[#111] p-1 rounded-2xl object-contain" },
  { src: "/images/Kubernetes.png", alt: "Kubernetes", className: "w-12 h-12 object-contain" },
  { src: "/images/Docker.png", alt: "Docker", className: "w-16 h-14 bg-[#111] p-1 rounded-2xl object-contain" },
  { src: "/images/Spring.png", alt: "Spring", className: "w-16 h-14 bg-[#111] p-1 rounded-2xl object-contain" }
];

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/mohtashim-khan-aba5aa327/", icon: "linkedin.png", label: "LinkedIn", dims: "w-7 h-7", external: true },
  { href: "https://github.com/Mohtashim-it", icon: "github1.png", label: "GitHub", dims: "w-7 h-7", external: true },
  { href: "#contact", icon: "email.png", label: "Email", dims: "w-8 h-8", external: false },
  { href: "https://leetcode.com/u/MohtashimKhanit/", icon: "leetcode.png", label: "LeetCode", dims: "w-8 h-9", external: true }
];

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen bg-[#0a0503] overflow-hidden flex flex-col justify-center items-center pt-24 pb-12"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-center relative z-10">
        
        <div className="flex flex-col justify-center pt-8 lg:pt-0 lg:pl-12 xl:pl-20 lg:translate-x-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-3xl font-extrabold text-white leading-[1.1] mb-4 tracking-wide">
               Hello, I am <br className="hidden md:block lg:hidden" />
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4 tracking-wide">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-300">Mohtashim Khan</span>
            </h1>
            <h2 className="text-7xl md:text-4xl lg:text-5xl font-bold text-slate-300 tracking-wide">
              Java Developer
            </h2>
            <h2 className="text-xl md:text-2xl font-bold text-slate-300 leading-snug mb-6 tracking-wide">
              <br/>
              Engineering the future through Java innovation and creative design.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 translate-y-8"
          >
            <div className="flex gap-5">
              {SOCIAL_LINKS.map(({ href, icon, label, dims, external }) => (
                <a 
                  key={label}
                  href={href} 
                  target={external ? "_blank" : "_self"} 
                  rel={external ? "noopener noreferrer" : ""} 
                  className="group"
                >
                  <div 
                    className={`${dims} bg-white group-hover:bg-orange-500 transition-colors duration-300`} 
                    style={{ 
                      WebkitMask: `url('/images/${icon}') no-repeat center / contain`, 
                      mask: `url('/images/${icon}') no-repeat center / contain` 
                    }} 
                    aria-label={label}
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative w-full h-[450px] lg:h-[600px] flex justify-center items-center mt-6 lg:mt-0 lg:-translate-x-12 xl:-translate-x-5" style={{ perspective: "1000px" }}>
          
          <div className="relative w-full h-full flex justify-center items-center" style={{ transformStyle: "preserve-3d" }}>
            
            <div className="absolute z-10 flex justify-center items-center pointer-events-none translate-y-8" style={{ transform: "translateZ(0)" }}>
              <img 
                src="/images/photo1.png" 
                alt="Mohtashim Khan" 
                className="w-[200px] md:w-[260px] lg:w-[360px] xl:w-[415px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
              />
            </div>

            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]" style={{ transform: "rotateX(75deg) rotateY(-15deg)", transformStyle: "preserve-3d" }}>
              <div className="absolute inset-0 border-[2px] border-dashed border-orange-500/40 rounded-full" />

              <motion.div
                animate={{ rotateZ: [0, 360] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                {TECH_ICONS.map((icon, i) => {
                  const angle = (360 / TECH_ICONS.length) * i;
                  return (
                    <div key={icon.alt} className="absolute inset-0" style={{ transform: `rotateZ(${angle}deg)`, transformStyle: "preserve-3d" }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transformStyle: "preserve-3d" }}>
                        <motion.div
                          animate={{ rotateZ: [0, -360] }}
                          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <div
                            style={{ transform: `rotateZ(-${angle}deg) rotateY(15deg) rotateX(-75deg)` }}
                            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#111] p-2.5 rounded-2xl border border-orange-500/50 flex justify-center items-center shadow-[0_0_20px_rgba(234,88,12,0.4)]"
                          >
                            <img src={icon.src} alt={icon.alt} className={icon.className} />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;