import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Github, Linkedin, Instagram, ArrowRight, ChevronRight, ChevronLeft,
  Camera, User, BookOpen, Layers, Terminal, Globe, Cpu, Mail,
  Brain, Server, LineChart, Briefcase, Award, Building2, Zap, XCircle, Aperture, Watch, MapPin
} from 'lucide-react';

// --- CONTENT DATA (Centralized CMS) ---
const content = {
  "metadata": {
    "title": "MK's Portfolio",
    "lastUpdated": new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    "commitId": "h1i2j3k" 
  },
  "personal": {
    "name": "Muthukumaravel Muthuraman",
    "initials": "MK",
    "role": "AI Infrastructure & ML Architect",
    "tagline": "LLM | GenAI | CV | NVIDIA | Pre-Sales",
    "location": "Chennai, India",
    "email": "muthukumaravel.muthuraman@gmail.com",
    "avatar": "https://github.com/muthu-kumaravel.png" 
  },
  "socials": [
    { "platform": "Github", "url": "https://github.com/muthu-kumaravel" },
    { "platform": "Linkedin", "url": "https://linkedin.com/in/muthukumaravel" },
    { "platform": "Instagram", "url": "https://instagram.com/muthu" },
    { "platform": "Email", "url": "mailto:muthukumaravel.muthuraman@gmail.com" }
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
        { "src": "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80", "logId": "log-01", "label": "Project Ironwood" }, 
        { "src": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80", "logId": "log-02", "label": "Billing SLM" }
      ]
    }
  },
  "resume": {
    "summary": "AI Infrastructure Customer Engineer & ML Architect with a full-stack command of the GenAI landscape—spanning from silicon-level optimization to the development of autonomous agents. Expert in bridging deep technical execution with GTM strategy, translating complex hardware capabilities into efficient, production-grade applications. Specializes in designing massive-scale distributed systems that power sophisticated multi-agent workflows and next-gen AI solutions across Cloud and Hybrid environments.",
    "experience": [
      {
        "company": "Google (GCP)",
        "domain": "google.com",
        "role": "Customer Engineer AI Infra",
        "period": "June 2025 - Present",
        "location": "Bangalore",
        "summary": "AI Infrastructure Specialist for massive-scale open-weight LLM training (1024+ GB200s, 3000+ TPUs). Bridges technical execution with GTM strategy to accelerate regional AI revenue.",
        "description": `Bridging deep technical execution with GTM strategy to drive AI Infra revenue, I architecture massive-scale LLM training and inference workloads across 1024+ NVIDIA GB200 GPUs and 3,000+ Google TPUs(v6e/v7). I engineer custom JAX/Pallas kernels for low-level MoE optimizations and built an automated benchmarking suite to tune performance for vLLM, MaxText and NeMo on GCP. My expertise spans deploying disaggregated LLM model serving and orchestrating high-performance training and inference clusters with Luster. Balancing execution with strategy, I drive regional AI infra revenue and consumption by guiding strategic enterprises through capacity planning and cost modelling. Accelrate adoption through technical roadshows, influencing product roadmaps and guiding enterprises to extract maxume value from next generation silicon for production-grade Gen AI.

        <h4 class="text-white font-bold mt-6 mb-3">Key Responsibilities & Achievements:</h4>
        <ul class="list-disc pl-5 space-y-3 text-gray-300">
            <li><strong>GenAI & Model Architecture:</strong> Architected large-scale pre-training/fine-tuning runs utilizing 1,024+ NVIDIA GB200 GPUs and 3,000+ TPUs, achieving 0.45+ MFU with Lustre storage. Developed optimized model recipes for DeepSeek, Mistral, Llama, Gemma, and Qwen, and contributed to Torch TPU (PyTorch XLA) to achieve 79% of H100 performance on v6e TPUs.</li>
            <li><strong>HPC & Kernel Engineering:</strong> Engineered custom JAX and Pallas kernels to unlock native support for MoE models and built automated benchmarking suites for VLLM/MaxText to identify optimal hardware sizing. Developed deep-dive profiling tools to minimize step-time overheads and optimize communication collectives across large cluster topologies.</li>
            <li><strong>Cloud-Native & Orchestration:</strong> Orchestrated AI workloads using RayServe and GKE, using Dynamic Workload Scheduling (DWS) to secure spot capacity and enable elastic scaling. Deployed resilient inference backends using VLLM and SGLang, optimizing token throughput and reducing partner costs by 10-70%.</li>
            <li><strong>Recommendation Systems:</strong> Optimized large-scale embedding and ranking pipelines to achieve ultra-low latency inference for high-traffic consumer applications, tuning dynamic batching for massive user-request throughput.</li>
            <li><strong>Pre-Sales & GTM Strategy:</strong> Accelerated India AI Infra revenue by 50%+ YoY (25% QoQ) by influencing product roadmaps and guiding enterprises through 'Greenfield' sizing guides. Validated hardware ROI via custom PoCs, pivoting conversations from reactive support to strategic partnerships and migrating customers to optimized consumption models.</li>
        </ul>`
      },
      {
        "company": "Quantiphi",
        "domain": "quantiphi.com",
        "role": "Associate Architect ML",
        "period": "May 2021 - June 2025",
        "location": "Bangalore",
        "summary": "End-to-end ML Architect driving GenAI & CV solutions. Led technical teams of 5-10 in solution design, pre-sales engagements (30+ proposals), and production implementation.",
        "description": `Designed and built end-to-end optimized ML pipelines and applications across Cloud, Edge, and Hybrid environments. Specialized in architecting, fine-tuning, optimizing, and evaluating ML models, including various types of LLMs, Computer Vision models, multimodal models, and recommendation systems. Also worked on discrete event simulation and other advanced AI/ML applications. A key member of the Computer Vision, Optimization, and GenAI pre-sales team, actively engaging with customers to solve real-world use cases at production scale with improved cost optimization and reduced turnaround time. Led teams of 5–10 members, driving end-to-end architecture design, implementation, and rigorous code validation.

        <h4 class="text-white font-bold mt-6 mb-3">Key Responsibilities & Achievements:</h4>
        <ul class="list-disc pl-5 space-y-3 text-gray-300">
            <li><strong>GenAI & Model Architecture:</strong> Designed fine-tuned LLMs for medical entity extraction (100% recall) and billing SLM agents using advanced RAG/NL2SQL, serving specialized agents with multi-adapter routing. Built cloud-based digital avatars for patient triaging and mobile plugin chatbots using fine-tuned VLM/CV models for device assessment.</li>
            <li><strong>Computer Vision:</strong> Engineered end-to-end streaming platforms for city-wide traffic analysis processing 150+ concurrent streams via DeepStream and suspect re-identification using CLIP/BLIP/Moondream models. Engineered hybrid on-prem/cloud QSR order accuracy analytics using multiple camera streams. Developed hybrid edge-cloud anomaly detection systems for rail infrastructure using Line Scan Cameras and Thermal Imaging fusion.</li>
            <li><strong>Cloud-Native & Hybrid Systems:</strong> Architected high-volume FastAPI/Flask Gateways on AWS EKS handling 100,000+ daily users and deployed auto-scaling Digital Avatars on OCI (Quad L40s). Managed hybrid lift-and-shift deployments for security systems compatible with various POD configurations (Docker/On-Prem H100).</li>
            <li><strong>Recommendation & Simulation:</strong> Built discrete event simulation engines (SimPy) to predict shipping port operations and developed Telco recommendation engines for "personal shopper" features via model ensembling.</li>
            <li><strong>Pre-Sales & Strategy:</strong> Led technical discovery and solution design for 30+ proposals with a 60-65% conversion rate to PoC/MVP, securing 3+ yearly CUDs (500+ GPU/TPU). Transitioned 5+ PoCs into long-term extensions by optimizing architectures for network bandwidth and token latency to prove TCO value.</li>
        </ul>`
      },
      {
        "company": "MulticoreWare",
        "domain": "multicorewareinc.com",
        "role": "Software Engineer ML",
        "period": "June 2019 - May 2021",
        "location": "Chennai",
        "summary": "Developed low-level image processing kernels for AMD's RPP. Optimized latency for Human Behavior Analysis products in healthcare/automotive sectors.",
        "description": `Developed low-level image processing kernels for AMD’s open-source RPP codebase, optimizing latency and throughput to outperform state-of-the-art GPUs. Also contributed to MCW’s internal product, Human Behaviour Analysis product, analyzing eye, lip, facial, and body movements in real-time for applications in healthcare and automotive industries.

        <h4 class="text-white font-bold mt-6 mb-3">Key Responsibilities & Achievements:</h4>
        <ul class="list-disc pl-5 space-y-3 text-gray-300">
            <li><strong>HPC & Kernel Coding:</strong> Developed low-level image processing kernels for AMD's open-source RPP codebase (equivalent to NVIDIA NPP), optimizing latency and throughput to outperform standard kernels. Ported native PyTorch/TF models to hardware-optimized formats (TensorRT, OpenVINO) for specific silicon targets.</li>
            <li><strong>Computer Vision:</strong> Engineered real-time Human Behavior Analysis solutions analyzing facial and body kinematics for driver awareness monitoring, optimized specifically for low-power edge hardware.</li>
        </ul>`
      },
      {
        "company": "ValueLabs",
        "domain": "valuelabs.com",
        "role": "SD Intern",
        "period": "Jan 2019 - March 2019",
        "location": "Hyderabad",
        "summary": "Developed Angular-based frontend for bug tracking and agile project management applications.",
        "description": `Worked as a Software Development Intern, developing an Angular-based frontend for an application focused on bug tracking, issue tracking, and agile project management.`
      }
    ],
    "projects": [
      {
        "category": "GenAI & Agents",
        "color": "blue",
        "items": [
          { "name": "Project Ironwood", "desc": "Pre-training Qwen3-235B MoE on 1024 TPU v7 chips with Pallas kernels (48% MFU). Reduced time-to-train by 2.4x." },
          { "name": "Billing SLM Agent", "desc": "14B parameter agent for 50k daily disputes using FP8 quantization & Multi-LoRA on 4-node H100 cluster." },
          { "name": "Healthcare Digital Avatar", "desc": "Medical co-pilot on OCI using fine-tuned LLMs for patient triaging with dynamic agent routing." },
          { "name": "Phone Repair Assistant", "desc": "Mobile chatbot plugin for device diagnostics using VLMs & LLMs on AWS." },
          { "name": "Medical Entity Extraction", "desc": "100% recall diagnosis extraction using vLLM & LoRA adapters." }
        ]
      },
      {
        "category": "Computer Vision",
        "color": "purple",
        "items": [
          { "name": "Suspect Re-Identification", "desc": "Multi-camera tracking with Clip/Blip/Moondream models on streaming platform." },
          { "name": "City-Wide Traffic Analysis", "desc": "Processing 150+ concurrent streams via DeepStream for traffic behavior." },
          { "name": "QSR Takeaway Validation", "desc": "Order accuracy analytics using hybrid on-prem + cloud system." },
          { "name": "Hotspot & Keypoints", "desc": "Hazard detection using IR & RGB camera Fusion." },
          { "name": "Driver Awareness", "desc": "Facial and body analysis for stability monitoring on edge hardware." },
          { "name": "Rail Anomaly Detection", "desc": "Line Scan Camera & Thermal Imaging fusion for rail infrastructure." }
        ]
      },
      {
        "category": "HPC & Kernel",
        "color": "green",
        "items": [
          { "name": "Custom JAX/Pallas Kernels", "desc": "Block-sparse matrix multiplication for MoE routing on TPU, bypassing VPU bottlenecks." },
          { "name": "AMD RPP Optimization", "desc": "Low-level image processing kernels outperforming standard GPU libs (Open Source)." },
          { "name": "Model Porting", "desc": "Native to TensorRT/OpenVINO/SNPE conversion for hardware optimization." },
          { "name": "Model Ensembling", "desc": "Stitching RecSys components to bypass CPU-GPU transfer overhead." }
        ]
      },
      {
        "category": "Cloud Strategy",
        "color": "orange",
        "items": [
          { "name": "Digital Avatar (OCI)", "desc": "Scalable deployment on quad L40s with auto-scaling & secure microservices." },
          { "name": "Chatbot API (AWS)", "desc": "EKS deployment handling 100,000+ daily users." },
          { "name": "Bio Risk Monitoring", "desc": "Jetson Nano-based Edge & AWS streaming platform." },
          { "name": "Hybrid Lift-and-Shift", "desc": "Security systems compatible with Docker/On-Prem H100 PODs." }
        ]
      },
      {
        "category": "RecSys & Sim",
        "color": "pink",
        "items": [
          { "name": "Telco Recommendation", "desc": "Wide & Deep + MoE model for device/plan upselling & cross-selling." },
          { "name": "Port Logistics Simulation", "desc": "Discrete event simulation (SimPy) to predict shipping port operations." }
        ]
      },
      {
        "category": "Pre-Sales",
        "color": "yellow",
        "items": [
          { "name": "Agentic Workflows", "desc": "Designed architectures for on-prem/hybrid chatbots & LLM backends." },
          { "name": "Proposal Conversion", "desc": "Led 30+ proposals with 60-65% conversion to PoC/MVP." },
          { "name": "Technical Roadshows", "desc": "Accelerated adoption through deep-dive workshops and product roadmap influence." }
        ]
      },
    ],
    "skills": {
      "Languages": ["Python", "C++", "C", "CUDA", "SQL", "OpenCL"],
      "AI Models": ["Gemini", "Llama 3", "DeepSeek", "Qwen 2.5/3", "Mistral", "Phi", "MoE", "InternVL", "YOLO", "CLIP/BLIP", "DeepSORT"],
      "Frameworks": ["PyTorch", "JAX", "TensorFlow", "XLA", "NeMo", "HIP"],
      "Inference": ["vLLM", "SGLang", "TensorRT-LLM", "MaxText", "Triton", "NIM", "DeepStream", "Torch TPU", "SNPE", "OpenVINO"],
      "Cloud Infra": ["GCP (TPU v6/v7, GKE)", "AWS (SageMaker, EKS, Bedrock)", "OCI", "RayServe", "Slurm", "Lustre", "Kubernetes", "Helm"],
      "Agentic Stack": ["LangChain", "LangGraph", "PydanticAI", "ChromaDB", "Milvus", "FAISS", "ElasticSearch", "RAG"]
    },
    "certifications": [
      "GCP Professional Machine Learning Engineer",
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
      }
    ]
  },
  "logs": [
    {
      "id": "log-01",
      "title": "Project Ironwood: Qwen3 MoE on TPU v7",
      "date": "OCT 2025",
      "tag": "HPC / LLM Training",
      "summary": "Strategic deployment of Qwen3-235B-A22B on Google Cloud TPU v7 'Ironwood'. Achieved 2.4x reduction in time-to-convergence vs v5p.",
      "image": "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80",
      "details": `
        <h3 class="text-xl font-bold text-white mt-4 mb-2">1. Executive Summary</h3>
        <p class="mb-4">This comprehensive technical report outlines the end-to-end execution strategy for training the <strong>Qwen3-235B-A22B-Instruct</strong> Large Language Model (LLM) utilizing Google Cloud’s next-generation <strong>TPU v7 "Ironwood"</strong> accelerator platform. As a Gen AI Engineer within the Google Cloud AI Hypercomputer ecosystem, this document serves as the definitive blueprint for provisioning, architectural optimization, and operational execution of this massive-scale workload.</p>
        <p class="mb-4">The Qwen3-235B-A22B represents a frontier-class Mixture-of-Experts (MoE) architecture. With a total parameter count of 235 billion and an active parameter set of 22 billion per token, the model introduces a distinct computational profile characterized by extreme sparsity (approximately 10:1 ratio) and heavy reliance on high-bandwidth cross-chip communication for expert routing.</p>
        
        <h3 class="text-xl font-bold text-white mt-8 mb-2">2. Hardware Selection & Financial Analysis</h3>
        <p class="mb-2"><strong>2.1 GPU vs. TPU Decision</strong></p>
        <p class="mb-4">We evaluated two accelerator options: <strong>Google TPU v7 (Ironwood)</strong> and <strong>NVIDIA B200 (Blackwell)</strong>. The decision was driven by a "Time-to-Train Isomorphism" analysis—determining the hardware volume required to finish the job in the same ~22 days.</p>
        <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Outcome:</strong> The TPU v7 solution delivered the project for a total compute cost of <strong>~$4.24 Million</strong>, representing a <strong>9.4% cost saving</strong> compared to an equivalent NVIDIA B200 solution.</li>
            <li><strong>HBM Capacity (192 GB/chip):</strong> Allows storing the model state on ~20 chips vs ~40 for v5p, maximizing local batch size.</li>
            <li><strong>ICI Bandwidth (9.6 Tbps):</strong> Essential for MoE All-to-All routing latency.</li>
            <li><strong>3D Torus Topology:</strong> Offers deterministic latency superior to switch-based architectures for sparse routing.</li>
        </ul>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">3. Workload Characterization</h3>
        <p class="mb-2"><strong>Model Architecture: The Qwen3 MoE Paradigm</strong></p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Total Parameters (P<sub>total</sub>):</strong> 235 × 10<sup>9</sup></li>
            <li><strong>Active Parameters (P<sub>active</sub>):</strong> 22 × 10<sup>9</sup></li>
            <li><strong>Sparsity Ratio:</strong> ~10.6:1</li>
            <li><strong>Routing Mechanism:</strong> Top-K gating (presumed K=4) with shared experts.</li>
        </ul>

        <p class="mb-2"><strong>Mathematical Modeling of Compute and Memory Requirements</strong></p>
        <p class="mb-2"><em>Memory Footprint Estimation:</em></p>
        <p class="mb-4">
            Total Static Memory Requirement (M<sub>static</sub>):<br/>
            M<sub>static</sub> = 470 GB (Weights) + 470 GB (Gradients) + 2820 GB (Optimizer) ≈ 3.76 TB
        </p>
        <p class="mb-2"><em>Computational Intensity (FLOPs):</em></p>
        <p class="mb-4">
            FLOPs<sub>per_token</sub> ≈ 6 × P<sub>active</sub> = 6 × 22 × 10<sup>9</sup> = 1.32 × 10<sup>11</sup> FLOPs<br/>
            For a target dataset of 15 Trillion tokens:<br/>
            C<sub>total</sub> = 15 × 10<sup>12</sup> × 1.32 × 10<sup>11</sup> ≈ 1.98 × 10<sup>24</sup> FLOPs<br/>
            Design budget (C<sub>design</sub>) with 10% margin ≈ 2.2 YottaFLOPs
        </p>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">4. Infrastructure Design and Topology</h3>
        <p class="mb-2"><strong>4.1 Zone Selection Strategy</strong></p>
        <p class="mb-4">Operating under a capacity constraint of 3,000 total chips, <strong>us-central1-b</strong> was selected (utilizing 51.2% of zone capacity) as us-central1-a lacked physical capacity for the full synchronous 1,024-chip slice plus spares.</p>
        
        <p class="mb-2"><strong>4.2 Node Size Optimization</strong></p>
        <p class="mb-4">We evaluated v7-256 vs v7-128. The <strong>v7-128 (4x4x8)</strong> was selected as the atomic scheduling unit. The larger v7-256 shape spanned multiple OCS domains, introducing 3-hop latency penalties. The v7-128 aligned perfectly with Expert Parallelism (EP=128), confining latency-sensitive reductions to the local copper ICI mesh.</p>
        
        <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Slice Configuration:</strong> 1,024 Chips (v7-1024) in an 8x8x16 topology (16 Cubes).</li>
            <li><strong>Storage:</strong> Google Cloud Parallelstore (115 GB/s Read/Write) to eliminate I/O bottlenecks during 3.76 TB asynchronous checkpoints.</li>
            <li><strong>Data Ingestion:</strong> Storage Transfer Service (STS) to move 100TB source dataset.</li>
        </ul>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">5. Software Stack and Kernel Optimization</h3>
        <p class="mb-4"><strong>The "Scatter-Gather" Bottleneck:</strong> Standard XLA implementations of MoE routing rely on VPU scatter/gather operations, which bottleneck the massive MXU compute.</p>
        <p class="mb-4"><strong>The Solution: Pallas Kernels</strong><br/>
        We implemented Block-Sparse Matrix Multiplication (BSMM) using Pallas (JAX extension). Instead of physically moving data, the kernel pipelines memory loads to pre-fetch non-contiguous token blocks from HBM directly into VMEM, performing fusion directly in the MXU. This "Megablox" technique boosted MFU from 18.4% to <strong>48.2%</strong>.</p>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">6. Operational Execution Flow: "Crawl, Walk, Run"</h3>
        <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Phase 1 (Architectural Validation):</strong> Verified model compilation and memory fit on a single host. Target HBM utilization &lt; 70%.</li>
            <li><strong>Phase 2 (Kernel Tuning):</strong> Profiling Pallas BSMM kernels on a single Ironwood Cube (64 chips). Optimized capacity factors to minimize dropped tokens.</li>
            <li><strong>Phase 3 (Weak Scaling):</strong> Validated linear scaling from 64 &rarr; 256 &rarr; 512 chips to detect mesh inefficiencies.</li>
            <li><strong>Phase 4 (Full Scale):</strong> Execution on v7-1024 slice using XPK orchestration.</li>
        </ul>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">7. Operational Execution & Logs</h3>
        <p class="mb-2"><strong>7.1 Training Configuration:</strong></p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Framework:</strong> MaxText (JAX)</li>
            <li><strong>Orchestration:</strong> XPK on GKE</li>
            <li><strong>Parallelism:</strong> Data (16), Tensor (4), Expert (128), Pipeline (0 - Disabled due to HBM capacity)</li>
        </ul>

        <p class="mb-2"><strong>7.2 Checkpointing & Fault Tolerance</strong></p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Strategy:</strong> Orbax Asynchronous Checkpointing to Parallelstore.</li>
            <li><strong>Frequency:</strong> Every 2 hours.</li>
            <li><strong>Overhead:</strong> < 2 seconds blocking time per checkpoint due to async CPU offload and 115 GB/s write speed.</li>
            <li><strong>Incidents:</strong> 3 Node failures (Optical Link Flaps). XPK automatically cordoned the nodes and restarted the job from the last checkpoint in <15 minutes.</li>
        </ul>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">References</h3>
        <ul class="list-disc pl-5 space-y-1 text-xs font-mono text-gray-500">
            <li>Ironwood Specs & Performance</li>
            <li>Qwen Architecture & Tokenization</li>
            <li>MaxText, Pallas Kernels & Megablox</li>
            <li>Parallelstore & Storage Strategy</li>
            <li>Scaling Laws & Data Requirements</li>
        </ul>
      `
    },
    {
      "id": "log-02",
      "title": "Billing SLM: Agentic Workflow",
      "date": "SEP 2025",
      "tag": "GenAI / Agents",
      "summary": "High-throughput dispute resolution engine for a Tier-1 Telco processing 50k+ daily disputes using a 14B SLM.",
      "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      "details": `
        <h3 class="text-xl font-bold text-white mt-4 mb-2">Problem Statement & Architectural Constraints</h3>
        <p class="mb-4">Led a team of 8 engineers (Pre-sales to Production) to architect a high-throughput dispute resolution engine for a Tier-1 North American Telco processing 50,000+ daily complex billing disputes.</p>
        <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>The Bottleneck:</strong> Legacy manual workflows had a 24-hour SLA, risking network disconnection for customers.</li>
            <li><strong>The Data Challenge:</strong> Dispute validation required correlating entities across Current vs. Previous bills, each exceeding 100+ pages (18k-20k tokens) of JSON. Standard RAG approaches failed due to context fragmentation.</li>
            <li><strong>Infrastructure Constraint:</strong> Compute was strictly limited to a 4-node on-prem cluster (32x NVIDIA H100s), necessitating an architecture optimized for batch throughput rather than single-stream latency.</li>
        </ul>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">Model Selection & Strategic Analysis</h3>
        <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Decision:</strong> Selected Phi-3.5-medium-128k (SLM) over larger dense models (Llama 3/Mixtral).</li>
            <li><strong>Justification:</strong> The 128k context window allowed for the full ingestion of un-chunked raw bill text, preserving long-range dependencies essential for accurate line-item comparison.</li>
            <li><strong>Fine-Tuning Strategy:</strong> Executed Supervised Fine-Tuning (SFT) on Phi-3.5 using a stratified sampling strategy to ensure uniform performance across 50+ imbalanced dispute classes (e.g., High Bill Variance vs. Payment Latency).</li>
        </ul>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">Agentic Orchestration & Serving Optimization</h3>
        <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Multi-LoRA Architecture:</strong> Engineered a Dynamic Agentic System using LangGraph to orchestrate stateful reasoning steps. Instead of deploying distinct models for each task, utilized NVIDIA NIM with TensorRT-LLM to serve a single frozen Phi-3.5 base model with Hot-Swappable LoRA Adapters.</li>
            <li><strong>Workflow:</strong> The agent dynamically activates specific adapters (Intent Classification → Entity Extraction → Comparative Reasoning) per token generation step, minimizing VRAM overhead while maximizing specialization.</li>
        </ul>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">Throughput Optimization</h3>
        <p class="mb-4">Pivotally shifted the execution strategy from Online Inference to High-Density Batch Processing.</p>
        <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>FP8 Quantization:</strong> Enabled the Phi-3.5-medium to run efficiently on H100s by implementing FP8 Post-Training Quantization (PTQ) via the Transformer Engine. This compressed the model weights from ~28GB (BF16) to ~14GB, freeing up critical VRAM.</li>
            <li><strong>KV Cache Optimization:</strong> Addressed the massive memory bottleneck of long-context batching by enabling FP8 KV Cache and Paged Attention within TensorRT-LLM. This reduced the memory footprint per token by 50%, allowing us to fit high-density batches of 40k-token documents that would otherwise be impossible.</li>
            <li><strong>Chunked Prefill & Disaggregated Scheduling:</strong> Implemented Chunked Prefills to split the massive prompt ingestion into smaller compute blocks. This prevented "head-of-line blocking," allowing the scheduler to interleave decode steps from other requests and keep the H100 compute units fully saturated.</li>
            <li><strong>Prefix Caching:</strong> Enabled Radix Attention to cache the 1.5k system prompt across all 50,000 requests, eliminating ~75 million redundant token computations daily.</li>
        </ul>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">Business Impact & Performance Metrics</h3>
        <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Performance:</strong> The FP8+KV Cache optimizations allowed the 14B model to match the throughput latency of a smaller 7B model, processing the daily backlog in <1 hour (vs 24h legacy SLA).</li>
            <li><strong>SLA Reduction:</strong> Compressed resolution time from 24 hours to <1 hour, drastically reducing customer churn risks.</li>
            <li><strong>Accuracy:</strong> Achieved >95% accuracy in production (tracking towards >98% recall), validating the efficacy of SLMs for heavy-reasoning tasks when paired with high-quality SFT.</li>
        </ul>
      `
    }
  ],
  "photography": [
    { id: 4, src: "/images/IMG_5369.JPG", alt: "" },
    { id: 5, src: "/images/IMG_6193.JPG", alt: "" },
    { id: 6, src: "/images/IMG_7900.JPG", alt: "" },
    { id: 7, src: "/images/IMG_8084.JPG", alt: "" },
    { id: 8, src: "/images/JAI_2231.jpg", alt: "" },
    { id: 9, src: "/images/JAI_2287.JPG", alt: "" },
    { id: 10, src: "/images/JAI_2302.jpg", alt: "" },
    { id: 11, src: "/images/JAI_2460.jpg", alt: "" },
    { id: 12, src: "/images/JAI_2466.jpg", alt: "" },
    { id: 13, src: "/images/JAI_2973.JPG", alt: "" },
    { id: 1, src: "/images/DSC_0081.jpg", alt: "" },
    { id: 2, src: "/images/DSC_0312.jpg", alt: "" },
    { id: 3, src: "/images/DSC_0338.jpg", alt: "" },
  ],
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

// --- Components ---

const Typewriter = ({ text, className }) => {
    const [displayText, setDisplayText] = useState('');
    useEffect(() => {
        let i = 0;
        setDisplayText('');
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, [text]);
    return <span className={className}>{displayText}<span className="animate-pulse">_</span></span>;
};

// Helper Component for Logos
const CompanyLogo = ({ domain, company }) => {
    const [error, setError] = useState(false);
    return (
        <div className="w-12 h-12 rounded-xl bg-white p-2 overflow-hidden shrink-0 flex items-center justify-center relative">
            {!error ? (
                <img 
                    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`} 
                    alt={company} 
                    className="w-full h-full object-contain relative z-10"
                    onError={() => setError(true)}
                />
            ) : (
                <Building2 className="text-black w-6 h-6" />
            )}
        </div>
    );
};

