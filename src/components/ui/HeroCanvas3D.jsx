import React, { useEffect, useRef } from 'react';

export function HeroCanvas3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    // High-DPI Scaling
    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse Interaction State
    let mousePos = { x: -1000, y: -1000 };
    let isDragging = false;
    let dragStart = { x: 0, y: 0 };
    let targetRotX = 0.35;
    let targetRotY = 0.25;
    let rotX = 0.35;
    let rotY = 0.25;
    let shockwaves = []; // Active ripple waves from clicks

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.x = e.clientX - rect.left;
      mousePos.y = e.clientY - rect.top;

      if (isDragging) {
        const dx = e.clientX - dragStart.x;
        const dy = e.clientY - dragStart.y;
        targetRotY += dx * 0.005;
        targetRotX += dy * 0.005;
        dragStart = { x: e.clientX, y: e.clientY };
      } else {
        // Gentle parallax tilt based on mouse position
        const nx = (mousePos.x - width / 2) / (width / 2);
        const ny = (mousePos.y - height / 2) / (height / 2);
        targetRotY = 0.25 + nx * 0.35;
        targetRotX = 0.35 + ny * 0.25;
      }
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      dragStart = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      shockwaves.push({ x: clickX, y: clickY, radius: 0, maxRadius: 280, alpha: 1 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('click', handleClick);

    // Generate Structured 3D Supercluster Topology (4 Rings x 12 Core Nodes = 48 Structured Nodes)
    const rings = 4;
    const nodesPerRing = 12;
    const nodes = [];
    const radiusMajor = Math.min(Math.max(width, 360), Math.max(height, 500)) * 0.36;
    const radiusMinor = Math.min(Math.max(width, 360), Math.max(height, 500)) * 0.14;

    for (let r = 0; r < rings; r++) {
      const v = (r / rings) * Math.PI * 2;
      for (let i = 0; i < nodesPerRing; i++) {
        const u = (i / nodesPerRing) * Math.PI * 2;
        const x = (radiusMajor + radiusMinor * Math.cos(v)) * Math.cos(u);
        const y = (radiusMajor + radiusMinor * Math.cos(v)) * Math.sin(u);
        const z = radiusMinor * Math.sin(v);

        const isMoEExpert = (i + r) % 3 === 0;
        const color = isMoEExpert 
          ? { r: 168, g: 85, b: 247, label: 'MoE-EXPERT' }  // Purple Expert Core
          : { r: 59, g: 130, b: 246, label: 'TPU-ROUTER' };  // Blue Router Node

        nodes.push({
          ringIndex: r,
          nodeIndex: i,
          baseX: x,
          baseY: y,
          baseZ: z,
          id: `NODE-0${r * nodesPerRing + i + 1}`,
          color,
        });
      }
    }

    // Structured Interconnect Lines (Torus Rings + Longitudinal Interconnects)
    const connections = [];
    for (let r = 0; r < rings; r++) {
      for (let i = 0; i < nodesPerRing; i++) {
        const currentIdx = r * nodesPerRing + i;
        const nextInRingIdx = r * nodesPerRing + ((i + 1) % nodesPerRing);
        const nextRingIdx = ((r + 1) % rings) * nodesPerRing + i;

        connections.push([currentIdx, nextInRingIdx]); // Ring connection
        connections.push([currentIdx, nextRingIdx]);   // Cross-ring bus
      }
    }

    let hoveredNode = null;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Slow, majestic Apple Keynote ambient rotation
      targetRotY += 0.0004;

      // Smooth spring interpolation
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const fov = 480;
      const cx = width / 2;
      const cy = height * 0.48;

      // Update Shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += 4;
        sw.alpha = 1 - sw.radius / sw.maxRadius;

        ctx.strokeStyle = `rgba(0, 229, 255, ${sw.alpha * 0.35})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (sw.radius >= sw.maxRadius) {
          shockwaves.splice(i, 1);
        }
      }

      // Project 3D Nodes
      const projected = [];
      let closestToMouse = null;
      let minMouseDist = 45; // Hover snap radius

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // 3D Matrix Rotation (Y then X)
        let x1 = n.baseX * cosY - n.baseZ * sinY;
        let z1 = n.baseX * sinY + n.baseZ * cosY;

        let y2 = n.baseY * cosX - z1 * sinX;
        let z2 = n.baseY * sinX + z1 * cosX;

        const depth = z2 + 380;
        if (depth > 20) {
          const scale = fov / depth;
          const px = x1 * scale + cx;
          const py = y2 * scale + cy;

          // Alpha by depth
          const depthAlpha = Math.max(0.25, Math.min(0.9, (z2 + radiusMinor * 2.5) / (radiusMinor * 5)));

          // Check distance to mouse
          const distToMouse = Math.hypot(px - mousePos.x, py - mousePos.y);
          const isMouseNear = distToMouse < 120;
          const mouseBoost = isMouseNear ? (1 - distToMouse / 120) * 0.5 : 0;

          if (distToMouse < minMouseDist) {
            minMouseDist = distToMouse;
            closestToMouse = { ...n, px, py, scale, distToMouse };
          }

          projected.push({
            ...n,
            origIdx: i,
            px,
            py,
            scale,
            alpha: Math.min(1, depthAlpha + mouseBoost),
            rawZ: z2,
            distToMouse,
            isMouseNear
          });
        }
      }

      hoveredNode = closestToMouse;

      // Draw Structured Interconnect Lines
      for (let k = 0; k < connections.length; k++) {
        const [idx1, idx2] = connections[k];
        const p1 = projected[idx1];
        const p2 = projected[idx2];

        if (p1 && p2) {
          const avgAlpha = (p1.alpha + p2.alpha) / 2;
          const isConnectedToHovered = hoveredNode && (hoveredNode.origIdx === idx1 || hoveredNode.origIdx === idx2);

          ctx.lineWidth = isConnectedToHovered ? 2.0 : Math.max(0.6, 1.2 * ((p1.scale + p2.scale) / 2));
          const lineColor = isConnectedToHovered 
            ? 'rgba(0, 229, 255, 0.7)' 
            : `rgba(${p1.color.r}, ${p1.color.g}, ${p1.color.b}, ${avgAlpha * 0.35})`;

          ctx.strokeStyle = lineColor;
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        }
      }

      // Draw Structured Accelerator Nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const isHovered = hoveredNode && hoveredNode.origIdx === p.origIdx;
        const size = (isHovered ? 4.5 : 2.5) * p.scale;

        // Glow Halo
        const glowRadius = size * (isHovered ? 4.5 : 2.5);
        const grad = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, glowRadius);
        grad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.7})`);
        grad.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.px, p.py, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Node Body
        ctx.fillStyle = isHovered ? '#00E5FF' : `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
        ctx.fill();

        // Crisp White Core
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, Math.max(0.8, size * 0.45), 0, Math.PI * 2);
        ctx.fill();

        // Draw Interactive Target Ring if Hovered
        if (isHovered) {
          ctx.strokeStyle = '#00E5FF';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(p.px, p.py, size + 6, 0, Math.PI * 2);
          ctx.stroke();

          // Sleek Interactive Node HUD Telemetry Tag
          ctx.fillStyle = 'rgba(10, 10, 15, 0.9)';
          ctx.strokeStyle = 'rgba(0, 229, 255, 0.4)';
          ctx.lineWidth = 1;
          const tagW = 150;
          const tagH = 26;
          const tagX = p.px + 14;
          const tagY = p.py - 13;

          ctx.beginPath();
          ctx.roundRect(tagX, tagY, tagW, tagH, 6);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = '#00E5FF';
          ctx.font = '10px monospace';
          ctx.fillText(`${p.id} // ${p.color.label}`, tagX + 8, tagY + 16);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full cursor-grab active:cursor-grabbing"
      title="Click or Drag to interact with the 3D Supercluster Topology"
      aria-label="Interactive 3D Accelerator Supercluster Mesh"
    />
  );
}
