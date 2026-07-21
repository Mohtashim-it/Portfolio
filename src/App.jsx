import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="bg-[#0a0503] text-slate-200 min-h-screen font-sans selection:bg-orange-500 selection:text-white flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Works />
      <Skills />
      <About/>
      <Contact />
      <Footer />
    </main>
  );
};

export default App;