const Header = ({ toggleMenu, isMenuOpen, goHome, setPage, currentPage }) => {
    const navLinks = [
        { id: 'landing', label: 'Overview' },
        { id: 'resume', label: 'Journey' },
        { id: 'blog', label: 'Logs' },
        { id: 'photography', label: 'Gallery' },
        { id: 'about', label: 'Profile' },
    ];

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 h-16 flex justify-center bg-black/80 backdrop-blur-md border-b border-white/10"
        >
            <div className="w-full max-w-[1400px] flex justify-between items-center h-full">
                <div 
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={goHome}
                >
                    <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-lg font-bold font-mono text-sm">
                        {content.personal.initials}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-semibold text-sm tracking-tight font-sans">{content.personal.name}</span>
                        <span className="text-gray-500 text-[10px] tracking-widest uppercase font-mono">{content.personal.role}</span>
                    </div>
                </div>
                
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => {
                        const isActive = link.id === currentPage;
                        return (
                            <button 
                                key={link.id} 
                                onClick={() => setPage(link.id)} 
                                className={`text-sm font-medium transition-colors relative group ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                {link.label}
                                {isActive && (
                                    <motion.span 
                                        layoutId="navUnderline"
                                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                                    />
                                )}
                            </button>
                        );
                    })}
                </nav>

                <button 
                    onClick={toggleMenu}
                    className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </motion.header>
    );
};

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
          const Icon = { Github, Linkedin, Instagram, Email: Mail }[social.platform] || Globe;
          return (
            <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors duration-200">
              <Icon size={18} />
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

const ModalWrapper = ({ onClose, children }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 top-0 left-0 h-[100vh] w-[100vw]"
            onClick={onClose}
        >
            <motion.div 
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col relative shadow-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors">
                    <XCircle size={32}/>
                </button>
                <div className="overflow-y-auto p-8 custom-scrollbar">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
};

const ExperienceModal = ({ job, onClose }) => {
    if (!job) return null;
    return (
        <ModalWrapper onClose={onClose}>
            <div className="flex items-center gap-4 mb-6 pr-8">
                 <div className="w-16 h-16 rounded-xl bg-white p-1 overflow-hidden shrink-0 flex items-center justify-center">
                    <img 
                        src={`https://logo.clearbit.com/${job.domain}`} 
                        alt={job.company} 
                        className="w-full h-full object-contain"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                    />
                    <Building2 className="text-gray-400 hidden w-8 h-8" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">{job.role}</h2>
                    <div className="text-blue-400 text-lg">{job.company}</div>
                    <div className="text-gray-500 text-sm font-mono">{job.period} • {job.location}</div>
                </div>
            </div>
            <div 
                className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: job.description }}
            />
        </ModalWrapper>
    );
};

