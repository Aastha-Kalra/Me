import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const ThreeHeroScene = () => {
  const containerRef = useRef(null);
  const [webGLAvailable, setWebGLAvailable] = useState(true);

  useEffect(() => {
    // Check WebGL availability
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch (e) {
        return false;
      }
    };

    if (!checkWebGL()) {
      setWebGLAvailable(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6.2;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (err) {
      setWebGLAvailable(false);
      return;
    }

    // Group to hold all 3D objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core Metallic Sphere
    const coreGeometry = new THREE.SphereGeometry(1.35, 64, 64);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a192f,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x0c2340,
      emissiveIntensity: 0.6,
    });
    const coreSphere = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreSphere);

    // 2. Outer Wireframe Geodesic Icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(1.85, 2);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const outerMesh = new THREE.Mesh(outerGeo, wireframeMat);
    mainGroup.add(outerMesh);

    // 3. Second Wireframe Dodecahedron for multidimensional depth
    const innerGeo = new THREE.DodecahedronGeometry(1.6, 1);
    const innerWireMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerWireMat);
    mainGroup.add(innerMesh);

    // 4. Orbital Ring 1
    const ring1Geo = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x2563eb,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    // 5. Orbital Ring 2
    const ring2Geo = new THREE.TorusGeometry(2.6, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.7,
      roughness: 0.2,
      metalness: 0.8,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    mainGroup.add(ring2);

    // 6. Orbital Satellite Nodes
    const satelliteGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const satMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const satellites = [];
    for (let i = 0; i < 3; i++) {
      const sat = new THREE.Mesh(satelliteGeo, satMat);
      sat.userData = { angle: (i * Math.PI * 2) / 3, speed: 0.02 + i * 0.01, radius: 2.3 };
      mainGroup.add(sat);
      satellites.push(sat);
    }

    // 7. Ambient Floating Particle Field
    const particleCount = 350;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x38bdf8); // cyan
    const color2 = new THREE.Color(0x2563eb); // electric blue
    const color3 = new THREE.Color(0x93c5fd); // light blue

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 2.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const mixed = Math.random() > 0.5 ? color1 : (Math.random() > 0.5 ? color2 : color3);
      colors[i3] = mixed.r;
      colors[i3 + 1] = mixed.g;
      colors[i3 + 2] = mixed.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    scene.add(particlePoints);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0f172a, 2.5);
    scene.add(ambientLight);

    const electricBlueLight = new THREE.PointLight(0x3b82f6, 4.5, 20);
    electricBlueLight.position.set(4, 3, 5);
    scene.add(electricBlueLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 5, 20);
    cyanLight.position.set(-4, -2, 4);
    scene.add(cyanLight);

    const rimLight = new THREE.DirectionalLight(0x60a5fa, 1.8);
    rimLight.position.set(0, 5, -3);
    scene.add(rimLight);

    // Mouse Interaction with Smooth Interpolation
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Pause rendering when outside viewport
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      const motionSpeed = prefersReducedMotion ? 0.2 : 1;

      // Group rotation
      mainGroup.rotation.y = elapsedTime * 0.25 * motionSpeed + currentX * 0.5;
      mainGroup.rotation.x = elapsedTime * 0.15 * motionSpeed + currentY * 0.5;

      // Outer meshes counter-rotation
      outerMesh.rotation.y = -elapsedTime * 0.2 * motionSpeed;
      outerMesh.rotation.x = elapsedTime * 0.15 * motionSpeed;
      innerMesh.rotation.y = elapsedTime * 0.3 * motionSpeed;

      // Rings spin
      ring1.rotation.z = elapsedTime * 0.4 * motionSpeed;
      ring2.rotation.z = -elapsedTime * 0.3 * motionSpeed;

      // Satellites
      satellites.forEach((sat) => {
        sat.userData.angle += sat.userData.speed * motionSpeed;
        sat.position.x = Math.cos(sat.userData.angle) * sat.userData.radius;
        sat.position.y = Math.sin(sat.userData.angle) * sat.userData.radius * 0.5;
        sat.position.z = Math.sin(sat.userData.angle) * sat.userData.radius;
      });

      // Background particles gentle drift
      particlePoints.rotation.y = elapsedTime * 0.05 * motionSpeed;
      particlePoints.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1 * motionSpeed;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Dispose geometries and materials
      [coreGeometry, outerGeo, innerGeo, ring1Geo, ring2Geo, satelliteGeo, particleGeo].forEach(
        (g) => g.dispose()
      );
      [coreMaterial, wireframeMat, innerWireMat, ring1Mat, ring2Mat, satMat, particleMat].forEach(
        (m) => m.dispose()
      );

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] lg:h-[560px] xl:h-[620px] flex items-center justify-center pointer-events-auto"
      style={{ touchAction: "none" }}
    >
      {/* Fallback if WebGL isn't available */}
      {!webGLAvailable && (
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 to-cyan-400/20 blur-2xl animate-pulse"></div>
          <div className="w-56 h-56 rounded-full border-2 border-cyan-400/50 animate-spin [animation-duration:12s] flex items-center justify-center">
            <div className="w-44 h-44 rounded-full border border-blue-500/60 animate-spin [animation-duration:8s] [animation-direction:reverse] flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 via-indigo-900 to-black shadow-glow-cyan"></div>
            </div>
          </div>
        </div>
      )}

      {/* Subtle ambient cyan glow beneath the 3D scene */}
      <div className="absolute pointer-events-none w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-600/15 blur-[100px] -z-10"></div>
    </div>
  );
};

export default ThreeHeroScene;
