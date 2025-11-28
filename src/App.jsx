import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, X, Github, Linkedin, Instagram, ArrowRight, ChevronRight, 
  Camera, Code, User, BookOpen, Layers, Terminal, Globe, Layout, Cpu,
  Brain, Server, Network, Database, Bot, Zap
} from 'lucide-react';

// --- CONTENT DATA (CONFIGURATION) ---
const content = {
  "personal": {
    "name": "Muthukumaravel Muthuraman",
    "role": "AI Infrastructure & ML Architect",
    "tagline": "Scaling Intelligence at the Edge & Cloud",
    "location": "Chennai, India",
    "email": "muthukumaravel.muthuraman@gmail.com"
  },
  "socials": [
    { "platform": "Github", "url": "https://github.com/muthu-kumaravel" },
    { "platform": "Linkedin", "url": "https://linkedin.com/in/muthukumaravel" },
    { "platform": "Instagram", "url": "https://instagram.com/muthu_kumaravel_97" }
  ],
  "home": {
    "hero": {
      "badge": "SYSTEM ONLINE // AI-INFRA",
      "titlePrimary": "Architecting the",
      "titleGradient": "Era of Generative AI",
      "description": "Specialized in massive-scale LLM training & inference workloads across NVIDIA GB200s & Google TPUs. Bridging deep technical execution with GTM strategy.",
      "primaryCta": "View Capabilities",
      "secondaryCta": "Read Bio"
    },
    "bentoGrid": [
      {
        "title": "AI Infrastructure",
        "subtitle": "Orchestrating 1000+ GPU/TPU clusters for massive scale.",
        "type": "tech-stack",
        "tags": ["JAX/Pallas", "Kubernetes", "NVIDIA GB200", "Google TPU v6e", "Slurm", "Luster"],
        "colSpan": 2,
        "icon": "server"
      },
      {
        "title": "GenAI Agents",
        "subtitle": "Deploying production-grade RAG & Agents.",
        "type": "stat",
        "icon": "brain"
      },
      {
        "title": "Computer Vision",
        "subtitle": "Low-level kernel optimization & Edge AI.",
        "type": "design",
        "icon": "camera"
      }
    ],
    "carousel": {
      "title": "VISUAL_FEED",
      "images": [
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80", // AI Chip
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80", // AI Art
        "https://images.unsplash.com/photo-1558494949-efc02570fbc9?auto=format&fit=crop&w=1200&q=80", // Servers
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"  // Matrix
      ]
    }
  },
  "resume": {
    "experience": [
      {
        "company": "Google (GCP)",
        "role": "Customer Engineer AI Infra",
        "period": "June 2025 - Present",
        "description": "Architecting massive-scale LLM training/inference across 1024+ NVIDIA GB200 GPUs & 3000+ TPUs. Engineering custom JAX/Pallas kernels for MoE optimizations and driving regional AI infra revenue."
      },
      {
        "company": "Quantiphi",
        "role": "Associate Architect ML",
        "period": "May 2021 - June 2025",
        "description": "Designed end-to-end ML pipelines for Cloud/Edge. Specialized in fine-tuning LLMs, Multimodal models, and CV. Led pre-sales for GenAI, driving proposal conversions and optimizing production costs."
      },
      {
        "company": "MulticoreWare",
        "role": "Software Engineer ML",
        "period": "June 2019 - May 2021",
        "description": "Developed low-level image processing kernels for AMD's RPP (Open Source). Optimized latency for Human Behavior Analysis products in healthcare/automotive sectors."
      }
    ],
    "skills": {
      "Languages": ["Python", "C++", "C", "CUDA", "SQL"],
      "Frameworks": ["PyTorch", "JAX", "TensorRT-LLM", "vLLM", "Triton Inference Server", "NVIDIA NIM"],
      "Cloud & DevOps": ["GCP (Vertex AI, TPU)", "AWS (Sagemaker, EKS)", "OCI", "Docker", "Kubernetes"],
      "Core Competencies": ["LLM Fine-tuning", "RAG Pipelines", "Kernel Optimization", "Computer Vision", "Pre-Sales Architecture"]
    },
    "education": [
      {
        "institution": "Panimalar Engineering College",
        "degree": "B.E. Computer Science",
        "period": "2015 - 2019"
      }
    ]
  },
  "about": {
    "bio": "I am an Associate Architect in Machine Learning with extensive experience architecting and deploying AI/ML solutions across cloud environments. Specializing in LLMs, GenAI, and Computer Vision, I bridge the gap between deep technical execution and strategic business value. Currently at Google, I enable enterprises to extract maximum value from next-generation silicon for production-grade Gen AI.",
    "stats": [
      { "label": "Proposals Led", "value": "30+" },
      { "label": "Conversion Rate", "value": "65%" },
      { "label": "GPU Scale", "value": "1024+" }
    ]
  }
};