const LogModal = ({ log, onClose }) => {
    if (!log) return null;
    return (
        <ModalWrapper onClose={onClose}>
            <div className="mb-8 border-b border-white/10 pb-6 pr-8">
                <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs font-mono rounded border border-blue-500/20">{log.tag}</span>
                    <span className="text-gray-500 text-xs font-mono">{log.date}</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{log.title}</h2>
            </div>
             <div 
                className="prose prose-invert prose-lg max-w-none text-gray-300"
                dangerouslySetInnerHTML={{ __html: log.details }}
            />
             {log.id === 'log-01' && (
                <div className="my-6 overflow-x-auto rounded-lg border border-white/10 bg-black/60 shadow-inner">
                    <table className="w-full text-xs font-mono text-left">
                        <thead className="bg-white/5 text-gray-400 border-b border-white/10">
                            <tr>
                                <th className="p-3">Step</th><th className="p-3">Epoch</th><th className="p-3">Loss</th><th className="p-3">LR</th><th className="p-3">Time(ms)</th><th className="p-3">TFLOPS</th><th className="p-3">MFU</th><th className="p-3">Notes</th>
                            </tr>
                        </thead>
                        <tbody className="text-green-400 divide-y divide-white/5">
                            <tr><td className="p-3">100</td><td className="p-3">0.01</td><td className="p-3">12.45</td><td className="p-3">1e-7</td><td className="p-3">682</td><td className="p-3">415</td><td className="p-3">18.4%</td><td className="p-3 opacity-60">Dry Run (XLA)</td></tr>
                            <tr><td className="p-3">500</td><td className="p-3">0.02</td><td className="p-3">10.82</td><td className="p-3">1.5e-4</td><td className="p-3">261</td><td className="p-3">1,107</td><td className="p-3">48.2%</td><td className="p-3 opacity-60">Pallas Kernel</td></tr>
                            <tr><td className="p-3">5,000</td><td className="p-3">0.20</td><td className="p-3">2.41</td><td className="p-3">3e-4</td><td className="p-3">260</td><td className="p-3">1,110</td><td className="p-3">48.3%</td><td className="p-3 opacity-60">Stable</td></tr>
                            <tr><td className="p-3">15,000</td><td className="p-3">0.60</td><td className="p-3">1.89</td><td className="p-3">2.8e-4</td><td className="p-3">261</td><td className="p-3">1,105</td><td className="p-3">48.1%</td><td className="p-3 opacity-60">Stable</td></tr>
                            <tr><td className="p-3">25,000</td><td className="p-3">1.00</td><td className="p-3">1.55</td><td className="p-3">1.5e-4</td><td className="p-3">265</td><td className="p-3">1,090</td><td className="p-3">47.5%</td><td className="p-3 opacity-60">Checkpoint I/O</td></tr>
                            <tr><td className="p-3">35,000</td><td className="p-3">1.40</td><td className="p-3">1.34</td><td className="p-3">8e-5</td><td className="p-3">260</td><td className="p-3">1,112</td><td className="p-3">48.4%</td><td className="p-3 opacity-60">Stable</td></tr>
                            <tr><td className="p-3">45,000</td><td className="p-3">1.80</td><td className="p-3">1.22</td><td className="p-3">1e-5</td><td className="p-3">260</td><td className="p-3">1,112</td><td className="p-3">48.4%</td><td className="p-3 opacity-60">Converged</td></tr>
                        </tbody>
                    </table>
                </div>
            )}
        </ModalWrapper>
    );
};

