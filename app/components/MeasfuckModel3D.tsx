'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

export default function MeasfuckModel3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    scene.fog = new THREE.Fog(0x0a0a0a, 100, 1000);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 2, 22);
    camera.lookAt(0, 0, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      });
    } catch (error) {
      console.error('WebGL Error:', error);
      return;
    }

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight1.position.set(12, 18, 12);
    directionalLight1.castShadow = true;
    directionalLight1.shadow.mapSize.width = 2048;
    directionalLight1.shadow.mapSize.height = 2048;
    directionalLight1.shadow.camera.far = 100;
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight2.position.set(-12, -8, 12);
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0x4488ff, 1.2);
    directionalLight3.position.set(0, 12, -18);
    scene.add(directionalLight3);

    const directionalLight4 = new THREE.DirectionalLight(0xff8844, 0.8);
    directionalLight4.position.set(-15, 5, 8);
    scene.add(directionalLight4);

    const pointLight = new THREE.PointLight(0xffffff, 1.8);
    pointLight.position.set(18, 18, 18);
    scene.add(pointLight);

    let model: THREE.Group | null = null;
    let rotationX = 0;
    let rotationY = 0;
    let time = 0;
    let baseZ = 22;

    const loader = new OBJLoader();
    loader.load(
      '/images/measfuck.obj',
      (obj) => {
        obj.traverse((child: any) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;

            child.material = new THREE.MeshPhysicalMaterial({
              color: 0xe8e8e8,
              metalness: 0.92,
              roughness: 0.1,
              clearcoat: 1.0,
              clearcoatRoughness: 0.15,
              emissive: 0x666666,
              emissiveIntensity: 0.25,
              envMapIntensity: 1.8,
              side: THREE.DoubleSide,
            });
          }
        });

        obj.scale.set(7.5, 7.5, 7.5);

        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());

        obj.position.sub(center);

        scene.add(obj);
        model = obj;
      },
      (progress) => {
        console.log(`Loading: ${(progress.loaded / progress.total * 100).toFixed(0)}%`);
      },
      (error) => {
        console.error('OBJ Loading Error:', error);
      }
    );

    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      targetRotationX = mouseY * 0.4;
      targetRotationY = mouseX * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.016;

      rotationX += (targetRotationX - rotationX) * 0.08;
      rotationY += (targetRotationY - rotationY) * 0.08;

      if (model) {
        // Complex orbital movement with enhanced wave patterns
        const orbitRadius = 5;
        const orbitX = Math.cos(time * 0.6) * orbitRadius;
        const orbitY = Math.sin(time * 0.4) * orbitRadius;
        const orbitZ = Math.sin(time * 0.5) * 2;

        // Multiple wave layers for fluid undulating motion
        const waveX = Math.sin(time * 1.2) * 2.5 + Math.sin(time * 0.5) * 1.5;
        const waveY = Math.cos(time * 0.8) * 2 + Math.sin(time * 1.5) * 1.8;
        const waveZ = Math.sin(time * 0.7) * 2.5 + Math.cos(time * 1.1) * 1.5;

        // Additional fine wave details
        const fineWaveX = Math.sin(time * 2.4) * 0.8;
        const fineWaveY = Math.cos(time * 2.2) * 0.7;
        const fineWaveZ = Math.sin(time * 2.6) * 0.9;

        // Combine all movements
        const totalX = orbitX + waveX + fineWaveX;
        const totalY = orbitY + waveY + fineWaveY + 1.5;
        const totalZ = orbitZ + waveZ + fineWaveZ;

        model.position.x = totalX;
        model.position.y = totalY;
        model.position.z = totalZ;

        // Dynamic zoom in/out effect
        const zoomEffect = 1 + Math.sin(time * 0.4) * 0.15;
        baseZ = 22 * zoomEffect;
        camera.position.z = baseZ;

        // Faster spinning with enhanced multi-axis rotation
        const spinX = rotationX + Math.sin(time * 1.2) * 0.2 + Math.cos(time * 1.8) * 0.12;
        const spinY = rotationY + time * 1.2 + Math.sin(time * 0.7) * 0.4; // Increased from 0.8 to 1.2
        const spinZ = Math.sin(time * 0.9) * 0.25 + Math.cos(time * 1.5) * 0.15;

        model.rotation.x = spinX;
        model.rotation.y = spinY;
        model.rotation.z = spinZ;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}