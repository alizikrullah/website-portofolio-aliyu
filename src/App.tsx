import { useState, useEffect } from "react";
import heroPhoto from "./assets/images/hero-photo.png"; 
import cssIcon from "./assets/icon/css3.png";
import htmlIcon from "./assets/icon/html5.png";
import jsIcon from "./assets/icon/js.png";
import mysqlIcon from "./assets/icon/mysql.png";
import nodejsIcon from "./assets/icon/nodejs.png";
import reactIcon from "./assets/icon/react.png";
import tailwindIcon from "./assets/icon/tailwindcss.png";
import tsIcon from "./assets/icon/ts.png";
import shareenImg from "./assets/images/shareen-home.png";
import discordImg from "./assets/images/discord-signup.jpg";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "works", "contact"];
      const scrollPosition = window.scrollY + 300; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1f242b] relative overflow-x-hidden">
      
      {/* --- Mobile Brand Header --- */}
      <div className="md:hidden w-full flex justify-center py-6 absolute top-0 z-50">
          <a href="#home" onClick={() => setActiveSection("home")} className="text-3xl font-montserrat font-black text-white tracking-tight uppercase">
            Aliyu.
          </a>
      </div>

      {/* --- Mobile Bottom Navigation --- */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 bg-[#1f242b]/95 backdrop-blur-md border border-white/10 rounded-2xl z-50 flex justify-between p-2 shadow-2xl">
        {["home", "about", "works", "contact"].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              onClick={() => setActiveSection(item)}
              className={`font-inter text-xs sm:text-sm font-bold px-4 py-3 rounded-xl transition-all capitalize ${
                activeSection === item ? "bg-[#2ad882] text-[#1f242b]" : "text-white"
              }`}
            >
              {item}
            </a>
        ))}
      </div>

      {/* --- Desktop Left Navigation --- */}
      <header className="hidden md:flex fixed top-8 left-8 lg:top-12 lg:left-12 z-50 flex-col gap-3">
        <a href="#home" onClick={() => setActiveSection("home")} className="text-4xl lg:text-5xl font-montserrat font-black text-white mb-2 tracking-tight uppercase hover:text-[#2ad882] transition-colors cursor-pointer">
          Aliyu.
        </a>
        <a href="#home" onClick={() => setActiveSection("home")} className={`font-inter px-3 py-1 w-max font-bold text-lg lg:text-xl transition-all duration-300 ${activeSection === "home" ? "text-[#1f242b] bg-[#2ad882]" : "text-white hover:text-[#2ad882]"}`}>Home</a>
        <a href="#about" onClick={() => setActiveSection("about")} className={`font-inter px-3 py-1 w-max font-bold text-lg lg:text-xl transition-all duration-300 ${activeSection === "about" ? "text-[#1f242b] bg-[#2ad882]" : "text-white hover:text-[#2ad882]"}`}>About</a>
        <a href="#works" onClick={() => setActiveSection("works")} className={`font-inter px-3 py-1 w-max font-bold text-lg lg:text-xl transition-all duration-300 ${activeSection === "works" ? "text-[#1f242b] bg-[#2ad882]" : "text-white hover:text-[#2ad882]"}`}>Works</a>
        <a href="#contact" onClick={() => setActiveSection("contact")} className={`font-inter px-3 py-1 w-max font-bold text-lg lg:text-xl transition-all duration-300 ${activeSection === "contact" ? "text-[#1f242b] bg-[#2ad882]" : "text-white hover:text-[#2ad882]"}`}>Contact</a>
      </header>

      {/* --- Desktop Right Social Links --- */}
      <div className="hidden md:flex fixed top-8 right-8 lg:top-12 lg:right-12 z-50 gap-5 items-center">
        <a href="https://www.instagram.com/mr.aliyuz_26/" target="_blank" rel="noreferrer" className="text-white hover:text-[#2ad882] transition-colors"><svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
        <a href="https://www.tiktok.com/@bang.grivi" target="_blank" rel="noreferrer" className="text-white hover:text-[#2ad882] transition-colors"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.15 4.14-2.81 5.48-1.68 1.34-3.93 1.8-6 1.48-2.06-.32-3.89-1.46-5.01-3.14-1.1-1.68-1.39-3.83-.8-5.78.6-1.93 2.06-3.48 3.9-4.26 1.83-.78 3.94-.8 5.79-.06V10c-1.35-.45-2.92-.25-4.08.57-1.13.82-1.68 2.2-1.48 3.56.2 1.36 1.14 2.5 2.4 3.03 1.25.52 2.75.43 3.9-.22 1.16-.65 1.94-1.84 2.07-3.16.14-1.5-.02-3.02-.02-4.52V.02z"/></svg></a>
        <a href="https://www.youtube.com/@grivichannel" target="_blank" rel="noreferrer" className="text-white hover:text-[#2ad882] transition-colors"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.612 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
        <a href="https://github.com/alizikrullah" target="_blank" rel="noreferrer" className="text-white hover:text-[#2ad882] transition-colors"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-28 md:pb-0">
         
         {/* --- HERO SECTION --- */}
         <section id="home" className="flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr] gap-4 md:gap-8 md:items-end min-h-screen pt-24 md:pt-20 relative md:border-b md:border-white/5">
            <div className="hidden md:flex flex-col gap-6 items-center pb-20 h-full justify-center lg:pr-8">
                <span className="text-[#9ca3af] text-sm tracking-[0.3em] uppercase -rotate-90 mb-12 whitespace-nowrap font-inter">Follow Me</span>
                <div className="w-px h-16 bg-[#2ad882]"></div>
                {/* Social icons biarin aja */}
                <a href="https://www.instagram.com/mr.aliyuz_26/" className="text-[#2ad882] hover:text-white transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                <a href="https://www.tiktok.com/@bang.grivi" className="text-[#2ad882] hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.15 4.14-2.81 5.48-1.68 1.34-3.93 1.8-6 1.48-2.06-.32-3.89-1.46-5.01-3.14-1.1-1.68-1.39-3.83-.8-5.78.6-1.93 2.06-3.48 3.9-4.26 1.83-.78 3.94-.8 5.79-.06V10c-1.35-.45-2.92-.25-4.08.57-1.13.82-1.68 2.2-1.48 3.56.2 1.36 1.14 2.5 2.4 3.03 1.25.52 2.75.43 3.9-.22 1.16-.65 1.94-1.84 2.07-3.16.14-1.5-.02-3.02-.02-4.52V.02z"/></svg></a>
                <a href="https://github.com/alizikrullah" className="text-[#2ad882] hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
            </div>

            <div className="flex justify-center relative w-full h-full items-end order-2 md:order-none mt-2 md:mt-0 z-10 flex-1 md:flex-none border-b border-white/5 md:border-b-0">
                <div className="absolute bottom-0 md:bottom-20 w-[80%] md:w-full h-1/2 bg-[#2ad882]/10 md:bg-[#2ad882]/5 blur-[60px] md:blur-[120px] rounded-full"></div>
                <div className="absolute inset-0 bg-secondary/10 md:bg-secondary/20 blur-[50px] md:blur-[100px] rounded-full"></div>
                <img 
                  src={heroPhoto} 
                  alt="Aliyu Zikrullah" 
                  className="w-[85%] sm:w-[70%] md:w-full max-w-2xl relative z-10 drop-shadow-2xl object-contain md:translate-y-20 md:scale-125 origin-bottom" 
                />
            </div>

            <div className="text-center md:text-left flex flex-col justify-center order-1 md:order-none pb-0 md:pb-20 h-auto md:h-full lg:pl-8 z-20">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-montserrat font-black text-white leading-tight uppercase mt-6 md:mt-0">Hi, I'm <br/><span className="text-[#2ad882]">Aliyu Zikrullah</span></h1>
                <p className="mt-2 md:mt-4 text-[#9ca3af] font-inter text-base sm:text-lg lg:text-xl border-l-0 md:border-l-4 border-[#2ad882] md:pl-4 py-1">Full-Stack Web Developer.</p>
                
                <div className="hidden md:flex mt-10 gap-4 justify-start">
                  <a href="#works" onClick={() => setActiveSection("works")} className="px-8 py-3 bg-[#2ad882] text-[#1f242b] font-bold hover:bg-white transition-all uppercase tracking-widest shadow-lg shadow-[#2ad882]/20">Portfolio</a>
                  <a href="#contact" onClick={() => setActiveSection("contact")} className="px-8 py-3 bg-transparent text-white border border-white font-bold hover:border-[#2ad882] hover:text-[#2ad882] transition-all uppercase tracking-widest">Contact</a>
                </div>
            </div>

            <div className="flex flex-col md:hidden w-full gap-3 justify-center order-3 px-4 z-20 pt-6 pb-20 mt-2">
                  <a href="#works" onClick={() => setActiveSection("works")} className="w-full text-center px-4 py-3 bg-[#2ad882] text-[#1f242b] font-bold hover:bg-white transition-all uppercase tracking-widest shadow-lg shadow-[#2ad882]/20 text-sm">Portfolio</a>
                  <a href="#contact" onClick={() => setActiveSection("contact")} className="w-full text-center px-4 py-3 bg-transparent text-white border border-white font-bold hover:border-[#2ad882] hover:text-[#2ad882] transition-all uppercase tracking-widest text-sm">Contact</a>
            </div>
         </section>

         {/* --- ABOUT SECTION --- */}
         <section id="about" className="relative z-20 w-full bg-[#1f242b] py-20 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="space-y-6 md:space-y-8 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-[#2ad882] text-xs sm:text-sm tracking-[0.5em] uppercase font-bold mb-4 flex items-center gap-4">
                            <span className="hidden md:block w-12 h-px bg-[#2ad882]"></span>
                            About Me
                            <span className="hidden md:block w-12 h-px bg-transparent"></span>
                        </h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-6xl font-montserrat font-black text-white leading-tight">
                            Professional <br className="hidden sm:block"/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9ca3af]">Background</span>
                        </h3>
                    </div>
                    <div className="text-[#9ca3af] font-inter leading-relaxed text-base sm:text-lg text-justify space-y-4">
                       <p>I am a Full-Stack Web Developer with a strong engineering foundation in Telecommunications. Currently advancing my software development expertise at Purwadhika Digital Technology School, I specialize in architecting scalable, efficient, and highly responsive web applications.</p>
                       <p>My background in telecommunications gives me a unique advantage in understanding network protocols and server integrations. I seamlessly bridge the gap between robust backend infrastructure and intuitive frontend interfaces, ensuring every project is built on a reliable and optimized architecture.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-4 justify-center md:justify-start">
                        <div className="border-l-2 border-[#2ad882] pl-4 text-left">
                            <h4 className="text-white font-bold text-lg sm:text-xl lg:text-2xl font-montserrat">Full-Stack Dev</h4>
                            <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mt-1">Core Focus</p>
                        </div>
                        <div className="border-l-2 border-[#2ad882] pl-4 text-left">
                            <h4 className="text-white font-bold text-lg sm:text-xl lg:text-2xl font-montserrat">Telecommunications</h4>
                            <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mt-1">Engineering Background</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 mt-8 md:mt-0">
                    {[
                      { name: 'HTML5', src: htmlIcon }, { name: 'CSS3', src: cssIcon }, { name: 'JavaScript', src: jsIcon }, { name: 'TypeScript', src: tsIcon }, { name: 'React', src: reactIcon }, { name: 'Tailwind', src: tailwindIcon }, { name: 'Node.js', src: nodejsIcon }, { name: 'MySQL', src: mysqlIcon },
                    ].map((skill, index) => (
                      <div key={index} className="aspect-square bg-white/[0.03] rounded-2xl flex flex-col items-center justify-center border border-white/10 hover:border-[#2ad882]/50 hover:bg-[#2ad882]/10 transition-all duration-300 group cursor-pointer hover:-translate-y-2">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-full mb-2 sm:mb-3 flex items-center justify-center p-2">
                             <img src={skill.src} alt={skill.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>
                        <span className="text-[10px] sm:text-xs text-[#9ca3af] group-hover:text-white font-medium transition-colors tracking-wide">{skill.name}</span>
                      </div>
                    ))}
                </div>
            </div>
         </section>

         {/* --- WORKS SECTION --- */}
         <section id="works" className="relative z-20 w-full bg-[#1f242b] py-20 md:py-32 border-t border-white/5">
            <div className="flex flex-col gap-12 md:gap-16">
                
                {/* --- HEADER WORKS --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-[#2ad882] text-xs sm:text-sm tracking-[0.5em] uppercase font-bold mb-4 flex items-center gap-4">
                            <span className="hidden md:block w-12 h-px bg-[#2ad882]"></span>Portfolio<span className="hidden md:block w-12 h-px bg-transparent"></span>
                        </h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-6xl font-montserrat font-black text-white leading-tight">
                            Featured <br className="hidden sm:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9ca3af]">Projects</span>
                        </h3>
                    </div>
                    <p className="text-[#9ca3af] font-inter text-sm sm:text-base max-w-md mx-auto md:mx-0 text-justify">A showcase of my recent work, demonstrating my ability to integrate secure backend infrastructure with dynamic and interactive frontend experiences.</p>
                </div>

                {/* --- PROJECTS LIST (STAR METHOD & NEW LAYOUT) --- */}
                <div className="flex flex-col gap-12">
                    
                    {/* Project 1: Shareen */}
                    <a href="#works" className="group flex flex-col lg:flex-row bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-[#2ad882]/30 transition-all duration-500 cursor-pointer">
                        <div className="w-full lg:w-1/2 h-64 lg:h-auto relative border-b lg:border-b-0 lg:border-r border-white/5 bg-black/40 overflow-hidden flex items-center justify-center p-4 sm:p-6 shrink-0">
                            <img src={shareenImg} alt="Shareen Jaya Abadi" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-6 sm:p-8 lg:p-8 lg:w-1/2 flex flex-col justify-center">
                            <h4 className="text-2xl sm:text-3xl font-montserrat font-bold text-white mb-4 lg:mb-6 group-hover:text-[#2ad882] transition-colors">Shareen Jaya Abadi</h4>
                            
                            {/* STAR Content */}
                            <div className="space-y-3 text-[#9ca3af] font-inter text-sm text-justify">
                                <p><span className="text-white font-bold">Situation:</span> Shareen Jaya Abadi, a textile provider, needed to digitize their business operations and supplier data management which were previously handled manually.</p>
                                <p><span className="text-white font-bold">Task:</span> Develop a centralized digital platform to streamline data management and optimize their internal administrative processes.</p>
                                <p><span className="text-white font-bold">Action:</span> Built a customized WordPress solution tailored to their operational needs. Designed an intuitive dashboard for staff to easily input, track, and secure supplier data.</p>
                                <p><span className="text-white font-bold">Result:</span> Successfully launched the platform, resulting in significantly faster data retrieval, streamlined workflows, and a reduction in manual tasks.</p>
                            </div>

                            <div className="flex gap-2 sm:gap-3 mt-6 lg:mt-8 flex-wrap">
                                <span className="px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider font-bold text-[#2ad882] bg-[#2ad882]/10 rounded-full">Wordpress</span>
                            </div>
                        </div>
                    </a>

                    {/* Project 2: Discord */}
                    <a href="https://alizikrullah.github.io/portofolioweb-discord-app/" target="_blank" rel="noreferrer" className="group flex flex-col lg:flex-row bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-[#2ad882]/30 transition-all duration-500 cursor-pointer">
                        <div className="w-full lg:w-1/2 h-64 lg:h-auto relative border-b lg:border-b-0 lg:border-r border-white/5 bg-black/40 overflow-hidden flex items-center justify-center p-4 sm:p-6 shrink-0">
                            <img src={discordImg} alt="Discord UI & Network" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="p-6 sm:p-8 lg:p-8 lg:w-1/2 flex flex-col justify-center">
                            <h4 className="text-2xl sm:text-3xl font-montserrat font-bold text-white mb-4 lg:mb-6 group-hover:text-[#2ad882] transition-colors">Discord UI / Network Build</h4>
                            
                            {/* STAR Content */}
                            <div className="space-y-3 text-[#9ca3af] font-inter text-sm text-justify">
                                <p><span className="text-white font-bold">Situation:</span> I needed to demonstrate advanced frontend capabilities, specifically handling complex state management and real-time interfaces.</p>
                                <p><span className="text-white font-bold">Task:</span> Build a robust, responsive web application clone inspired by Discord to showcase intricate UI implementation.</p>
                                <p><span className="text-white font-bold">Action:</span> Utilized React for component-based architecture, and integrated Tailwind CSS with Flowbite for rapid styling. Implemented global state to handle user interactions seamlessly.</p>
                                <p><span className="text-white font-bold">Result:</span> Delivered a responsive, pixel-perfect UI clone that mirrors Discord's core user experience, proving competency in modern frontend stacks.</p>
                            </div>

                            <div className="flex gap-2 sm:gap-3 mt-6 lg:mt-8 flex-wrap">
                                <span className="px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider font-bold text-[#2ad882] bg-[#2ad882]/10 rounded-full">React</span>
                                <span className="px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider font-bold text-white bg-white/10 rounded-full">Tailwind</span>
                                <span className="px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider font-bold text-white bg-white/10 rounded-full">Flowbite</span>
                            </div>
                        </div>
                    </a>

                </div>

                {/* --- TESTIMONIALS SECTION --- */}
                <div className="mt-20 md:mt-28">
                    <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                        <h2 className="text-[#2ad882] text-xs sm:text-sm tracking-[0.5em] uppercase font-bold mb-4 flex items-center gap-4">
                            <span className="hidden md:block w-8 h-px bg-[#2ad882]"></span>Testimonials<span className="hidden md:block w-8 h-px bg-[#2ad882]"></span>
                        </h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-black text-white leading-tight">
                            What Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9ca3af]">Say</span>
                        </h3>
                        <p className="mt-4 text-[#9ca3af] font-inter text-sm sm:text-base max-w-2xl text-center mx-auto">Feedback from professionals and clients I've had the pleasure to work with.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-[#2ad882]/30 transition-all duration-500 flex flex-col h-full">
                            <svg className="w-8 h-8 text-[#2ad882]/20 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                            <p className="text-[#9ca3af] font-inter text-sm italic flex-grow text-justify leading-relaxed">"Aliyu didn't just build a system; he understood our business needs. He translated them into a digital platform that saved us hours of manual work."</p>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#2ad882]/10 flex items-center justify-center text-[#2ad882] font-bold font-montserrat text-sm">BW</div>
                                <div>
                                    <h5 className="text-white font-bold font-montserrat text-sm">Budi Wibowo</h5>
                                    <p className="text-[#9ca3af] text-xs font-inter">Operations Manager</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-[#2ad882]/30 transition-all duration-500 flex flex-col h-full">
                            <svg className="w-8 h-8 text-[#2ad882]/20 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                            <p className="text-[#9ca3af] font-inter text-sm italic flex-grow text-justify leading-relaxed">"Collaborating with Aliyu is always a breeze. His knowledge of React is solid, and his Discord UI clone is proof of his attention to detail in modern UI development."</p>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#2ad882]/10 flex items-center justify-center text-[#2ad882] font-bold font-montserrat text-sm">SP</div>
                                <div>
                                    <h5 className="text-white font-bold font-montserrat text-sm">Sarah Pratama</h5>
                                    <p className="text-[#9ca3af] text-xs font-inter">UI/UX Designer</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-[#2ad882]/30 transition-all duration-500 flex flex-col h-full">
                            <svg className="w-8 h-8 text-[#2ad882]/20 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                            <p className="text-[#9ca3af] font-inter text-sm italic flex-grow text-justify leading-relaxed">"Aliyu brings a structured mindset to coding. He writes clean, scalable code and always considers how the frontend interacts with the server architecture."</p>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#2ad882]/10 flex items-center justify-center text-[#2ad882] font-bold font-montserrat text-sm">RA</div>
                                <div>
                                    <h5 className="text-white font-bold font-montserrat text-sm">Rizky Aditya</h5>
                                    <p className="text-[#9ca3af] text-xs font-inter">Lead Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
         </section>

         {/* --- CONTACT SECTION --- */}
         <section id="contact" className="relative z-20 w-full bg-[#1f242b] py-20 md:py-32 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                
                <div className="space-y-6 md:space-y-8 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-[#2ad882] text-xs sm:text-sm tracking-[0.5em] uppercase font-bold mb-4 flex items-center gap-4">
                            <span className="hidden md:block w-12 h-px bg-[#2ad882]"></span>Contact<span className="hidden md:block w-12 h-px bg-transparent"></span>
                        </h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-6xl font-montserrat font-black text-white leading-tight">
                            Let's Build Something <br className="hidden sm:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9ca3af]">Secure & Scalable</span>
                        </h3>
                    </div>
                    <p className="text-[#9ca3af] font-inter leading-relaxed text-base sm:text-lg text-justify">I'm currently open to full-time opportunities or interesting collaborative projects. If you're looking for a developer who understands both the network layer and the user experience, let's connect.</p>
                    
                    <div className="space-y-4 pt-4 font-inter flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-4 text-white">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2ad882]/10 rounded-full flex items-center justify-center text-[#2ad882]">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            </div>
                            <div className="text-left">
                                <h5 className="font-bold text-sm sm:text-base">Email Me</h5>
                                <p className="text-[#9ca3af] text-xs sm:text-sm">ali.zikrullah@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-white">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2ad882]/10 rounded-full flex items-center justify-center text-[#2ad882]">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            </div>
                            <div className="text-left">
                                <h5 className="font-bold text-sm sm:text-base">Location</h5>
                                <p className="text-[#9ca3af] text-xs sm:text-sm">Purwakarta, Indonesia</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-8 lg:p-12 space-y-5 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        <div className="space-y-2 text-left">
                            <label htmlFor="name" className="text-xs sm:text-sm text-[#9ca3af] font-inter font-bold ml-2">Your Name</label>
                            <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-[#2ad882] transition-colors text-sm sm:text-base" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2 text-left">
                            <label htmlFor="email" className="text-xs sm:text-sm text-[#9ca3af] font-inter font-bold ml-2">Your Email</label>
                            <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-[#2ad882] transition-colors text-sm sm:text-base" placeholder="john@example.com" />
                        </div>
                    </div>
                    <div className="space-y-2 text-left">
                        <label htmlFor="subject" className="text-xs sm:text-sm text-[#9ca3af] font-inter font-bold ml-2">Subject</label>
                        <input type="text" id="subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-[#2ad882] transition-colors text-sm sm:text-base" placeholder="Project Collaboration" />
                    </div>
                    <div className="space-y-2 text-left">
                        <label htmlFor="message" className="text-xs sm:text-sm text-[#9ca3af] font-inter font-bold ml-2">Message</label>
                        <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-inter focus:outline-none focus:border-[#2ad882] transition-colors resize-none text-sm sm:text-base" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 sm:py-4 bg-[#2ad882] hover:bg-white text-[#1f242b] font-bold text-base sm:text-lg font-montserrat rounded-xl transition-all duration-300 uppercase tracking-widest shadow-lg shadow-[#2ad882]/20 hover:shadow-[#2ad882]/40">
                        Send Message
                    </button>
                </form>

            </div>
         </section>

         {/* --- FOOTER SECTION --- */}
         <footer className="relative z-20 w-full py-8 border-t border-white/5 flex flex-col gap-4 justify-center items-center mt-auto">
            <div className="flex md:hidden gap-6 mb-2">
                <a href="https://www.instagram.com/mr.aliyuz_26/" target="_blank" rel="noreferrer" className="text-[#9ca3af] hover:text-[#2ad882] transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                <a href="https://www.tiktok.com/@bang.grivi" target="_blank" rel="noreferrer" className="text-[#9ca3af] hover:text-[#2ad882] transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.15 4.14-2.81 5.48-1.68 1.34-3.93 1.8-6 1.48-2.06-.32-3.89-1.46-5.01-3.14-1.1-1.68-1.39-3.83-.8-5.78.6-1.93 2.06-3.48 3.9-4.26 1.83-.78 3.94-.8 5.79-.06V10c-1.35-.45-2.92-.25-4.08.57-1.13.82-1.68 2.2-1.48 3.56.2 1.36 1.14 2.5 2.4 3.03 1.25.52 2.75.43 3.9-.22 1.16-.65 1.94-1.84 2.07-3.16.14-1.5-.02-3.02-.02-4.52V.02z"/></svg></a>
                <a href="https://www.youtube.com/@grivichannel" target="_blank" rel="noreferrer" className="text-[#9ca3af] hover:text-[#2ad882] transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.612 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
                <a href="https://github.com/alizikrullah" target="_blank" rel="noreferrer" className="text-[#9ca3af] hover:text-[#2ad882] transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
            </div>
            <p className="text-[#9ca3af] font-inter text-xs sm:text-sm">
                © 2026 <span className="font-bold text-white">Aliyu Zikrullah</span> · All rights reserved.
            </p>
         </footer> 
      </main>
    </div>
  );
}

export default App;