// --- Updated Lightbox with Smooth Image Switching ---
const Lightbox = ({ images, initialIndex, onClose }) => {
    const [index, setIndex] = useState(initialIndex);
    const [direction, setDirection] = useState(0); 
    const [exifData, setExifData] = useState({
        iso: '---',
        aperture: '--',
        shutter: '--',
        camera: '---',
    });
    
    // --- Swipe Handling ---
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].screenX;
        handleSwipe();
    };

    const handleSwipe = () => {
        const threshold = 50; // Minimum swipe distance
        const diff = touchStartX.current - touchEndX.current;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swiped Left -> Next Image
                paginate(1);
            } else {
                // Swiped Right -> Previous Image
                paginate(-1);
            }
        }
    };

    // Helper to extract EXIF from a loaded image element
    const extractExif = (img) => {
        if (window.EXIF) {
            try {
                window.EXIF.getData(img, function() {
                    const make = window.EXIF.getTag(this, "Make");
                    const model = window.EXIF.getTag(this, "Model");
                    const iso = window.EXIF.getTag(this, "ISOSpeedRatings");
                    const fNumber = window.EXIF.getTag(this, "FNumber");
                    const exposureTime = window.EXIF.getTag(this, "ExposureTime");

                    let shutter = "--";
                    if (exposureTime) {
                        shutter = exposureTime >= 1 ? `${exposureTime}s` : `1/${Math.round(1/exposureTime)}s`;
                    }
                    
                    let aperture = "--";
                    if (fNumber) {
                        // Cap f-value to two decimals
                        aperture = `f/${parseFloat(fNumber).toFixed(2).replace(/[.,]00$/, "")}`;
                    }

                    let camera = "---";
                    if(model) {
                         camera = model;
                         if(make && model.includes(make)) {
                             camera = model;
                         } else if (make) {
                             camera = `${make} ${model}`;
                         }
                    }

                    setExifData({
                        iso: iso || '---',
                        aperture: aperture,
                        shutter: shutter,
                        camera: camera,
                    });
                });
            } catch (e) {
                console.log("EXIF extraction failed", e);
            }
        }
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setIndex((prev) => (prev + newDirection + images.length) % images.length);
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') paginate(1);
            if (e.key === 'ArrowLeft') paginate(-1);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [images.length, onClose]);

    const photo = images[index];

    // Variants for slide animation
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50">
                <X size={32} />
            </button>
            <button 
                onClick={() => paginate(-1)}
                className="absolute left-4 p-2 bg-black/50 rounded-full text-white/70 hover:text-white transition-colors hover:bg-black/70 z-50 hidden md:block"
            >
                <ChevronLeft size={32} />
            </button>
            
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-10">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.img 
                        key={index}
                        src={photo.src} 
                        alt={photo.alt}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        onLoad={(e) => extractExif(e.target)}
                        className="max-h-[80vh] max-w-[90vw] object-contain shadow-2xl rounded-sm absolute" 
                    />
                </AnimatePresence>
                
                {/* Metadata Overlay Panel - Adjusted for mobile containment */}
                <div className="absolute bottom-10 left-4 right-4 md:left-0 md:right-0 flex justify-center z-50 pointer-events-none">
                    <div className="bg-black/80 backdrop-blur-md px-4 py-3 md:px-6 md:py-3 rounded-xl md:rounded-full border border-white/10 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs font-mono text-gray-300 max-w-full overflow-hidden">
                        <span className="flex items-center gap-2 whitespace-nowrap"><Camera size={14} className="text-blue-400" /> {exifData.camera}</span>
                        <span className="hidden md:block w-px h-3 bg-white/20"></span>
                        <span className="flex items-center gap-2 whitespace-nowrap"><Aperture size={14} className="text-blue-400" /> {exifData.aperture}</span>
                        <span className="hidden md:block w-px h-3 bg-white/20"></span>
                        <span className="flex items-center gap-2 whitespace-nowrap"><Watch size={14} className="text-blue-400" /> {exifData.shutter}</span>
                        <span className="hidden md:block w-px h-3 bg-white/20"></span>
                        <span className="flex items-center gap-2 whitespace-nowrap">ISO {exifData.iso}</span>
                    </div>
                </div>
            </div>

            <button 
                onClick={() => paginate(1)}
                className="absolute right-4 p-2 bg-black/50 rounded-full text-white/70 hover:text-white transition-colors hover:bg-black/70 z-50 hidden md:block"
            >
                <ChevronRight size={32} />
            </button>
            
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm z-50">
                {index + 1} / {images.length}
            </div>
        </motion.div>
    );
};

