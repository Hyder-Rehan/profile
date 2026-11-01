import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Rotate3d, Sparkles, Eye } from 'lucide-react';

export const ThreeHeroScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [cinematicMode, setCinematicMode] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL to adapt performance gracefully
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 560;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07090e, 0.045);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 5.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 2. Procedural Studio Environment Reflection
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 3. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.8);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.castShadow) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xa855f7, 3.2);
    rimLight.position.set(-4, 3, -3);
    scene.add(rimLight);

    const fillLight = new THREE.HemisphereLight(0x38bdf8, 0x07090e, 0.9);
    scene.add(fillLight);

    // 4. Procedural Code Texture for Screen
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1024;
    screenCanvas.height = 512;
    const ctx = screenCanvas.getContext('2d')!;

    const drawScreenContent = (time: number) => {
      // Dark cyber IDE background
      ctx.fillStyle = '#080d1a';
      ctx.fillRect(0, 0, screenCanvas.width, screenCanvas.height);

      // Window bar
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, screenCanvas.width, 36);

      // Window buttons
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(24, 18, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(44, 18, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(64, 18, 6, 0, Math.PI * 2);
      ctx.fill();

      // Title
      ctx.font = '14px "JetBrains Mono", monospace';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('App.tsx - RehanHyder Portfolio Engine [Active]', 100, 22);

      // Code lines
      const codeLines = [
        { text: '// Rehan Hyder - Frontend & Creative Web Developer', color: '#64748b' },
        { text: 'import { createExperience } from "@rehan/portfolio";', color: '#c084fc' },
        { text: 'import { ThreeScene, ModernUI, Responsive } from "@/engine";', color: '#c084fc' },
        { text: '', color: '#ffffff' },
        { text: 'export default function DeveloperStation() {', color: '#38bdf8' },
        { text: '  const passion = "100% Pure Dedication";', color: '#34d399' },
        { text: '  const stack = ["HTML5", "CSS3", "JavaScript", "React"];', color: '#fbbf24' },
        { text: '  const status = "Available for Opportunities";', color: '#22d3ee' },
        { text: '', color: '#ffffff' },
        { text: '  return (', color: '#38bdf8' },
        { text: '    <InteractiveUniverse', color: '#818cf8' },
        { text: '      developer="Rehan Hyder"', color: '#38bdf8' },
        { text: '      performance="Lighthouse 90+"', color: '#38bdf8' },
        { text: '      animation="Silky 60FPS Three.js"', color: '#38bdf8' },
        { text: '    />', color: '#818cf8' },
        { text: '  );', color: '#38bdf8' },
        { text: '}', color: '#38bdf8' },
      ];

      ctx.font = 'bold 18px "JetBrains Mono", monospace';
      const startY = 70;
      const lineHeight = 24;

      codeLines.forEach((line, index) => {
        ctx.fillStyle = line.color;
        ctx.fillText(line.text, 36, startY + index * lineHeight);
      });

      // Blinking cursor
      const cursorY = startY + (codeLines.length - 1) * lineHeight;
      if (Math.sin(time * 5) > 0) {
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(52, cursorY + 6, 10, 18);
      }
    };

    drawScreenContent(0);
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.colorSpace = THREE.SRGBColorSpace;
    screenTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    // 5. Construct Futuristic Workstation Group (Composite 3-12 part procedural model)
    const workstationGroup = new THREE.Group();
    workstationGroup.position.set(0, -0.2, 0);
    scene.add(workstationGroup);

    // (Part 1) Base Platform / Holographic Floating Disc
    const baseGeo = new THREE.CylinderGeometry(2.2, 2.4, 0.12, 32);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x0a101f,
      metalness: 0.85,
      roughness: 0.25,
    });
    const basePlatform = new THREE.Mesh(baseGeo, baseMat);
    basePlatform.position.y = -0.06;
    basePlatform.receiveShadow = !isSoftwareGl;
    workstationGroup.add(basePlatform);

    // Neon Rim for Base
    const baseRimGeo = new THREE.TorusGeometry(2.35, 0.02, 16, 64);
    const baseRimMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const baseRim = new THREE.Mesh(baseRimGeo, baseRimMat);
    baseRim.rotation.x = Math.PI / 2;
    baseRim.position.y = 0.01;
    workstationGroup.add(baseRim);

    // Secondary Outer Glow Ring
    const outerRingGeo = new THREE.TorusGeometry(2.6, 0.012, 16, 64);
    const outerRingMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    outerRing.rotation.x = Math.PI / 2;
    outerRing.position.y = 0.01;
    workstationGroup.add(outerRing);

    // (Part 2) Curved Ultra-wide Monitor Screen
    const screenWidth = 2.4;
    const screenHeight = 1.25;
    const screenRadius = 4.0;
    const screenCurve = screenWidth / screenRadius;
    const screenGeo = new THREE.CylinderGeometry(
      screenRadius,
      screenRadius,
      screenHeight,
      32,
      1,
      true,
      -screenCurve / 2 + Math.PI,
      screenCurve
    );

    const screenMat = new THREE.MeshStandardMaterial({
      map: screenTexture,
      roughness: 0.15,
      metalness: 0.3,
      emissive: 0x06152a,
      emissiveIntensity: 0.4,
    });
    const monitorScreen = new THREE.Mesh(screenGeo, screenMat);
    monitorScreen.position.set(0, 1.25, -screenRadius + 0.1);
    monitorScreen.rotation.y = Math.PI;
    workstationGroup.add(monitorScreen);

    // (Part 3) Monitor Bezel / Back Chasis
    const bezelGeo = new THREE.CylinderGeometry(
      screenRadius + 0.02,
      screenRadius + 0.02,
      screenHeight + 0.06,
      32,
      1,
      true,
      -screenCurve / 2 + Math.PI,
      screenCurve
    );
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.35,
    });
    const monitorBezel = new THREE.Mesh(bezelGeo, bezelMat);
    monitorBezel.position.set(0, 1.25, -screenRadius + 0.08);
    monitorBezel.rotation.y = Math.PI;
    workstationGroup.add(monitorBezel);

    // Monitor Ambient Back Glow
    const backGlowGeo = new THREE.PlaneGeometry(2.2, 1.1);
    const backGlowMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
    });
    const backGlow = new THREE.Mesh(backGlowGeo, backGlowMat);
    backGlow.position.set(0, 1.25, 0.02);
    workstationGroup.add(backGlow);

    // (Part 4) Monitor Stand & Swivel Arm
    const standPoleGeo = new THREE.CylinderGeometry(0.04, 0.05, 0.8, 16);
    const standMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.95,
      roughness: 0.2,
    });
    const poleMesh = new THREE.Mesh(standPoleGeo, standMat);
    poleMesh.position.set(0, 0.5, -0.05);
    poleMesh.castShadow = !isSoftwareGl;
    workstationGroup.add(poleMesh);

    const standBaseGeo = new THREE.BoxGeometry(0.5, 0.03, 0.35);
    const standBase = new THREE.Mesh(standBaseGeo, standMat);
    standBase.position.set(0, 0.1, -0.05);
    standBase.castShadow = !isSoftwareGl;
    workstationGroup.add(standBase);

    // (Part 5) Modern Cyber Keyboard with Emissive Underglow
    const keyboardBaseGeo = new THREE.BoxGeometry(1.2, 0.04, 0.45);
    const keyboardBaseMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.8,
      roughness: 0.3,
    });
    const keyboardBase = new THREE.Mesh(keyboardBaseGeo, keyboardBaseMat);
    keyboardBase.position.set(0, 0.08, 0.45);
    keyboardBase.rotation.x = 0.05;
    keyboardBase.castShadow = !isSoftwareGl;
    workstationGroup.add(keyboardBase);

    // Keyboard Underglow Strip
    const keyUnderglowGeo = new THREE.PlaneGeometry(1.18, 0.43);
    const keyUnderglowMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.4,
    });
    const keyUnderglow = new THREE.Mesh(keyUnderglowGeo, keyUnderglowMat);
    keyUnderglow.position.set(0, 0.105, 0.45);
    keyUnderglow.rotation.x = -Math.PI / 2 + 0.05;
    workstationGroup.add(keyUnderglow);

    // Keyboard key rows using instanced mesh for high performance
    const keyCount = 48;
    const keyGeo = new THREE.BoxGeometry(0.07, 0.025, 0.07);
    const keyMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.6,
      roughness: 0.4,
    });
    const instancedKeys = new THREE.InstancedMesh(keyGeo, keyMat, keyCount);
    instancedKeys.castShadow = !isSoftwareGl;

    const dummy = new THREE.Object3D();
    let keyIdx = 0;
    const rows = 4;
    const cols = 12;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (keyIdx >= keyCount) break;
        const xPos = -0.5 + c * 0.09;
        const zPos = 0.32 + r * 0.09;
        dummy.position.set(xPos, 0.115, zPos);
        dummy.rotation.x = 0.05;
        dummy.updateMatrix();
        instancedKeys.setMatrixAt(keyIdx++, dummy.matrix);
      }
    }
    instancedKeys.instanceMatrix.needsUpdate = true;
    workstationGroup.add(instancedKeys);

    // (Part 6) Cyber Mouse / Trackpad
    const mouseGeo = new THREE.BoxGeometry(0.18, 0.04, 0.28);
    const mouseMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.25,
    });
    const mouse = new THREE.Mesh(mouseGeo, mouseMat);
    mouse.position.set(0.85, 0.08, 0.45);
    mouse.rotation.x = 0.05;
    mouse.rotation.y = -0.1;
    workstationGroup.add(mouse);

    const mouseStripeGeo = new THREE.BoxGeometry(0.02, 0.042, 0.2);
    const mouseStripeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const mouseStripe = new THREE.Mesh(mouseStripeGeo, mouseStripeMat);
    mouseStripe.position.set(0.85, 0.082, 0.45);
    mouseStripe.rotation.x = 0.05;
    mouseStripe.rotation.y = -0.1;
    workstationGroup.add(mouseStripe);

    // (Part 7) Soft Radial Contact Grounding Shadow
    const shadowGeo = new THREE.PlaneGeometry(5.2, 5.2);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const shadowCtx = shadowCanvas.getContext('2d')!;
    const shadowGrad = shadowCtx.createRadialGradient(128, 128, 10, 128, 128, 120);
    shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0.65)');
    shadowGrad.addColorStop(0.5, 'rgba(6, 15, 30, 0.4)');
    shadowGrad.addColorStop(1, 'rgba(7, 9, 14, 0)');
    shadowCtx.fillStyle = shadowGrad;
    shadowCtx.fillRect(0, 0, 256, 256);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.6,
    });
    const contactShadow = new THREE.Mesh(shadowGeo, shadowMat);
    contactShadow.rotation.x = -Math.PI / 2;
    contactShadow.position.y = -0.15;
    scene.add(contactShadow);

    // (Part 8) Floating Tech Cubes / Tokens in Orbit
    const techBadges = [
      { name: 'HTML5', color: 0xe34f26, radius: 1.8, angle: 0, speed: 0.6, yOffset: 1.2 },
      { name: 'CSS3', color: 0x1572b6, radius: 2.1, angle: Math.PI * 0.5, speed: 0.5, yOffset: 1.5 },
      { name: 'JavaScript', color: 0xf7df1e, radius: 1.9, angle: Math.PI, speed: 0.65, yOffset: 0.8 },
      { name: 'React', color: 0x61dafb, radius: 2.3, angle: Math.PI * 1.5, speed: 0.45, yOffset: 1.35 },
    ];

    const badgeMeshes: { mesh: THREE.Group; config: (typeof techBadges)[0] }[] = [];

    techBadges.forEach(badge => {
      const badgeGroup = new THREE.Group();

      // Outer cube frame
      const cubeGeo = new THREE.BoxGeometry(0.24, 0.24, 0.24);
      const cubeMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        metalness: 0.9,
        roughness: 0.2,
      });
      const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
      badgeGroup.add(cubeMesh);

      // Glowing neon edge box
      const edgeGeo = new THREE.EdgesGeometry(cubeGeo);
      const edgeMat = new THREE.LineBasicMaterial({ color: badge.color, linewidth: 2 });
      const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
      badgeGroup.add(edgeLines);

      // Core glowing crystal
      const coreGeo = new THREE.OctahedronGeometry(0.09);
      const coreMat = new THREE.MeshBasicMaterial({ color: badge.color });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      badgeGroup.add(coreMesh);

      scene.add(badgeGroup);
      badgeMeshes.push({ mesh: badgeGroup, config: badge });
    });

    // (Part 9) Cyber Particle Field
    const particleCount = isSoftwareGl ? 80 : 250;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 10;
      particlePositions[i * 3 + 1] = Math.random() * 5 - 1;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const isCyan = Math.random() > 0.5;
      particleColors[i * 3] = isCyan ? 0.2 : 0.65;
      particleColors[i * 3 + 1] = isCyan ? 0.75 : 0.35;
      particleColors[i * 3 + 2] = 0.98;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // 6. Interaction & Mouse Dragging State
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;
    let mouseNormX = 0;
    let mouseNormY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const rect = container.getBoundingClientRect();
      mouseNormX = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouseNormY = -(((clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = clientX - prevMouseX;
        const deltaY = clientY - prevMouseY;
        targetRotationY += deltaX * 0.007;
        targetRotationX += deltaY * 0.004;
        targetRotationX = Math.max(-0.35, Math.min(0.45, targetRotationX));
        prevMouseX = clientX;
        prevMouseY = clientY;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    container.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // 7. Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || 560;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // 8. Animation Loop with frame pacing and visibility pause
    let animationFrameId = 0;
    const clock = new THREE.Clock();
    let lastScreenUpdate = 0;
    let isVisibleOnScreen = true;

    const animate = () => {
      if (!isVisibleOnScreen) return;

      const elapsedTime = clock.getElapsedTime();
      const delta = Math.min(clock.getDelta(), 0.1);

      // Periodically update screen canvas
      if (elapsedTime - lastScreenUpdate > 0.18) {
        drawScreenContent(elapsedTime);
        screenTexture.needsUpdate = true;
        lastScreenUpdate = elapsedTime;
      }

      // Smooth mouse / drag exponential damping
      if (!isDragging) {
        const idleRotY = Math.sin(elapsedTime * 0.4) * 0.25 + mouseNormX * 0.3;
        const idleRotX = Math.cos(elapsedTime * 0.35) * 0.08 - mouseNormY * 0.15;
        targetRotationY = THREE.MathUtils.damp(targetRotationY, idleRotY, 2.5, delta);
        targetRotationX = THREE.MathUtils.damp(targetRotationX, idleRotX, 2.5, delta);
      }

      workstationGroup.rotation.y = THREE.MathUtils.damp(workstationGroup.rotation.y, targetRotationY, 5, delta);
      workstationGroup.rotation.x = THREE.MathUtils.damp(workstationGroup.rotation.x, targetRotationX, 5, delta);

      // Gentle floating on Y axis
      workstationGroup.position.y = -0.2 + Math.sin(elapsedTime * 1.5) * 0.04;

      // Rotate orbiting tech badges
      badgeMeshes.forEach(badge => {
        const curAngle = badge.config.angle + elapsedTime * badge.config.speed;
        const radius = badge.config.radius;
        badge.mesh.position.x = Math.cos(curAngle) * radius;
        badge.mesh.position.z = Math.sin(curAngle) * radius;
        badge.mesh.position.y = badge.config.yOffset + Math.sin(elapsedTime * 2 + badge.config.angle) * 0.1;

        badge.mesh.rotation.x += 0.015;
        badge.mesh.rotation.y += 0.02;
      });

      // Subtle rotation of base rims
      baseRim.rotation.z += 0.005;
      outerRing.rotation.z -= 0.003;

      // Slow particle field drift
      particleField.rotation.y = elapsedTime * 0.025;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Pause rendering when hero is scrolled out of viewport
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        isVisibleOnScreen = entry.isIntersecting;
        if (isVisibleOnScreen) {
          clock.start();
          animationFrameId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 9. Cleanup
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      container.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      renderer.dispose();
      baseGeo.dispose();
      baseMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      screenTexture.dispose();
      keyGeo.dispose();
      keyMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] flex items-center justify-center">
      {/* Canvas container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        title="Interactive 3D Workstation: Click and drag to orbit"
      />

      {/* Floating 3D Control Pill Dock adhering to bottom dock guidelines */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-950/40 backdrop-blur-md transition-all">
        <Rotate3d className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
        <span>3D Cyber Station</span>
        <span className="hidden sm:inline text-slate-500">•</span>
        <span className="hidden sm:inline text-slate-400">Drag to Orbit & Explore</span>
        {isInteracting && (
          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded-full border border-emerald-500/40">
            Interactive
          </span>
        )}
      </div>

      {/* Futuristic Orbiting Technology Badges legend */}
      <div className="absolute top-4 right-4 hidden lg:flex flex-col gap-1.5 pointer-events-none">
        <div className="px-2.5 py-1 rounded bg-slate-900/70 border border-slate-700/50 backdrop-blur-sm text-[11px] font-mono text-slate-300 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          <span>HTML5 Core</span>
        </div>
        <div className="px-2.5 py-1 rounded bg-slate-900/70 border border-slate-700/50 backdrop-blur-sm text-[11px] font-mono text-slate-300 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span>CSS3 Grid & Motion</span>
        </div>
        <div className="px-2.5 py-1 rounded bg-slate-900/70 border border-slate-700/50 backdrop-blur-sm text-[11px] font-mono text-slate-300 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span>JavaScript ES6+</span>
        </div>
        <div className="px-2.5 py-1 rounded bg-slate-900/70 border border-slate-700/50 backdrop-blur-sm text-[11px] font-mono text-slate-300 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>React Ecosystem</span>
        </div>
      </div>
    </div>
  );
};
