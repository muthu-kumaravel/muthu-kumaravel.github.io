import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const STAGE_TARGETS = {
  tokenization: { x: 0, y: 0, z: 17, lookY: 0 },
  embeddings: { x: 0, y: -8, z: 18, lookY: -8 },
  transformer: { x: 0, y: -20, z: 18, lookY: -20 },
  gb200_silicon: { x: 0, y: -42, z: 19, lookY: -42 },
  output_stream: { x: 0, y: -62, z: 18, lookY: -62 },
};

export function SpatialCanvas({ walkthroughMode = false, walkthroughStage = 'tokenization' }) {
  const mountRef = useRef(null);
  const walkthroughRef = useRef({ mode: walkthroughMode, stage: walkthroughStage });

  useEffect(() => {
    walkthroughRef.current = { mode: walkthroughMode, stage: walkthroughStage };
  }, [walkthroughMode, walkthroughStage]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;

    // 1. Cinematic Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000003, 0.014);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 22);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    // 4. Multi-Spectrum Atmospheric Lighting
    const ambientLight = new THREE.AmbientLight(0x0a1026, 0.9);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x38bdf8, 3.0, 70);
    blueLight.position.set(14, 8, 16);
    scene.add(blueLight);

    const violetLight = new THREE.PointLight(0xa855f7, 2.6, 65);
    violetLight.position.set(-14, -22, 16);
    scene.add(violetLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 2.4, 65);
    cyanLight.position.set(12, -45, 16);
    scene.add(cyanLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 2.2, 60);
    emeraldLight.position.set(-10, -62, 16);
    scene.add(emeraldLight);

    const masterGroup = new THREE.Group();

    // =========================================================================
    // 5. THE COMPLETE BIT-TO-SILICON-TO-OUTPUT LIFECYCLE (Pure 3D Microarchitecture)
    // =========================================================================

    // -------------------------------------------------------------------------
    // STAGE 1 (y: 6 to -6): TEXT -> BYTE STREAM -> PTX/MACHINE CODE -> EMBEDDINGS
    // -------------------------------------------------------------------------
    const stage1Group = new THREE.Group();
    stage1Group.position.set(0, 0, 0);

    // A. Dual-Helix Binary Byte Stream Ribbon (UTF-8 Characters compiling into Binary Bits)
    const helixPoints = [];
    const helixPoints2 = [];
    const helixLength = 48;
    for (let i = 0; i < helixLength; i++) {
      const t = i / helixLength;
      const angle = t * Math.PI * 6;
      const r = 3.2 + Math.sin(t * Math.PI) * 0.8;
      const y = 5.5 - t * 11;
      helixPoints.push(new THREE.Vector3(Math.cos(angle) * r, y, Math.sin(angle) * r));
      helixPoints2.push(new THREE.Vector3(Math.cos(angle + Math.PI) * r, y, Math.sin(angle + Math.PI) * r));
    }
    const helixCurve1 = new THREE.CatmullRomCurve3(helixPoints);
    const helixCurve2 = new THREE.CatmullRomCurve3(helixPoints2);

    const tubeGeo1 = new THREE.TubeGeometry(helixCurve1, 70, 0.04, 8, false);
    const tubeGeo2 = new THREE.TubeGeometry(helixCurve2, 70, 0.04, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.6,
      wireframe: true,
    });
    stage1Group.add(new THREE.Mesh(tubeGeo1, tubeMat));
    stage1Group.add(new THREE.Mesh(tubeGeo2, tubeMat));

    // B. Binary Bit Rungs (Connecting 0s and 1s across the helix)
    const rungLines = [];
    for (let i = 0; i < helixPoints.length; i += 2) {
      const p1 = helixPoints[i];
      const p2 = helixPoints2[i];
      rungLines.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
    }
    const rungGeo = new THREE.BufferGeometry();
    rungGeo.setAttribute('position', new THREE.Float32BufferAttribute(rungLines, 3));
    const rungMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35 });
    stage1Group.add(new THREE.LineSegments(rungGeo, rungMat));

    // C. High-Dimensional Embedding Vector Hypersphere (Where machine bits become semantic vector coordinates)
    const sphereWireGeo = new THREE.SphereGeometry(2.2, 16, 16);
    const sphereWireMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const embedSphere = new THREE.Mesh(sphereWireGeo, sphereWireMat);
    embedSphere.position.set(0, -4, 0);
    stage1Group.add(embedSphere);

    masterGroup.add(stage1Group);

    // -------------------------------------------------------------------------
    // STAGE 2 (y: -14 to -28): THE NEURAL MODEL LAYER (Weights in HBM Memory)
    // -------------------------------------------------------------------------
    const stage2Group = new THREE.Group();
    stage2Group.position.set(0, -20, 0);

    // Multi-Layer Transformer Tensor Lattice (Query, Key, Value, Feed-Forward Projections)
    const tensorLayerCount = 4;
    const tensorNodes = [];
    const tensorLines = [];

    for (let l = 0; l < tensorLayerCount; l++) {
      const layerY = 4.0 - l * 2.8;
      const layerZ = (l % 2 === 0 ? 1 : -1) * 1.5;
      const ringRadius = 4.2 - l * 0.4;
      const numHeads = 8;

      // Tensor Layer Ring (Representing Memory Strides in HBM)
      const ringGeo = new THREE.TorusGeometry(ringRadius, 0.03, 12, 48);
      const ringMat = new THREE.MeshBasicMaterial({
        color: l % 2 === 0 ? 0xa855f7 : 0x38bdf8,
        transparent: true,
        opacity: 0.3,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(0, layerY, layerZ);
      ring.rotation.x = Math.PI / 2.8;
      stage2Group.add(ring);

      // Attention Head Vector Vertices
      const currentLayerNodes = [];
      for (let h = 0; h < numHeads; h++) {
        const angle = (h / numHeads) * Math.PI * 2;
        const x = Math.cos(angle) * ringRadius;
        const y = layerY + Math.sin(angle) * (ringRadius * 0.3);
        const z = layerZ + Math.sin(angle) * 0.8;
        const pos = new THREE.Vector3(x, y, z);
        tensorNodes.push(pos);
        currentLayerNodes.push(pos);

        // Glowing attention weight node
        const headGeo = new THREE.OctahedronGeometry(0.2, 0);
        const headMat = new THREE.MeshStandardMaterial({
          color: 0xc084fc,
          emissive: 0xa855f7,
          emissiveIntensity: 0.9,
        });
        const headMesh = new THREE.Mesh(headGeo, headMat);
        headMesh.position.copy(pos);
        stage2Group.add(headMesh);
      }

      // Inter-layer Synaptic Weight Vector Lines (Self-Attention & MLP connections)
      if (l > 0) {
        const prevLayerNodes = tensorNodes.slice((l - 1) * numHeads, l * numHeads);
        for (let a = 0; a < numHeads; a++) {
          for (let b = 0; b < numHeads; b++) {
            if ((a + b) % 3 === 0) {
              const pA = prevLayerNodes[a];
              const pB = currentLayerNodes[b];
              tensorLines.push(pA.x, pA.y, pA.z, pB.x, pB.y, pB.z);
            }
          }
        }
      }
    }

    const tensorLineGeo = new THREE.BufferGeometry();
    tensorLineGeo.setAttribute('position', new THREE.Float32BufferAttribute(tensorLines, 3));
    const tensorLineMat = new THREE.LineBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.22 });
    stage2Group.add(new THREE.LineSegments(tensorLineGeo, tensorLineMat));

    masterGroup.add(stage2Group);

    // -------------------------------------------------------------------------
    // STAGE 3 (y: -36 to -50): SILICON MICROARCHITECTURE (GB200 Die, Tensor Cores & NVLink)
    // -------------------------------------------------------------------------
    const stage3Group = new THREE.Group();
    stage3Group.position.set(0, -42, 0);

    // A. The Physical Silicon Die Substrate (NVIDIA GB200 GPU ASIC)
    const dieBaseGeo = new THREE.BoxGeometry(9.0, 7.5, 0.4);
    const dieBaseMat = new THREE.MeshStandardMaterial({
      color: 0x050d1a,
      metalness: 0.92,
      roughness: 0.15,
      emissive: 0x0369a1,
      emissiveIntensity: 0.15,
    });
    const dieSubstrate = new THREE.Mesh(dieBaseGeo, dieBaseMat);
    dieSubstrate.rotation.x = Math.PI / 6;
    stage3Group.add(dieSubstrate);

    // B. High-Bandwidth Memory (HBM3e) Perimeter Stacks (4 stacks on corners)
    const hbmStacks = [];
    const hbmOffsets = [
      { x: -3.6, y: 2.8 },
      { x: 3.6, y: 2.8 },
      { x: -3.6, y: -2.8 },
      { x: 3.6, y: -2.8 }
    ];
    hbmOffsets.forEach((offset) => {
      const hbmGeo = new THREE.BoxGeometry(1.4, 1.4, 0.6);
      const hbmMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        emissive: 0x00f0ff,
        emissiveIntensity: 0.45,
        metalness: 0.8,
        roughness: 0.2,
      });
      const hbm = new THREE.Mesh(hbmGeo, hbmMat);
      hbm.position.set(offset.x, offset.y, 0.4);
      dieSubstrate.add(hbm);
      hbmStacks.push(hbm);
    });

    // C. 4x4 Systolic Array Matrix (Tensor Processing Units executing parallel GEMM)
    const systolicCores = [];
    const gridSize = 4;
    const coreSpacing = 1.1;
    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        const cX = (c - (gridSize - 1) / 2) * coreSpacing;
        const cY = -(r - (gridSize - 1) / 2) * coreSpacing;

        const coreGeo = new THREE.BoxGeometry(0.85, 0.85, 0.3);
        const coreMat = new THREE.MeshStandardMaterial({
          color: 0x083344,
          emissive: 0x00f0ff,
          emissiveIntensity: 0.3,
          metalness: 0.85,
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        core.position.set(cX, cY, 0.35);
        dieSubstrate.add(core);
        systolicCores.push(core);
      }
    }

    // D. 900 GB/s Optical NVLink Interconnect Laser Traces
    const nvlinkTraces = [];
    for (let i = -3; i <= 3; i += 2) {
      nvlinkTraces.push(i * 1.5, -4.5, 0.2, i * 1.5, -9.0, 0.2);
      nvlinkTraces.push(-5.5, i * 1.2, 0.2, -9.5, i * 1.2, 0.2);
      nvlinkTraces.push(5.5, i * 1.2, 0.2, 9.5, i * 1.2, 0.2);
    }
    const nvlinkGeo = new THREE.BufferGeometry();
    nvlinkGeo.setAttribute('position', new THREE.Float32BufferAttribute(nvlinkTraces, 3));
    const nvlinkMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.5 });
    stage3Group.add(new THREE.LineSegments(nvlinkGeo, nvlinkMat));

    masterGroup.add(stage3Group);

    // -------------------------------------------------------------------------
    // STAGE 4 (y: -56 to -70): REVERSE CYCLE -> SOFTMAX LOGITS -> EMITTED STREAM -> USER
    // -------------------------------------------------------------------------
    const stage4Group = new THREE.Group();
    stage4Group.position.set(0, -62, 0);

    // A. Softmax Probability Fan & Logit Projection Rays
    const logitRays = [];
    const rayCount = 32;
    for (let i = 0; i < rayCount; i++) {
      const angle = (i / rayCount) * Math.PI * 2;
      const radius = 3.5 + (Math.sin(i * 3) + 1) * 1.2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius * 0.6;
      const z = (Math.random() - 0.5) * 2.0;

      logitRays.push(0, 3.5, 0, x, y, z);

      // Emitted Token Quantum Crystal
      const tokenGeo = new THREE.TetrahedronGeometry(0.18, 0);
      const tokenMat = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        emissive: 0x34d399,
        emissiveIntensity: 0.8,
      });
      const tokenMesh = new THREE.Mesh(tokenGeo, tokenMat);
      tokenMesh.position.set(x, y, z);
      stage4Group.add(tokenMesh);
    }

    const logitGeo = new THREE.BufferGeometry();
    logitGeo.setAttribute('position', new THREE.Float32BufferAttribute(logitRays, 3));
    const logitMat = new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.28 });
    stage4Group.add(new THREE.LineSegments(logitGeo, logitMat));

    masterGroup.add(stage4Group);

    // =========================================================================
    // 5B. DESKTOP PERIPHERAL FLANK SYSTEMS (Left & Right Corner Fillings)
    // Automatically hidden on mobile (<1024px) to keep mobile views clean
    // =========================================================================
    const desktopFlanksGroup = new THREE.Group();

    // -------------------------------------------------------------------------
    // LEFT FLANK (x: -14 to -18)
    // -------------------------------------------------------------------------
    // 1. Left Upper: Stacked Cache / Memory Hierarchy Array (y: 2 to -10)
    const leftUpperGroup = new THREE.Group();
    leftUpperGroup.position.set(-15.5, 0, -2);
    for (let c = 0; c < 4; c++) {
      const cacheGeo = new THREE.BoxGeometry(3.5, 0.2, 2.5);
      const cacheMat = new THREE.MeshStandardMaterial({
        color: 0x0369a1,
        emissive: 0x0284c7,
        emissiveIntensity: 0.25,
        wireframe: true,
      });
      const cacheMesh = new THREE.Mesh(cacheGeo, cacheMat);
      cacheMesh.position.set(0, 3 - c * 2.2, 0);
      cacheMesh.rotation.y = Math.PI / 8;
      leftUpperGroup.add(cacheMesh);
    }
    desktopFlanksGroup.add(leftUpperGroup);

    // 2. Left Mid: Secondary Accelerator Pod Shard (y: -22 to -36)
    const leftMidGroup = new THREE.Group();
    leftMidGroup.position.set(-16.0, -28, -1);
    for (let p = 0; p < 4; p++) {
      const podAngle = (p / 4) * Math.PI * 2;
      const podX = Math.cos(podAngle) * 2.2;
      const podY = Math.sin(podAngle) * 2.2;
      const podGeo = new THREE.OctahedronGeometry(0.5, 0);
      const podMat = new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        emissive: 0x7c3aed,
        emissiveIntensity: 0.6,
      });
      const podMesh = new THREE.Mesh(podGeo, podMat);
      podMesh.position.set(podX, podY, 0);
      leftMidGroup.add(podMesh);
    }
    desktopFlanksGroup.add(leftMidGroup);

    // 3. Left Lower: Dimensionality Projection Axis Grid (y: -46 to -60)
    const leftLowerGroup = new THREE.Group();
    leftLowerGroup.position.set(-15.0, -54, -2);
    const axisLines = [
      0, 4, 0, 0, -4, 0,
      -3, 0, 0, 3, 0, 0,
      0, 0, -3, 0, 0, 3
    ];
    const axisGeo = new THREE.BufferGeometry();
    axisGeo.setAttribute('position', new THREE.Float32BufferAttribute(axisLines, 3));
    const axisMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.35 });
    leftLowerGroup.add(new THREE.LineSegments(axisGeo, axisMat));
    desktopFlanksGroup.add(leftLowerGroup);

    // -------------------------------------------------------------------------
    // RIGHT FLANK (x: +14 to +18)
    // -------------------------------------------------------------------------
    // 1. Right Upper: Asynchronous Request Pipeline Fiber Streams (y: 2 to -10)
    const rightUpperGroup = new THREE.Group();
    rightUpperGroup.position.set(15.5, 0, -2);
    for (let lane = -1; lane <= 1; lane++) {
      const laneGeo = new THREE.CylinderGeometry(0.04, 0.04, 10, 8);
      const laneMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.3 });
      const laneMesh = new THREE.Mesh(laneGeo, laneMat);
      laneMesh.position.set(lane * 1.4, 0, 0);
      rightUpperGroup.add(laneMesh);
    }
    desktopFlanksGroup.add(rightUpperGroup);

    // 2. Right Mid: Optical Crossbar Switch Hub (y: -22 to -36)
    const rightMidGroup = new THREE.Group();
    rightMidGroup.position.set(16.0, -28, -1);
    const switchRingGeo1 = new THREE.TorusGeometry(2.4, 0.04, 12, 48);
    const switchRingGeo2 = new THREE.TorusGeometry(1.5, 0.04, 12, 48);
    const switchRingMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.4 });
    const switchRing1 = new THREE.Mesh(switchRingGeo1, switchRingMat);
    const switchRing2 = new THREE.Mesh(switchRingGeo2, switchRingMat);
    switchRing1.rotation.x = Math.PI / 3;
    switchRing2.rotation.y = Math.PI / 4;
    rightMidGroup.add(switchRing1);
    rightMidGroup.add(switchRing2);
    desktopFlanksGroup.add(rightMidGroup);

    // 3. Right Lower: Multimodal Waveform Manifold (y: -46 to -60)
    const rightLowerGroup = new THREE.Group();
    rightLowerGroup.position.set(15.0, -54, -2);
    const wavePoints = [];
    for (let w = 0; w < 24; w++) {
      const wT = (w / 24) * Math.PI * 4;
      wavePoints.push(new THREE.Vector3((w - 12) * 0.25, Math.sin(wT) * 1.5, Math.cos(wT) * 0.8));
    }
    const waveCurve = new THREE.CatmullRomCurve3(wavePoints);
    const waveTubeGeo = new THREE.TubeGeometry(waveCurve, 40, 0.05, 8, false);
    const waveTubeMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x10b981,
      emissiveIntensity: 0.6,
      wireframe: true,
    });
    rightLowerGroup.add(new THREE.Mesh(waveTubeGeo, waveTubeMat));
    desktopFlanksGroup.add(rightLowerGroup);

    // Set initial desktop vs mobile visibility
    desktopFlanksGroup.visible = window.innerWidth >= 1024;
    masterGroup.add(desktopFlanksGroup);

    // -------------------------------------------------------------------------
    // 6. CONTINUOUS BIT LIFECYCLE DATA RIVER (The Live 3D Data Loop)
    // -------------------------------------------------------------------------
    // 3D Closed Loop Curve passing through: Input -> Embeddings -> Weights -> Silicon Die -> Output -> Loop
    const cycleCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 6, 0),       // 1. Text Input
      new THREE.Vector3(2.5, 0, 1.5),    // 2. Tokenizer
      new THREE.Vector3(-2.8, -12, -1),  // 3. Vector Embeddings
      new THREE.Vector3(3.2, -22, 1),    // 4. Transformer Attention Weights
      new THREE.Vector3(0, -32, 0),      // 5. HBM Strides
      new THREE.Vector3(-3.0, -42, 1.2), // 6. GB200 Silicon Tensor Cores
      new THREE.Vector3(2.5, -52, -1),   // 7. NVLink Bus
      new THREE.Vector3(0, -64, 0),      // 8. Softmax Output Tokens
      new THREE.Vector3(4.5, -30, -3),   // 9. Feedback Stream (Closed Loop)
      new THREE.Vector3(0, 6, 0),        // Back to Input
    ]);

    const movingBitPacketCount = 180;
    const bitSparksGeo = new THREE.BufferGeometry();
    const bitSparksPos = new Float32Array(movingBitPacketCount * 3);
    const bitSparksColors = new Float32Array(movingBitPacketCount * 3);
    const bitProgress = new Float32Array(movingBitPacketCount);

    for (let i = 0; i < movingBitPacketCount; i++) {
      bitProgress[i] = Math.random();
      const pt = cycleCurve.getPoint(bitProgress[i]);
      bitSparksPos[i * 3] = pt.x;
      bitSparksPos[i * 3 + 1] = pt.y;
      bitSparksPos[i * 3 + 2] = pt.z;

      // Color gradation along the bit lifecycle
      bitSparksColors[i * 3] = 0.22;
      bitSparksColors[i * 3 + 1] = 0.74;
      bitSparksColors[i * 3 + 2] = 0.97;
    }
    bitSparksGeo.setAttribute('position', new THREE.BufferAttribute(bitSparksPos, 3));
    bitSparksGeo.setAttribute('color', new THREE.BufferAttribute(bitSparksColors, 3));

    const bitSparksMat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    const liveBitStream = new THREE.Points(bitSparksGeo, bitSparksMat);
    masterGroup.add(liveBitStream);

    // Ambient Deep Starfield (400 Stars)
    const starCount = 400;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 55;
      starPositions[i + 1] = Math.random() * -80 + 10;
      starPositions[i + 2] = (Math.random() - 0.5) * 35;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.35,
    });
    const starField = new THREE.Points(starGeo, starMat);
    masterGroup.add(starField);

    scene.add(masterGroup);

    // =========================================================================
    // 7. CONTINUOUS MOUSE INERTIA & FLUID SCROLL GLIDING
    // =========================================================================
    const motionState = {
      mouseX: 0,
      mouseY: 0,
      targetMouseX: 0,
      targetMouseY: 0,
      scrollProgress: 0,
      targetScrollProgress: 0,
      currentCameraY: 0,
      targetCameraY: 0,
    };

    const handleMouseMove = (e) => {
      motionState.targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      motionState.targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(1, document.body.offsetHeight - window.innerHeight);
      motionState.targetScrollProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      motionState.targetCameraY = -motionState.targetScrollProgress * 62;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      desktopFlanksGroup.visible = w >= 1024;
    };
    window.addEventListener('resize', handleResize);

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !animationFrameId) {
        animate();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 8. Main Dynamic Loop
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Fluid Spring-Like Mouse & Scroll Lerp (Zero Rigid Jumping)
      motionState.mouseX += (motionState.targetMouseX - motionState.mouseX) * 0.04;
      motionState.mouseY += (motionState.targetMouseY - motionState.mouseY) * 0.04;
      motionState.currentCameraY += (motionState.targetCameraY - motionState.currentCameraY) * 0.04;

      // Smooth Gentle Camera Flight (Walkthrough mode vs. Normal scroll mode)
      const isWalkthrough = walkthroughRef.current.mode;
      const activeStageKey = walkthroughRef.current.stage;

      let targetX, targetY, targetZ, lookAtY;

      if (isWalkthrough) {
        const stageTarget = STAGE_TARGETS[activeStageKey] || STAGE_TARGETS.tokenization;
        targetX = stageTarget.x + motionState.mouseX * 0.8;
        targetY = stageTarget.y + motionState.mouseY * 0.5;
        targetZ = stageTarget.z;
        lookAtY = stageTarget.lookY;
      } else {
        targetX = motionState.mouseX * 1.8;
        targetY = motionState.currentCameraY + motionState.mouseY * 0.9;
        targetZ = 21 + Math.sin(elapsed * 0.3) * 0.3;
        lookAtY = motionState.currentCameraY;
      }

      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.position.z += (targetZ - camera.position.z) * 0.05;

      camera.lookAt(motionState.mouseX * 0.4, lookAtY, 0);

      // Animate Stage 1 Binary Helix & Embedding Hypersphere
      stage1Group.rotation.y = elapsed * 0.12;
      embedSphere.rotation.x = elapsed * 0.15;
      embedSphere.rotation.y = elapsed * 0.2;

      // Animate Stage 2 Transformer Attention Rings
      stage2Group.rotation.y = -elapsed * 0.08;

      // Animate Stage 3 Silicon Die: Pulsing Systolic Matrix Tensor Cores & HBM Activity
      dieSubstrate.rotation.z = Math.sin(elapsed * 0.4) * 0.08;
      systolicCores.forEach((core, i) => {
        const pulse = 0.2 + Math.abs(Math.sin(elapsed * 4.0 + (i % 4) * 0.8 + Math.floor(i / 4) * 0.5)) * 0.5;
        core.material.emissiveIntensity = pulse;
      });
      hbmStacks.forEach((hbm, i) => {
        hbm.material.emissiveIntensity = 0.35 + Math.sin(elapsed * 2.5 + i) * 0.2;
      });

      // Animate Stage 4 Output Quantum Crystals
      stage4Group.rotation.z = elapsed * 0.06;

      // Animate Desktop Flank Structures (Left & Right Wings)
      if (desktopFlanksGroup.visible) {
        leftUpperGroup.rotation.y = elapsed * 0.08;
        leftMidGroup.rotation.z = elapsed * 0.1;
        leftLowerGroup.rotation.y = -elapsed * 0.06;
        rightMidGroup.rotation.z = -elapsed * 0.12;
        rightLowerGroup.rotation.x = Math.sin(elapsed * 0.8) * 0.2;
      }

      // --- ANIMATE THE LIVING BIT DATA PACKET STREAM ---
      const bitPosAttr = bitSparksGeo.attributes.position;
      const bitColAttr = bitSparksGeo.attributes.color;
      for (let i = 0; i < movingBitPacketCount; i++) {
        bitProgress[i] = (bitProgress[i] + delta * 0.04) % 1.0;
        const pt = cycleCurve.getPoint(bitProgress[i]);
        bitPosAttr.setXYZ(
          i,
          pt.x + Math.sin(elapsed * 2.5 + i) * 0.4,
          pt.y,
          pt.z + Math.cos(elapsed * 2.5 + i) * 0.4
        );

        // Color transition based on Y altitude: Blue (Input) -> Purple (Weights) -> Cyan (GB200) -> Emerald (Output)
        if (pt.y > -10) {
          bitColAttr.setXYZ(i, 0.22, 0.74, 0.97); // Cyan/Blue Input
        } else if (pt.y > -30) {
          bitColAttr.setXYZ(i, 0.75, 0.52, 0.98); // Violet Attention Weights
        } else if (pt.y > -52) {
          bitColAttr.setXYZ(i, 0.0, 0.94, 1.0);   // Electric Cyan GB200 Matrix
        } else {
          bitColAttr.setXYZ(i, 0.2, 0.83, 0.6);   // Emerald Output Stream
        }
      }
      bitPosAttr.needsUpdate = true;
      bitColAttr.needsUpdate = true;

      // Gentle Stellar Drift
      starField.rotation.y = elapsed * 0.005;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    handleScroll();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="w-full h-full" />

      {/* Dynamic Contrast Mask: 60% Dark in reading mode; 0% Unmasked in Walkthrough Blueprint mode */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] pointer-events-none transition-opacity duration-700 ${
          walkthroughMode ? 'opacity-0' : 'opacity-100'
        }`} 
      />
    </div>
  );
}