// --- Icon Mapping Helper ---
const IconMap = {
  Github, Linkedin, Instagram, globe: Globe, layout: Layout, terminal: Terminal, cpu: Cpu,
  brain: Brain, server: Server, camera: Camera, network: Network, database: Database, bot: Bot
};

// --- Animation Config ---
const transition = { type: "spring", duration: 0.8, bounce: 0.2 };
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

// --- Components ---

const Header = ({ toggleMenu, isMenuOpen }) => (
  <motion.header 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 left-0 right-0 z-50 px-6 h-16 flex justify-center bg-black/80 backdrop-blur-md border-b border-white/10"
  >
    <div className="w-full max-w-[1400px] flex justify-between items-center h-full">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-lg font-bold font-mono text-sm">
          {content.personal.name.split(' ').map(n => n[0]).join('').slice(0,2)}
        </div>
        <div className="flex flex-col">
          <span className="text-white font-semibold text-sm tracking-tight font-sans">{content.personal.name}</span>
          <span className="text-gray-500 text-[10px] tracking-widest uppercase font-mono">{content.personal.role}</span>
        </div>
      </div>
      
      <button 
        onClick={toggleMenu}
        className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </motion.header>
);

const Footer = () => (
  <footer className="bg-zinc-950 py-12 border-t border-white/5">
    <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-gray-600 text-xs font-mono">
        <p>LOCATION: {content.personal.location.toUpperCase()} • {new Date().getFullYear()}</p>
        <p className="mt-1">{content.personal.tagline}</p>
      </div>
      <div className="flex space-x-6">
        {content.socials.map((social, idx) => {
          const Icon = IconMap[social.platform];
          return (
            <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors duration-200">
              {Icon ? <Icon size={18} /> : social.platform}
            </a>
          );
        })}
      </div>
    </div>
  </footer>
);

const FullScreenMenu = ({ isOpen, setPage, closeMenu }) => {
  const menuItems = [
    { id: 'landing', label: 'Overview', sub: 'Start Here', icon: Layers },
    { id: 'resume', label: 'Capabilities', sub: 'Resume & Stack', icon: Code },
    { id: 'photography', label: 'Gallery', sub: 'Visual Feed', icon: Camera },
    { id: 'blog', label: 'Log', sub: 'Engineering Notes', icon: BookOpen },
    { id: 'about', label: 'Profile', sub: 'Bio & Contact', icon: User },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          className="fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-2xl flex items-center justify-center"
        >
          <div className="w-full max-w-2xl px-6 grid gap-2">
            {menuItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => { setPage(item.id); closeMenu(); }}
                className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-zinc-900 text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-500 font-mono tracking-wider uppercase mb-1">{item.sub}</div>
                    <div className="text-3xl font-bold text-white group-hover:text-blue-100 transition-colors font-sans">{item.label}</div>
                  </div>
                </div>
                <ChevronRight className="text-gray-700 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Page Content: Home / Landing ---

const LandingPage = ({ setPage }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const data = content.home;
  
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 relative">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={transition}
          className="max-w-5xl z-10"
        >
          <div className="inline-block mb-6 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-mono text-xs tracking-wider">
            {data.hero.badge}
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            {data.hero.titlePrimary} <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
              {data.hero.titleGradient}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            {data.hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => setPage('resume')} className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
              {data.hero.primaryCta} <ArrowRight size={18} />
            </button>
            <button onClick={() => setPage('about')} className="px-8 py-3 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors">
              {data.hero.secondaryCta}
            </button>
          </div>
        </motion.div>

        {/* Dynamic Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />
      </section>

      {/* Bento Grid Layout */}
      <section className="py-24 max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.bentoGrid.map((item, index) => {
            const Icon = item.icon ? IconMap[item.icon] : Terminal;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-zinc-900/50 rounded-3xl p-10 border border-white/5 relative overflow-hidden group ${item.colSpan === 2 ? 'md:col-span-2' : ''}`}
              >
                 {item.type === 'tech-stack' ? (
                   <>
                     <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                        <Server size={40} />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2 font-sans">{item.title}</h3>
                     <p className="text-gray-400 mb-6 max-w-md">{item.subtitle}</p>
                     <div className="flex flex-wrap gap-2 font-mono text-xs text-blue-300">
                        {item.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-blue-500/10 rounded border border-blue-500/20">{tag}</span>
                        ))}
                     </div>
                   </>
                 ) : (
                   <div className="flex flex-col h-full justify-between">
                     <Icon className="text-gray-600 group-hover:text-white transition-colors mb-4" size={40} />
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.subtitle}</p>
                     </div>
                   </div>
                 )}
              </motion.div>
            )
          })}
        </div>
      </section>
      
      {/* Visuals Carousel */}
      <section className="max-w-[1400px] mx-auto px-6 mb-20">
         <h3 className="text-xl font-mono text-gray-500 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            {data.carousel.title}
         </h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[400px] md:h-[300px]">
            {data.carousel.images.map((src, i) => (
                <motion.div 
                    key={i} 
                    className={`relative rounded-2xl overflow-hidden group cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-1' : ''}`}
                    whileHover={{ scale: 0.98 }}
                >
                    <img src={src} alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="font-mono text-xs text-white border border-white px-3 py-1 rounded-full">VIEW_PROJECT</span>
                    </div>
                </motion.div>
            ))}
         </div>
      </section>
    </div>
  );
};

