import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, X, Github, Linkedin, Instagram, ArrowRight, ChevronRight, 
  Camera, Code, User, BookOpen, Layers, Terminal, Globe, Layout, Cpu,
  Brain, Server, Network, Database, Bot, Zap, Briefcase, Award, Monitor, Building2,
  LineChart, Workflow, Microchip, Cloud, Shield, FileText, XCircle
} from 'lucide-react';

// --- CONTENT DATA (Centralized CMS) ---
const content = {
  "metadata": {
    "title": "MK's Portfolio",
    "lastUpdated": new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    "commitId": "e4f5g6h" 
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
        { "src": "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80", "logId": "log-01", "label": "Project Ironwood" }, 
        { "src": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80", "logId": "log-02", "label": "Billing SLM" }
      ]
    }
  },
  "resume": {
    "summary": "Associate Architect in Machine Learning with extensive experience architecting and deploying AI/ML solutions across cloud environments.",
    "experience": [
      {
        "company": "Google (GCP)",
        "domain": "google.com",
        "role": "Customer Engineer AI Infra",
        "period": "June 2025 - Present",
        "location": "Bangalore",
        "summary": "AI Infrastructure Specialist for massive-scale open-weight LLM training (1024+ GB200s, 3000+ TPUs). Bridges technical execution with GTM strategy to accelerate regional AI revenue.",
        "description": `Bridging deep technical execution with GTM strategy to drive AI Infra revenue, I architecture massive-scale LLM training and inference workloads across 1024+ NVIDIA GB200 GPUs and 3,000+ Google TPUs(v6e/v7). I engineer custom JAX/Pallas kernels for low-level MoE optimizations and built an automated benchmarking suite to tune performance for vLLM, MaxText and NeMo on GCP. My expertise spans deploying disaggregated LLM model serving and orchestrating high-performance training and inference clusters with Luster. Balancing execution with strategy, I drive regional AI infra revenue and consumption by guiding strategic enterprises through capacity planning and cost modelling. Accelrate adoption through technical roadshows, influencing product roadmaps and guiding enterprises to extract maxume value from next generation silicon for production-grade Gen AI.

        <h4 class="text-white font-bold mt-4 mb-2">Key Responsibilities:</h4>
        <ul class="list-disc pl-5 space-y-2">
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

        <h4 class="text-white font-bold mt-4 mb-2">Key Responsibilities:</h4>
        <ul class="list-disc pl-5 space-y-2">
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

        <h4 class="text-white font-bold mt-4 mb-2">Key Responsibilities:</h4>
        <ul class="list-disc pl-5 space-y-2">
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
        "category": "GenAI & Agentic Workflows",
        "items": [
          { "name": "Project Ironwood", "desc": "Pre-training Qwen3-235B MoE on 1024 TPU v7 chips with Pallas kernels (48% MFU). Reduced time-to-train by 2.4x." },
          { "name": "Billing SLM Agent", "desc": "14B parameter agent for 50k daily disputes using FP8 quantization & Multi-LoRA on 4-node H100 cluster." },
          { "name": "Healthcare Digital Avatar", "desc": "Medical co-pilot on OCI using fine-tuned LLMs for patient triaging with dynamic agent routing." },
          { "name": "Phone Repair Assistant", "desc": "Mobile chatbot plugin for device diagnostics using VLMs & LLMs on AWS." },
          { "name": "Medical Entity Extraction", "desc": "100% recall diagnosis extraction using vLLM & LoRA adapters." },
          { "name": "Suspect Re-Identification", "desc": "Multi-camera tracking with Clip/Blip/Moondream models on streaming platform." }
        ]
      },
      {
        "category": "Computer Vision at Scale",
        "items": [
          { "name": "City-Wide Traffic Analysis", "desc": "Processing 150+ concurrent streams via DeepStream for traffic behavior." },
          { "name": "QSR Takeaway Validation", "desc": "Order accuracy analytics using hybrid on-prem + cloud system." },
          { "name": "Hotspot & Keypoints", "desc": "Hazard detection using IR & RGB camera Fusion." },
          { "name": "Driver Awareness", "desc": "Facial and body analysis for stability monitoring on edge hardware." },
          { "name": "Rail Anomaly Detection", "desc": "Line Scan Camera & Thermal Imaging fusion for rail infrastructure." }
        ]
      },
      {
        "category": "HPC & Kernel Engineering",
        "items": [
          { "name": "Custom JAX/Pallas Kernels", "desc": "Block-sparse matrix multiplication for MoE routing on TPU, bypassing VPU bottlenecks." },
          { "name": "AMD RPP Optimization", "desc": "Low-level image processing kernels outperforming standard GPU libs (Open Source)." },
          { "name": "Model Porting", "desc": "Native to TensorRT/OpenVINO/SNPE conversion for hardware optimization." },
          { "name": "Model Ensembling", "desc": "Stitching RecSys components to bypass CPU-GPU transfer overhead." }
        ]
      },
      {
        "category": "Cloud Strategy & Deployments",
        "items": [
          { "name": "Digital Avatar (OCI)", "desc": "Scalable deployment on quad L40s with auto-scaling & secure microservices." },
          { "name": "Chatbot API (AWS)", "desc": "EKS deployment handling 100,000+ daily users." },
          { "name": "Bio Risk Monitoring", "desc": "Jetson Nano-based Edge & AWS streaming platform." },
          { "name": "Hybrid Lift-and-Shift", "desc": "Security systems compatible with Docker/On-Prem H100 PODs." }
        ]
      },
      {
        "category": "RecSys & Simulation",
        "items": [
          { "name": "Telco Recommendation", "desc": "Wide & Deep + MoE model for device/plan upselling & cross-selling." },
          { "name": "Port Logistics Simulation", "desc": "Discrete event simulation (SimPy) to predict shipping port operations." }
        ]
      },
      {
        "category": "Pre-Sales & Strategy",
        "items": [
          { "name": "Agentic Workflows", "desc": "Designed architectures for on-prem/hybrid chatbots & LLM backends." },
          { "name": "Proposal Conversion", "desc": "Led 30+ proposals with 60-65% conversion to PoC/MVP." },
          { "name": "Technical Roadshows", "desc": "Accelerated adoption through deep-dive workshops and product roadmap influence." }
        ]
      }
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
        
        <h3 class="text-xl font-bold text-white mt-8 mb-2">2. Workload Characterization and Architectural Analysis</h3>
        <p class="mb-2"><strong>Model Architecture: The Qwen3 MoE Paradigm</strong></p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Total Parameters ($P_{total}$):</strong> 235 x 10^9</li>
            <li><strong>Active Parameters ($P_{active}$):</strong> 22 x 10^9</li>
            <li><strong>Sparsity Ratio:</strong> ~10.6:1</li>
            <li><strong>Routing Mechanism:</strong> Top-K gating (presumed K=4) with shared experts.</li>
        </ul>

        <p class="mb-2"><strong>Mathematical Modeling of Compute and Memory Requirements</strong></p>
        <p class="mb-2"><em>Memory Footprint Estimation:</em></p>
        <p class="mb-4">
            Total Static Memory Requirement ($M_{static}$):<br/>
            $M_{static} = 470 \text{ GB (Weights)} + 470 \text{ GB (Gradients)} + 2820 \text{ GB (Optimizer)} \approx 3.76 \text{ TB}$
        </p>
        <p class="mb-2"><em>Computational Intensity (FLOPs):</em></p>
        <p class="mb-4">
            $\text{FLOPs}_{per\_token} \approx 6 \times P_{active} = 6 \times 22 \times 10^9 = 1.32 \times 10^{11} \text{ FLOPs}$<br/>
            For a target dataset of 15 Trillion tokens:<br/>
            $C_{total} = 15 \times 10^{12} \times 1.32 \times 10^{11} \approx 1.98 \times 10^{24} \text{ FLOPs}$<br/>
            Design budget ($C_{design}$) with 10% margin $\approx 2.2 \text{ YottaFLOPs}$
        </p>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">3. Hardware Selection: The Case for Ironwood (TPU v7)</h3>
        <p class="mb-4">We evaluated TPU v5p vs. TPU v7 (Ironwood). Ironwood was selected due to:</p>
        <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>HBM Capacity (192 GB/chip):</strong> Allows storing the model state on ~20 chips vs ~40 for v5p, maximizing local batch size.</li>
            <li><strong>ICI Bandwidth (9.6 Tbps):</strong> Essential for MoE All-to-All routing latency.</li>
            <li><strong>3D Torus Topology:</strong> Offers deterministic latency superior to switch-based architectures for sparse routing.</li>
        </ul>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">4. Infrastructure Design and Topology</h3>
        <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Slice Configuration:</strong> 1,024 Chips (v7-1024) in an 8x8x16 topology (16 Cubes).</li>
            <li><strong>Storage:</strong> Google Cloud Parallelstore (115 GB/s Read/Write) to eliminate I/O bottlenecks during 3.76 TB asynchronous checkpoints.</li>
            <li><strong>Data Ingestion:</strong> Storage Transfer Service (STS) to move 100TB source dataset.</li>
        </ul>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">5. Software Stack and Kernel Optimization</h3>
        <p class="mb-4"><strong>The "Scatter-Gather" Bottleneck:</strong> Standard XLA implementations of MoE routing rely on VPU scatter/gather operations, which bottleneck the massive MXU compute.</p>
        <p class="mb-4"><strong>The Solution: Pallas Kernels</strong><br/>
        We implemented Block-Sparse Matrix Multiplication (BSMM) using Pallas (JAX extension). Instead of physically moving data, the kernel pipelines memory loads to pre-fetch non-contiguous token blocks from HBM directly into VMEM, performing fusion directly in the MXU. This "Megablox" technique boosted MFU from 18.4% to <strong>48.2%</strong>.</p>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">6. Operational Execution & Logs</h3>
        <p class="mb-2"><strong>Training Configuration:</strong></p>
        <ul class="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Framework:</strong> MaxText (JAX)</li>
            <li><strong>Orchestration:</strong> XPK on GKE</li>
            <li><strong>Parallelism:</strong> Data (16), Tensor (4), Expert (128), Pipeline (0 - Disabled due to HBM capacity)</li>
        </ul>
        <div class="bg-black/50 p-4 rounded-lg font-mono text-xs text-green-400 mb-4 overflow-x-auto">
            Step,Epoch,Loss,LR,Step Time (ms),TFLOPS/Chip,MFU,Notes<br/>
            100,0.01,12.45,1e-7,682,415,18.4%,Dry Run (XLA Padding)<br/>
            500,0.02,10.82,1.5e-4,261,1107,48.2%,Pallas Kernel Deployed<br/>
            5000,0.20,2.41,3e-4,260,1110,48.3%,Stable<br/>
            15000,0.60,1.89,2.8e-4,261,1105,48.1%,Stable<br/>
            25000,1.00,1.55,1.5e-4,265,1090,47.5%,Background Checkpoint I/O<br/>
            35000,1.40,1.34,8e-5,260,1112,48.4%,Stable<br/>
            45000,1.80,1.22,1e-5,260,1112,48.4%,Converged
        </div>

        <h3 class="text-xl font-bold text-white mt-8 mb-2">7. Conclusion</h3>
        <p class="mb-4">The successful training of Qwen3-235B on TPU v7 Ironwood validates Google Cloud's AI Hypercomputer architecture for frontier-class MoE models. By leveraging the 192GB HBM to remove pipeline parallelism and utilizing Pallas kernels to optimize sparse routing, we achieved an industry-leading <strong>48% MFU</strong>.</p>
        <ul class="list-disc pl-5 space-y-1">
            <li><strong>Cost:</strong> $4.44M (vs $4.91M est. on GPU)</li>
            <li><strong>Time:</strong> 21.5 Days</li>
            <li><strong>Outcome:</strong> Model weights exported to GCS.</li>
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

const Header = ({ toggleMenu, isMenuOpen, goHome }) => (
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
          const Icon = { Github, Linkedin, Instagram }[social.platform] || Globe;
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

// --- Modals ---

const ModalWrapper = ({ onClose, children }) => {
    // Prevent background scrolling when modal is open
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
                className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col relative shadow-2xl overflow-hidden"
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
            {/* Render HTML content safely since descriptions now contain tags */}
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
            {/* Render HTML content safely */}
            <div 
                className="prose prose-invert prose-lg max-w-none text-gray-300"
                dangerouslySetInnerHTML={{ __html: log.details }}
            />
        </ModalWrapper>
    );
};

// --- Page Components ---

const LandingPage = ({ setPage, openLog }) => {
  const data = content.home;
  
  return (
    <div className="pt-32 pb-20">
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
                 ) : null}
              </motion.div>
            )
          })}
        </div>
      </section>
      
      <section className="max-w-[1400px] mx-auto px-6 mb-20">
         <h3 className="text-xl font-mono text-gray-500 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            {data.carousel.title}
         </h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px] md:h-[300px]">
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
    const { experience, skills, education, certifications, projects } = content.resume;

    // Manual split for visual balance: Left (heavier tech) vs Right (Strategy/Ops)
    // Left: GenAI (0), CV (1), HPC (2)
    // Right: Cloud (3), RecSys (4), Pre-Sales (5)
    const leftProjects = [projects[0], projects[1], projects[2]];
    const rightProjects = [projects[3], projects[4], projects[5]];

    return (
        <PageLayout title="Professional Journey" subtitle="Experience, Projects & Proficiency">
            <div className="grid gap-16">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Briefcase className="text-blue-500" /> Professional Experience
                    </h3>
                    <div className="relative border-l border-white/10 ml-3 pl-8 space-y-8">
                        {experience.map((job, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group cursor-pointer"
                                onClick={() => openJob(job)}
                            >
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-zinc-900 border border-blue-500/50 group-hover:bg-blue-500/20 transition-colors" />
                                <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/60 transition-all border-l-4 border-l-transparent hover:border-l-blue-500">
                                    <div className="flex flex-col md:flex-row justify-between mb-2 items-start">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-white p-1 overflow-hidden shrink-0 flex items-center justify-center">
                                                <img 
                                                    src={`https://logo.clearbit.com/${job.domain}`} 
                                                    alt={job.company} 
                                                    className="w-full h-full object-contain"
                                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                                                />
                                                <Building2 className="text-gray-400 hidden w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">{job.role}</h4>
                                                <div className="flex items-center gap-2">
                                                     <span className="text-blue-400 font-medium text-sm">{job.company}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="font-mono text-gray-500 text-xs mt-2 md:mt-0 bg-white/5 px-2 py-1 rounded">{job.period}</span>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed text-sm mt-3 line-clamp-2">{job.summary}</p>
                                    <div className="mt-3 flex items-center text-blue-500 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                                        READ FULL DETAILS <ArrowRight size={12} className="ml-1" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                     <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                        <Zap className="text-yellow-500" /> Key Use Cases & Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"> 
                        <div className="space-y-6">
                            {leftProjects.map((cat, i) => (
                                <div key={i} className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/50 transition-colors">
                                    <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                                        {cat.category}
                                    </h4>
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
                        <div className="space-y-6">
                            {rightProjects.map((cat, i) => (
                                <div key={i} className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/50 transition-colors">
                                    <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                                        {cat.category}
                                    </h4>
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
                </div>

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
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-full md:w-48 h-32 bg-zinc-800 rounded-lg shrink-0 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
                                <img src={log.image} alt={log.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-blue-400 font-mono text-xs">{log.id.toUpperCase()}</span>
                                    <span className="text-gray-600 text-xs">•</span>
                                    <span className="text-gray-500 font-mono text-xs">{log.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{log.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{log.summary}</p>
                                <div className="flex items-center text-blue-500 text-xs font-mono font-bold">
                                    READ LOG <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
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

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['landing', 'resume', 'photography', 'blog', 'about'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else {
        // If no hash or invalid, default to landing but don't force hash unless empty
        if (!hash) setCurrentPage('landing');
      }
    };

    // Initial check
    handleHashChange();

    // Listen for back/forward button
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update Page Title
  useEffect(() => {
    document.title = content.metadata.title;
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Navigation helper
  const navigateTo = (page) => {
    window.location.hash = page;
  };

  // Handler to open specific log
  const openLog = (logId) => {
    const log = content.logs.find(l => l.id === logId);
    if (log) setSelectedLog(log);
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500/30 selection:text-blue-100 overflow-x-hidden">
        <div className="min-w-[320px] mx-auto w-full">
            <Header toggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} goHome={() => navigateTo('landing')} />
            <FullScreenMenu isOpen={isMenuOpen} setPage={navigateTo} closeMenu={() => setIsMenuOpen(false)} />
            
            <main>
                <AnimatePresence>
                    {selectedLog && <LogModal log={selectedLog} onClose={() => setSelectedLog(null)} />}
                    {selectedJob && <ExperienceModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
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
                        {/* Photography and Blog point to same Engineering Logs Component for now */}
                        {(currentPage === 'photography' || currentPage === 'blog') && <EngineeringLogsPage openLog={openLog} />}
                        {currentPage === 'about' && <AboutPage />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    </div>
  );
}