const SOCIAL_LINKS = [
  { name: "linkedin2", link: "https://www.linkedin.com/in/mohtashim-khan-aba5aa327/" },
  { name: "github2", link: "https://github.com/Mohtashim-it" },
  { name: "insta", link: "https://www.instagram.com/al_mohtashimk/" },
  { name: "leetcode", link: "https://leetcode.com/u/MohtashimKhanit" }
];

const FILTER_DEFAULT = "brightness(0) invert(1)";
const FILTER_HOVER = "brightness(0) saturate(100%) invert(55%) sepia(75%) saturate(3000%) hue-rotate(345deg) brightness(100%) contrast(90%)";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#020202] pt-16 pb-8 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 md:w-1/2 h-[2px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent blur-sm" />

      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        <div className="w-full md:w-[35%] flex flex-col items-start pl-10 lg:pl-20">
          <p className="text-gray-500 text-sm text-center md:text-left max-w-xs relative md:left-8 lg:left-12">
            Building robust applications and translating complex logic into seamless user experiences.
          </p>
        </div>

        <div className="w-full md:w-[30%] flex justify-center gap-5">
          {SOCIAL_LINKS.map(({ name, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center group hover:border-orange-500/40 hover:bg-[#151515] transition-all duration-300 shadow-lg"
            >
              <img
                src={`./images/${name}.png`}
                alt={`${name} icon`}
                className="w-5 h-5 transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:scale-110"
                style={{ filter: FILTER_DEFAULT }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = FILTER_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.filter = FILTER_DEFAULT)}
              />
            </a>
          ))}
        </div>

        <div className="w-full md:w-[35%] flex flex-col items-end pr-10 lg:pr-20">
          <button
            onClick={scrollToTop}
            className="group relative md:right-8 lg:right-12 flex items-center gap-3 text-xs font-bold tracking-widest text-gray-400 hover:text-orange-400 transition-colors uppercase"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:-translate-y-1 transition-all duration-300">
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600 font-medium tracking-wide">
        <p className="relative md:left-10 lg:left-12">
          © {new Date().getFullYear()} Mohtashim Khan. All Rights Reserved.
        </p>
        <p className="flex items-center gap-1.5 relative md:right-8 lg:right-12">
          Designed & Built with <span className="text-orange-500 text-sm animate-pulse">❤</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;