// --- Page Content: Resume ---

const ResumePage = () => {
    const { experience, skills, education } = content.resume;

    return (
        <PageLayout title="Capabilities" subtitle="Experience & Technical Proficiency">
            <div className="grid gap-12">
                {/* Experience Section */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <BriefcaseIcon className="text-blue-500" /> Professional Experience
                    </h3>
                    <div className="grid gap-6">
                        {experience.map((job, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/50 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-white">{job.role}</h4>
                                        <span className="text-blue-400 font-medium">{job.company}</span>
                                    </div>
                                    <span className="font-mono text-gray-500 text-sm mt-2 md:mt-0">{job.period}</span>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-sm">{job.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <Cpu className="text-green-500" /> Technical Arsenal
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.entries(skills).map(([category, items], idx) => (
                            <div key={idx}>
                                <h5 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">{category}</h5>
                                <div className="flex flex-wrap gap-2">
                                    {items.map(skill => (
                                        <span key={skill} className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-md text-sm border border-white/5 hover:border-white/20 transition-colors cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                 <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <BookOpen className="text-purple-500" /> Education
                    </h3>
                     {education.map((edu, idx) => (
                        <div key={idx} className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 flex justify-between items-center">
                            <div>
                                <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                                <span className="text-gray-400">{edu.degree}</span>
                            </div>
                            <span className="font-mono text-gray-500 text-sm">{edu.period}</span>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};

const AboutPage = () => (
    <PageLayout title="Profile" subtitle="About Muthukumaravel">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                    {content.about.bio}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                    {content.about.stats.map((stat, i) => (
                         <div key={i} className="p-4 bg-zinc-900/50 rounded-xl border border-white/5">
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs text-gray-500 font-mono uppercase tracking-widest">{stat.label}</div>
                         </div>
                    ))}
                </div>
            </div>
            <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-800 border border-white/5">
                     {/* Placeholder for Profile Pic */}
                     <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 bg-gradient-to-b from-zinc-800 to-black">
                        <User size={64} className="mb-4 opacity-50"/>
                        <span className="font-mono text-xs">IMG_PROFILE_01</span>
                     </div>
                </div>
            </div>
        </div>
    </PageLayout>
);

// Helper for Resume Icon
const BriefcaseIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
)

// Generic Page Layout
const PageLayout = ({ title, subtitle, children }) => (
  <div className="min-h-screen pt-32 pb-20 px-6">
    <div className="max-w-[1000px] mx-auto">
        <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="mb-16 border-b border-white/10 pb-10"
        >
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight">{title}</h1>
            <p className="text-xl font-mono text-gray-400">{subtitle}</p>
        </motion.div>
        {children}
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [currentPage]);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500/30 selection:text-blue-100 overflow-x-hidden">
        <div className="min-w-[320px] mx-auto w-full">
            <Header toggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
            <FullScreenMenu isOpen={isMenuOpen} setPage={setCurrentPage} closeMenu={() => setIsMenuOpen(false)} />
            
            <main>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.5 }}
                    >
                        {currentPage === 'landing' && <LandingPage setPage={setCurrentPage} />}
                        {currentPage === 'resume' && <ResumePage />}
                        {currentPage === 'photography' && <PageLayout title="Gallery" subtitle="Visual Feed" children={<div></div>} />}
                        {currentPage === 'blog' && <PageLayout title="Log" subtitle="Engineering Notes" children={<div></div>} />}
                        {currentPage === 'about' && <AboutPage />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    </div>
  );
}
