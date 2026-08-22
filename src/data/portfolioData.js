export const portfolioData = {
  personal: {
    name: "Muthukumaravel Muthuraman",
    preferredName: "Muthu",
    initials: "MK",
    role: "GenAI & Machine Learning Architect",
    tagline: "Designing and scaling production Generative AI systems, distributed LLM infrastructure, and intelligent agents.",
    location: "Bangalore / Chennai, India",
    email: "muthukumaravel.muthuraman@gmail.com",
    avatar: "https://github.com/muthu-kumaravel.png",
  },
  
  socials: [
    { platform: "Github", label: "github.com/muthu-kumaravel", url: "https://github.com/muthu-kumaravel", icon: "Github" },
    { platform: "Linkedin", label: "linkedin.com/in/muthukumaravel", url: "https://linkedin.com/in/muthukumaravel", icon: "Linkedin" },
    { platform: "Instagram", label: "@muthu", url: "https://instagram.com/muthu", icon: "Instagram" },
    { platform: "Email", label: "muthukumaravel.muthuraman@gmail.com", url: "mailto:muthukumaravel.muthuraman@gmail.com", icon: "Mail" }
  ],

  hero: {
    badge: "GenAI & Machine Learning Architect",
    headline: "Architecting the",
    headlineGradient: "Era of Generative AI",
    description: "Specializing in large-scale LLM training and inference workloads, autonomous multi-agent pipelines, and high-throughput vision systems across NVIDIA GPUs and Google TPUs. Bridging deep technical architecture with enterprise strategy.",
    primaryCta: "Explore Projects",
    secondaryCta: "View Career Journey",
    metrics: [
      { label: "Experience", value: "6+", suffix: "Years in ML & AI Architecture" },
      { label: "Enterprise Pre-Sales", value: "30+", suffix: "Proposals Led (65% Win Rate)" },
      { label: "Hardware Scale", value: "1,000s+", suffix: "GPUs & TPUs Orchestrated" },
      { label: "Core Expertise", value: "LLMs & Vision", suffix: "Training, Serving & Agentic Systems" }
    ]
  },

  bentoGrid: [
    {
      id: "ai-infra",
      title: "AI Infrastructure & Distributed Training",
      subtitle: "Orchestrating large-scale LLM pre-training, fine-tuning, and low-latency model serving across GPU and TPU clusters.",
      tags: ["JAX / Pallas", "Google TPU v6e/v7", "NVIDIA GB200/H100", "Kubernetes / GKE", "RayServe", "vLLM / SGLang"],
      colSpan: 2,
      icon: "Server",
      gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
      accent: "text-blue-400"
    },
    {
      id: "genai-agents",
      title: "GenAI & Autonomous Agents",
      subtitle: "Building enterprise dispute-resolution SLMs, healthcare avatars, and multi-adapter RAG pipelines.",
      tags: ["LangGraph", "Multi-LoRA", "vLLM", "NeMo Guardrails", "FP8 Quantization", "Radix Caching"],
      colSpan: 1,
      icon: "Brain",
      gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
      accent: "text-purple-400"
    },
    {
      id: "cv-stream",
      title: "High-Throughput Computer Vision",
      subtitle: "City-wide multi-stream analytics (150+ concurrent cameras), CLIP/Moondream zero-shot Re-ID, and edge sensor fusion.",
      tags: ["NVIDIA DeepStream", "Triton Server", "CLIP / BLIP", "YOLOv10", "Thermal / IR Fusion", "Jetson Orin"],
      colSpan: 1,
      icon: "Camera",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      accent: "text-emerald-400"
    },
    {
      id: "hpc-kernels",
      title: "HPC & Kernel Optimization",
      subtitle: "Low-level kernel engineering for sparse MoE routing and hardware-tailored model compilation.",
      tags: ["CUDA C++", "Pallas / JAX", "OpenCL", "TensorRT", "AMD RPP", "OpenVINO"],
      colSpan: 1,
      icon: "Cpu",
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      accent: "text-amber-400"
    },
    {
      id: "presales-gtm",
      title: "Technical Pre-Sales & Strategy",
      subtitle: "Accelerating enterprise AI adoption through Greenfield TCO sizing, proof-of-concept delivery, and technical roadshows.",
      tags: ["GTM Strategy", "65% PoC Conversion", "Capacity Planning", "Enterprise TCO Models", "Workshops"],
      colSpan: 1,
      icon: "LineChart",
      gradient: "from-rose-500/20 via-red-500/10 to-transparent",
      accent: "text-rose-400"
    }
  ],

  experience: [
    {
      id: "google",
      company: "Google (GCP)",
      domain: "google.com",
      role: "Customer Engineer — AI Infrastructure",
      period: "June 2024 — Present",
      location: "Bangalore, India",
      summary: "AI Infrastructure Specialist for large-scale open-weight LLM training and serving across NVIDIA GPUs and Google TPUs.",
      badge: "Current Role",
      highlights: [
        "Architected large-scale pre-training and fine-tuning setups on NVIDIA GPUs and Google TPUs (v6e/v7), optimizing Lustre storage and compute throughput.",
        "Engineered custom JAX and Pallas kernels for MoE models (such as Qwen3 and DeepSeek), eliminating memory transfer bottlenecks.",
        "Built automated benchmarking suites for vLLM, MaxText, SGLang, and NeMo to guide enterprise sizing and reduce inference latency and cost by 10–70%.",
        "Accelerated regional AI infrastructure adoption by leading Greenfield sizing guides, technical discovery, and customer roadshows."
      ],
      description: `As a Customer Engineer for AI Infrastructure at Google Cloud, I collaborate with strategic enterprise customers to design, size, and optimize high-throughput LLM training and inference workloads across NVIDIA GPUs and Google TPUs.

My work spans optimizing distributed training pipelines with JAX/Pallas, orchestrating model serving clusters on GKE and RayServe, and building automated benchmarking suites for vLLM and SGLang.

I bridge technical execution with business strategy, guiding customers through capacity planning, Greenfield hardware sizing, and proof-of-concepts.`
    },
    {
      id: "quantiphi",
      company: "Quantiphi",
      domain: "quantiphi.com",
      role: "Associate Architect — Machine Learning",
      period: "May 2021 — June 2024",
      location: "Bangalore, India",
      summary: "End-to-end ML Architect driving GenAI & CV solutions. Led technical teams in solution design, pre-sales proposals (30+ proposals with a 65% win rate), and production rollouts.",
      badge: "3+ Years",
      highlights: [
        "Architected a high-throughput dispute resolution engine with a 14B SLM (Phi-3.5) processing 50,000+ daily disputes using FP8 quantization and TensorRT-LLM on H100 clusters.",
        "Engineered streaming platforms for city-wide traffic analysis processing 150+ concurrent camera streams with DeepStream and zero-shot re-identification.",
        "Led technical discovery and architecture for 30+ enterprise proposals with a 60–65% conversion rate to PoC/MVP.",
        "Designed medical entity extraction pipelines achieving high recall and interactive digital avatar architectures for patient triaging."
      ],
      description: `Designed and deployed end-to-end ML pipelines across cloud, edge, and hybrid environments. Specialized in LLMs, multimodal systems, computer vision, and discrete-event simulation.

As a core member of the GenAI and Computer Vision pre-sales architecture team, I engaged directly with enterprise stakeholders to solve production challenges, leading engineering teams of 5–10 members from discovery to deployment.`
    },
    {
      id: "multicoreware",
      company: "MulticoreWare Inc.",
      domain: "multicorewareinc.com",
      role: "Software Engineer — Machine Learning",
      period: "June 2019 — May 2021",
      location: "Chennai, India",
      summary: "Developed low-level image processing kernels for AMD's open-source RPP. Optimized latency for Human Behavior Analysis in healthcare and automotive sectors.",
      badge: "2 Years",
      highlights: [
        "Developed low-level image processing kernels for AMD's open-source RPP codebase, optimizing memory throughput and latency.",
        "Ported PyTorch and TensorFlow models to hardware-optimized targets (TensorRT, OpenVINO, SNPE) for embedded and edge hardware.",
        "Engineered real-time Human Behavior Analysis solutions analyzing facial and body kinematics for driver awareness monitoring."
      ],
      description: `Developed low-level image processing kernels for AMD’s open-source RPP codebase, optimizing latency and memory throughput.

Also contributed to internal human behavior analysis products, analyzing facial and body kinematics in real time for driver monitoring on embedded devices.`
    },
    {
      id: "valuelabs",
      company: "ValueLabs",
      domain: "valuelabs.com",
      role: "Software Development Intern",
      period: "Jan 2019 — March 2019",
      location: "Hyderabad, India",
      summary: "Developed frontend components for agile project management and issue-tracking applications.",
      badge: "Internship",
      highlights: [
        "Built responsive frontend interfaces for enterprise issue tracking and sprint management.",
        "Collaborated on RESTful API integration and client-side data state management."
      ],
      description: `Worked as a Software Development Intern, developing frontend components for an application focused on bug tracking, issue tracking, and agile sprint management.`
    }
  ],

  workshops: [
    {
      title: "Frontier LLM Inference & Disaggregated Serving",
      subtitle: "Enterprise Architecture Blueprint",
      tags: ["vLLM", "TensorRT-LLM", "Radix Caching", "FP8 PTQ"],
      desc: "Architectural blueprint on optimizing token throughput, KV cache management, and dynamic batching for multi-million token daily enterprise traffic."
    },
    {
      title: "Mixture-of-Experts (MoE) Kernel Optimization on JAX/Pallas",
      subtitle: "High-Performance Computing Workshop",
      tags: ["JAX", "Pallas", "TPU v7", "Block-Sparse MatMul"],
      desc: "Deep-dive workshop on bypassing memory barriers in top-k expert routing and utilizing Megablox BSMM techniques for linear cluster scaling."
    },
    {
      title: "Stateful Multi-Agent Reasoning with LangGraph",
      subtitle: "Agentic Systems Masterclass",
      tags: ["LangGraph", "Multi-LoRA", "FastAPI", "Tool Calling"],
      desc: "Designing production-grade multi-agent workflows with state graphs, conditional routing, hot-swappable adapters, and Guardrail verification."
    },
    {
      title: "City-Scale Real-Time Video Ingestion with DeepStream",
      subtitle: "Edge & Cloud Vision Session",
      tags: ["NVIDIA DeepStream", "Triton", "RTSP", "CLIP Re-ID"],
      desc: "Engineering high-concurrency RTSP pipelines handling 150+ streams with zero-copy hardware decoding and zero-shot re-identification."
    }
  ],

  projects: [
    {
      category: "GenAI & Agents",
      color: "blue",
      items: [
        {
          name: "Project Ironwood (Qwen3 MoE)",
          desc: "Pre-training and fine-tuning Qwen3-235B-A22B MoE on TPU clusters with custom Pallas kernels, achieving 48.2% MFU and 2.4x speedup.",
          tags: ["TPU v7", "JAX / Pallas", "MoE", "Megablox", "XPK"],
          metrics: "48.2% MFU • 1024 TPU v7"
        },
        {
          name: "Billing SLM Agent",
          desc: "14B parameter agent processing 50k daily disputes using FP8 quantization & Multi-LoRA adapter switching on an H100 cluster.",
          tags: ["Phi-3.5", "TensorRT-LLM", "LangGraph", "FP8 PTQ", "Radix Attention"],
          metrics: "<1h SLA (down from 24h) • >95% Accuracy"
        },
        {
          name: "Healthcare Digital Avatar",
          desc: "Clinical co-pilot on OCI Quad L40s using fine-tuned LLMs for patient triaging and dynamic multi-agent routing.",
          tags: ["OCI", "FastAPI", "Agentic Routing", "vLLM"],
          metrics: "Sub-second TTFT"
        },
        {
          name: "Phone Repair Assistant",
          desc: "Mobile chatbot plugin for device diagnostics using vision-language models and LLMs with multimodal image input.",
          tags: ["VLM", "AWS EKS", "Multi-modal", "RAG"],
          metrics: "100k+ MAU"
        },
        {
          name: "Medical Entity Extraction",
          desc: "High-recall clinical diagnosis extraction system leveraging vLLM and specialized LoRA adapters.",
          tags: ["LoRA", "vLLM", "Medical NLP"],
          metrics: "100% Target Recall"
        }
      ]
    },
    {
      category: "Computer Vision",
      color: "purple",
      items: [
        {
          name: "Suspect Re-Identification",
          desc: "Multi-camera tracking and zero-shot re-identification with CLIP, BLIP, and Moondream on high-speed video streams.",
          tags: ["CLIP", "BLIP", "Moondream", "DeepSORT", "Triton"],
          metrics: "Multi-camera Zero-Shot"
        },
        {
          name: "City-Wide Traffic Analysis",
          desc: "Processing 150+ concurrent RTSP camera streams via NVIDIA DeepStream for real-time traffic pattern analysis.",
          tags: ["DeepStream", "NVIDIA TensorRT", "RTSP", "GStreamer"],
          metrics: "150+ Concurrent Streams"
        },
        {
          name: "QSR Takeaway Validation",
          desc: "Real-time order packaging accuracy analytics using hybrid on-prem edge cameras and cloud verification.",
          tags: ["Edge AI", "Object Detection", "Hybrid Cloud"],
          metrics: "99.2% Accuracy"
        },
        {
          name: "Rail Anomaly & Thermal Fusion",
          desc: "Hazard and structural defect detection fusing Line Scan Cameras with Thermal IR sensors.",
          tags: ["Sensor Fusion", "Line Scan", "Thermal IR", "PyTorch"],
          metrics: "High-speed Anomaly Detection"
        },
        {
          name: "Driver Awareness Monitoring",
          desc: "Facial and body kinematics analysis for driver stability and distraction detection on edge hardware.",
          tags: ["OpenCV", "Jetson Nano", "Face Mesh", "Edge Silicon"],
          metrics: "30 FPS on 10W Edge"
        }
      ]
    },
    {
      category: "HPC & Kernel",
      color: "green",
      items: [
        {
          name: "Custom JAX / Pallas Kernels",
          desc: "Block-sparse matrix multiplication (BSMM) for MoE routing on TPU, bypassing VPU scatter-gather memory barriers.",
          tags: ["Pallas", "JAX", "TPU v7", "XLA", "Megablox"],
          metrics: "18.4% → 48.2% MFU"
        },
        {
          name: "AMD RPP Kernel Optimization",
          desc: "Low-level image processing C++/HIP kernels outperforming standard GPU libraries for AMD ROCm platforms.",
          tags: ["HIP", "C++", "ROCm", "OpenCL"],
          metrics: "Open-source AMD Contributor"
        },
        {
          name: "Heterogeneous Model Porting",
          desc: "Compiling native PyTorch models to TensorRT, OpenVINO, and Qualcomm SNPE for specialized silicon targets.",
          tags: ["TensorRT", "OpenVINO", "SNPE", "ONNX Runtime"],
          metrics: "3-5x Latency Reduction"
        },
        {
          name: "Zero-Copy Model Ensembling",
          desc: "Stitching recommendation pipeline components to eliminate CPU-GPU PCIe data transfer bottlenecks.",
          tags: ["CUDA IPC", "Zero-Copy", "PyTorch C++"],
          metrics: "Sub-10ms RecSys P99"
        }
      ]
    },
    {
      category: "Cloud Strategy",
      color: "orange",
      items: [
        {
          name: "Digital Avatar on OCI",
          desc: "Auto-scaling microservices on Quad L40 instances with dynamic load balancing and secure token authentication.",
          tags: ["OCI", "Kubernetes", "L40 GPUs", "Helm"],
          metrics: "Auto-scaling 1-20 Pods"
        },
        {
          name: "Enterprise Chatbot API (AWS)",
          desc: "EKS deployment supporting 100,000+ daily active users with rate limiting and automated failover.",
          tags: ["AWS EKS", "FastAPI", "Redis Cache", "CloudWatch"],
          metrics: "100k+ Daily Users"
        },
        {
          name: "Bio-Risk Surveillance Platform",
          desc: "Jetson Orin edge devices streaming telemetry to AWS cloud backends for real-time risk assessment.",
          tags: ["AWS IoT", "Jetson Orin", "Kinesis"],
          metrics: "Real-time Edge Ingestion"
        },
        {
          name: "Hybrid POD Lift-and-Shift",
          desc: "Containerized ML systems architected to run identically on on-prem H100 PODs and public cloud.",
          tags: ["Docker", "Kubernetes", "H100 POD", "Hybrid Cloud"],
          metrics: "100% Cloud-Agnostic"
        }
      ]
    },
    {
      category: "RecSys & Sim",
      color: "pink",
      items: [
        {
          name: "Telco Recommendation Engine",
          desc: "Wide & Deep + MoE model for device and subscriber plan upselling with real-time vector indexing.",
          tags: ["Wide & Deep", "MoE", "Milvus", "PyTorch"],
          metrics: "18% Conversion Lift"
        },
        {
          name: "Port Logistics Simulation",
          desc: "Discrete event simulation engine (SimPy) modeling container terminal turnaround, crane queues, and vessel dwell times.",
          tags: ["SimPy", "Monte Carlo", "Python", "Operations Research"],
          metrics: "Predictive Berth Scheduling"
        }
      ]
    },
    {
      category: "Pre-Sales & Strategy",
      color: "yellow",
      items: [
        {
          name: "Greenfield Sizing & TCO Models",
          desc: "Constructed comprehensive cost and hardware capacity calculators comparing TPU v6e/v7 vs NVIDIA H100/B200.",
          tags: ["TCO Modeling", "Capacity Planning", "ROI Analysis"],
          metrics: "9.4% Total Cost Savings"
        },
        {
          name: "Enterprise PoC Conversion Engine",
          desc: "Led technical discovery across 30+ enterprise proposals, attaining a 65% conversion rate into production contracts.",
          tags: ["Pre-Sales", "PoC Architecture", "Executive Alignment"],
          metrics: "65% Win Rate (30+ Proposals)"
        },
        {
          name: "AI Architecture Workshops",
          desc: "Conducted hands-on deep-dive architecture sessions and workshops for enterprise engineering teams.",
          tags: ["Technical Evangelism", "Hands-on Labs", "Workshops"],
          metrics: "15+ Enterprise Workshops"
        }
      ]
    }
  ],

  logs: [
    {
      id: "log-01",
      title: "Project Ironwood: Qwen3-235B MoE on TPU v7",
      date: "OCT 2025",
      tag: "HPC / LLM Training",
      diagramType: "tpu-moe",
      summary: "Technical case study on training Qwen3-235B-A22B on Google Cloud TPU v7 using custom Pallas BSMM kernels, achieving 48.2% MFU.",
      image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80",
      trainingData: [
        { step: "100", epoch: "0.01", loss: "12.45", lr: "1e-7", timeMs: "682", tflops: "415", mfu: "18.4%", notes: "Dry Run (Baseline XLA)" },
        { step: "500", epoch: "0.02", loss: "10.82", lr: "1.5e-4", timeMs: "261", tflops: "1,107", mfu: "48.2%", notes: "Pallas BSMM Kernel" },
        { step: "5,000", epoch: "0.20", loss: "2.41", lr: "3.0e-4", timeMs: "260", tflops: "1,110", mfu: "48.3%", notes: "Stable Scaling" },
        { step: "15,000", epoch: "0.60", loss: "1.89", lr: "2.8e-4", timeMs: "261", tflops: "1,105", mfu: "48.1%", notes: "Stable Checkpointing" },
        { step: "25,000", epoch: "1.00", loss: "1.55", lr: "1.5e-4", timeMs: "265", tflops: "1,090", mfu: "47.5%", notes: "Parallelstore Checkpoint" },
        { step: "35,000", epoch: "1.40", loss: "1.34", lr: "8.0e-5", timeMs: "260", tflops: "1,112", mfu: "48.4%", notes: "Linear Convergence" },
        { step: "45,000", epoch: "1.80", loss: "1.22", lr: "1.0e-5", timeMs: "260", tflops: "1,112", mfu: "48.4%", notes: "Converged" }
      ],
      details: `
### 1. Executive Summary
This technical case study outlines the architectural execution for training the **Qwen3-235B-A22B-Instruct** Large Language Model (LLM) on Google Cloud’s **TPU v7 "Ironwood"** accelerator platform.

The Qwen3-235B-A22B is a frontier Mixture-of-Experts (MoE) architecture with 235 billion total parameters and 22 billion active parameters per token. The model introduces a distinct computational profile characterized by extreme sparsity (~10.6:1 ratio) and heavy reliance on high-bandwidth cross-chip communication for expert routing.

---

### 2. Hardware Architecture & Capacity Analysis
We evaluated accelerator configurations comparing **Google TPU v7 (Ironwood)** and **NVIDIA B200 (Blackwell)** based on a Time-to-Train Isomorphism analysis for a 15-Trillion token run.

- **Outcome:** The TPU v7 configuration delivered high cost efficiency with a 9.4% overall TCO saving.
- **HBM Capacity (192 GB/chip):** Allowed storing model state across fewer chips, maximizing local micro-batch sizes.
- **ICI Bandwidth (9.6 Tbps):** Essential for MoE All-to-All routing latency.
- **3D Torus Topology:** Provided deterministic latency for sparse routing.

---

### 3. Software Stack and Kernel Optimization
**The Scatter-Gather Bottleneck:** Standard XLA implementations of MoE routing rely on VPU scatter/gather operations, which heavily throttle the MXU compute units.

**The Solution: Pallas Kernels with Megablox BSMM**
We implemented Block-Sparse Matrix Multiplication (BSMM) kernels using **Pallas (JAX extension)**. The kernel pipelines memory loads to pre-fetch non-contiguous token blocks from HBM directly into VMEM, performing fusion inside the MXU. This boosted MFU from 18.4% to **48.2%**, achieving a **2.4x speedup in time-to-train**.
      `
    },
    {
      id: "log-02",
      title: "Billing SLM: Agentic Workflow & FP8 Optimization",
      date: "SEP 2025",
      tag: "GenAI / Agents",
      diagramType: "multi-lora",
      summary: "High-throughput dispute resolution engine for a Tier-1 Telecom provider processing 50,000+ daily disputes using a 14B SLM and hot-swappable Multi-LoRA.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      details: `
### 1. Problem Statement & Constraints
Led an engineering team of 8 from technical discovery to production rollout to architect a high-throughput dispute resolution engine for a Tier-1 North American Telecom enterprise processing **50,000+ daily billing disputes**.

- **The Bottleneck:** Manual reviews had a 24-hour SLA, risking service disconnections and operational backlog.
- **The Data Challenge:** Dispute validation required correlating line-items across multi-page statements (18k–20k tokens) of nested JSON, where standard vector RAG failed due to context fragmentation.
- **Infrastructure:** Deployed on an on-prem cluster of 4 nodes (32x NVIDIA H100s), requiring high-density batch throughput.

---

### 2. Model Selection & Agentic Orchestration
- **Model Choice:** Selected **Phi-3.5-medium-128k (SLM)** over larger dense models. The 128k context window ingested full un-chunked raw bill text, preserving long-range line-item dependencies.
- **Multi-LoRA Architecture:** Engineered a stateful reasoning pipeline using **LangGraph**. Deployed NVIDIA NIM with TensorRT-LLM to serve a single frozen Phi-3.5 base model with **Hot-Swappable LoRA Adapters** (Intent Classification → Entity Extraction → Comparative Reasoning).

---

### 3. Throughput & VRAM Optimization
1. **FP8 Post-Training Quantization (PTQ):** Compressed model weights from ~28GB (BF16) to ~14GB, doubling concurrency per GPU.
2. **FP8 KV Cache & Paged Attention:** Halved KV cache memory footprint per token, enabling dense batch concurrency for long documents.
3. **Chunked Prefills & Disaggregated Scheduling:** Segmented prompt ingestion to eliminate head-of-line blocking.
4. **Radix Prefix Caching:** Cached the 1.5k system prompt across all 50,000 daily requests, saving ~75 million redundant token calculations daily.

**Impact:** Reduced resolution SLA from 24 hours to **<1 hour** with **>95% production accuracy**.
      `
    }
  ],

  skills: {
    "AI Models & Architectures": [
      "Gemini 1.5/2.0", "Llama 3/3.3", "DeepSeek V3/R1", "Qwen 2.5/3 (MoE)",
      "Mistral Large", "Phi-3.5", "InternVL", "YOLOv10/11", "CLIP / BLIP", "DeepSORT"
    ],
    "Frameworks & Compilers": [
      "PyTorch", "JAX", "Pallas", "XLA / Torch TPU", "TensorFlow", "NeMo", "HIP / ROCm"
    ],
    "Inference & Acceleration": [
      "vLLM", "TensorRT-LLM", "SGLang", "MaxText", "NVIDIA Triton", "NIM",
      "NVIDIA DeepStream", "OpenVINO", "Qualcomm SNPE", "ONNX Runtime"
    ],
    "Cloud & Distributed Systems": [
      "Google Cloud (TPU v6e/v7, GKE)", "AWS (SageMaker, EKS, Bedrock)",
      "OCI (Quad L40)", "RayServe", "Slurm", "Parallelstore / Lustre", "Kubernetes", "Helm"
    ],
    "Agentic & Vector Stack": [
      "LangGraph", "LangChain", "PydanticAI", "ChromaDB", "Milvus", "FAISS",
      "ElasticSearch", "Advanced RAG", "NL2SQL"
    ],
    "Languages & Low-Level": [
      "Python", "CUDA C++", "C++", "C", "SQL", "OpenCL", "Shell / Bash"
    ]
  },

  certifications: [
    { name: "Google Cloud Professional Machine Learning Engineer", issuer: "Google Cloud" },
    { name: "NVIDIA Certified Associate — AI in Data Centre", issuer: "NVIDIA" },
    { name: "Scaling Workloads Across Multiple GPUs With CUDA C", issuer: "NVIDIA DLI" },
    { name: "Building Real-Time Video AI Applications (DeepStream)", issuer: "NVIDIA DLI" },
    { name: "Getting Started with Jetson Nano & Edge AI", issuer: "NVIDIA DLI" }
  ],

  education: [
    {
      institution: "Panimalar Engineering College",
      degree: "Bachelor of Engineering (B.E.) — Computer Science & Engineering",
      period: "July 2015 — April 2019",
      location: "Chennai, Tamil Nadu, India"
    }
  ],

  photography: [
    { id: "p1", src: "./images/DSC_0081.jpg", alt: "Sunset silhouettes", category: "Nature", location: "Coastline", camera: "Nikon D750", aperture: "f/2.8", shutter: "1/500s", iso: "100" },
    { id: "p2", src: "./images/DSC_0312.jpg", alt: "Mountain ridge", category: "Landscape", location: "Highlands", camera: "Nikon D750", aperture: "f/4.0", shutter: "1/320s", iso: "200" },
    { id: "p3", src: "./images/DSC_0338.jpg", alt: "Forest trails", category: "Nature", location: "Western Ghats", camera: "Nikon D750", aperture: "f/3.5", shutter: "1/250s", iso: "160" },
    { id: "p4", src: "./images/IMG_5369.JPG", alt: "Street geometry", category: "Urban", location: "Chennai", camera: "iPhone 15 Pro", aperture: "f/1.78", shutter: "1/120s", iso: "80" },
    { id: "p5", src: "./images/IMG_6193.JPG", alt: "Golden hour glow", category: "Landscape", location: "Bangalore", camera: "iPhone 15 Pro", aperture: "f/2.2", shutter: "1/200s", iso: "64" },
    { id: "p6", src: "./images/IMG_7900.JPG", alt: "Coastal waves", category: "Nature", location: "Surf Coast", camera: "iPhone 15 Pro", aperture: "f/1.8", shutter: "1/800s", iso: "50" },
    { id: "p7", src: "./images/IMG_8084.JPG", alt: "Night city lights", category: "Urban", location: "Metropolis", camera: "iPhone 15 Pro", aperture: "f/1.78", shutter: "1/40s", iso: "400" },
    { id: "p8", src: "./images/JAI_2231.jpg", alt: "Heritage architecture", category: "Architecture", location: "Jaipur", camera: "Nikon Z6 II", aperture: "f/5.6", shutter: "1/400s", iso: "100" },
    { id: "p9", src: "./images/JAI_2287.JPG", alt: "Palace corridors", category: "Architecture", location: "Jaipur", camera: "Nikon Z6 II", aperture: "f/4.0", shutter: "1/200s", iso: "125" },
    { id: "p10", src: "./images/JAI_2302.jpg", alt: "Ancient stonework", category: "Architecture", location: "Jaipur", camera: "Nikon Z6 II", aperture: "f/5.0", shutter: "1/320s", iso: "100" },
    { id: "p11", src: "./images/JAI_2460.jpg", alt: "Fortress ramparts", category: "Architecture", location: "Rajasthan", camera: "Nikon Z6 II", aperture: "f/8.0", shutter: "1/640s", iso: "100" },
    { id: "p12", src: "./images/JAI_2466.jpg", alt: "Desert horizon", category: "Landscape", location: "Thar", camera: "Nikon Z6 II", aperture: "f/6.3", shutter: "1/500s", iso: "100" },
    { id: "p13", src: "./images/JAI_2973.JPG", alt: "Artisan crafts", category: "Culture", location: "India", camera: "Nikon Z6 II", aperture: "f/2.8", shutter: "1/160s", iso: "250" }
  ],

  about: {
    bio: `I am a GenAI & Machine Learning Architect with end-to-end experience spanning from low-level silicon kernel optimization to massive-scale distributed LLM training, high-throughput model serving, and autonomous multi-agent systems.

Currently at Google Cloud (GCP) as a Customer Engineer for AI Infrastructure, I partner with enterprise engineering leaders to design, scale, and optimize GenAI workloads across NVIDIA GPUs and Google TPUs.

Outside of machine learning architectures, you'll find me staying active on the cricket pitch or badminton court, trying not to wipe out on a surfboard 🏄, capturing stories through photography, or exploring local food trails across cities.

I believe the most groundbreaking technical architectures come from clear thinking, rigorous first-principles engineering, and genuine human collaboration.`,
    stats: [
      { label: "Years in ML/Infra", value: "6+" },
      { label: "Proposals Led", value: "30+" },
      { label: "PoC Win Rate", value: "65%" },
      { label: "Scale Handled", value: "1,000s+" }
    ]
  }
};