const LandingPage = ({ setPage, openLog }) => {
  const data = content.home;
  
  return (
    <div className="pt-32 pb-20">
      {/* ... Hero Section ... */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl z-10"
        >
          <div className="inline-block mb-6 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-mono text-xs tracking-wider">
            <Typewriter text={data.hero.badge} />
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.bentoGrid.map((item, index) => {
            const Icon = { server: Server, brain: Brain, camera: Camera, cpu: Cpu, linechart: LineChart }[item.icon] || Terminal;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }} // Added explicit viewport amount
                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
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
                 ) : null}
              </motion.div>
            )
          })}
        </div>
      </section>
      
      {/* ... Carousel Section ... */}
      <section className="max-w-[1400px] mx-auto px-6 mb-20">
         <h3 className="text-xl font-mono text-gray-500 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            {data.carousel.title}
         </h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[300px] md:h-[250px]">
            {data.carousel.images.map((img, i) => (
                <motion.div 
                    key={i} 
                    className="relative rounded-2xl overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 0.98 }}
                    onClick={() => openLog(img.logId)}
                >
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="font-mono text-xs text-white border border-white px-3 py-1 rounded-full">{img.label}</span>
                    </div>
                </motion.div>
            ))}
         </div>
      </section>
    </div>
  );
};

