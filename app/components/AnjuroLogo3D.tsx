'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

export default function AnjuroLogo3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    camera.position.z = 8;

    let renderer: THREE.WebGLRenderer;

try {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
} catch (error) {
  console.error('WebGL unavailable:', error);

  container.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100%;
      color:white;
      font-size:14px;
      text-align:center;
      opacity:.7;
    ">
      3D Logo unavailable
    </div>
  `;

  return;
}

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    container.appendChild(renderer.domElement);

    // LIGHTS
    scene.add(new THREE.AmbientLight(0xffffff, 3));

    const light1 = new THREE.DirectionalLight(0xffffff, 4);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 2);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    let logo: THREE.Group | null = null;

    const loader = new OBJLoader();

    loader.load('/images/anjurologo.obj', (obj) => {
      obj.traverse((child: any) => {
        if (child.isMesh) {
          child.material = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,          // bright white
            metalness: 0.8,           // metallic chrome look
            roughness: 0.03,          // shiny surface
            clearcoat: 1,
            clearcoatRoughness: 0,
            envMapIntensity: 2,
            emissive: 0xffffff,       // keeps visible on black background
            emissiveIntensity: 0.25,  // subtle brightness boost
          });
        }
      });

      // ===========================
      // ADJUST SIZE HERE
      // 1 = normal
      // 2 = double
      // 0.5 = smaller
      // ===========================
      obj.scale.set(2.8, 2.8, 2.8);

      scene.add(obj);
      logo = obj;
    });

    let mouseX = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      if (logo) {
        logo.rotation.y += 0.01;
        logo.rotation.x = mouseX;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect =
        container.clientWidth / container.clientHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        container.clientWidth,
        container.clientHeight
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );

      window.removeEventListener(
        'resize',
        handleResize
      );

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="
        w-full
        h-[250px]
        sm:h-[350px]
        md:h-[500px]
        lg:h-[650px]
      "
    />
  );
}