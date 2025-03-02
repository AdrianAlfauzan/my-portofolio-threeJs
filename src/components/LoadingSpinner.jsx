import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Reflector, useTexture } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function LoadingBar({ progress }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "4px",
        background: "#ffc107",
        transform: `scaleX(${progress})`,
        transformOrigin: "left",
        transition: "transform 0.1s ease-in-out",
        zIndex: 9999,
      }}
    ></div>
  );
}

function ImageMesh({ position = [0, 0, 0], scale, ...props }) {
  const ref = useRef();
  const texture = useTexture("welcome.png");
  const aspectRatio = 1920 / 1000;
  const width = 3 * aspectRatio * scale;
  const height = 3 * scale;
  const geom = useMemo(() => new THREE.PlaneGeometry(width, height), [width, height]);

  useFrame((state) => {
    if (ref.current) {
      const { clock } = state;
      ref.current.rotation.y = Math.sin(clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={ref} position={position} geometry={geom} {...props}>
      <meshStandardMaterial map={texture} transparent={true} />
    </mesh>
  );
}

export default function LoadingSpinner({ onComplete }) {
  const [scale, setScale] = useState(window.innerWidth > 600 ? 0.4 : 0.6);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth > 600 ? 0.4 : 0.6);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const duration = 3000;
    const intervalTime = 50;
    const step = intervalTime / duration;

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev + step >= 1) {
          clearInterval(interval);
          if (onComplete) onComplete();
          return 1;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <>
      <LoadingBar progress={loadingProgress} />
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.2, 4], fov: 70 }} style={{ background: "transparent", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        <ambientLight intensity={0.8} />
        <ImageMesh position={[0, 0, 0]} scale={scale} rotation={[0, 0, 0]} />
        <EffectComposer multisampling={4}>
          <Bloom kernelSize={2} luminanceThreshold={0} luminanceSmoothing={0.3} intensity={0.4} />
        </EffectComposer>
      </Canvas>
    </>
  );
}