const ResumePage = ({ openJob }) => {
    // ... existing variables ...
    const { experience, skills, education, certifications, projects } = content.resume;
    const [activeTab, setActiveTab] = useState("GenAI & Agents");
    
    const tabs = projects.map(p => p.category);
    const activeProjects = projects.find(p => p.category === activeTab)?.items || [];
    const activeColor = projects.find(p => p.category === activeTab)?.color || "blue";

    const getCategoryColor = (color) => {
       const colors = {
            blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
            purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
            green: "bg-green-500/10 text-green-400 border-green-500/20",
            orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
            pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
            yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
        };
        return colors[color] || colors.blue;
    };

    return (
        <PageLayout title="Professional Journey" subtitle="Experience, Projects & Proficiency">
            <div className="grid gap-24">
                {/* Experience Section */}
                <div className="space-y-10">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Briefcase className="text-blue-500" /> Professional Experience
                    </h3>
                    <div className="relative border-l-2 border-white/10 ml-4 space-y-12 pb-4">
                        {experience.map((job, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative pl-10 group cursor-pointer"
                                onClick={() => openJob(job)}
                            >
                                <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-black border-2 border-blue-500 group-hover:bg-blue-500 transition-colors z-10" />
                                <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/60 transition-all hover:border-blue-500/30">
                                    <div className="flex flex-col md:flex-row justify-between mb-4 items-start gap-4">
                                        <div className="flex items-center gap-4">
                                            {/* Logo logic fixed by moving component definition up */}
                                            <CompanyLogo domain={job.domain} company={job.company} />
                                            <div>
                                                <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{job.role}</h4>
                                                <div className="text-blue-400 font-medium">{job.company}</div>
                                            </div>
                                        </div>
                                        <span className="font-mono text-gray-400 text-xs bg-white/5 px-3 py-1.5 rounded-full whitespace-nowrap">{job.period}</span>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed line-clamp-2">{job.summary}</p>
                                    <div className="mt-4 flex items-center text-blue-500 text-xs font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        VIEW DETAILS <ArrowRight size={14} className="ml-2" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* ... Tabbed Projects ... */}
                <div>
                     <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                        <Zap className="text-yellow-500" /> Key Use Cases
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
                        {tabs.map(tab => (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:text-white'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[300px]"> 
                        <AnimatePresence mode="wait">
                            {activeProjects.map((project, i) => (
                                 <motion.div 
                                    key={project.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/50 transition-all flex flex-col group h-full"
                                 >
                                    <div className={`self-start px-2 py-1 rounded text-[10px] font-mono border mb-4 uppercase tracking-wider ${getCategoryColor(activeColor)}`}>
                                        {activeTab}
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                        {project.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                                        {project.desc}
                                    </p>
                                 </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Education & Certifications Added Here */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8">
                         <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <Award className="text-purple-500" /> Certifications
                        </h3>
                        <ul className="space-y-4">
                            {certifications.map((cert, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0" />
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8">
                         <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <BookOpen className="text-blue-500" /> Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, i) => (
                                <div key={i}>
                                    <div className="text-white font-bold">{edu.institution}</div>
                                    <div className="text-blue-400 text-sm">{edu.degree}</div>
                                    <div className="text-gray-500 text-xs font-mono mt-1">{edu.period}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ... Skills ... */}
                <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-10">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <Cpu className="text-green-500" /> Technical Arsenal
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {Object.entries(skills).map(([category, items], idx) => (
                            <div key={idx}>
                                <h5 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">{category}</h5>
                                <div className="flex flex-wrap gap-2">
                                    {items.map(skill => (
                                        <span key={skill} className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-md text-sm border border-white/5 hover:border-white/20 hover:text-white transition-colors cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

// --- Photography Page with Skeleton Loading & Metadata ---
const ImageCard = React.memo(({ photo, onClick, index }) => {
    // Initialize state based on whether the image is already cached
    const [loaded, setLoaded] = useState(false);
    // Add state for EXIF metadata
    const [exifData, setExifData] = useState({
        iso: '---',
        aperture: '--',
        shutter: '--',
        camera: '---',
        lens: '---'
    });
    
    const imgRef = React.useRef(null);

    // Extract EXIF data using the loaded library
    const extractExif = () => {
        if (window.EXIF && imgRef.current) {
             try {
                window.EXIF.getData(imgRef.current, function() {
                    const make = window.EXIF.getTag(this, "Make");
                    const model = window.EXIF.getTag(this, "Model");
                    // const iso = window.EXIF.getTag(this, "ISOSpeedRatings"); // Hidden in high-level view
                    const fNumber = window.EXIF.getTag(this, "FNumber");
                    const exposureTime = window.EXIF.getTag(this, "ExposureTime");
                    const lens = window.EXIF.getTag(this, "LensModel") || "---";

                    let shutter = "--";
                    if (exposureTime) {
                         shutter = exposureTime >= 1 ? `${exposureTime}s` : `1/${Math.round(1/exposureTime)}s`;
                    }
                    
                    let aperture = "--";
                    if (fNumber) {
                         // Cap f-value to two decimals
                         aperture = `f/${parseFloat(fNumber).toFixed(2).replace(/[.,]00$/, "")}`;
                    }

                    let camera = "---";
                    if(model) {
                         camera = model;
                         // Simple cleanup if Make is in Model name
                         if(make && model.includes(make)) {
                             camera = model;
                         } else if (make) {
                             camera = `${make} ${model}`;
                         }
                    }

                    setExifData({
                        // iso: iso || '---',
                        aperture: aperture,
                        shutter: shutter,
                        camera: camera,
                        lens: lens
                    });
                });
             } catch (e) {
                 console.log("EXIF extraction failed", e);
             }
        }
    };

    useEffect(() => {
        const img = imgRef.current;
        if (img && img.complete) {
            setLoaded(true);
            // Attempt to extract even if cached
            if (window.EXIF) extractExif(); 
        }
    }, []);

    const handleLoad = () => {
        setLoaded(true);
        // Extract on load
        extractExif();
    };

    return (
        <div 
            className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-zoom-in mb-4"
            onClick={onClick}
        >
            {/* Skeleton Loader - Only show if NOT loaded */}
            {!loaded && (
                <div 
                    className="bg-zinc-800 animate-pulse w-full min-h-[250px]" 
                />
            )}
            
            <img 
                ref={imgRef}
                src={photo.src} 
                alt={photo.alt} 
                onLoad={handleLoad}
                // Logic: If loaded is true, we force 'opacity-100 blur-0 scale-100' immediately.
                className={`w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-700 ease-out ${
                    loaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-105 h-0'
                }`}
            />
            <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 ${!loaded ? 'hidden' : ''}`} />
            
            {/* Exif Overlay Grid View */}
             <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${!loaded ? 'hidden' : ''}`}>
                <div className="flex items-center gap-3 text-white/90 font-mono text-[10px]">
                    <span className="bg-white/10 px-1.5 py-0.5 rounded">{exifData.camera}</span>
                    {/* Lens removed from preview */}
                </div>
                <div className="flex items-center gap-3 text-white/60 font-mono text-[10px] mt-1">
                    {/* ISO Hidden in grid view as requested */}
                    <span>{exifData.aperture}</span>
                    <span>{exifData.shutter}</span>
                </div>
            </div>
        </div>
    );
});

const PhotographyPage = ({ openLightbox }) => {
    // State for Load More functionality - Increased initial count
    const [visibleCount, setVisibleCount] = useState(9);
    const visiblePhotos = content.photography.slice(0, visibleCount);

    return (
        <PageLayout title="Visual Gallery" subtitle="Moments Captured in High Fidelity">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {visiblePhotos.map((photo, index) => (
                    <ImageCard 
                        key={photo.id} 
                        photo={photo} 
                        index={index} 
                        onClick={() => openLightbox(index)} 
                    />
                ))}
            </div>
            
            {/* Load More Button */}
            {visibleCount < content.photography.length && (
                 <div className="mt-16 flex justify-center">
                    <button 
                        onClick={() => setVisibleCount(prev => prev + 9)}
                        className="group flex items-center gap-3 px-8 py-3 rounded-full bg-zinc-900 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 font-mono text-sm tracking-widest"
                    >
                        LOAD_MORE_ASSETS <span className="text-blue-500 group-hover:text-black">[+]</span>
                    </button>
                 </div>
            )}
        </PageLayout>
    );
};

const EngineeringLogsPage = ({ openLog }) => {
    return (
        <PageLayout title="Engineering Logs" subtitle="Technical Deep Dives & Post-Mortems">
            <div className="grid gap-6">
                {content.logs.map((log, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ scale: 1.01 }}
                        className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 cursor-pointer hover:bg-zinc-900/50 transition-colors group"
                        onClick={() => openLog(log.id)}
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-64 h-40 bg-zinc-800 rounded-xl shrink-0 overflow-hidden relative border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
                                <img src={log.image} alt={log.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-blue-400 font-mono text-xs border border-blue-500/30 px-2 py-0.5 rounded bg-blue-500/10">{log.id.toUpperCase()}</span>
                                    <span className="text-gray-500 font-mono text-xs">{log.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{log.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">{log.summary}</p>
                                <div className="flex items-center text-blue-500 text-xs font-mono font-bold">
                                    SYSTEM LOG ACCESS <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
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

// Generic Page Layout
const PageLayout = ({ title, subtitle, children }) => (
  <div className="min-h-screen pt-32 pb-20 px-6">
    <div className="max-w-[1000px] mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
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
  const [selectedLog, setSelectedLog] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    // Inject EXIF.js library for metadata extraction
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/exif-js";
    script.async = true;
    document.body.appendChild(script);

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['landing', 'resume', 'photography', 'blog', 'about'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        if (!hash) setCurrentPage('landing');
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
        window.removeEventListener('hashchange', handleHashChange);
        document.body.removeChild(script);
    };
  }, []);

  const navigateTo = (page) => {
    window.location.hash = page;
  };

  const openLog = (logId) => {
    const log = content.logs.find(l => l.id === logId);
    if (log) setSelectedLog(log);
  };

  const openLightbox = (index) => {
      setLightboxIndex(index);
      setLightboxOpen(true);
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500/30 selection:text-blue-100 overflow-x-hidden">
        <div className="min-w-[320px] mx-auto w-full">
            <Header toggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} goHome={() => navigateTo('landing')} setPage={navigateTo} currentPage={currentPage} />
            <FullScreenMenu isOpen={isMenuOpen} setPage={navigateTo} closeMenu={() => setIsMenuOpen(false)} />
            
            <main>
                <AnimatePresence>
                    {selectedLog && <LogModal log={selectedLog} onClose={() => setSelectedLog(null)} />}
                    {selectedJob && <ExperienceModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
                    {lightboxOpen && (
                        <Lightbox 
                            images={content.photography} 
                            initialIndex={lightboxIndex} 
                            onClose={() => setLightboxOpen(false)} 
                        />
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.5 }}
                    >
                        {currentPage === 'landing' && <LandingPage setPage={navigateTo} openLog={openLog} />}
                        {currentPage === 'resume' && <ResumePage openJob={setSelectedJob} />}
                        {currentPage === 'photography' && <PhotographyPage openLightbox={openLightbox} />}
                        {currentPage === 'blog' && <EngineeringLogsPage openLog={openLog} />}
                        {currentPage === 'about' && <AboutPage /> }
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    </div>
  );
}