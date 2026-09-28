import { useState, useEffect } from "react";
import heroPhoto from "./assets/images/hero-photo.png"; 
import cssIcon from "./assets/icon/css3.png";
import htmlIcon from "./assets/icon/html5.png";
import jsIcon from "./assets/icon/js.png";
import postgresIcon from "./assets/icon/postgresql.svg";
import nodejsIcon from "./assets/icon/nodejs.png";
import reactIcon from "./assets/icon/react.png";
import tailwindIcon from "./assets/icon/tailwindcss.png";
import tsIcon from "./assets/icon/ts.png";
import grivilabsImg from "./assets/images/grivilabs-porto.jpg";
import eventuraImg from "./assets/images/eventura-porto.jpg";
import grocergoImg from "./assets/images/grocergo-porto.jpg";
import { FaInstagram, FaTiktok, FaYoutube, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineExternalLink } from "react-icons/hi";

const socials = [
  { href: "https://www.instagram.com/mr.aliyuz_26/", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.tiktok.com/@bang.grivi", label: "TikTok", Icon: FaTiktok },
  { href: "https://www.youtube.com/@grivichannel", label: "YouTube", Icon: FaYoutube },
  { href: "https://github.com/alizikrullah", label: "GitHub", Icon: FaGithub },
];

const projects = [
  {
    title: "GriviLabs Company Profile",
    image: grivilabsImg,
    link: "https://grivilabs.my.id/",
    description: "The official website of GriviLabs, my web and system development studio. It started as a company profile for a bootcamp code challenge, and I grew it into the live site my business runs on today.",
    highlights: [
      "Built a fully custom frontend with React, Tailwind CSS and shadcn/ui, with no templates.",
      "Developed an Express.js and PostgreSQL backend for authentication and CMS features (with Directus), so services, portfolio and blog content can be updated anytime without touching code.",
      "Scored 95+ on Performance, Accessibility and Best Practices, and 100 on SEO in Google PageSpeed Insights (desktop).",
    ],
    stack: ["React", "Tailwind", "shadcn/ui", "Express", "PostgreSQL", "Directus"],
    repos: [{ label: "Backend", href: "https://github.com/alizikrullah/backend-grivilabs" }],
  },
  {
    title: "GrocerGo Grocery App",
    image: grocergoImg,
    description: "An online grocery web app where customers find the store nearest to them and order fresh groceries for delivery or pickup. Built with my team as our final project at Purwadhika Digital Technology School, where I owned the cart, checkout, payment and order features.",
    highlights: [
      "Built the shopping cart and the complete checkout process, with order tracking for customers.",
      "Integrated Midtrans as the payment gateway, alongside manual bank transfer with payment proof upload and admin verification.",
      "Built role-based order management: super admins view and filter orders across all warehouses, while store admins only see orders from their own warehouse.",
      "Implemented the full order status workflow, from payment approval or rejection to shipping, auto-confirming delivered orders after 7 days, and cancellations that restore stock and log every change in a stock journal.",
    ],
    stack: ["React", "Redux Toolkit", "Tailwind", "shadcn/ui", "Express", "PostgreSQL", "Prisma", "Midtrans", "Leaflet", "Cloudinary", "Google OAuth"],
    link: undefined, // backend down, re-add https://grocergo.grivilabs.my.id/ once it's fixed
    repos: [
      { label: "Frontend", href: "https://github.com/alizikrullah/frontend-grocergo" },
      { label: "Backend", href: "https://github.com/alizikrullah/backend-grocergo" },
    ],
  },
  {
    title: "Eventura Platform",
    image: eventuraImg,
    description: "An event ticketing platform that connects event organizers with customers: organizers publish events and promotions, and customers discover events and buy tickets. Built in a team of two as a mini project at Purwadhika Digital Technology School, where I owned event discovery, transactions and reviews.",
    highlights: [
      "Built event discovery: a landing page of upcoming events, browsing with category and location filters, event details and a debounced search bar, all fully responsive.",
      "Built event creation for organizers, covering free or paid events, ticket types, seat capacity and limited-time voucher promotions.",
      "Developed the ticket transaction flow with Midtrans, six transaction statuses, points redemption for discounts, and automatic expiry and cancellation that roll back points, vouchers and seats.",
      "Added reviews and ratings that customers can only leave after attending an event, shown on the organizer's profile.",
    ],
    stack: ["React", "Redux Toolkit", "Tailwind", "shadcn/ui", "Express", "PostgreSQL", "Prisma", "Midtrans", "Leaflet", "Cloudinary", "Google OAuth"],
    link: undefined, // backend down, re-add https://eventura-platform.grivilabs.my.id/ once it's fixed
    repos: [{ label: "GitHub", href: "https://github.com/alizikrullah/eventura-platform" }],
  },
];

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
        {socials.map(({ href, label, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-white hover:text-[#2ad882] transition-colors"><Icon className="w-7 h-7" /></a>
        ))}
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-28 md:pb-0">
         
         {/* --- HERO SECTION --- */}
         <section id="home" className="flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr] gap-4 md:gap-8 md:items-end min-h-screen pt-24 md:pt-20 relative md:border-b md:border-white/5">
            <div className="hidden md:flex flex-col gap-6 items-center pb-20 h-full justify-center lg:pr-8">
                <span className="text-[#9ca3af] text-sm tracking-[0.3em] uppercase -rotate-90 mb-12 whitespace-nowrap font-inter">Follow Me</span>
                <div className="w-px h-16 bg-[#2ad882]"></div>
                {/* Social icons biarin aja */}
                {socials.map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-[#2ad882] hover:text-white transition-colors"><Icon className="w-6 h-6" /></a>
                ))}
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
                      { name: 'HTML5', src: htmlIcon }, { name: 'CSS3', src: cssIcon }, { name: 'JavaScript', src: jsIcon }, { name: 'TypeScript', src: tsIcon }, { name: 'React', src: reactIcon }, { name: 'Tailwind', src: tailwindIcon }, { name: 'Node.js', src: nodejsIcon }, { name: 'PostgreSQL', src: postgresIcon },
                    ].map((skill, index) => (
                      <div key={index} className="aspect-square bg-white/[0.03] rounded-2xl flex flex-col items-center justify-center border border-white/10 hover:border-[#2ad882]/50 hover:bg-[#1f242b] transition-all duration-300 group cursor-pointer hover:-translate-y-2">
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

                {/* --- PROJECTS LIST --- */}
                <div className="flex flex-col gap-12">
                    
                    {projects.map((project) => (
                    <div key={project.title} className="group flex flex-col lg:flex-row bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-[#2ad882]/30 transition-all duration-500">
                        <a href={project.link} target="_blank" rel="noreferrer" className="w-full lg:w-1/2 h-64 lg:h-auto relative border-b lg:border-b-0 lg:border-r border-white/5 bg-black/40 overflow-hidden flex items-center justify-center p-4 sm:p-6 shrink-0">
                            <img src={project.image} alt={project.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                        </a>
                        <div className="p-6 sm:p-8 lg:p-8 lg:w-1/2 flex flex-col justify-center">
                            <h4 className="text-2xl sm:text-3xl font-montserrat font-bold text-white mb-4 group-hover:text-[#2ad882] transition-colors">{project.title}</h4>

                            <p className="text-[#9ca3af] font-inter text-sm leading-relaxed">{project.description}</p>

                            <ul className="mt-4 space-y-2 text-[#9ca3af] font-inter text-sm list-disc pl-5 marker:text-[#2ad882]">
                                {project.highlights.map((point) => <li key={point}>{point}</li>)}
                            </ul>

                            <div className="flex gap-2 sm:gap-3 mt-6 flex-wrap">
                                {project.stack.map((tech, i) => (
                                    <span key={tech} className={`px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider font-bold rounded-full ${i === 0 ? "text-[#2ad882] bg-[#2ad882]/10" : "text-white bg-white/10"}`}>{tech}</span>
                                ))}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2ad882] text-[#1f242b] text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors">
                                        Live Site <HiOutlineExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                                {project.repos.map((repo) => (
                                    <a key={repo.href} href={repo.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-white text-white text-sm font-bold uppercase tracking-widest hover:border-[#2ad882] hover:text-[#2ad882] transition-colors">
                                        <FaGithub className="w-4 h-4" /> {repo.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    ))}

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
                                <HiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="text-left">
                                <h5 className="font-bold text-sm sm:text-base">Email Me</h5>
                                <p className="text-[#9ca3af] text-xs sm:text-sm">ali.zikrullah@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-white">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2ad882]/10 rounded-full flex items-center justify-center text-[#2ad882]">
                                <HiOutlineLocationMarker className="w-5 h-5 sm:w-6 sm:h-6" />
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
                {socials.map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-[#9ca3af] hover:text-[#2ad882] transition-colors"><Icon className="w-5 h-5" /></a>
                ))}
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
