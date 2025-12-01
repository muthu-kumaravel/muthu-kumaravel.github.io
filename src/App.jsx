import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, X, Github, Linkedin, Instagram, ArrowRight, ChevronRight, 
  Camera, Code, User, BookOpen, Layers, Terminal, Globe, Layout, Cpu,
  Brain, Server, Network, Database, Bot, Zap, Briefcase, Award, Monitor, Building2,
  LineChart, Workflow, Microchip, Cloud, Shield
} from 'lucide-react';

// --- CONTENT DATA (Centralized CMS) ---
const content = {
  "metadata": {
    "title": "MK's Portfolio",
    "lastUpdated": new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    "commitId": "9b3c1e2" 
  },
  "personal": {
    "name": "Muthukumaravel Muthuraman",
    "initials": "MK",
    "role": "Associate Architect - Machine Learning",
    "tagline": "LLM | GenAI | CV | NVIDIA | Pre-Sales",
    "location": "Chennai, India",
    "email": "muthukumaravel.muthuraman@gmail.com",
    "avatar": "https://github.com/muthu-kumaravel.png" 
  },
  "socials": [
    { "platform": "Github", "url": "https://github.com/muthu-kumaravel" },
    { "platform": "Linkedin", "url": "https://linkedin.com/in/muthukumaravel" },
    { "platform": "Instagram", "url": "https://instagram.com/muthu" }
  ],
  "home": {
    "hero": {
      "badge": "SYSTEM ONLINE // AI-ARCHITECT",
      "titlePrimary": "Architecting the",
      "titleGradient": "Era of Generative AI",
      "description": "Specialized in massive-scale LLM training & inference workloads across NVIDIA GPUs & Google TPUs. Bridging deep technical execution with GTM strategy.",
      "primaryCta": "View Experience",
      "secondaryCta": "Read Bio"
    },
    "bentoGrid": [
      {
        "title": "AI Infrastructure",
        "subtitle": "Orchestrating massive-scale LLM training & inference across 1024+ GB200s & 3000+ TPUs.",
        "type": "tech-stack",
        "tags": ["JAX/Pallas", "Kubernetes", "NVIDIA GB200", "Google TPU v6e/v7", "Slurm", "Luster"],
        "colSpan": 2,
        "icon": "server"
      },
      {
        "title": "GenAI & Agents",
        "subtitle": "Building billing agents, healthcare avatars, and specialized RAG pipelines.",
        "type": "tech-stack",
        "tags": ["RAG", "LangGraph", "vLLM", "(Q)LoRA", "NeMo Guardrails", "Agentic Workflows"],
        "colSpan": 1,
        "icon": "brain"
      },
      {
        "title": "Computer Vision",
        "subtitle": "Real-time analytics, anomaly detection, and human behavior analysis.",
        "type": "tech-stack",
        "tags": ["DeepStream", "Triton", "YOLO", "OpenCV", "Jetson", "Fusion Models"],
        "colSpan": 1,
        "icon": "camera"
      },
      {
        "title": "HPC & Kernel Opt",
        "subtitle": "Low-level kernel engineering for max throughput on custom silicon.",
        "type": "tech-stack",
        "tags": ["CUDA", "OpenCL", "TensorRT", "OpenVINO", "AMD RPP", "Model Porting"],
        "colSpan": 1,
        "icon": "cpu"
      },
      {
        "title": "Pre-Sales Strategy",
        "subtitle": "Driving adoption via technical roadshows, cost modeling & capacity planning.",
        "type": "tech-stack",
        "tags": ["GTM Strategy", "POC Conversion", "Cost Modeling", "Capacity Planning", "Tech Roadshows"],
        "colSpan": 1,
        "icon": "linechart"
      }
    ],
    "carousel": {
      "title": "VISUAL_FEED",
      "images": [
        "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80", // Data Center / Server Rack (AI Infra)
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80", // Abstract Neural Network (GenAI)
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", // Hardware / Chip (NVIDIA/TPU)
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"  // Coding / Terminal (Engineering)
      ]
    }
  },
  "resume": {
    "summary": "Associate Architect in Machine Learning with extensive experience architecting and deploying AI/ML solutions across cloud environments, specializing in LLMs, GenAI, Computer Vision, and pre-sales. Proven track record in proposal conversions and high-impact solution delivery.",
    "experience": [
      {
        "company": "Google (GCP)",
        "domain": "google.com",
        "role": "Customer Engineer AI Infra",
        "period": "June 2025 - Present",
        "location": "Bangalore",
        "description": "Bridging deep technical execution with GTM strategy to drive AI Infra revenue, I architecture massive-scale LLM training and inference workloads across 1024+ NVIDIA GB200 GPUs and 3,000+ Google TPUs(v6e/v7). I engineer custom JAX/Pallas kernels for low-level MoE optimizations and built an automated benchmarking suite to tune performance for vLLM, MaxText and NeMo on GCP. My expertise spans deploying disaggregated LLM model serving and orchestrating high-performance training and inference clusters with Luster. Balancing execution with strategy, I drive regional AI infra revenue and consumption by guiding strategic enterprises through capacity planning and cost modelling. Accelerate adoption through technical roadshows, influencing product roadmaps and guiding enterprises to extract maximum value from next generation silicon for production-grade Gen AI."
      },
      {
        "company": "Quantiphi",
        "domain": "quantiphi.com",
        "role": "Associate Architect ML",
        "period": "May 2021 - June 2025",
        "location": "Bangalore",
        "description": "Designed and built end-to-end optimized ML pipelines and applications across Cloud, Edge, and Hybrid environments. Specialized in architecting, fine-tuning, optimizing, and evaluating ML models, including various types of LLMs, Computer Vision models, multimodal models, and recommendation systems. Also worked on discrete event simulation and other advanced AI/ML applications. A key member of the Computer Vision, Optimization, and GenAI pre-sales team, actively engaging with customers to solve real-world use cases at production scale with improved cost optimization and reduced turnaround time. Led teams of 5–10 members, driving end-to-end architecture design, implementation, and rigorous code validation."
      },
      {
        "company": "MulticoreWare",
        "domain": "multicorewareinc.com",
        "role": "Software Engineer ML",
        "period": "June 2019 - May 2021",
        "location": "Chennai",
        "description": "Developed low-level image processing kernels for AMD’s open-source RPP codebase, optimizing latency and throughput to outperform state-of-the-art GPUs. Also contributed to MCW’s internal product, Human Behaviour Analysis product, analyzing eye, lip, facial, and body movements in real-time for applications in healthcare and automotive industries."
      },
      {
        "company": "ValueLabs",
        "domain": "valuelabs.com",
        "role": "SD Intern",
        "period": "Jan 2019 - March 2019",
        "location": "Hyderabad",
        "description": "Worked as a Software Development Intern, developing an Angular-based frontend for an application focused on bug tracking, issue tracking, and agile project management."
      }
    ],
    "projects": [
      {
        "category": "GenAI & Agents",
        "items": [
          { "name": "Billing SLM Agent", "desc": "Agent to rectify billing queries using advanced RAG & NL2SQL. Deployed on-prem." },
          { "name": "Healthcare Digital Avatar", "desc": "Medical co-pilot on OCI using fine-tuned LLMs for patient triaging." },
          { "name": "Phone Repair Assistant", "desc": "Mobile chatbot plugin for device diagnostics using VLMs & LLMs on AWS." },
          { "name": "Medical Entity Extraction", "desc": "100% recall diagnosis extraction using vLLM & LoRA adapters." },
          { "name": "Suspect Re-Identification", "desc": "Multi-camera tracking with Clip/Blip/Moondream models on streaming platform." }
        ]
      },
      {
        "category": "Computer Vision",
        "items": [
          { "name": "QSR Takeaway Validation", "desc": "Order accuracy analytics using hybrid on-prem + cloud system." },
          { "name": "Hotspot & Keypoints", "desc": "Hazard detection using IR & RGB camera Fusion." },
          { "name": "Driver Awareness", "desc": "Facial and body analysis for stability monitoring." },
          { "name": "Traffic Behaviour Analysis", "desc": "City-wide intersection monitoring using DeepStream (150+ streams)." },
          { "name": "Anomaly Detection", "desc": "Train monitoring using Line Scan Camera & TIS." }
        ]
      },
      {
        "category": "Cloud & Deployments",
        "items": [
          { "name": "Digital Avatar (OCI)", "desc": "Scalable deployment on quad L40s with auto-scaling & secure microservices." },
          { "name": "Chatbot API (AWS)", "desc": "EKS deployment handling 100k+ daily users." },
          { "name": "Bio Risk Monitoring", "desc": "Jetson Nano-based Edge & AWS streaming platform." }
        ]
      },
      {
        "category": "HPC & Kernel Coding",
        "items": [
          { "name": "AMD RPP", "desc": "Optimized NN kernels for image processing & transformers (Open Source)." },
          { "name": "Model Porting", "desc": "Native to TensorRT/OpenVINO/SNPE conversion for hardware optimization." },
          { "name": "Model Ensembling", "desc": "Stitching RecSys components to bypass CPU-GPU transfers." }
        ]
      },
      {
        "category": "RecSys & Simulation",
        "items": [
          { "name": "Telco Recommendation", "desc": "Wide & Deep + MoE model for device/plan upselling & cross-selling." }
        ]
      },
      {
        "category": "Pre-Sales & Strategy",
        "items": [
          { "name": "Agentic Workflows", "desc": "Designed architectures for on-prem/hybrid chatbots & LLM backends." },
          { "name": "Proposal Conversion", "desc": "Led 30+ proposals with 60-65% conversion to PoC/MVP." }
        ]
      }
    ],
    "skills": {
      "Languages & Core": ["Python", "C++", "C", "CUDA", "SQL", "OpenCL"],
      "AI Frameworks": ["PyTorch", "JAX", "vLLM", "TensorRT-LLM", "Triton Server", "NVIDIA NIM", "LangChain", "LangGraph", "DeepStream", "OpenCV"],
      "GenAI Stack": ["NVIDIA ACE", "NeMo Guardrails", "Bedrock", "Vertex AI", "SageMaker", "PydanticAI", "ChromaDB", "Milvus", "FAISS"],
      "Cloud & DevOps": ["GCP (TPU/Compute)", "AWS (EKS/Lambda)", "OCI (BM Servers)", "Docker", "Kubernetes", "Microservices", "Flask/FastAPI"],
      "HPC & Vision": ["OpenVINO", "ARMNN", "HIP", "OpenVX", "FFMPEG", "G-Streamer", "YOLO", "DeepSORT"]
    },
    "certifications": [
      "NVIDIA Certified Associate - AI in Data Centre",
      "Scaling Workloads Across Multiple GPUs With CUDA C (NVIDIA)",
      "Building Realtime Video AI Applications (DeepStream NVIDIA)",
      "Getting Started with Jetson NANO (NVIDIA)"
    ],
    "education": [
      {
        "institution": "Panimalar Engineering College",
        "degree": "B.E. Computer Science",
        "period": "July 2015 - April 2019"
      },
      {
        "institution": "Amrita Vidyalayam",
        "degree": "12th Grade",
        "period": "May 2013 - April 2015"
      },
      {
        "institution": "Jawahar Vidyalaya",
        "degree": "10th Grade",
        "period": "April 2013"
      }
    ]
  },
  "about": {
    "bio": "I am an Associate Architect in Machine Learning with extensive experience architecting and deploying AI/ML solutions across cloud environments. Specializing in LLMs, GenAI, and Computer Vision, I bridge the gap between deep technical execution and strategic business value. Currently at Google, I enable enterprises to extract maximum value from next-generation silicon for production-grade Gen AI.\n\nOutside of work, I love staying active—whether it’s cricket, badminton, or trying not to fall off a surfboard 🏄. I’m also into photography, and I’ve got a bit of a habit of traveling just to try new food and meet new people. It’s my favourite way to explore stories beyond screens.\n\nI’ve been told I bring a calm vibe and an easy smile—and I usually find the best conversations happen over lunch, so don’t be surprised if I tag along when you’re headed out for a good meal.",
    "stats": [
      { "label": "Proposals Led", "value": "30+" },
      { "label": "Conversion Rate", "value": "65%" },
      { "label": "GPU Scale", "value": "1024+" },
      { "label": "TPU Scale", "value": "3000+" }
    ]
  }
};

