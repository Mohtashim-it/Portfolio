import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Works" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setIsVisible(window.scrollY <= lastScrollY || window.scrollY <= 50);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setIsVisible(false);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 bg-[#0a0503]/50 backdrop-blur-md border-b border-white/5 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="max-w-7xl mx-auto h-20 grid grid-cols-3 items-center px-6 md:px-12">
        
        <a href="#home" onClick={closeMenu} className="text-xl font-bold text-white translate-x-[50px]">
          Mohtashim <span className="text-orange-500">Khan</span>
        </a>
        
        <nav className="hidden lg:flex justify-center gap-8 text-sm font-bold text-slate-300">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={label} href={href} onClick={closeMenu} className="hover:text-orange-400 transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex justify-end items-center gap-6 text-sm font-bold text-slate-300 -translate-x-[20px]">
          <a href="https://www.linkedin.com/in/mohtashim-khan-aba5aa327/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 hover:text-orange-400 transition-colors">
            <img src="./images/linkedin3.png" alt="LinkedIn" className="nav-icon w-6 h-6 object-contain" />
            <span>LinkedIn</span>
          </a>
          
          <a href="https://github.com/Mohtashim-it" target="_blank" rel="noreferrer" className="group flex items-center gap-2 hover:text-orange-400 transition-colors">
            <img src="./images/github4.png" alt="Github" className="nav-icon w-5 h-7 object-contain" />
            <span>Github</span>
          </a>

          <a href="./resume.pdf" download="Mohtashim_Khan_Resume.pdf" className="group flex items-center gap-2 px-5 py-2 bg-white text-black font-semibold rounded-md hover:bg-orange-500 hover:text-white transition-all">
            <img src="./images/download1.png" alt="Resume" className="resume-icon w-4 h-4 object-contain" />
            <span>View Resume</span>
          </a>
        </div>

        <button className="flex lg:hidden justify-end text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#0a0503] border-b border-white/5 px-8 py-4 flex flex-col gap-4 text-md font-bold text-slate-300">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={label} href={href} className={label === "Home" ? "text-orange-500" : "hover:text-orange-400"} onClick={closeMenu}>
              {label === "Home" ? "< Home >" : label}
            </a>
          ))}
          <div className="h-px bg-white/10 my-1"></div>
          <a href="https://www.linkedin.com/in/mohtashim-khan-aba5aa327/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 hover:text-orange-400">
            <img src="./images/linkedin.png" alt="LinkedIn" className="nav-icon w-5 h-5 object-contain brightness-0 invert" /> LinkedIn
          </a>
          <a href="https://github.com/Mohtashim-it" target="_blank" rel="noreferrer" className="group flex items-center gap-2 hover:text-orange-400">
            <img src="./images/github1.png" alt="Github" className="nav-icon w-5 h-5 object-contain brightness-0 invert" /> Github
          </a>
          <a href="./resume.pdf" download="Mohtashim_Khan_Resume.pdf" className="group flex items-center justify-center gap-2 px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-orange-500 hover:text-white transition-all">
            <img src="./images/download1.png" alt="Resume" className="resume-icon w-4 h-4 object-contain" /> View resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;