import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, X, Github, Linkedin, Instagram, ArrowRight, ChevronRight, 
  Camera, Code, User, BookOpen, Layers, Terminal, Globe, Layout, Cpu,
  Brain, Server, Network, Database, Bot, Zap, Briefcase, Award, Monitor, Building2
} from 'lucide-react';

// --- CONTENT DATA (Centralized CMS) ---
const content = {
  "metadata": {
    "title": "MK's Portfolio",
    "lastUpdated": new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    "commitId": "8f2a9d4" 
  },
  "personal": {
    "name": "Muthukumaravel Muthuraman",
    "initials": "MK",
    "role": "AI Infrastructure & ML Architect",
    "tagline": "Scaling Intelligence at the Edge & Cloud",
    "location": "Chennai, India",
    "email": "muthukumaravel.muthuraman@gmail.com"
  },
  "socials": [
    { "platform": "Github", "url": "https://github.com/muthu-kumaravel" },
    { "platform": "Linkedin", "url": "https://linkedin.com/in/muthukumaravel" },
    { "platform": "Instagram", "url": "https://instagram.com/muthu" }
  ],
  "home": {
    "hero": {
      "badge": "SYSTEM ONLINE // AI-INFRA",
      "titlePrimary": "Architecting the",
      "titleGradient": "Era of Generative AI",
      "description": "Specialized in massive-scale LLM training & inference workloads across NVIDIA GPUs & Google TPUs. Bridging deep technical execution with GTM strategy.",
      "primaryCta": "View Experience",
      "secondaryCta": "Read Bio"
    },
    "bentoGrid": [
      {
        "title": "AI Infrastructure",
        "subtitle": "Orchestrating 1024+ GPU/TPU clusters for massive scale.",
        "type": "tech-stack",
        "tags": ["JAX/Pallas", "Kubernetes", "NVIDIA GB200", "Google TPU v6e", "Slurm", "Luster"],
        "colSpan": 2,
        "icon": "server"
      },
      {
        "title": "GenAI Agents",
        "subtitle": "Deploying production-grade RAG & Agents.",
        "type": "tech-stack",
        "tags": ["RAG", "LangChain", "Fine Tuning", "(Q)LoRA", "NeMo Guardrails", "vLLM"],
        "icon": "brain"
      },
      {
        "title": "Computer Vision",
        "subtitle": "Low-level kernel optimization & Edge AI.",
        "type": "tech-stack",
        "tags": ["DeepStream", "Triton", "TensorRT", "OpenCV", "YOLO", "Jetson"],
        "icon": "camera"
      }
    ],
    "carousel": {
      "title": "VISUAL_FEED",
      "images": [
        "https://images.unsplash.com/photo-1558494949-efc02570fbc9?auto=format&fit=crop&w=1200&q=80", // Server Rack
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80", // Code/Terminal
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80", // AI Chip/Abstract
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"  // Tech Workspace
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
        "description": "Bridging deep technical execution with GTM strategy to drive AI Infra revenue. Architecting massive-scale LLM training/inference workloads across 1024+ NVIDIA GB200 GPUs & 3000+ Google TPUs (v6e/v7). Engineer custom JAX/Pallas kernels for MoE optimizations and built automated benchmarking suites for vLLM, MaxText, and NeMo. Guide strategic enterprises through capacity planning and cost modeling."
      },
      {
        "company": "Quantiphi",
        "domain": "quantiphi.com",
        "role": "Associate Architect ML",
        "period": "May 2021 - June 2025",
        "location": "Bangalore",
        "description": "Designed end-to-end ML pipelines for Cloud/Edge/Hybrid. Specialized in fine-tuning LLMs, Multimodal models, and CV. Key member of CV & GenAI pre-sales team, driving proposal conversions. Led teams of 5-10 members in architecture design and implementation."
      },
      {
        "company": "MulticoreWare",
        "domain": "multicorewareinc.com",
        "role": "Software Engineer ML",
        "period": "June 2019 - May 2021",
        "location": "Chennai",
        "description": "Developed low-level image processing kernels for AMD's RPP (Open Source). Optimized latency for Human Behavior Analysis products in healthcare/automotive sectors involving real-time analysis of eye, lip, and facial movements."
      },
      {
        "company": "ValueLabs",
        "domain": "valuelabs.com",
        "role": "SD Intern",
        "period": "Jan 2019 - March 2019",
        "location": "Hyderabad",
        "description": "Developed Angular-based frontend for bug tracking and agile project management applications."
      }
    ],
    "projects": [
      {
        "category": "Generative AI",
        "items": [
          { "name": "Billing SLM Agent", "desc": "Agent to rectify billing queries using advanced RAG & NL2SQL. Deployed on-prem." },
          { "name": "Healthcare Digital Avatar", "desc": "Medical co-pilot for nurse triaging. Fine-tuned LLM agent deployed on OCI." },
          { "name": "Phone Repair Assistant", "desc": "Mobile app plugin chatbot for device assessment using LLMs & VLMs on AWS." },
          { "name": "Medical Entity Extraction", "desc": "Fine-tuned models for extracting diagnosis with 100% recall. Leveraged vLLM with LoRA adapters." },
          { "name": "Suspect Re-Identification", "desc": "Multi-camera tracking using Clip, Blip & Moondream models on streaming platform." }
        ]
      },
      {
        "category": "Computer Vision",
        "items": [
          { "name": "QSR Takeaway Validation", "desc": "Order accuracy analytics using hybrid on-prem + cloud system." },
          { "name": "Hotspot Identification", "desc": "Hazard detection using IR & RGB camera fusion." },
          { "name": "Driver Awareness", "desc": "Facial and body key point analysis for stability monitoring." },
          { "name": "Traffic Behaviour Analysis", "desc": "Intersection monitoring across 150+ streams using DeepStream." }
        ]
      },
      {
        "category": "HPC & Kernel Coding",
        "items": [
          { "name": "AMD RPP", "desc": "Optimized Neural Network kernels for Image processing and transformer architecture." },
          { "name": "Model Porting", "desc": "Conversion of PyTorch/TF models to TensorRT, OpenVINO, SNPE DLC." }
        ]
      }
    ],
    "skills": {
      "Languages": ["Python", "C++", "C", "CUDA", "SQL"],
      "CSP Experience": ["GCP", "AWS", "OCI"],
      "Frameworks": ["NVIDIA NIM", "TensorRT LLM", "Triton Inference Server", "vLLM", "PyTorch", "DeepStream", "OpenCV", "CUDA", "LangChain", "Flask"],
      "Core Competencies": ["GenAI & LLMs", "Vision Language Models", "Digital Avatars", "Model Fine Tuning", "Recommendation Systems", "ETL Pipelines", "Docker", "Microservices"]
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
                                <p className="text-gray-400 leading-relaxed text-sm max-w-3xl mt-4">{job.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div>
                     <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                        <Zap className="text-yellow-500" /> Key Projects & Use Cases
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((cat, i) => (
                            <div key={i} className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6">
                                <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">{cat.category}</h4>
                                <ul className="space-y-3">
                                    {cat.items.map((project, j) => (
                                        <li key={j}>
                                            <div className="text-blue-300 font-medium text-sm">{project.name}</div>
                                            <div className="text-gray-500 text-xs">{project.desc}</div>
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
                     <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 bg-gradient-to-b from-zinc-800 to-black">
                        <User size={64} className="mb-4 opacity-50"/>
                        <span className="font-mono text-xs">IMG_PROFILE_01</span>
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