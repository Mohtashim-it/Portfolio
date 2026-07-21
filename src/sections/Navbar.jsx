import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
    setIsVisible(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0a0503]/50 backdrop-blur-md border-b border-white/5 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 grid grid-cols-3 items-center px-6 md:px-8 lg:px-10 xl:px-12">
        
        <div
  className="flex justify-start"
  style={{ transform: "translateX(50px)" }}
>
          <a href="#home" onClick={handleNavClick} className="text-xl font-bold text-white flex items-center gap-2">
            Mohtashim <span className="text-orange-500">Khan</span>
          </a>
        </div>
        
        <div className="hidden lg:flex justify-center">
          <nav className="flex gap-6 xl:gap-8 text-sm font-bold text-slate-300">
            <a href="#home" onClick={handleNavClick} className="hover:text-orange-400 transition-colors">Home</a>
            <a href="#projects" onClick={handleNavClick} className="hover:text-orange-400 transition-colors">Works</a>
            <a href="#skills" onClick={handleNavClick} className="hover:text-orange-400 transition-colors">Skills</a>
            <a href="#about" onClick={handleNavClick} className="hover:text-orange-400 transition-colors">About</a>
            <a href="#contact" onClick={handleNavClick} className="hover:text-orange-400 transition-colors">Contact</a>
          </nav>
        </div>

        <div
  className="hidden lg:flex justify-end items-center gap-4 xl:gap-6 text-sm font-bold text-slate-300"
  style={{ transform: "translateX(-20px)" }}
>
          <a
  href="https://www.linkedin.com/in/mohtashim-khan-aba5aa327/"
  target="_blank"
  rel="noreferrer"
  className="group flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors"
>
 <img
  src="/images/linkedin3.png"
  alt="LinkedIn"
  className="nav-icon w-6 h-6 object-contain transition-all duration-300"
 
/>
  <span>LinkedIn</span>
</a>
          
         <a
  href="https://github.com/Mohtashim-it"
  target="_blank"
  rel="noreferrer"
  className="group flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors"
>
  <img
    src="/images/github4.png"
    alt="Github"
    className="nav-icon w-5 h-7 object-contain transition-all duration-300"
   
  />
  <span>Github</span>
</a>

         <a
  href="/resume.pdf"
  download="Mohtashim_Khan_Resume.pdf"
  className="group flex items-center gap-2 px-5 py-2 bg-white text-black font-semibold rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300"
>
  <img
    src="/images/download1.png"
    alt="Download Resume"
    className="resume-icon w-4 h-4 object-contain transition-all duration-300"
  />
  <span>View Resume</span>
</a>
        </div>

        <div className="flex lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#0a0503] border-b border-white/5 px-8 py-4">
          <nav className="flex flex-col gap-4 text-md font-bold text-slate-300">
            <a href="#home" className="text-orange-500 transition-colors" onClick={handleNavClick}>&lt; Home &gt;</a>
            <a href="#projects" className="hover:text-orange-400 transition-colors" onClick={handleNavClick}>Works</a>
            <a href="#skills" className="hover:text-orange-400 transition-colors" onClick={handleNavClick}>Skills</a>
            <a href="#about" className="hover:text-orange-400 transition-colors" onClick={handleNavClick}>About</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors" onClick={handleNavClick}>Contact</a>
            
            <div className="h-px w-full bg-white/10 my-2"></div>
            
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
               <img src="/images/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-contain brightness-0 invert" />
               LinkedIn
            </a>
            <a href="https://github.com/Mohtashim-it" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
               <img src="/images/github1.png" alt="Github" className="w-5 h-5 object-contain brightness-0 invert" />
               Github
            </a>
            <a href="/resume.pdf" download className="flex items-center justify-center gap-2 px-4 py-2 mt-2 bg-white text-black font-semibold rounded-md hover:bg-orange-500 hover:text-white transition-all">
              <img src="/download.png" alt="Download Resume" className="w-4 h-4 object-contain" />
              View resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;