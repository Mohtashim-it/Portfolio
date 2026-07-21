import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactExperience from "../components/models/contact/ContactExperience";

const INPUT_CLASSES = "w-full bg-[#051114]/90 text-white border-none rounded-lg px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#f48a1d] placeholder:text-gray-400";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="w-[90%] md:w-[85%] max-w-5xl mx-auto flex flex-col">
        
        <div className="flex flex-col items-center text-center pb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get in <span className="bg-gradient-to-r from-[#ffbc6b] to-[#f48a1d] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, and innovative software solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8 items-stretch w-full">
          
          <div className="xl:col-span-5 w-full">
            <div className="card-border rounded-2xl py-8 sm:py-10 relative overflow-hidden h-full flex flex-col items-center justify-center shadow-2xl w-full bg-[url('/images/emailBG.png')] bg-cover bg-center bg-no-repeat">
              <div className="absolute inset-0 bg-black/60 z-0" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-[85%] md:w-[80%] flex flex-col items-center gap-5 sm:gap-6 relative z-10"
              >
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={INPUT_CLASSES}
                  required
                />
                
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={INPUT_CLASSES}
                  required
                />
                
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="9"
                  className={`${INPUT_CLASSES} resize-none`}
                  required
                />

                <button 
                  type="submit" 
                  disabled={loading} 
                  className={`mt-2 transition-all duration-300 w-full ${loading ? "pointer-events-none opacity-90" : ""}`}
                >
                  <div className={`cta-button group w-full transition-all duration-300 ${loading ? "!bg-[#f48a1d]" : "!bg-[#e5ecf6] hover:!bg-[#f48a1d]"}`}>
                    <div className={`bg-circle ${loading ? "!bg-orange-600 !w-[150%] !h-[150%] !right-1/2 !translate-x-1/2" : ""}`} />
                    
                    <p className={`text font-bold z-10 transition-all duration-500 ${loading ? "!text-white !translate-x-0" : "!text-black group-hover:!text-white"}`}>
                      {loading ? "SENDING..." : "SEND MESSAGE"}
                    </p>
                    
                    {!loading && (
                      <div className="arrow-wrapper z-10">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                      </div>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 w-full h-[400px] sm:h-[450px] xl:h-auto min-h-[400px]">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden shadow-xl">
              <ContactExperience />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;