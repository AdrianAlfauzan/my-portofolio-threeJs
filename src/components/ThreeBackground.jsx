import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    camera.position.z = 5;

    // create dense white stars for the background
    const starGeometry = new THREE.BufferGeometry();
    const startCount = 1500;
    const startPositions = new Float32Array(startCount * 3);
    for (let i = 0; i < startCount * 3; i++) {
      startPositions[i] = (Math.random() - 0.5) * 100; // Spread the stars randomly
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(startPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const startField = new THREE.Points(starGeometry, starMaterial);
    scene.add(startField);

    // make starts move or interest with the mouse (parallax effect)
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      startField.rotation.x += mouseY * 0.01;
      startField.rotation.y = mouseX * 0.05;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // handle window resize for responsiveness

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      startField.rotation.x += 0.001; // slow rotation for movement
      startField.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return <div ref={mountRef} className="fixed inset-0 -z-1 w-full h-full"></div>;
}