// --- Icon Mapping Helper ---
const IconMap = {
  Github, Linkedin, Instagram, globe: Globe, layout: Layout, terminal: Terminal, cpu: Cpu,
  brain: Brain, server: Server, camera: Camera, network: Network, database: Database, bot: Bot,
  linechart: LineChart
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
          {content.personal.initials}
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
      <div className="text-gray-600 text-xs font-mono space-y-1">
        <p>LOCATION: {content.personal.location.toUpperCase()} • {new Date().getFullYear()}</p>
        <p>LAST SYNC: {content.metadata.lastUpdated.toUpperCase()}</p>
        <p className="opacity-50">COMMIT: {content.metadata.commitId}</p>
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
    { id: 'resume', label: 'Professional Journey', sub: 'Experience', icon: Briefcase },
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

// --- Page Content Components ---

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
                 {item.tags ? (
                   <>
                     <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                        <Icon size={40} />
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
                    <img src={src} alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
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

const ResumePage = () => {
    const { experience, skills, education, certifications, projects } = content.resume;

    return (
        <PageLayout title="Professional Journey" subtitle="Experience, Projects & Proficiency">
            <div className="grid gap-16">
                
                {/* Experience Section */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Briefcase className="text-blue-500" /> Professional Experience
                    </h3>
                    <div className="relative border-l border-white/10 ml-3 pl-8 space-y-12">
                        {experience.map((job, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative"
                            >
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-zinc-900 border border-blue-500/50" />
                                <div className="flex flex-col md:flex-row justify-between mb-2 items-start">
                                    <div className="flex items-center gap-4">
                                        {/* Company Logo with Fallback */}
                                        <div className="w-12 h-12 rounded-lg bg-white p-1 overflow-hidden shrink-0 flex items-center justify-center">
                                            <img 
                                                src={`https://logo.clearbit.com/${job.domain}`} 
                                                alt={job.company} 
                                                className="w-full h-full object-contain"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'block';
                                                }}
                                            />
                                            <Building2 className="text-gray-400 hidden w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white">{job.role}</h4>
                                            <div className="flex items-center gap-2">
                                                 <span className="text-blue-400 font-medium">{job.company}</span>
                                                 <span className="text-gray-500 text-xs">({job.location})</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="font-mono text-gray-500 text-sm mt-2 md:mt-0 bg-white/5 px-2 py-1 rounded">{job.period}</span>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-sm max-w-3xl mt-4 whitespace-pre-line">{job.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div>
                     <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                        <Zap className="text-yellow-500" /> Key Use Cases & Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((cat, i) => (
                            <div key={i} className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/50 transition-colors">
                                <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">{cat.category}</h4>
                                <ul className="space-y-4">
                                    {cat.items.map((project, j) => (
                                        <li key={j} className="group">
                                            <div className="text-blue-300 font-medium text-sm group-hover:text-blue-200 transition-colors">{project.name}</div>
                                            <div className="text-gray-500 text-xs leading-relaxed">{project.desc}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
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

                {/* Certifications & Education */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-3">
                            <Award className="text-orange-500" /> Certifications
                        </h3>
                         <ul className="space-y-4">
                            {certifications.map((cert, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                                    <div className="mt-1.5 w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </div>

                     <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-3">
                            <BookOpen className="text-purple-500" /> Education
                        </h3>
                         {education.map((edu, idx) => (
                            <div key={idx} className="border-l-2 border-zinc-800 pl-4">
                                <h4 className="text-white font-medium">{edu.institution}</h4>
                                <div className="text-gray-400 text-sm">{edu.degree}</div>
                                <div className="font-mono text-gray-600 text-xs">{edu.period}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

const AboutPage = () => (
    <PageLayout title="Profile" subtitle="About Muthukumaravel">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed font-light whitespace-pre-line">
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
                     <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 bg-gradient-to-b from-zinc-800 to-black relative">
                        {/* Profile Image using GitHub Avatar */}
                         <img 
                            src={content.personal.avatar} 
                            alt={content.personal.name}
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                        />
                         <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                            <span className="font-mono text-xs text-white">IMG_PROFILE_MK</span>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    </PageLayout>
);

const WorkInProgressPage = ({ title }) => {
    // Dot animation for "Loading..."
    const [dots, setDots] = useState('.');
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 4 ? '.' : prev + '.');
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <PageLayout title={title} subtitle="System Status: OFFLINE">
            <div className="h-96 rounded-3xl border border-dashed border-zinc-800 bg-zinc-900/20 flex flex-col items-center justify-center text-center p-6">
                <Monitor className="text-zinc-700 mb-6" size={48} />
                <h3 className="text-2xl font-mono text-white mb-2">Work in Progress{dots}</h3>
                <p className="text-zinc-500 max-w-md">
                    This module is currently being architected. <br/>
                    Please check back after the next deployment cycle.
                </p>
            </div>
        </PageLayout>
    );
};

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

  // Update Page Title
  useEffect(() => {
    document.title = content.metadata.title;
    window.scrollTo(0, 0);
  }, [currentPage]);

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
                        {currentPage === 'photography' && <WorkInProgressPage title="Gallery" />}
                        {currentPage === 'blog' && <WorkInProgressPage title="Engineering Log" />}
                        {currentPage === 'about' && <AboutPage />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    </div>
  );
}